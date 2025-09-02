// React import removed - not needed with JSX transform
import { motion } from "framer-motion";

const Solutions = () => {
  const solutions = [
    {
      id: 1,
      title: "إدارة الوصول المميز",
      description:
        'أنظمة تحكّم دقيقة في صلاحيات المستخدمين لضمان الحد الأدنى من الامتيازات وفقاً لمبدأ "الأقل ضرورة".',
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
            d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "نظام كشف الاختراقات",
      description:
        "حلول متقدمة لاكتشاف التهديدات الأمنية في الوقت الفعلي لمنع الاختراقات وحماية البنية التحتية الرقمية.",
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "استخبارات التهديدات السيبرانية",
      description:
        "تحليلات استباقية تعتمد على الذكاء الاصطناعي لتوقع الهجمات وتحديد نقاط الضعف.",
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
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "حماية الهوية الرقمية",
      description:
        "تقنيات متطورة لتأمين الهويات الإلكترونية ومنع السرقات أو الاستخدام غير المصرّح به.",
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
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      id: 5,
      title: "حماية العلامة التجارية",
      description:
        "مراقبة مستمرة للإنترنت العميق لمنع انتحال الهوية أو الاستخدام غير المشروع للعلامات التجارية.",
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
            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
          />
        </svg>
      ),
    },
    {
      id: 6,
      title: "أمن البريد الإلكتروني",
      description:
        "حلول شاملة لمكافحة التصيد الاحتيالي، البرمجيات الخبيثة، وهجمات الهندسة الاجتماعية.",
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
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: 7,
      title: "برامج التوعية الأمنية للموظفين",
      description:
        "تدريبات تفاعلية لتعزيز الثقافة الأمنية وبناء خط دفاع بشري فعّال.",
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
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      id: 8,
      title: "حماية البيانات والخصوصية",
      description:
        "حلول متقدمة لتشفير البيانات وحماية الخصوصية وفقاً لأحدث المعايير الدولية.",
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
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="solutions"
      className="py-20 bg-[#011A38]"
      //  className="py-20 bg-[linear-gradient(90deg,#2F66A5_0%,#00ADE5_100%)]"
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
            className="text-4xl md:text-5xl font-bold text-[#01ACE4] mb-6"
            style={{
              textShadow: "0 0 20px rgba(31, 41, 55, 0.1)",
            }}
          >
            حلولنا
          </h2>
          <p
            className="text-xl text-white max-w-3xl mx-auto leading-relaxed"
            style={{
              textShadow: "0 0 10px rgba(75, 85, 99, 0.1)",
            }}
          >
            حلول متكاملة ومتقدمة لحماية أعمالكم في العصر الرقمي
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {solutions.map((solution) => (
            <motion.div
              key={solution.id}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.2)",
              }}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div
                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 text-white"
                style={{
                  boxShadow: "0 4px 20px rgba(59, 130, 246, 0.3)",
                }}
              >
                {solution.icon}
              </div>
              <h3
                className="text-xl font-bold text-gray-800 mb-4"
                style={{
                  textShadow: "0 0 10px rgba(31, 41, 55, 0.1)",
                }}
              >
                {solution.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {solution.description}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 text-blue-600 cursor-pointer hover:text-blue-700 font-semibold transition-colors"
              >
                المزيد...
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;
