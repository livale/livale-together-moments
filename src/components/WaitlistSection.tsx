
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Instagram, Youtube } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

gsap.registerPlugin(ScrollTrigger);

const WaitlistSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.from(sectionRef.current?.children, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Berhasil bergabung!",
        description: "Kami akan menghubungi Anda saat Livale siap diluncurkan.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="waitlist-section" ref={sectionRef} className="gradient-bg section-padding">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-warmGray-800 leading-tight">
          Siap Bawa Hubunganmu 
          <span className="text-gradient block">ke Level Selanjutnya?</span>
        </h2>
        
        <p className="text-lg sm:text-xl text-warmGray-600 leading-relaxed max-w-2xl mx-auto">
          Ikatan yang lebih kuat, lebih banyak kesenangan, dan pertumbuhan bersama. 
          Jadilah yang pertama merasakan pengalaman Livale.
        </p>
        
        <form ref={formRef} onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="email@contoh.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg border-warmGray-300 focus:border-blush-500 focus:ring-blush-500"
              required
            />
            <Button
              type="submit"
              disabled={isSubmitting || !email}
              className="bg-blush-500 hover:bg-blush-600 text-white px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all duration-300"
            >
              {isSubmitting ? 'Memproses...' : 'Beri Tahu Saya Saat Rilis!'}
            </Button>
          </div>
        </form>
        
        <p className="text-warmGray-500 text-sm">
          Jadilah bagian dari ribuan pasangan & sahabat yang menantikan Livale.
        </p>
        
        <div className="flex justify-center space-x-6 pt-4">
          <button
            onClick={() => window.open('https://instagram.com', '_blank')}
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <Instagram className="w-6 h-6 text-blush-500" />
          </button>
          <button
            onClick={() => window.open('https://youtube.com', '_blank')}
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <Youtube className="w-6 h-6 text-blush-500" />
          </button>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
          <div className="relative">
            <img 
              src="/placeholder.svg" 
              alt="App Store" 
              className="h-12 opacity-50 grayscale"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-semibold text-warmGray-600 bg-white px-2 py-1 rounded shadow">
                Coming Soon
              </span>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/placeholder.svg" 
              alt="Google Play" 
              className="h-12 opacity-50 grayscale"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-semibold text-warmGray-600 bg-white px-2 py-1 rounded shadow">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
