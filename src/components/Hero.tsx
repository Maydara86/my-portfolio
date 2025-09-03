'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';
import { useTranslation } from '@/hooks/useTranslation';

const Hero = () => {
  const { theme, isRTL } = useTheme();
  const { t } = useTranslation();

  // Parallax effect for hero image
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const heroImage = document.querySelector('.hero-image');
      if (heroImage) {
        (heroImage as HTMLElement).style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${theme === 'dark' ? 'bg-gray-700' : 'text-gray-50'}`}>
      <div className={`container mx-auto px-6 py-20 mt-16`}>
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${isRTL ? 'lg:grid-cols-2' : ''}`}>

          {/* Text Content */}
          <div className={`${
            isRTL ? 'lg:order-2 text-right' : 'text-left'
          } space-y-6 fade-in`}>
            <h1 className={`text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r ${
              theme === 'dark'
                ? 'from-blue-400 via-purple-400 to-pink-400'
                : 'from-blue-600 via-purple-600 to-pink-600'
            } bg-clip-text text-transparent`}>
              {t.heroTitle}
            </h1>

            <p className={`text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } leading-relaxed max-w-2xl`}>
              {t.heroDescription}
            </p>

            <div className={`flex gap-4 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
              <button
                onClick={scrollToContact}
                className={`px-8 py-3 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg font-medium ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900/70 border border-gray-700 backdrop-blur-sm hover:from-gray-900 hover:to-gray-900/70'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700'
                }`}
              >
                {t.getInTouch}
              </button>

              <button
                onClick={scrollToPortfolio}
                className={`px-8 py-3 ${
                  theme === 'dark'
                    ? 'bg-gray-800 hover:bg-gray-700 border-gray-600 text-white'
                    : 'bg-white hover:bg-gray-50 border-gray-300 text-gray-900'
                } border-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg font-medium`}
              >
                {t.portfolioTitle}
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className={`${isRTL ? 'lg:order-1' : ''} relative`}>
            <div className="hero-image relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl parallax">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face"
                alt="Mohamed Cherif - Full-Stack Developer"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Decorative Background */}
            <div className={`absolute -z-10 top-8 ${
              isRTL ? 'left-8' : 'right-8'
            } w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl`}></div>

            {/* Floating Elements */}
            <div className={`absolute -top-4 ${
              isRTL ? 'left-4' : 'right-4'
            } w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-20 animate-pulse`}></div>

            <div className={`absolute -bottom-6 ${
              isRTL ? 'right-8' : 'left-8'
            } w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-30 animate-bounce`}></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className={`w-6 h-10 border-2 ${
          theme === 'dark' ? 'border-gray-400' : 'border-gray-600'
        } rounded-full flex justify-center`}>
          <div className={`w-1 h-3 ${
            theme === 'dark' ? 'bg-gray-400' : 'bg-gray-600'
          } rounded-full mt-2 animate-pulse`}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;