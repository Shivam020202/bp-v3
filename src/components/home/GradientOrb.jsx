import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform float uTime;
uniform vec2 uMouse;
uniform vec3 uColor1; 
uniform vec3 uColor2; 
uniform float uAspect;
varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  vec2 center = vec2(0.5);
  
  // Correct aspect ratio
  uv.x *= uAspect;
  center.x *= uAspect;
  
  // Interactive: deform center towards mouse
  // Mouse is -1 to 1.
  center.x += uMouse.x * 0.15;
  center.y += uMouse.y * 0.15;

  float d = distance(uv, center);
  
  // Organic deformation
  float angle = atan(uv.y - center.y, uv.x - center.x);
  
  // Multiple sine waves for "blob" shape
  float radius = 0.35 
    + 0.08 * sin(angle * 3.0 + uTime * 0.8) 
    + 0.05 * cos(angle * 5.0 - uTime * 1.1)
    + 0.02 * sin(angle * 9.0 + uTime * 0.5);
  
  // Blur / Softness
  float feather = 0.35; // Significant blur
  float alpha = smoothstep(radius + feather, radius, d);
  
  // Gradient Colors
  // Mix based on radial distance
  vec3 color = mix(uColor1, uColor2, smoothstep(0.0, 0.8, d));
  
  // Final color
  gl_FragColor = vec4(color, alpha * 0.9);
}
`;

const GradientBlob = () => {
  const mesh = useRef();
  const { viewport } = useThree();

  // Use slightly brighter/vibrant versions of the requested colors for the glow
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uColor1: { value: new THREE.Color("#8B5CF6") }, // Brighter purple (Violet-500)
      uColor2: { value: new THREE.Color("#44337a") }, // Deep purple
      uAspect: { value: viewport.width / viewport.height },
    }),
    []
  ); // Run once

  useFrame((state) => {
    const { clock, pointer, viewport } = state;
    uniforms.uTime.value = clock.getElapsedTime();
    uniforms.uMouse.value.lerp(pointer, 0.05);
    uniforms.uAspect.value = viewport.width / viewport.height;
  });

  return (
    <mesh ref={mesh} scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent={true}
        depthWrite={false}
      />
    </mesh>
  );
};

export default function GradientOrb() {
  return (
    <div className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 2]}
        gl={{ alpha: true }}
      >
        <GradientBlob />
      </Canvas>
    </div>
  );
}
