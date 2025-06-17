
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
            <div className="w-40 h-12 bg-black rounded-lg flex items-center justify-center opacity-50 grayscale">
              <svg className="w-32 h-8" viewBox="0 0 135 40" fill="white">
                <path d="M130.197 40C133.464 40 135 38.395 135 35.508V4.492C135 1.605 133.464 0 130.197 0H4.803C1.536 0 0 1.605 0 4.492v30.016C0 38.395 1.536 40 4.803 40h125.394z"/>
                <path d="M68.445 21.222c0-2.047-.855-3.245-2.274-3.245-1.419 0-2.274 1.198-2.274 3.245 0 2.047.855 3.245 2.274 3.245 1.419 0 2.274-1.198 2.274-3.245zm-6.381 0c0-3.473 1.867-5.647 4.107-5.647 2.24 0 4.107 2.174 4.107 5.647 0 3.473-1.867 5.647-4.107 5.647-2.24 0-4.107-2.174-4.107-5.647z" fill="white"/>
                <text x="30" y="13" fill="white" fontSize="9" fontFamily="Arial">Download on the</text>
                <text x="30" y="26" fill="white" fontSize="16" fontFamily="Arial" fontWeight="bold">App Store</text>
              </svg>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-semibold text-warmGray-600 bg-white px-2 py-1 rounded shadow">
                Coming Soon
              </span>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-40 h-12 bg-black rounded-lg flex items-center justify-center opacity-50 grayscale">
              <svg className="w-32 h-8" viewBox="0 0 135 40" fill="white">
                <path d="M130.197 40C133.464 40 135 38.395 135 35.508V4.492C135 1.605 133.464 0 130.197 0H4.803C1.536 0 0 1.605 0 4.492v30.016C0 38.395 1.536 40 4.803 40h125.394z"/>
                <path d="M47.424 21.032c0-2.007 1.604-3.123 4.471-3.284l3.268-.182v-.905c0-1.204-.818-1.907-2.215-1.907-1.176 0-1.954.543-2.215 1.385h-1.733c.182-1.542 1.594-2.601 3.988-2.601 2.456 0 3.948 1.199 3.948 3.144v6.608h-1.693v-1.563h-.08c-.663 1.159-1.774 1.763-3.248 1.763-2.034 0-3.491-1.239-3.491-2.458zm7.739-1.019v-.924l-2.94.182c-1.397.088-2.134.643-2.134 1.524 0 .881.717 1.444 1.854 1.444 1.581 0 3.22-1.086 3.22-2.226z" fill="white"/>
                <text x="30" y="13" fill="white" fontSize="8" fontFamily="Arial">GET IT ON</text>
                <text x="30" y="26" fill="white" fontSize="14" fontFamily="Arial" fontWeight="bold">Google Play</text>
              </svg>
            </div>
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
