import { useEffect, useRef } from "react";
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
        scale: 1.1 - (0.1 * reverseIndex),
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
        className="list-none grid grid-cols-1 gap-[4vw] pb-[calc(var(--numcards)*1em)] mb-[4vw]"
        style={{
          '--numcards': images.length,
          gridTemplateRows: `repeat(${images.length}, 40vw)`
        }}
      >
        {images.map((image, index) => (
          <li
            key={index}
            className="card sticky top-0"
            style={{
              '--index': index + 1,
              paddingTop: `calc(${index + 1} * 1em)`
            }}
          >
            <div className="card-content shadow-2xl bg-cream-50 rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 items-stretch p-6" style={{ transformOrigin: '50% 0%' }}>
              <div className="w-full max-w-[800px] place-self-center text-left grid gap-4">
                <h2 className="font-display text-4xl font-bold text-warm-900 m-0">
                  {projectTitle}
                </h2>
                <p className="text-warm-700 leading-relaxed text-lg">
                  Image {index + 1} of {images.length}
                </p>
              </div>
              <figure className="overflow-hidden">
                <img
                  src={image}
                  alt={`${projectTitle} - ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </figure>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StackScroll;
