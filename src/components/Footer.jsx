import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <h3
              className="text-2xl font-bold text-white mb-6"
              style={{
                textShadow: "0 0 15px rgba(251, 191, 36, 0.5)",
              }}
            >
              Autonique
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              شريكك الموثوق في الأمن السيبراني في الإمارات العربية المتحدة. نحن
              نحمي حدودك الرقمية بكل فخر.
            </p>
            <div className="space-y-3">
              <p className="text-gray-300">
                <span className="text-yellow-400 font-semibold">العنوان:</span>{" "}
                دبي، الإمارات العربية المتحدة
              </p>
              <p className="text-gray-300">
                <span className="text-yellow-400 font-semibold">الهاتف:</span>{" "}
                +971 50 123 4567
              </p>
              <p className="text-gray-300">
                <span className="text-yellow-400 font-semibold">
                  البريد الإلكتروني:
                </span>{" "}
                info@autonique.ae
              </p>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4
              className="text-xl font-bold text-white mb-6"
              style={{
                textShadow: "0 0 10px rgba(251, 191, 36, 0.3)",
              }}
            >
              الخدمات
            </h4>
            <ul className="space-y-3">
              <li>
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  الحوكمة وإدارة المخاطر والامتثال
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  إدارة الهوية والصلاحيات
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  تقنيات التشغيل الصناعية (OT/ICS)
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  برنامج المرونة السيبرانية
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  برنامج التوعية والتدريب السيبراني
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  حلول متكاملة للشركات الصغيرة والمتوسطة
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4
              className="text-xl font-bold text-white mb-6"
              style={{
                textShadow: "0 0 10px rgba(251, 191, 36, 0.3)",
              }}
            >
              روابط سريعة
            </h4>
            <ul className="space-y-3">
              <li>
                <motion.a
                  href="#about"
                  whileHover={{ x: 5 }}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  من نحن؟
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#services"
                  whileHover={{ x: 5 }}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  الخدمات
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#solutions"
                  whileHover={{ x: 5 }}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  الحلول
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  مدونتنا
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#contact"
                  whileHover={{ x: 5 }}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  اتصل بنا
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  سياسة الخصوصية
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h4
              className="text-xl font-bold text-white mb-6"
              style={{
                textShadow: "0 0 10px rgba(251, 191, 36, 0.3)",
              }}
            >
              تواصل معنا
            </h4>
            <div className="space-y-4">
              <p className="text-gray-300">
                احصل على استشارة مجانية من خبراء الأمن السيبراني
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r cursor-pointer from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300"
                style={{
                  boxShadow: "0 4px 15px rgba(251, 191, 36, 0.4)",
                }}
              >
                احصل على استشارة
              </motion.button>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h5 className="text-lg font-semibold text-white mb-4">تابعنا</h5>
              <div className="flex space-x-4 space-x-reverse">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-gradient-to-br cursor-pointer from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center text-black hover:from-yellow-300 hover:to-orange-400 transition-all duration-300"
                  style={{
                    boxShadow: "0 4px 15px rgba(251, 191, 36, 0.4)",
                  }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 ml-3 bg-gradient-to-br cursor-pointer from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center text-black hover:from-yellow-300 hover:to-orange-400 transition-all duration-300"
                  style={{
                    boxShadow: "0 4px 15px rgba(251, 191, 36, 0.4)",
                  }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-gradient-to-br cursor-pointer from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center text-black hover:from-yellow-300 hover:to-orange-400 transition-all duration-300"
                  style={{
                    boxShadow: "0 4px 15px rgba(251, 191, 36, 0.4)",
                  }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.675 0h-21.35C.595 0 0 .594 0 1.326v21.348C0 23.405.595 24 1.326 24h11.495v-9.294H9.69v-3.622h3.13V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.798.143v3.24l-1.92.001c-1.505 0-1.796.716-1.796 1.764v2.312h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.595 1.324-1.326V1.326C24 .594 23.405 0 22.675 0z" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-gray-700 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400">
            جميع الحقوق محفوظة © {new Date().getFullYear()} لشركة Autonique.
            جميع الحقوق محفوظة.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
