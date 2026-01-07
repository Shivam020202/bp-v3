import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaExpand,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaHeart,
} from "react-icons/fa";

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState(null);
  const [likes, setLikes] = useState({});

  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
      alt: "Brand Identity Design",
      category: "Branding",
      size: "large",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop",
      alt: "Packaging Design",
      category: "Packaging",
      size: "small",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&h=400&fit=crop",
      alt: "Social Media Graphics",
      category: "Social",
      size: "small",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop",
      alt: "Website Design",
      category: "Web",
      size: "large",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=400&fit=crop",
      alt: "Logo Design",
      category: "Branding",
      size: "small",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=400&h=400&fit=crop",
      alt: "Print Materials",
      category: "Print",
      size: "small",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop",
      alt: "Event Branding",
      category: "Events",
      size: "medium",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=600&h=400&fit=crop",
      alt: "Product Photography",
      category: "Photography",
      size: "medium",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=400&h=400&fit=crop",
      alt: "Creative Campaign",
      category: "Campaign",
      size: "small",
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop",
      alt: "Digital Design",
      category: "Digital",
      size: "small",
    },
  ];

  const toggleLike = (id) => {
    setLikes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateLightbox = (direction) => {
    if (!selectedImage) return;
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % images.length
        : (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[newIndex]);
  };

  return (
    <section className="py-24 bg-cream-200 relative overflow-hidden" ref={ref}>
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-cream-300/50 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-coral-100/40 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        >
          <motion.span
            className="inline-block bg-white/80 text-warm-700 px-4 py-2 rounded-full text-sm font-funky font-bold mb-4"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            Eye Candy Alert 👀
          </motion.span>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-warm-900 mb-6">
            Our Creative
            <span className="relative mx-3">
              <span className="relative z-10 text-warm-600">Gallery</span>
              <motion.span
                className="absolute -inset-2 bg-cream-300/60 rounded-xl -z-0 rotate-1"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.4, type: "spring" }}
              />
            </span>
          </h2>

          <p className="text-warm-600 text-lg max-w-xl mx-auto font-funky">
            A visual feast of our favorite projects. Go ahead, scroll and drool!
            🤤
          </p>
        </motion.div>

        {/* Masonry Gallery Grid */}
        <motion.div
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3 }}
        >
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              className="break-inside-avoid group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              onClick={() => openLightbox(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-warm-900/80 via-warm-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block bg-cream-300/90 text-warm-700 px-3 py-1 rounded-full text-xs font-funky font-bold mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-white font-display font-bold text-lg">
                    {image.alt}
                  </h3>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.button
                  className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors ${
                    likes[image.id]
                      ? "bg-red-500 text-white"
                      : "bg-white/90 text-warm-700"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(image.id);
                  }}
                >
                  <FaHeart className={likes[image.id] ? "animate-pulse" : ""} />
                </motion.button>
                <motion.button
                  className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-warm-700 backdrop-blur-sm"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaExpand />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            className="bg-warm-700 text-white px-8 py-4 rounded-full font-funky font-bold text-lg shadow-xl shadow-warm-700/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More Goodness ✨
          </motion.button>
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 bg-warm-900/95 backdrop-blur-lg flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <motion.button
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={closeLightbox}
          >
            <FaTimes className="text-xl" />
          </motion.button>

          {/* Navigation */}
          <motion.button
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("prev");
            }}
          >
            <FaChevronLeft />
          </motion.button>

          <motion.button
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("next");
            }}
          >
            <FaChevronRight />
          </motion.button>

          {/* Image */}
          <motion.div
            className="relative max-w-5xl max-h-[80vh]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-16 left-0 right-0 text-center text-white">
              <span className="inline-block bg-cream-300/90 text-warm-700 px-3 py-1 rounded-full text-sm font-funky font-bold mb-2">
                {selectedImage.category}
              </span>
              <h3 className="font-display font-bold text-xl">
                {selectedImage.alt}
              </h3>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
