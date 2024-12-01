// LogoComponent.tsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAP ScrollTrigger'ı kaydet
gsap.registerPlugin(ScrollTrigger);

const LogoComponent: React.FC = () => {
  const logosRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    logosRef.current.forEach((logo, index) => {
      if (logo) {
        gsap.fromTo(
          logo,
          {
            opacity: 0,
            y: 50, // Yukarıdan aşağıya doğru gelmesi için başlangıç değeri
          },
          {
            opacity: 1,
            y: 0, // Asıl konumuna gelmesi
            duration: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: logo,
              start: "top 80%", // Scroll başladığında
              end: "top center",
              once: true, // Bir kez çalışacak
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="flex  justify-center gap-20 items-center  h-fit py-28">
      {/* Logo 1 */}
      <div
        ref={(el) => (logosRef.current[0] = el)}
        className="logo-container p-10"
        style={{
          width: "150px",
          backgroundImage: "url('/logo/logo1.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Logo 2 */}
      <div
        ref={(el) => (logosRef.current[1] = el)}
        className="logo-container p-10"
        style={{
          width: "150px",
          backgroundImage: "url('/logo/logo2.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Logo 3 */}
      <div
        ref={(el) => (logosRef.current[2] = el)}
        className="logo-container p-10"
        style={{
          width: "150px",
          height: "150px",
          backgroundImage: "url('/logo/ea.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  );
};

export default LogoComponent;
