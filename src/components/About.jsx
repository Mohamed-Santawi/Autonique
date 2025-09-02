// React import removed - not needed with JSX transform
import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { number: "500+", label: "عميل راضٍ" },
    { number: "50+", label: "خبير متخصص" },
    { number: "24/7", label: "دعم فني" },
    { number: "99.9%", label: "معدل نجاح" },
  ];

  const features = [
    {
      title: "خبرة 15+ سنة",
      description:
        "خبرة واسعة في مجال الأمن السيبراني مع فريق من الخبراء المتخصصين",
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "حلول مخصصة",
      description: "نصمم حلولاً مخصصة تناسب احتياجات عملكم الخاصة",
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
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: "دعم فني متواصل",
      description: "فريق دعم فني متاح على مدار الساعة لحل أي مشكلة تواجهكم",
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
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100"
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
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            style={{
              textShadow: "0 0 20px rgba(31, 41, 55, 0.1)",
            }}
          >
            من نحن؟
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            style={{
              textShadow: "0 0 10px rgba(75, 85, 99, 0.1)",
            }}
          >
            شركة رائدة في مجال الأمن السيبراني مقرها الإمارات العربية المتحدة
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3
              className="text-3xl font-bold text-gray-800 mb-6"
              style={{
                textShadow: "0 0 15px rgba(31, 41, 55, 0.1)",
              }}
            >
              شريككم الموثوق في الأمن السيبراني
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              نحن في Autonique نفخر بتقديم حلول أمن سيبراني متقدمة ومتكاملة
              لحماية أعمالكم في العصر الرقمي. مع فريق من الخبراء المتخصصين وأحدث
              التقنيات، نضمن لكم حماية شاملة لأصولكم الرقمية.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              نؤمن بأن الأمن السيبراني ليس مجرد خدمة، بل هو شراكة طويلة الأمد
              لضمان نمو أعمالكم في بيئة رقمية آمنة.
            </p>

            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg"
              style={{
                boxShadow: "0 4px 20px rgba(59, 130, 246, 0.3)",
              }}
            >
              اعرف المزيد عنا
            </motion.button> */}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div
                  className="text-3xl font-bold text-blue-600 mb-2"
                  style={{
                    textShadow: "0 0 10px rgba(59, 130, 246, 0.2)",
                  }}
                >
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.2)",
              }}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div
                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 text-white"
                style={{
                  boxShadow: "0 4px 20px rgba(59, 130, 246, 0.3)",
                }}
              >
                {feature.icon}
              </div>
              <h3
                className="text-xl font-bold text-gray-800 mb-4"
                style={{
                  textShadow: "0 0 10px rgba(31, 41, 55, 0.1)",
                }}
              >
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
