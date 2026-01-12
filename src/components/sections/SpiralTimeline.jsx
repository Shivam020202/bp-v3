import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';

const SpiralTimeline = ({ journeyData = [] }) => {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    
    // Core state
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTimelineMode, setIsTimelineMode] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [timelineCompleted, setTimelineCompleted] = useState(false);

    // Three.js refs
    const sceneRef = useRef(null);
    const rendererRef = useRef(null);
    const cameraRef = useRef(null);
    const cardsRef = useRef([]);
    const animationRef = useRef(null);

    // Scroll management refs
    const scrollAccumulator = useRef(0);
    const isScrollLocked = useRef(false);
    const savedScrollY = useRef(0);

    // Constants
    const TOTAL_ITEMS = journeyData.length;
    const SCROLL_SENSITIVITY = 150; // Increased for slower, more controlled scrolling
    const TRANSITION_DURATION = 400; // Slightly longer transitions

    // Scroll lock utilities
    const lockScroll = useCallback(() => {
        if (!isScrollLocked.current) {
            isScrollLocked.current = true;
            savedScrollY.current = window.pageYOffset || document.documentElement.scrollTop;
            
            // Prevent scrolling by hiding overflow instead of position fixed
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
        }
    }, []);

    const unlockScroll = useCallback(() => {
        if (isScrollLocked.current) {
            isScrollLocked.current = false;
            
            // Restore scrolling
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
            
            // Don't restore scroll position immediately - let natural scroll continue
        }
    }, []);


    // Create card texture with proper image loading
    const createCardTexture = useCallback((data, index) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 512;
        canvas.height = 716;

        // Default background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Loading state
        ctx.fillStyle = '#cccccc';
        ctx.font = '30px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Loading...', canvas.width / 2, canvas.height / 2);

        const texture = new THREE.CanvasTexture(canvas);

        // Load actual image
        if (data.image) {
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.onload = () => {
                // Clear canvas
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                
                // Draw image
                ctx.drawImage(img, 30, 30, 452, 452);
                
                // Add year text
                ctx.fillStyle = '#C4A484';
                ctx.font = 'bold 70px Arial';
                ctx.textAlign = 'left';
                ctx.fillText(data.year || '', 40, 560);
                
                // Add subtitle
                ctx.fillStyle = '#333333';
                ctx.font = '28px Arial';
                ctx.fillText(data.subtitle || `Item ${index + 1}`, 40, 620);
                
                // Border
                ctx.strokeStyle = '#e0e0e0';
                ctx.lineWidth = 3;
                ctx.strokeRect(0, 0, canvas.width, canvas.height);
                
                texture.needsUpdate = true;
            };
            img.src = data.image;
        }

        return texture;
    }, []);

    // Initialize Three.js scene
    useEffect(() => {
        if (!canvasRef.current || journeyData.length === 0) return;

        // Scene setup
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xffffff);
        sceneRef.current = scene;

        // Camera setup
        const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 0, 15);
        cameraRef.current = camera;

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({ 
            canvas: canvasRef.current, 
            antialias: true,
            alpha: true 
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        rendererRef.current = renderer;

        // Create spiral curve
        const spiralPoints = [];
        const segments = 200;
        for (let i = 0; i <= segments; i++) {
            const t = i / segments;
            const angle = t * Math.PI * 8; // 4 complete rotations
            const radius = 2 + t * 6;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const z = t * -40; // Depth progression
            spiralPoints.push(new THREE.Vector3(x, y, z));
        }
        const spiralCurve = new THREE.CatmullRomCurve3(spiralPoints);

        // Create cards
        const cards = [];
        journeyData.forEach((data, i) => {
            const geometry = new THREE.PlaneGeometry(3, 4);
            const material = new THREE.MeshBasicMaterial({
                map: createCardTexture(data, i),
                transparent: true
            });
            const card = new THREE.Mesh(geometry, material);
            
            // Position on spiral
            const t = i / (TOTAL_ITEMS - 1);
            const position = spiralCurve.getPointAt(t);
            card.position.copy(position);
            
            // Rotation to face camera
            card.lookAt(camera.position);
            
            scene.add(card);
            cards.push({ mesh: card, index: i, spiralPosition: t });
        });
        cardsRef.current = cards;

        // Animation loop
        const animate = () => {
            // Update card positions based on current index
            cards.forEach((card, i) => {
                const distance = Math.abs(i - currentIndex);
                const isCurrent = i === currentIndex;
                
                if (isCurrent) {
                    // Featured card position
                    card.mesh.position.set(3, 0, 8);
                    card.mesh.scale.setScalar(1.2);
                    card.mesh.material.opacity = 1;
                    card.mesh.rotation.set(0, -0.3, 0);
                } else {
                    // Spiral position
                    const spiralPos = spiralCurve.getPointAt(card.spiralPosition);
                    card.mesh.position.lerp(spiralPos, 0.1);
                    card.mesh.scale.setScalar(0.4 + (1 / (distance + 1)) * 0.4);
                    card.mesh.material.opacity = 1; // Remove fade effect - keep all cards fully visible
                    card.mesh.lookAt(camera.position);
                }
            });

            renderer.render(scene, camera);
            animationRef.current = requestAnimationFrame(animate);
        };
        animate();

        // Resize handler
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            renderer.dispose();
        };
    }, [journeyData, currentIndex, createCardTexture, TOTAL_ITEMS]);

    // Scroll event handling with proper handoff
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleWheel = (e) => {
            const rect = container.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            
            // Determine if section is in the "trigger zone" (top 20% to bottom 20%)
            const sectionTop = rect.top;
            const sectionBottom = rect.bottom;
            const sectionInTriggerZone = sectionTop <= viewportHeight * 0.2 && sectionBottom >= viewportHeight * 0.8;

            // Case 1: Section not in trigger zone - allow normal page scroll
            if (!sectionInTriggerZone) {
                if (isTimelineMode) {
                    setIsTimelineMode(false);
                    unlockScroll();
                }
                return; // Let page scroll naturally
            }

            // Case 2: Section in trigger zone but timeline not active yet
            if (sectionInTriggerZone && !isTimelineMode) {
                // Check scroll direction and section position
                const scrollingDown = e.deltaY > 0;
                const scrollingUp = e.deltaY < 0;

                // Activate timeline when:
                // - Scrolling down and section just entered trigger zone from top
                // - Scrolling up and section just entered trigger zone from bottom
                const shouldActivate = 
                    (scrollingDown && sectionTop <= viewportHeight * 0.2 && sectionTop >= 0) ||
                    (scrollingUp && sectionBottom >= viewportHeight * 0.8 && sectionBottom <= viewportHeight);

                if (shouldActivate) {
                    e.preventDefault();
                    setIsTimelineMode(true);
                    setTimelineCompleted(false); // Reset completion state
                    
                    // Set initial index based on scroll direction
                    if (scrollingDown) {
                        setCurrentIndex(0); // Start from beginning
                    } else {
                        setCurrentIndex(TOTAL_ITEMS - 1); // Start from end
                    }
                    
                    lockScroll();
                    scrollAccumulator.current = 0;
                    return;
                }
                
                return; // Continue page scroll until proper activation point
            }

            // Case 3: Timeline mode is active - handle timeline navigation
            if (isTimelineMode) {
                e.preventDefault();
                e.stopPropagation();

                scrollAccumulator.current += e.deltaY;

                if (Math.abs(scrollAccumulator.current) >= SCROLL_SENSITIVITY) {
                    const direction = scrollAccumulator.current > 0 ? 1 : -1;
                    scrollAccumulator.current = 0;
                    
                    const newIndex = currentIndex + direction;

                    // Check if we can navigate within timeline
                    if (newIndex >= 0 && newIndex < TOTAL_ITEMS) {
                        setCurrentIndex(newIndex);
                        setIsTransitioning(true);
                        setTimeout(() => setIsTransitioning(false), TRANSITION_DURATION);
                    } else {
                        // Timeline completed - mark as completed and exit
                        setTimelineCompleted(true);
                        setIsTimelineMode(false);
                        unlockScroll();
                        setIsTransitioning(false);
                        
                        // Brief pause to show completion, then continue page scroll
                        setTimeout(() => {
                            setTimelineCompleted(false); // Reset for next time
                            // Create a natural scroll continuation
                            const scrollDistance = direction > 0 ? 250 : -250;
                            window.scrollBy({ 
                                top: scrollDistance, 
                                behavior: 'smooth' 
                            });
                        }, 300); // Longer pause to show completion
                    }
                }
            }
        };

        // Global wheel listener on window to catch all scroll events
        window.addEventListener('wheel', handleWheel, { passive: false });

        // Intersection Observer for emergency cleanup
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting && isTimelineMode) {
                        setIsTimelineMode(false);
                        unlockScroll();
                    }
                });
            },
            { threshold: 0 }
        );

        observer.observe(container);

        return () => {
            window.removeEventListener('wheel', handleWheel);
            observer.disconnect();
            unlockScroll();
        };
    }, [isTimelineMode, currentIndex, TOTAL_ITEMS, lockScroll, unlockScroll]);

    const currentData = journeyData[currentIndex] || {};

    return (
        <section
            ref={containerRef}
            className="relative h-screen bg-white overflow-hidden"
        >
            {/* Three.js Canvas */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
            />

            {/* Content Overlay */}
            <div className="absolute inset-0">
                <div className="container mx-auto px-6 h-full">
                    <div className="flex h-full">
                        {/* Left Content Panel */}
                        <div className="w-full md:w-1/2 lg:w-[45%] h-full flex flex-col justify-center bg-gradient-to-r from-white via-white/95 to-transparent relative z-10">
                    {/* Header */}
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

                    {/* Dynamic Content */}
                    <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-50 translate-y-2' : 'opacity-100 translate-y-0'}`}>
                        <div className="flex items-center mb-5">
                            <div className="w-10 h-[3px] mr-4" style={{ backgroundColor: '#C4A484' }} />
                            <span
                                className="text-2xl md:text-3xl font-bold"
                                style={{ color: '#C4A484', fontVariantNumeric: 'tabular-nums' }}
                            >
                                {currentData.year}
                            </span>
                        </div>

                        <h3
                            className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 leading-tight"
                            style={{ fontFamily: 'serif' }}
                        >
                            {currentData.title}
                        </h3>

                        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md mb-3">
                            {currentData.desc}
                        </p>

                        {currentData.subtitle && (
                            <p className="text-base font-semibold" style={{ color: '#C4A484' }}>
                                {currentData.subtitle}
                            </p>
                        )}
                    </div>

                    {/* Progress Indicator */}
                    <div className="mt-10 flex items-center gap-2">
                        {journeyData.map((_, i) => (
                            <div
                                key={i}
                                className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-10' : 'w-2'
                                    }`}
                                style={{
                                    backgroundColor: i <= currentIndex ? '#C4A484' : '#e5e5e5'
                                }}
                            />
                        ))}
                        <span className="ml-4 text-sm text-gray-500 font-medium">
                            {currentIndex + 1} / {journeyData.length}
                        </span>
                    </div>

                    {/* Status Indicator */}
                    <div className="mt-6">
                        <div className={`text-xs uppercase tracking-widest transition-all duration-300 ${
                            timelineCompleted
                                ? "text-green-600 font-bold"
                                : isTimelineMode 
                                    ? "font-semibold" 
                                    : "text-gray-400"
                        }`}
                        style={isTimelineMode && !timelineCompleted ? { color: '#C4A484' } : {}}>
                            {timelineCompleted
                                ? "✅ Timeline Completed - Continuing page scroll"
                                : isTimelineMode 
                                    ? "🎯 Timeline Active - Scroll to navigate" 
                                    : "📜 Scroll"
                            }
                        </div>
                        {isTimelineMode && !timelineCompleted && (
                            <div className="mt-3 text-xs text-gray-500 leading-relaxed">
                                {currentIndex === 0 
                                    ? `Continue scrolling through ${TOTAL_ITEMS - 1} more items`
                                    : currentIndex === TOTAL_ITEMS - 1
                                        ? `Continue scrolling through ${TOTAL_ITEMS - 1} more items`
                                        : `${TOTAL_ITEMS - currentIndex - 1} more items to complete`
                                }
                            </div>
                        )}
                    </div>
                        </div>

                        {/* Right Panel - Reserved for 3D content */}
                        <div className="hidden md:block w-1/2 lg:w-[55%] h-full relative">
                            {/* 3D Content Space */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpiralTimeline;