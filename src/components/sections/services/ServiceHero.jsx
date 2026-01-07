const ServiceHero = ({ videoUrl }) => {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Video Background - Full Page, No Overlay */}
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

            {/* Fallback background if no video */}
            {!videoUrl && (
                <div className="absolute inset-0 bg-[#9F7AEA]" />
            )}
        </section>
    );
};

export default ServiceHero;
