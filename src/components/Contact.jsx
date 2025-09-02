import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";

const Contact = () => {
  const [contactInfo, setContactInfo] = useState([
    {
      title: "الهاتف",
      value: "+971 50 123 4567",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
    },
    {
      title: "البريد الإلكتروني",
      value: "info@autonique.ae",
      icon: (
        <svg
          className="w-6 h-6"
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
      title: "العنوان",
      value: "دبي، الإمارات العربية المتحدة",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
  ]);

  const [workingHours, setWorkingHours] = useState([
    { id: 1, label: "الأحد - الخميس", value: "8:00 ص - 6:00 م" },
    { id: 2, label: "الجمعة", value: "9:00 ص - 1:00 م" },
    { id: 3, label: "السبت", value: "مغلق" },
    { id: 4, label: "الدعم الفني", value: "متاح على مدار 24/7" },
  ]);
  const [showWorkingHours, setShowWorkingHours] = useState(true);
  const [formFields, setFormFields] = useState([
    {
      id: 1,
      name: "firstName",
      label: "الاسم الأول",
      type: "text",
      required: true,
      placeholder: "أدخل اسمك الأول",
    },
    {
      id: 2,
      name: "lastName",
      label: "اسم العائلة",
      type: "text",
      required: true,
      placeholder: "أدخل اسم العائلة",
    },
    {
      id: 3,
      name: "email",
      label: "البريد الإلكتروني",
      type: "email",
      required: true,
      placeholder: "أدخل بريدك الإلكتروني",
    },
    {
      id: 4,
      name: "phone",
      label: "رقم الهاتف",
      type: "tel",
      required: true,
      placeholder: "أدخل رقم هاتفك",
    },
    {
      id: 5,
      name: "company",
      label: "الشركة",
      type: "text",
      required: false,
      placeholder: "أدخل اسم شركتك",
    },
    {
      id: 6,
      name: "message",
      label: "الرسالة",
      type: "textarea",
      required: true,
      placeholder: "أخبرنا كيف يمكننا مساعدتك",
    },
  ]);
  const [formData, setFormData] = useState({});
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [emailOptions, setEmailOptions] = useState([]);

  useEffect(() => {
    // Set up real-time listeners for both contact info and working hours
    const unsubscribeContact = onSnapshot(
      doc(db, "settings", "contact"),
      (doc) => {
        if (doc.exists()) {
          const data = doc.data();
          if (data.contactInfo && Array.isArray(data.contactInfo)) {
            // Map the new array structure to the existing display format
            const mappedContactInfo = data.contactInfo.map((item) => {
              // Function to get icon based on icon type
              const getIconByType = (iconType) => {
                switch (iconType) {
                  case "phone":
                    return (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    );
                  case "email":
                    return (
                      <svg
                        className="w-6 h-6"
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
                    );
                  case "location":
                    return (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    );
                  case "clock":
                    return (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    );
                  case "user":
                    return (
                      <svg
                        className="w-6 h-6"
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
                    );
                  case "building":
                    return (
                      <svg
                        className="w-6 h-6"
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
                    );
                  case "globe":
                    return (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    );
                  case "whatsapp":
                    return (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    );
                  case "info":
                    return (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    );
                  default:
                    return (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    );
                }
              };

              return {
                title: item.label,
                value: item.value,
                icon: getIconByType(item.icon || "phone"),
              };
            });
            setContactInfo(mappedContactInfo);
          } else {
            // Fallback for old data structure
            setContactInfo((prevContactInfo) => [
              {
                title: "الهاتف",
                value: data.phone || "+971 50 123 4567",
                icon: prevContactInfo[0]?.icon || "phone",
              },
              {
                title: "البريد الإلكتروني",
                value: data.email || "info@autonique.ae",
                icon: prevContactInfo[1]?.icon || "email",
              },
              {
                title: "العنوان",
                value: data.address || "دبي، الإمارات العربية المتحدة",
                icon: prevContactInfo[2]?.icon || "location",
              },
            ]);
          }

          // Load form fields
          if (data.formFields && Array.isArray(data.formFields)) {
            setFormFields(data.formFields);
            // Initialize formData with empty values for new fields
            const initialFormData = {};
            data.formFields.forEach((field) => {
              initialFormData[field.name] = "";
            });
            setFormData(initialFormData);
          }
        }
      },
      (error) => {
        console.error("Error listening to contact info:", error);
      }
    );

    const unsubscribeHours = onSnapshot(
      doc(db, "settings", "workingHours"),
      (doc) => {
        if (doc.exists()) {
          const data = doc.data();
          if (data.workingHours && Array.isArray(data.workingHours)) {
            setWorkingHours(data.workingHours);
          } else {
            // Fallback for old data structure
            setWorkingHours([
              {
                id: 1,
                label: "الأحد - الخميس",
                value: data.sundayThursday || "8:00 ص - 6:00 م",
              },
              {
                id: 2,
                label: "الجمعة",
                value: data.friday || "9:00 ص - 1:00 م",
              },
              { id: 3, label: "السبت", value: data.saturday || "مغلق" },
              {
                id: 4,
                label: "الدعم الفني",
                value: data.support || "الدعم الفني متاح على مدار 24/7",
              },
            ]);
          }
          if (data.showWorkingHours !== undefined) {
            setShowWorkingHours(data.showWorkingHours);
          }
        }
      },
      (error) => {
        console.error("Error listening to working hours:", error);
      }
    );

    // Cleanup listeners on component unmount
    return () => {
      unsubscribeContact();
      unsubscribeHours();
    };
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ type: "loading", message: "جاري إرسال الرسالة..." });

    try {
      // Create mailto link with form data
      const firstName = formData.firstName || formData.first_name || "";
      const lastName = formData.lastName || formData.last_name || "";

      const subject = `رسالة جديدة من ${firstName} ${lastName}`;

      // Build dynamic body based on form fields
      let body = "";
      formFields.forEach((field) => {
        const value = formData[field.name] || "";
        if (value) {
          body += `${field.label}: ${value}\n`;
        }
      });

      // Create email options
      const emailOptions = [
        {
          name: "Gmail",
          url: `https://mail.google.com/mail/?view=cm&fs=1&to=Info@Autoniqueit.com&su=${encodeURIComponent(
            subject
          )}&body=${encodeURIComponent(body)}`,
          icon: "📧",
        },
        {
          name: "Outlook",
          url: `https://outlook.live.com/mail/0/deeplink/compose?to=Info@Autoniqueit.com&subject=${encodeURIComponent(
            subject
          )}&body=${encodeURIComponent(body)}`,
          icon: "📧",
        },
        {
          name: "Yahoo Mail",
          url: `https://compose.mail.yahoo.com/?to=Info@Autoniqueit.com&subject=${encodeURIComponent(
            subject
          )}&body=${encodeURIComponent(body)}`,
          icon: "📧",
        },
        {
          name: "Default Email Client",
          url: `mailto:Info@Autoniqueit.com?subject=${encodeURIComponent(
            subject
          )}&body=${encodeURIComponent(body)}`,
          icon: "💻",
        },
      ];

      // Show email options modal
      setEmailOptions(emailOptions);
      setShowEmailModal(true);
      setFormStatus({ type: "", message: "" });
    } catch (error) {
      setFormStatus({ type: "error", message: "حدث خطأ أثناء إرسال الرسالة" });
    }
  };

  const handleEmailClientSelect = (emailUrl) => {
    window.open(emailUrl, "_blank");
    setShowEmailModal(false);
    setEmailOptions([]);

    setFormStatus({
      type: "success",
      message: "تم فتح بريدك الإلكتروني بنجاح!",
    });

    // Reset form
    const resetFormData = {};
    formFields.forEach((field) => {
      resetFormData[field.name] = "";
    });
    setFormData(resetFormData);

    // Clear success message after 3 seconds
    setTimeout(() => {
      setFormStatus({ type: "", message: "" });
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-100 via-white to-gray-50"
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
            تواصل معنا
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            style={{
              textShadow: "0 0 10px rgba(75, 85, 99, 0.1)",
            }}
          >
            نحن هنا لمساعدتك في حماية أعمالك الرقمية
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
          >
            <h3
              className="text-2xl font-bold text-gray-800 mb-6"
              style={{
                textShadow: "0 0 15px rgba(31, 41, 55, 0.1)",
              }}
            >
              أرسل لنا رسالة
            </h3>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              {formStatus.message && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`p-4 rounded-lg ${
                    formStatus.type === "success"
                      ? "bg-green-50 border border-green-200 text-green-700"
                      : formStatus.type === "error"
                      ? "bg-red-50 border border-red-200 text-red-700"
                      : "bg-blue-50 border border-blue-200 text-blue-700"
                  }`}
                >
                  {formStatus.message}
                </motion.div>
              )}

              {formFields.map((field, index) => {
                // Check if this field should be in a grid (first two fields)
                const isInGrid = index < 2;

                return (
                  <div
                    key={field.id}
                    className={
                      isInGrid ? "grid grid-cols-1 md:grid-cols-2 gap-6" : ""
                    }
                  >
                    <div className={isInGrid ? "" : "w-full"}>
                      <label
                        htmlFor={field.name}
                        className="block text-gray-700 font-medium mb-2"
                      >
                        {field.label}{" "}
                        {field.required && (
                          <span className="text-red-500">*</span>
                        )}
                      </label>
                      {field.type === "textarea" ? (
                        <textarea
                          id={field.name}
                          name={field.name}
                          value={formData[field.name] || ""}
                          onChange={handleFormChange}
                          required={field.required}
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                          placeholder={field.placeholder}
                        />
                      ) : (
                        <input
                          id={field.name}
                          type={field.type}
                          name={field.name}
                          value={formData[field.name] || ""}
                          onChange={handleFormChange}
                          required={field.required}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder={field.placeholder}
                        />
                      )}
                    </div>
                  </div>
                );
              })}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={formStatus.type === "loading"}
                className="w-full bg-gradient-to-r cursor-pointer from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  boxShadow: "0 4px 20px rgba(59, 130, 246, 0.3)",
                }}
              >
                {formStatus.type === "loading"
                  ? "جاري الإرسال..."
                  : "إرسال الرسالة"}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3
                className="text-2xl font-bold text-gray-800 mb-6"
                style={{
                  textShadow: "0 0 15px rgba(31, 41, 55, 0.1)",
                }}
              >
                معلومات التواصل
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                نحن متاحون على مدار الساعة للإجابة على استفساراتكم وتقديم الدعم
                الفني المطلوب.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.1)",
                  }}
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div
                      className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white"
                      style={{
                        boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)",
                      }}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mr-3 text-gray-800 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-gray-600 mr-3">{info.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {showWorkingHours && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200"
              >
                <h4 className="text-xl font-bold text-gray-800 mb-4">
                  ساعات العمل
                </h4>
                <div className="space-y-2 text-gray-600">
                  {workingHours.map((item, index) => (
                    <p
                      key={item.id || index}
                      className={
                        item.label.includes("الدعم")
                          ? "text-blue-600 font-semibold mt-4"
                          : ""
                      }
                    >
                      {item.label}: {item.value}
                    </p>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Email Client Selection Modal */}
      {showEmailModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowEmailModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                اختر بريدك الإلكتروني
              </h3>
              <p className="text-gray-600">
                اختر منصة البريد الإلكتروني التي تريد استخدامها
              </p>
            </div>

            <div className="space-y-3">
              {emailOptions.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleEmailClientSelect(option.url)}
                  className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <span className="text-2xl">{option.icon}</span>
                    <span className="font-medium text-gray-800">
                      {option.name}
                    </span>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.button>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowEmailModal(false)}
                className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-300"
              >
                إلغاء
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Contact;
