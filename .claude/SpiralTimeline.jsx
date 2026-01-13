import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';

const SpiralTimeline = ({ journeyData = [] }) => {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);

    const [activeIndex, setActiveIndex] = useState(0);
    const [textVisible, setTextVisible] = useState(true);
    const [sectionComplete, setSectionComplete] = useState(false);

    // Scene refs
    const sceneRef = useRef(null);
    const cameraRef = useRef(null);
    const rendererRef = useRef(null);
    const cardsRef = useRef([]);
    const curveRef = useRef(null);
    const scrollPosRef = useRef(0);
    const targetScrollPosRef = useRef(0);
    const animationFrameRef = useRef(null);
    const basePositionsRef = useRef([]);
    const currentActiveIndexRef = useRef(0);
    const currentStepRef = useRef(0);
    const isLockedRef = useRef(false);
    const accumulatedDeltaRef = useRef(0);
    const lastScrollTimeRef = useRef(0);

    // Configuration
    const CONFIG = {
        cardWidth: 2,
        cardHeight: 2.8,
        tubeRadius: 1.5,
        spiralLoops: 4,
        spiralDepth: 60,
        spiralMaxRadius: 7,
        fov: 45
    };

    const TOTAL_ITEMS = journeyData.length;
    const SCROLL_THRESHOLD = 120; // Pixels of scroll needed to move to next step

    // Create card texture
    const createCardTexture = useCallback((index, data) => {
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 716;
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, 512, 716);
        ctx.strokeStyle = "#e0e0e0";
        ctx.lineWidth = 2;
        ctx.strokeRect(0, 0, 512, 716);

        ctx.fillStyle = "#ccc";
        ctx.font = "30px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("Loading...", 256, 358);

        const texture = new THREE.CanvasTexture(canvas);

        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = data.image;

        img.onload = () => {
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(0, 0, 512, 716);
            ctx.drawImage(img, 25, 25, 462, 462);
            ctx.strokeStyle = "#eeeeee";
            ctx.lineWidth = 2;
            ctx.strokeRect(25, 25, 462, 462);

            ctx.fillStyle = "#C4A484";
            ctx.font = "bold 80px Helvetica, Arial";
            ctx.textAlign = "left";
            ctx.fillText(data.year, 40, 580);

            ctx.fillStyle = "#333";
            ctx.font = "30px Helvetica, Arial";
            ctx.fillText(data.subtitle || `Archive No. ${String(index + 1).padStart(2, '0')}`, 40, 640);

            ctx.strokeStyle = "#e0e0e0";
            ctx.lineWidth = 4;
            ctx.strokeRect(0, 0, 512, 716);

            texture.needsUpdate = true;
        };

        return texture;
    }, []);

    // Update sidebar text
    const updateSidebar = useCallback((index) => {
        if (index === currentActiveIndexRef.current || index < 0 || index >= TOTAL_ITEMS) return;
        currentActiveIndexRef.current = index;

        setTextVisible(false);
        setTimeout(() => {
            setActiveIndex(index);
            setTextVisible(true);
        }, 200);
    }, [TOTAL_ITEMS]);

    // Unlock page scrolling
    const unlockScroll = useCallback(() => {
        isLockedRef.current = false;
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
    }, []);

    // Lock page scrolling
    const lockScroll = useCallback(() => {
        if (!isLockedRef.current) {
            isLockedRef.current = true;
            document.body.style.overflow = 'hidden';
        }
    }, []);

    // Go to specific step
    const goToStep = useCallback((step) => {
        step = Math.max(0, Math.min(TOTAL_ITEMS - 1, step));
        currentStepRef.current = step;
        const stepIncrement = 1 / TOTAL_ITEMS;
        targetScrollPosRef.current = 0.9 + (step * stepIncrement);
        updateSidebar(step);
    }, [TOTAL_ITEMS, updateSidebar]);

    // Initialize Three.js scene
    useEffect(() => {
        if (!canvasRef.current || journeyData.length === 0) return;

        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0xffffff, 0.04);
        sceneRef.current = scene;

        const camera = new THREE.PerspectiveCamera(
            CONFIG.fov,
            window.innerWidth / window.innerHeight,
            0.1,
            100
        );
        camera.position.set(0, 0, 16);
        cameraRef.current = camera;

        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            antialias: true,
            alpha: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0xffffff);
        rendererRef.current = renderer;

        // Create spiral path
        const points = [];
        const steps = 400;
        for (let i = 0; i <= steps; i++) {
            const t = i / steps;
            const angle = t * Math.PI * 2 * CONFIG.spiralLoops;
            const radius = 0.5 + Math.pow(t, 1.1) * CONFIG.spiralMaxRadius;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const z = (t * CONFIG.spiralDepth) - CONFIG.spiralDepth;
            points.push(new THREE.Vector3(x, y, z));
        }
        const curve = new THREE.CatmullRomCurve3(points);
        curveRef.current = curve;

        // Create cards
        const planeGeo = new THREE.PlaneGeometry(CONFIG.cardWidth, CONFIG.cardHeight, 10, 10);
        const basePosAttr = planeGeo.attributes.position;
        const basePositions = [];
        for (let i = 0; i < basePosAttr.count; i++) {
            basePositions.push(new THREE.Vector3(
                basePosAttr.getX(i),
                basePosAttr.getY(i),
                basePosAttr.getZ(i)
            ));
        }
        basePositionsRef.current = basePositions;

        const cards = [];
        journeyData.forEach((data, i) => {
            const mat = new THREE.MeshBasicMaterial({
                map: createCardTexture(i, data),
                side: THREE.DoubleSide,
                transparent: true
            });
            const geo = planeGeo.clone();
            const mesh = new THREE.Mesh(geo, mat);
            scene.add(mesh);

            cards.push({
                mesh,
                index: i,
                baseOffset: i / TOTAL_ITEMS,
                rotationOffset: (i * 60) * (Math.PI / 180),
                currentBend: 1,
                t: 0
            });
        });
        cardsRef.current = cards;

        const updateCardGeometry = (card, bendFactor) => {
            const positions = card.mesh.geometry.attributes.position;
            const radius = CONFIG.tubeRadius + 0.1;

            for (let i = 0; i < basePositions.length; i++) {
                const v = basePositions[i];
                const flatX = v.x;
                const flatY = v.y;
                const flatZ = v.z;

                const angle = v.x / radius;
                const curvedX = radius * Math.sin(angle);
                const curvedY = v.y;
                const curvedZ = radius * (1 - Math.cos(angle));

                const x = flatX + (curvedX - flatX) * bendFactor;
                const y = flatY + (curvedY - flatY) * bendFactor;
                const z = flatZ + (curvedZ - flatZ) * bendFactor;

                positions.setXYZ(i, x, y, z);
            }
            positions.needsUpdate = true;
        };

        const spiralOffset = new THREE.Vector3(-3.5, 2.0, 0);

        const animate = () => {
            scrollPosRef.current += (targetScrollPosRef.current - scrollPosRef.current) * 0.08;

            const targetZ = 10;
            const dist = camera.position.z - targetZ;
            const vFOV = THREE.MathUtils.degToRad(camera.fov);
            const visibleHeight = 2 * Math.tan(vFOV / 2) * dist;
            const visibleWidth = visibleHeight * camera.aspect;

            let displayScale = 1.2;
            const maxCardHeight = visibleHeight - 1.0;
            if (CONFIG.cardHeight * displayScale > maxCardHeight) {
                displayScale = maxCardHeight / CONFIG.cardHeight;
            }

            let targetX = visibleWidth * 0.25;
            const halfCardWidth = (CONFIG.cardWidth * displayScale) / 2;
            const screenRightEdge = visibleWidth / 2;
            const rightPadding = 0.5;

            if (targetX + halfCardWidth > screenRightEdge - rightPadding) {
                targetX = (screenRightEdge - rightPadding) - halfCardWidth;
            }

            cards.forEach(card => {
                const isFocused = (card.index === currentActiveIndexRef.current);

                let t = (card.baseOffset + scrollPosRef.current) % 1;
                if (t < 0) t += 1;
                card.t = t;

                let targetPos = new THREE.Vector3();
                let targetRot = new THREE.Euler();
                let targetScale = 1;
                let targetBend = 1;

                if (isFocused) {
                    targetPos.set(targetX, 0, targetZ);
                    targetRot.set(0, -0.2, 0);
                    targetScale = displayScale;
                    targetBend = 0;
                    card.mesh.material.opacity = 1;
                } else {
                    const posOnCurve = curve.getPointAt(t);
                    targetPos.copy(posOnCurve);
                    targetPos.add(spiralOffset);

                    const lookAtT = Math.min(t + 0.01, 1);
                    const lookAtPos = curve.getPointAt(lookAtT);
                    const offsetLookAt = lookAtPos.clone().add(spiralOffset);

                    const dummy = new THREE.Object3D();
                    dummy.position.copy(targetPos);
                    dummy.lookAt(offsetLookAt);

                    const spinAngle = (t * Math.PI * 2 * 2) + card.rotationOffset;
                    dummy.rotateZ(spinAngle);
                    dummy.translateX(CONFIG.tubeRadius + 0.1);
                    dummy.rotateY(Math.PI / 2);

                    dummy.updateMatrix();
                    targetPos.setFromMatrixPosition(dummy.matrix);
                    targetRot.copy(dummy.rotation);

                    targetScale = 0.2 + (t * t) * 0.8;
                    targetBend = 1;

                    if (t < 0.1) card.mesh.material.opacity = t / 0.1;
                    else if (t > 0.95) card.mesh.material.opacity = (1 - t) / 0.05;
                    else card.mesh.material.opacity = 1;
                }

                const lerpSpeed = 0.08;
                card.mesh.position.lerp(targetPos, lerpSpeed);

                const targetquat = new THREE.Quaternion().setFromEuler(targetRot);
                card.mesh.quaternion.slerp(targetquat, lerpSpeed);

                const currentScale = card.mesh.scale.x;
                const newScale = currentScale + (targetScale - currentScale) * lerpSpeed;
                card.mesh.scale.setScalar(newScale);

                card.currentBend += (targetBend - card.currentBend) * 0.05;
                updateCardGeometry(card, card.currentBend);

                card.mesh.material.transparent = true;
            });

            renderer.render(scene, camera);
            animationFrameRef.current = requestAnimationFrame(animate);
        };

        // Initialize
        currentStepRef.current = 0;
        currentActiveIndexRef.current = 0;
        targetScrollPosRef.current = 0.9;
        scrollPosRef.current = 0.9;

        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            renderer.dispose();
        };
    }, [journeyData, createCardTexture, TOTAL_ITEMS]);

    // Scroll handling with accumulated delta
    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;

        const handleWheel = (e) => {
            const rect = container.getBoundingClientRect();
            // Check if section is properly in view (takes full viewport)
            const sectionInView = rect.top <= 5 && rect.bottom >= window.innerHeight - 5;

            if (!sectionInView) {
                // Not in view - ensure unlocked
                unlockScroll();
                return;
            }

            // Section is in view - lock and handle scroll
            lockScroll();
            e.preventDefault();
            e.stopPropagation();

            // Accumulate scroll delta
            accumulatedDeltaRef.current += e.deltaY;

            // Check if we've accumulated enough for a step change
            if (Math.abs(accumulatedDeltaRef.current) >= SCROLL_THRESHOLD) {
                const direction = accumulatedDeltaRef.current > 0 ? 1 : -1;
                const newStep = currentStepRef.current + direction;

                // Reset accumulated delta
                accumulatedDeltaRef.current = 0;

                if (direction > 0) {
                    // Scrolling down
                    if (newStep < TOTAL_ITEMS) {
                        goToStep(newStep);
                    } else if (newStep >= TOTAL_ITEMS) {
                        // Completed - unlock and let page scroll
                        setSectionComplete(true);
                        unlockScroll();
                        // Small delay then scroll
                        setTimeout(() => {
                            window.scrollBy({ top: 50, behavior: 'instant' });
                        }, 50);
                    }
                } else {
                    // Scrolling up
                    if (newStep >= 0) {
                        goToStep(newStep);
                    } else if (newStep < 0) {
                        // At first item going up - unlock and scroll page up
                        unlockScroll();
                        setTimeout(() => {
                            window.scrollBy({ top: -50, behavior: 'instant' });
                        }, 50);
                    }
                }
            }
        };

        // Observer to handle entering/leaving section
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        // Left viewport - unlock
                        unlockScroll();
                        accumulatedDeltaRef.current = 0;
                    } else if (entry.isIntersecting && entry.intersectionRatio > 0.9) {
                        const rect = container.getBoundingClientRect();
                        // Entering from bottom (scrolling up) - start at last item
                        if (rect.bottom <= window.innerHeight + 20 && !sectionComplete) {
                            goToStep(TOTAL_ITEMS - 1);
                            setSectionComplete(false);
                        }
                        // Entering from top (scrolling down) - start at first item
                        else if (rect.top >= -20 && rect.top <= 20) {
                            goToStep(0);
                            setSectionComplete(false);
                        }
                    }
                });
            },
            { threshold: [0, 0.5, 0.9, 1] }
        );

        observer.observe(container);
        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            observer.disconnect();
            window.removeEventListener('wheel', handleWheel);
            unlockScroll();
        };
    }, [TOTAL_ITEMS, goToStep, lockScroll, unlockScroll, sectionComplete]);

    const currentData = journeyData[activeIndex] || {};

    return (
        <section
            ref={containerRef}
            className="relative bg-white"
            style={{ height: '100vh' }}
        >
            {/* Canvas for 3D */}
            <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 w-full h-full"
                style={{ zIndex: 0 }}
            />

            {/* Main Container */}
            <div
                className="absolute top-0 left-0 w-full h-full flex pointer-events-none"
                style={{ zIndex: 10 }}
            >
                {/* Left: Text Panel */}
                <div className="w-full md:w-[45%] h-full flex flex-col justify-center px-6 md:pl-[6vw] md:pr-8 bg-gradient-to-r from-white via-white/95 to-transparent">
                    {/* Section Header */}
                    <div className="mb-8">
                        <div className="flex items-center gap-4 mb-3">
                            <div className="w-10 h-[3px]" style={{ backgroundColor: '#C4A484' }} />
                            <span className="text-sm font-bold uppercase tracking-widest" style={{ color: '#C4A484' }}>
                                Our Story
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900" style={{ fontFamily: 'serif' }}>
                            Our Journey
                        </h2>
                    </div>

                    {/* Info Content */}
                    <div
                        className={`transition-all duration-300 ease-out ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                    >
                        {/* Year */}
                        <div className="flex items-center mb-5">
                            <div className="w-10 h-[3px] mr-4" style={{ backgroundColor: '#C4A484' }} />
                            <span
                                className="text-2xl md:text-3xl font-bold"
                                style={{ color: '#C4A484', fontVariantNumeric: 'tabular-nums' }}
                            >
                                {currentData.year}
                            </span>
                        </div>

                        {/* Title */}
                        <h3
                            className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 leading-tight"
                            style={{ fontFamily: 'serif' }}
                        >
                            {currentData.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md mb-3">
                            {currentData.desc}
                        </p>

                        {/* Subtitle */}
                        {currentData.subtitle && (
                            <p className="text-base font-semibold" style={{ color: '#C4A484' }}>
                                {currentData.subtitle}
                            </p>
                        )}
                    </div>

                    {/* Progress */}
                    <div className="mt-10 flex items-center gap-2">
                        {journeyData.map((_, i) => (
                            <div
                                key={i}
                                className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-10' : 'w-2'
                                    }`}
                                style={{
                                    backgroundColor: i === activeIndex ? '#C4A484' : '#e5e5e5'
                                }}
                            />
                        ))}
                        <span className="ml-4 text-sm text-gray-500 font-medium">
                            {activeIndex + 1} / {journeyData.length}
                        </span>
                    </div>
                </div>

                {/* Right: Spacer */}
                <div className="hidden md:block w-[55%] h-full" />
            </div>
        </section>
    );
};

export default SpiralTimeline;
