import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: false };
    }

    componentDidCatch(error, errorInfo) {
        // Silently catch DOM manipulation errors from GSAP/Framer Motion
        // These occur when animation libraries modify DOM nodes that React
        // then tries to remove during unmount
        if (error.name === 'NotFoundError' ||
            error.message?.includes('removeChild') ||
            error.message?.includes('insertBefore')) {
            // Force re-render to recover
            this.setState({ hasError: false });
            return;
        }
        console.error('ErrorBoundary caught:', error, errorInfo);
    }

    render() {
        return this.props.children;
    }
}

export default ErrorBoundary;
