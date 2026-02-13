import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll to top immediately
        window.scrollTo(0, 0);

        // Refresh ScrollTrigger after the new page DOM has rendered
        // This ensures scroll-based animations recalculate their positions
        const refreshTimer = setTimeout(() => {
            ScrollTrigger.refresh(true);
        }, 100);

        return () => clearTimeout(refreshTimer);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
