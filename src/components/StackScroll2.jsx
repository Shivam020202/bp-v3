import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './StackScroll2.css';

gsap.registerPlugin(ScrollTrigger);

const StackScroll2 = ({ images, mobileImages, projectTitle }) => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1200);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useLayoutEffect(() => {
    if (!isLargeScreen) return; // Don't apply stack scroll on small screens

    const cards = containerRef.current?.querySelectorAll('.card');
    if (!cards || cards.length === 0) return;

    const totalCards = cards.length;
    const lastCard = cards[totalCards - 1];

    cards.forEach((card, index) => {
      const cardContent = card.querySelector('.card-content');
      const isLastCard = index === totalCards - 1;

      // Pin all cards - non-last cards use last card as endTrigger
      ScrollTrigger.create({
        trigger: card,
        start: 'top 15%',
        pin: true,
        pinSpacing: false,
        endTrigger: isLastCard ? card : lastCard,
        end: isLastCard ? 'bottom 35%' : 'bottom 35%',
      });

      // Scale down all cards as the next one comes up (or for last card, as it scrolls)
      if (!isLastCard) {
        gsap.to(cardContent, {
          scale: 0.8,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top 15%',
            end: () => `+=${window.innerHeight}`,
            scrub: true,
          }
        });
      } else {
        // Last card scales throughout its entire visible journey
        gsap.to(cardContent, {
          scale: 0.8,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top 15%',
            end: 'bottom 35%',
            scrub: true,
          }
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [images, isLargeScreen]);

  // Slider view for small screens
  if (!isLargeScreen) {
    const displayImages = mobileImages && mobileImages.length > 0 ? mobileImages : images;

    return (
      <div className="w-full overflow-hidden" ref={sliderRef}>
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-4 pb-8 scrollbar-hide">
          {displayImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[80vw] snap-center"
            >
              <div className="card-content-mobile">
                <figure className="card-image">
                  <img
                    src={image}
                    alt={`${projectTitle} - ${index + 1}`}
                  />
                </figure>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Stack scroll view for large screens
  return (
    <div className="w-full max-w-[70vw] mx-auto mt-20 mb-20" ref={containerRef}>
      <ul
        id="cards"
        className="list-none"
        style={{
          '--numcards': images.length
        }}
      >
        {images.map((image, index) => (
          <li
            key={index}
            className="card"
            id={`card-${index + 1}`}
            style={{
              '--index': index + 1,
              marginBottom: index === images.length - 1 ? '50vh' : '100vh',
              zIndex: index + 1,
            }}
          >
            <div className="card-content">
              <figure className="card-image">
                <img
                  src={image}
                  alt={`${projectTitle} - ${index + 1}`}
                />
              </figure>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StackScroll2;
