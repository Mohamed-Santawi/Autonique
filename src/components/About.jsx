import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const features = [
    {
      id: 1,
      title: "قيادة برؤية استباقية",
      description:
        "نقود صناعة الأمن السيبراني من خلال رؤية مستقبلية واستراتيجيات مبتكرة.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "تأثير ملموس",
      description: "نحقق نتائج قابلة للقياس وتأثير إيجابي على أمن عملائنا.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "نعمل على أرض الواقع",
      description: "نقدم حلول عملية وقابلة للتطبيق في البيئات الحقيقية.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "نصنع غداً أكثر أماناً",
      description: "نساهم في بناء مستقبل رقمي آمن للأجيال القادمة.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
  ];

  const stats = [
    { number: "500+", label: "عميل راضٍ" },
    { number: "99.9%", label: "معدل النجاح" },
    { number: "24/7", label: "دعم متواصل" },
    { number: "50+", label: "خبير متخصص" },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{
              textShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
            }}
          >
            عن شركتنا
          </h2>
          <h3
            className="text-2xl md:text-3xl font-semibold text-blue-200 mb-8"
            style={{
              textShadow: "0 0 15px rgba(59, 130, 246, 0.4)",
            }}
          >
            Autonique الرائدة في تقديم حلول الأمن السيبراني في الإمارات العربية
            المتحدة
          </h3>
          <p
            className="text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed"
            style={{
              textShadow: "0 0 10px rgba(59, 130, 246, 0.3)",
            }}
          >
            نحن شركة إماراتية متخصصة في الأمن السيبراني، نعمل وفق رؤية الإمارات
            2030 لتقديم حلول وخدمات أمنية مُدارة تحمي عمليات مؤسستك الحيوية.
            انضم إلينا، واختبر ضمان شريك أمني يعامل مؤسستك كما لو كانت ملكه.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(251, 191, 36, 0.3)",
              }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-yellow-400/50 transition-all duration-300 text-center"
              style={{
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div
                className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mb-6 text-white mx-auto"
                style={{
                  boxShadow: "0 4px 20px rgba(251, 191, 36, 0.4)",
                }}
              >
                {feature.icon}
              </div>
              <h3
                className="text-xl font-bold text-white mb-4"
                style={{
                  textShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
                }}
              >
                {feature.title}
              </h3>
              <p className="text-slate-200 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div
                className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2"
                style={{
                  textShadow: "0 0 20px rgba(251, 191, 36, 0.5)",
                }}
              >
                {stat.number}
              </div>
              <div
                className="text-slate-200 font-medium"
                style={{
                  textShadow: "0 0 10px rgba(59, 130, 246, 0.3)",
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r cursor-pointer from-yellow-400 to-orange-500 text-black px-10 py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300"
            style={{
              boxShadow: "0 8px 25px rgba(251, 191, 36, 0.4)",
            }}
          >
            المزيد
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
