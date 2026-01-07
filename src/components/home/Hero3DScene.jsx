import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// ------------------------------------------------------------------
// SHADERS
// ------------------------------------------------------------------

const vertexShader = `
uniform float uTime;
uniform vec2 uMouse;
varying vec2 vUv;
varying float vElevation;

// Simplex 2D noise
vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
  + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vUv = uv;
  vec3 pos = position;
  
  // Interactive ripple
  float dist = distance(uv, uMouse);
  float ripple = sin(dist * 10.0 - uTime * 2.0) * exp(-dist * 3.0) * 0.2;
  
  // Base organic wave
  float noiseFreq = 1.5;
  float noiseAmp = 0.6;
  float noiseValue = snoise(vec2(pos.x * noiseFreq + uTime * 0.2, pos.y * noiseFreq + uTime * 0.2));
  
  pos.z += noiseValue * noiseAmp + ripple;
  
  vElevation = pos.z;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

const fragmentShader = `
uniform vec3 uColorDeep;
uniform vec3 uColorMid;
uniform vec3 uColorHigh;
varying float vElevation;

void main() {
  // Map elevation to color
  // Elevation roughly -0.8 to 0.8
  
  float mixStrength = (vElevation + 0.6) * 0.8;
  
  vec3 color = mix(uColorDeep, uColorMid, smoothstep(0.0, 0.5, mixStrength));
  color = mix(color, uColorHigh, smoothstep(0.6, 1.0, mixStrength));
  
  // Add subtle vignette/darkness
  gl_FragColor = vec4(color, 1.0);
}
`;

// ------------------------------------------------------------------
// COMPONENTS
// ------------------------------------------------------------------

const DigitalSea = () => {
  const mesh = useRef();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uColorDeep: { value: new THREE.Color("#1a0b2e") }, // Darkest background
      uColorMid: { value: new THREE.Color("#5b21b6") }, // Violet-800
      uColorHigh: { value: new THREE.Color("#8b5cf6") }, // Violet-500
    }),
    []
  );

  useFrame((state) => {
    const { clock, pointer } = state;
    uniforms.uTime.value = clock.getElapsedTime();

    // Lerp mouse for smoothness (convert pointer -1..1 to 0..1 UV space roughly)
    const targetX = (pointer.x + 1) * 0.5;
    const targetY = (pointer.y + 1) * 0.5;

    uniforms.uMouse.value.x += (targetX - uniforms.uMouse.value.x) * 0.05;
    uniforms.uMouse.value.y += (targetY - uniforms.uMouse.value.y) * 0.05;
  });

  return (
    <mesh
      ref={mesh}
      rotation={[-Math.PI / 3, 0, 0]} // Tilted to look like a landscape/sea
      position={[0, -1, 0]}
    >
      <planeGeometry args={[14, 8, 128, 128]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        wireframe={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

export default function Hero3DScene() {
  return (
    <div className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <DigitalSea />
      </Canvas>
    </div>
  );
}
