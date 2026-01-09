import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StackScroll = ({ images, projectTitle }) => {
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    if (!cardsContainerRef.current) return;

    const cards = cardsContainerRef.current.querySelectorAll('.card');

    cards.forEach((card, index) => {
      const cardContent = card.querySelector('.card-content');
      const numCards = cards.length;
      const reverseIndex = numCards - index;

      gsap.to(cardContent, {
        scale: 1 - (0.05 * reverseIndex / numCards),
        filter: `brightness(${1 - (0.2 * reverseIndex / numCards)})`,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top top",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [images]);

  return (
    <div className="w-full">
      <ul
        ref={cardsContainerRef}
        className="list-none relative"
        style={{
          '--numcards': images.length,
        }}
      >
        {images.map((image, index) => (
          <li
            key={index}
            className="card sticky top-20"
            style={{
              paddingTop: `calc(${index + 1} * 2em)`,
              zIndex: index + 1,
              marginBottom: '40vh'
            }}
          >
            <motion.div 
              className="card-content shadow-2xl bg-white rounded-3xl overflow-hidden aspect-video flex items-center justify-center border border-warm-200/50"
              style={{ transformOrigin: '50% 0%' }}
            >
              <img
                src={image}
                alt={`${projectTitle} - ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StackScroll;
