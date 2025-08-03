import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-900 via-pink-900 to-purple-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{
            textShadow: '0 0 20px rgba(168, 85, 247, 0.5)'
          }}>
            تواصل معنا
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed" style={{
            textShadow: '0 0 10px rgba(168, 85, 247, 0.3)'
          }}>
            احصل على استشارة مجانية من خبراء الأمن السيبراني في Autonique
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            style={{
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}
          >
            <h3 className="text-2xl font-bold text-white mb-6" style={{
              textShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
            }}>
              أرسل لنا رسالة
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-purple-100 font-medium mb-2">الاسم الكامل</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-purple-200 focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>
                <div>
                  <label className="block text-purple-100 font-medium mb-2">البريد الإلكتروني</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-purple-200 focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                </div>
              </div>
              <div>
                <label className="block text-purple-100 font-medium mb-2">رقم الهاتف</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-purple-200 focus:outline-none focus:border-yellow-400 transition-colors"
                  placeholder="أدخل رقم هاتفك"
                />
              </div>
              <div>
                <label className="block text-purple-100 font-medium mb-2">الخدمة المطلوبة</label>
                <select className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:border-yellow-400 transition-colors">
                  <option value="" className="text-purple-900">اختر الخدمة</option>
                  <option value="consultation" className="text-purple-900">استشارة أمنية</option>
                  <option value="audit" className="text-purple-900">تدقيق أمني</option>
                  <option value="training" className="text-purple-900">تدريب موظفين</option>
                  <option value="incident" className="text-purple-900">استجابة للحوادث</option>
                </select>
              </div>
              <div>
                <label className="block text-purple-100 font-medium mb-2">الرسالة</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-purple-200 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                  placeholder="اكتب رسالتك هنا..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full cursor-pointer bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-3 rounded-lg font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300"
                style={{
                  boxShadow: '0 4px 20px rgba(251, 191, 36, 0.4)'
                }}
              >
                إرسال الرسالة
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20" style={{
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}>
              <h3 className="text-2xl font-bold text-white mb-6" style={{
                textShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
              }}>
                معلومات التواصل
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center" style={{
                    boxShadow: '0 4px 15px rgba(251, 191, 36, 0.4)'
                  }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-purple-100 font-medium mr-4">الهاتف</p>
                    <p className="text-white text-lg font-semibold mr-4">+971 50 123 4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center" style={{
                    boxShadow: '0 4px 15px rgba(251, 191, 36, 0.4)'
                  }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-purple-100 font-medium mr-4">البريد الإلكتروني</p>
                    <p className="text-white text-lg font-semibold mr-4">info@autonique.ae</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center" style={{
                    boxShadow: '0 4px 15px rgba(251, 191, 36, 0.4)'
                  }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-purple-100 font-medium mr-4">العنوان</p>
                    <p className="text-white text-lg font-semibold mr-4">دبي، الإمارات العربية المتحدة</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20" style={{
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}>
              <h3 className="text-2xl font-bold text-white mb-6" style={{
                textShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
              }}>
                ساعات العمل
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-purple-100">الأحد - الخميس</span>
                  <span className="text-white font-semibold">8:00 ص - 6:00 م</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-100">الجمعة</span>
                  <span className="text-white font-semibold">9:00 ص - 2:00 م</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-100">السبت</span>
                  <span className="text-white font-semibold">مغلق</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
