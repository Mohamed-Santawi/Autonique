import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="page-cover relative h-screen overflow-hidden bg-black">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        {/* Video source will be added when video file is available */}
        {/* <source src="/assets/images/isbannerar.mp4" type="video/mp4" /> */}
      </video>

      {/* Fallback Background */}
      <div
        className="absolute inset-0 z-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black"
        style={{ backgroundColor: "#00000d" }}
      ></div>

      {/* Mobile Circle Animation */}
      <div className="mobile circle_spin hidden md:hidden"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          مرحباً بكم في Autonique
          <span className="text-blue-300 block">
            خدمات احترافية في الأمن السيبراني
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto"
        >
          نُمكِّن أعمالكم من خلال تدابير أمن سيبراني متقدمة. نحن شريك موثوق في
          الأمن السيبراني مقرنا الإمارات العربية المتحدة. نحمي حدودك الرقمية بكل
          فخر من خلال حلول وخدمات أمن سيبراني متطورة. ارتقِ باستراتيجيتك
          الدفاعية اليوم!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn transparent white-font bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
          >
            استشارة مجانية
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors border-2 border-blue-600"
          >
            طلب عرض الأسعار
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Down Button */}
      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="scroll-down absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm font-medium hover:text-blue-300 transition-colors cursor-pointer z-20"
      >
        تحرك للأسفل
      </motion.a>
    </section>
  );
};

export default Hero;
