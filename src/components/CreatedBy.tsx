import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CreatedBy: React.FC = () => {
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!textRef.current) return;

    gsap.fromTo(
      textRef.current,
      {
        width: 0,
        opacity: 0,
        x: -200,
        color: "transparent", // Başlangıçta renk yok
      },
      {
        width: "100%", // Yazının tamamının görünmesini sağla
        opacity: 1,
        x: 0,
        color: "white", // Yazı rengi beyaz olacak
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 40%", // Scroll pozisyonu biraz daha aşağıya kaydırıldı
          end: "top center",
        },
      }
    );
  }, []);

  return (
    <div
      ref={textRef}
      className="text-5xl font-bold !text-white h-screen flex items-center justify-start relative"
      style={{
        borderRight: "5px solid white", // Kontur efekti
        whiteSpace: "nowrap", // Yazı bir satırda kalsın
        overflow: "hidden", // Dışarı taşmasın
        backgroundImage: "url('/image2/image4.jpg')", // Arka planda kullanmak istediğiniz resmin yolu
        backgroundSize: "cover", // Resmi tam ekranda kaplasın
        backgroundPosition: "center", // Resmin ortalanmasını sağlar
      }}
    >
       {/* Yazıyı daha görünür hale getirmek için arka planda karartma */}
      <span className="relative !text-6xl !font-semibold z-10 pl-10">Created By Toprak Çavuşdağ</span>
    </div>
  );
};

export default CreatedBy;
