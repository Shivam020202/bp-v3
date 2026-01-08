const TechStackHero = ({ videoUrl }) => {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Video Background - Full Page, No Content */}
            {videoUrl && (
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src={videoUrl} type="video/mp4" />
                </video>
            )}

            {/* Fallback if no video */}
            {!videoUrl && (
                <div className="absolute inset-0 bg-gray-900" />
            )}

            {/* Bottom Gradient Fade - Blends into content */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" />
        </section>
    );
};

export default TechStackHero;
