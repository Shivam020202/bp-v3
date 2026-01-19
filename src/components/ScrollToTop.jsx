import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Immediate scroll to top
        window.scrollTo(0, 0);

        // Refresh ScrollTrigger to recalculate positions for the new page layout
        // Using a small timeout ensures the new DOM elements are rendered
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

    }, [pathname]);

    return null;
};

export default ScrollToTop;
