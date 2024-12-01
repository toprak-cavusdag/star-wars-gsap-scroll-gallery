import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import CreatedBy from './components/CreatedBy';
import BigImageReverse from './components/BigImageReverse';
import LogoComponent from './components/LogoComponents';

gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerDirectionalMovement = () => {
  useEffect(() => {
    document.scrollingElement.scrollTo(0, 0);
    handleScroll();
    return () => {};
  }, []);

  const handleScroll = () => {
    ScrollTrigger.defaults({
      scroller: '.scroller',
    });

    gsap.utils.toArray('section').forEach((section, index) => {
      const wrapper = section.querySelector('.wrapper');
      const [xStart, xEnd] =
        index % 2
          ? ['100%', (wrapper.scrollWidth - section.offsetWidth) * -1]
          : [wrapper.scrollWidth * -1, 0];
      gsap.fromTo(
        wrapper,
        { x: xStart },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 0.5,
          },
        }
      );
    });
  };

  return (
    <div className="scroller h-screen overflow-auto text-[12vw] overflow-x-hidden bg-cream ">
      <section className="h-fit">
        <div className="wrapper flex text-[16vh] font-medium overflow whitespace-nowrap">
          Star Wars Gallery
        </div>
      </section>
      {[1, 2].map((el) => (
        <section key={el}>
          <div className="wrapper flex text-[16vh] font-medium  ">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el2) => (
              <img
                key={el2}
                className="h-80 rounded-xl m-2 transition-all hover:scale-95 cursor-pointer "
                src={`/images/image${el2}.jpg`} // Kendi resimlerinizi buraya ekleyin
                alt={`Image ${el2}`}
              />
            ))}
          </div>
        </section>
      ))}
      <section className="h-fit">
        <div className="wrapper flex text-[16vh] font-medium overflow whitespace-nowrap">
          
        </div>
      </section>
        <section>
          <div className="wrapper flex text-[16vh] font-medium ">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el2) => (
              <img
                key={el2}
                className="h-80 rounded-xl m-2 transition-all hover:scale-95 cursor-pointer "
                src={`/image4/image${el2}.jpg`} // Kendi resimlerinizi buraya ekleyin
                alt={`Image ${el2}`}
              />
            ))}
          </div>
        </section>


        <section>
          <div className="wrapper flex text-[16vh] font-medium ">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el2) => (
              <img
                key={el2}
                className="h-80 rounded-xl m-2 transition-all hover:scale-95 cursor-pointer "
                src={`/image2/image${el2}.jpg`} // Kendi resimlerinizi buraya ekleyin
                alt={`Image ${el2}`}
              />
            ))}
          </div>
        </section>

      <section className="h-fit">
        <div className="wrapper flex text-[16vh] font-bold overflow whitespace-nowrap">
        Embrace the Power of the Darkside
        </div>
      </section>
      {[1, 2].map((el) => (
        <section key={el}>
          <div className="wrapper flex text-[16vh] font-medium  ">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el2) => (
              <img
                key={el2}
                className="h-80 rounded-xl m-2 transition-all hover:scale-95 cursor-pointer "
                src={`/image3/image${el2}.jpg`} 
                alt={`Image ${el2}`}
              />
            ))}
          </div>
        </section>
      ))}


      <CreatedBy />
      <BigImageReverse />
      <LogoComponent/>

      <footer className="flex items-center justify-center text-2xl my-32 ">
          All Images are from <span className="text-green">Unsplash</span> &  <span className="text-green">EA Games</span>
      </footer>
    </div>
  );
};

export default ScrollTriggerDirectionalMovement;
