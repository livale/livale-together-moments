import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, Calendar, Mail, LucideProps } from "lucide-react";

// Daftarkan plugin GSAP
gsap.registerPlugin(ScrollTrigger);

// Definisikan tipe untuk fitur agar lebih aman dengan TypeScript
interface Feature {
  icon: React.FC<LucideProps>;
  title: string;
  description: string;
  color: "blush" | "sage" | "cream";
}

const MemoriesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Pastikan elemen sudah ada di DOM sebelum dianimasikan
    const title = titleRef.current;
    const cards = cardsRef.current?.children;

    if (!title || !cards || cards.length === 0) return;

    // --- PERBAIKAN 1: MENCEGAH KEDIPAN ANIMASI ---
    // Atur kondisi awal elemen agar tidak terlihat sebelum animasi dimulai
    gsap.set(title, { opacity: 0, y: 50 });
    gsap.set(cards, { opacity: 0, y: 30 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // Mulai animasi saat 80% bagian atas section terlihat
        end: "bottom 20%",
        toggleActions: "play none none none", // Animasi hanya berjalan sekali
      },
    });

    // Animasikan elemen KE kondisi akhirnya (terlihat)
    tl.to(title, {
      y: 0,
      opacity: 1,
      duration: 0.7,
      ease: "power3.out",
    }).to(
      cards,
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.2, // Efek muncul satu per satu
        ease: "power3.out",
      },
      "-=0.4"
    ); // Mulai animasi kartu sedikit lebih cepat

    // --- PERBAIKAN 3: FUNGSI PEMBERSIHAN ---
    return () => {
      // Hentikan semua trigger yang terkait dengan timeline ini untuk mencegah memory leak
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const features: Feature[] = [
    {
      icon: Heart,
      title: "Kenangan Bersama",
      description:
        "Simpan momen-momen spesial kalian dalam timeline yang indah. Dari foto pertama kali bertemu hingga anniversary terbaru.",
      color: "blush",
    },
    {
      icon: Mail,
      title: "Surat Digital",
      description:
        "Kirim surat digital yang penuh cinta untuk pasangan atau sahabat. Surprise mereka dengan pesan heartfelt kapan saja.",
      color: "sage",
    },
    {
      icon: Calendar,
      title: "Tanggal Penting",
      description:
        "Jangan pernah lupa anniversary, ulang tahun, atau moment spesial lainnya. Livale akan selalu mengingatkan kalian.",
      color: "cream",
    },
  ];

  // --- PERBAIKAN 2: MAPPING UNTUK DYNAMIC TAILWIND CLASS ---
  const colorVariants = {
    blush: {
      bg: "bg-blush-100",
      text: "text-blush-600",
    },
    sage: {
      bg: "bg-sage-100",
      text: "text-sage-600",
    },
    cream: {
      bg: "bg-cream-100",
      text: "text-cream-600",
    },
  };

  return (
    <section
      ref={sectionRef}
      className="bg-sage-50 section-padding"
      id="memories"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-warmGray-800 leading-tight mb-6"
          >
            Lebih dari Sekadar Aplikasi,
            <span className="text-gradient block">
              Ini Rumah Kenangan Kalian
            </span>
          </h2>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            // Ambil varian warna yang sesuai dari mapping object
            const variant = colorVariants[feature.color];

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 ${variant.bg} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <feature.icon className={`w-8 h-8 ${variant.text}`} />
                </div>

                <h3 className="text-xl font-bold text-warmGray-800 mb-4">
                  {feature.title}
                </h3>

                <p className="text-warmGray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-warmGray-600 max-w-2xl mx-auto">
            <span className="font-semibold text-blush-600">Coming Soon:</span>{" "}
            Fitur-fitur canggih untuk mengelola kenangan, mengirim surprise
            letters, dan tracking tanggal-tanggal penting dalam hubungan kalian.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MemoriesSection;
