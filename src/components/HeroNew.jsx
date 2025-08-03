import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroNew = () => {
  const videoRef = useRef(null);
  const [videoStatus, setVideoStatus] = useState('loading');

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();

      videoRef.current.addEventListener('loadstart', () => {
        console.log('Video loading started');
        setVideoStatus('loading');
      });

      videoRef.current.addEventListener('loadeddata', () => {
        console.log('Video data loaded');
        setVideoStatus('loaded');
      });

      videoRef.current.addEventListener('canplay', () => {
        console.log('Video can play');
        setVideoStatus('playing');
      });

      videoRef.current.addEventListener('error', (e) => {
        console.error('Video error:', e);
        setVideoStatus('error');
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Video Background - Full Screen */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/assets/isbannerar.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Video Status Debug */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute top-4 left-4 z-30 bg-black bg-opacity-75 text-white px-3 py-1 rounded text-sm">
          Video Status: {videoStatus}
        </div>
      )}

      {/* Gradient Overlay for Better Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-blue-900/50"></div>

      {/* Fallback Background - Only show if video fails */}
      {videoStatus === 'error' && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black"></div>
      )}

      {/* Hero Content - Centered and Highly Visible */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-7xl mt-24 lg:text-8xl font-black mb-6 leading-tight"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #60a5fa 50%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 30px rgba(59, 130, 246, 0.5)',
              filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))'
            }}
          >
            مرحباً بكم في
            <span className="block text-6xl md:text-8xl lg:text-9xl mt-2" style={{
              background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 30px rgba(251, 191, 36, 0.5)',
              filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))'
            }}>
              Autonique
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-white"
            style={{
              textShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.4)',
              filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.2))'
            }}
          >
            خدمات احترافية في الأمن السيبراني
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-12 leading-relaxed max-w-4xl mx-auto"
            style={{
              textShadow: '0 0 15px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 0, 0, 0.6)',
              filter: 'drop-shadow(0 0 5px rgba(255, 255, 255, 0.1))'
            }}
          >
            نُمكِّن أعمالكم من خلال تدابير أمن سيبراني متقدمة. نحن شريك موثوق في الأمن السيبراني مقرنا الإمارات العربية المتحدة. نحمي حدودك الرقمية بكل فخر من خلال حلول وخدمات أمن سيبراني متطورة. ارتقِ باستراتيجيتك الدفاعية اليوم!
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col mb-12 sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 cursor-pointer text-lg font-bold rounded-xl border-3 border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300"
              style={{
                textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
            >
              استشارة مجانية
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(251, 191, 36, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 text-lg cursor-pointer font-bold rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-300 hover:to-orange-400 transition-all duration-300"
              style={{
                textShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
                boxShadow: '0 0 25px rgba(251, 191, 36, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.2)'
              }}
            >
              طلب عرض الأسعار
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.a
          href="#services"
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center text-white hover:text-yellow-300 transition-colors cursor-pointer"
          style={{
            textShadow: '0 0 15px rgba(255, 255, 255, 0.5)'
          }}
        >
          <span className="text-sm font-medium mb-2">تحرك للأسفل</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center"
            style={{
              boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)'
            }}
          >
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroNew;