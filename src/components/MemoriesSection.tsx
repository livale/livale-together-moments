
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Calendar, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const MemoriesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    })
    .from(cardsRef.current?.children, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "power3.out"
    }, "-=0.4");
  }, []);

  const features = [
    {
      icon: Heart,
      title: "Kenangan Bersama",
      description: "Simpan momen-momen spesial kalian dalam timeline yang indah. Dari foto pertama kali bertemu hingga anniversary terbaru.",
      color: "blush"
    },
    {
      icon: Mail,
      title: "Surat Digital",
      description: "Kirim surat digital yang penuh cinta untuk pasangan atau sahabat. Surprise mereka dengan pesan heartfelt kapan saja.",
      color: "sage"
    },
    {
      icon: Calendar,
      title: "Tanggal Penting",
      description: "Jangan pernah lupa anniversary, ulang tahun, atau moment spesial lainnya. Livale akan selalu mengingatkan kalian.",
      color: "cream"
    }
  ];

  return (
    <section ref={sectionRef} className="bg-sage-50 section-padding" id="memories">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-warmGray-800 leading-tight mb-6"
          >
            Lebih dari Sekadar Aplikasi,
            <span className="text-gradient block">Ini Rumah Kenangan Kalian</span>
          </h2>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-${feature.color}-100 rounded-2xl flex items-center justify-center mb-6`}>
                <feature.icon className={`w-8 h-8 text-${feature.color}-600`} />
              </div>
              
              <h3 className="text-xl font-bold text-warmGray-800 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-warmGray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-warmGray-600 max-w-2xl mx-auto">
            <span className="font-semibold text-blush-600">Coming Soon:</span> Fitur-fitur canggih untuk 
            mengelola kenangan, mengirim surprise letters, dan tracking tanggal-tanggal penting 
            dalam hubungan kalian.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MemoriesSection;
