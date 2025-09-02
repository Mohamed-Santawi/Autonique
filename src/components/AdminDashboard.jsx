import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const AdminDashboard = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [contactInfo, setContactInfo] = useState([
    {
      id: 1,
      type: "phone",
      label: "رقم الهاتف",
      value: "+971 50 123 4567",
      placeholder: "أدخل رقم الهاتف",
    },
    {
      id: 2,
      type: "email",
      label: "البريد الإلكتروني",
      value: "info@autonique.ae",
      placeholder: "أدخل البريد الإلكتروني",
    },
    {
      id: 3,
      type: "address",
      label: "العنوان",
      value: "دبي، الإمارات العربية المتحدة",
      placeholder: "أدخل العنوان",
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
  const [footerData, setFooterData] = useState({
    companyInfo: {
      name: "Autonique",
      description:
        "شريككم الموثوق في الأمن السيبراني. نقدم حلولاً متقدمة ومتكاملة لحماية أعمالكم في العصر الرقمي.",
      copyright: "جميع الحقوق محفوظة.",
    },
    sections: {
      services: {
        title: "الخدمات",
        links: [
          { id: 1, name: "إدارة الهوية والوصول", href: "#" },
          { id: 2, name: "تقنيات التشغيل الصناعية", href: "#" },
          { id: 3, name: "التوعية بالأمن السيبراني", href: "#" },
          { id: 4, name: "مدير أمن معلومات افتراضي", href: "#" },
        ],
      },
      solutions: {
        title: "الحلول",
        links: [
          { id: 1, name: "إدارة الوصول المميز", href: "#" },
          { id: 2, name: "نظام كشف الاختراقات", href: "#" },
          { id: 3, name: "استخبارات التهديدات", href: "#" },
          { id: 4, name: "حماية الهوية الرقمية", href: "#" },
        ],
      },
      company: {
        title: "الشركة",
        links: [
          { id: 1, name: "من نحن", href: "#about" },
          { id: 2, name: "فريق العمل", href: "#" },
        ],
      },
      support: {
        title: "الدعم",
        links: [
          { id: 1, name: "الدعم الفني", href: "#" },
          { id: 2, name: "الأسئلة الشائعة", href: "#" },
          { id: 3, name: "تواصل معنا", href: "#contact" },
          { id: 4, name: "الخصوصية", href: "#" },
        ],
      },
    },
    socialLinks: [
      { id: 1, name: "LinkedIn", href: "#", icon: "linkedin" },
      { id: 2, name: "Twitter", href: "#", icon: "twitter" },
      { id: 3, name: "Facebook", href: "#", icon: "facebook" },
    ],
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    loadContactInfo();
  }, []);

  const loadContactInfo = async () => {
    try {
      // Load contact info
      const contactRef = doc(db, "settings", "contact");
      const contactSnap = await getDoc(contactRef);

      if (contactSnap.exists()) {
        const data = contactSnap.data();
        if (data.contactInfo && Array.isArray(data.contactInfo)) {
          setContactInfo(data.contactInfo);
        }
        if (data.formFields && Array.isArray(data.formFields)) {
          setFormFields(data.formFields);
        }
      }

      // Load footer data
      const footerRef = doc(db, "settings", "footer");
      const footerSnap = await getDoc(footerRef);

      if (footerSnap.exists()) {
        const data = footerSnap.data();
        setFooterData(data);
      }

      // Load working hours
      const hoursRef = doc(db, "settings", "workingHours");
      const hoursSnap = await getDoc(hoursRef);

      if (hoursSnap.exists()) {
        const data = hoursSnap.data();
        if (data.workingHours && Array.isArray(data.workingHours)) {
          setWorkingHours(data.workingHours);
        }
        if (data.showWorkingHours !== undefined) {
          setShowWorkingHours(data.showWorkingHours);
        }
      }
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      setMessage("");

      // Save contact info and form fields
      const contactRef = doc(db, "settings", "contact");
      await updateDoc(contactRef, { contactInfo, formFields });

      // Save footer data
      const footerRef = doc(db, "settings", "footer");
      await setDoc(footerRef, footerData, { merge: true });

      // Save working hours
      const hoursRef = doc(db, "settings", "workingHours");
      await updateDoc(hoursRef, { workingHours, showWorkingHours });

      setMessage("تم حفظ المعلومات بنجاح!");
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      setMessage("حدث خطأ أثناء حفظ المعلومات");
      console.error("Error saving data:", error);
    } finally {
      setSaving(false);
    }
  };

  // Add new contact info item
  const addContactItem = () => {
    const newId = Math.max(...contactInfo.map((item) => item.id)) + 1;
    const newItem = {
      id: newId,
      type: "text",
      label: "عنصر جديد",
      value: "",
      placeholder: "أدخل القيمة",
      icon: "phone", // Default icon
    };
    setContactInfo([...contactInfo, newItem]);
  };

  // Delete contact info item
  const deleteContactItem = (id) => {
    setContactInfo(contactInfo.filter((item) => item.id !== id));
  };

  // Update contact info item
  const updateContactItem = (id, field, value) => {
    setContactInfo(
      contactInfo.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  // Add new working hours item
  const addWorkingHoursItem = () => {
    const newId = Math.max(...workingHours.map((item) => item.id)) + 1;
    const newItem = {
      id: newId,
      label: "يوم جديد",
      value: "",
    };
    setWorkingHours([...workingHours, newItem]);
  };

  // Delete working hours item
  const deleteWorkingHoursItem = (id) => {
    setWorkingHours(workingHours.filter((item) => item.id !== id));
  };

  // Update working hours item
  const updateWorkingHoursItem = (id, field, value) => {
    setWorkingHours(
      workingHours.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  // Add new form field
  const addFormField = () => {
    const newId = Math.max(...formFields.map((item) => item.id)) + 1;
    const newField = {
      id: newId,
      name: `field_${newId}`,
      label: "حقل جديد",
      type: "text",
      required: false,
      placeholder: "أدخل النص التوضيحي",
    };
    setFormFields([...formFields, newField]);
  };

  // Delete form field
  const deleteFormField = (id) => {
    setFormFields(formFields.filter((item) => item.id !== id));
  };

  // Update form field
  const updateFormField = (id, field, value) => {
    setFormFields(
      formFields.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  // Footer management functions
  const updateCompanyInfo = (field, value) => {
    setFooterData((prev) => ({
      ...prev,
      companyInfo: {
        ...prev.companyInfo,
        [field]: value,
      },
    }));
  };

  const updateSectionTitle = (sectionKey, title) => {
    setFooterData((prev) => ({
      ...prev,
      sections: {
        ...prev.sections,
        [sectionKey]: {
          ...prev.sections[sectionKey],
          title,
        },
      },
    }));
  };

  const addSectionLink = (sectionKey) => {
    const section = footerData.sections[sectionKey];
    const newId = Math.max(...section.links.map((link) => link.id)) + 1;
    const newLink = { id: newId, name: "رابط جديد", href: "#" };

    setFooterData((prev) => ({
      ...prev,
      sections: {
        ...prev.sections,
        [sectionKey]: {
          ...prev.sections[sectionKey],
          links: [...section.links, newLink],
        },
      },
    }));
  };

  const deleteSectionLink = (sectionKey, linkId) => {
    setFooterData((prev) => ({
      ...prev,
      sections: {
        ...prev.sections,
        [sectionKey]: {
          ...prev.sections[sectionKey],
          links: prev.sections[sectionKey].links.filter(
            (link) => link.id !== linkId
          ),
        },
      },
    }));
  };

  const updateSectionLink = (sectionKey, linkId, field, value) => {
    setFooterData((prev) => ({
      ...prev,
      sections: {
        ...prev.sections,
        [sectionKey]: {
          ...prev.sections[sectionKey],
          links: prev.sections[sectionKey].links.map((link) =>
            link.id === linkId ? { ...link, [field]: value } : link
          ),
        },
      },
    }));
  };

  const addSocialLink = () => {
    const newId =
      Math.max(...footerData.socialLinks.map((link) => link.id)) + 1;
    const newLink = {
      id: newId,
      name: "منصة جديدة",
      href: "#",
      icon: "linkedin",
    };

    setFooterData((prev) => ({
      ...prev,
      socialLinks: [...prev.socialLinks, newLink],
    }));
  };

  const deleteSocialLink = (linkId) => {
    setFooterData((prev) => ({
      ...prev,
      socialLinks: prev.socialLinks.filter((link) => link.id !== linkId),
    }));
  };

  const updateSocialLink = (linkId, field, value) => {
    setFooterData((prev) => ({
      ...prev,
      socialLinks: prev.socialLinks.map((link) =>
        link.id === linkId ? { ...link, [field]: value } : link
      ),
    }));
  };

  // Function to get icon options
  const getIconOptions = () => [
    { value: "phone", label: "الهاتف", icon: "📞" },
    { value: "email", label: "البريد الإلكتروني", icon: "📧" },
    { value: "location", label: "الموقع", icon: "📍" },
    { value: "clock", label: "الوقت", icon: "🕒" },
    { value: "user", label: "المستخدم", icon: "👤" },
    { value: "building", label: "المبنى", icon: "🏢" },
    { value: "globe", label: "الموقع الإلكتروني", icon: "🌐" },
    { value: "whatsapp", label: "واتساب", icon: "📱" },
    { value: "info", label: "معلومات", icon: "ℹ️" },
  ];

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/admin/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">جاري التحميل...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
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
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r mr-2 from-gray-900 to-blue-600 bg-clip-text text-transparent">
                لوحة تحكم المدير
              </h1>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="text-right">
                <span className="text-gray-600 text-base">مرحباً،</span>
                <p className="text-gray-900 font-medium">
                  {currentUser?.email}
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogout}
                className="bg-gradient-to-r from-red-500 mr-4 cursor-pointer to-red-600 text-white px-6 py-2 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg"
              >
                تسجيل الخروج
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
          >
            <div className="flex items-center space-x-3 space-x-reverse mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
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
              </div>
              <h2 className="text-2xl font-bold text-gray-700 mr-2">
                معلومات التواصل
              </h2>
            </div>

            {message && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`mb-6 p-4 rounded-lg ${
                  message.includes("نجح")
                    ? "bg-green-50 border border-green-200 text-green-700"
                    : "bg-red-50 border border-red-200 text-red-700"
                }`}
              >
                {message}
              </motion.div>
            )}

            <div className="space-y-6">
              {/* Dynamic Contact Items */}
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative border border-gray-200 rounded-lg p-4 bg-gray-50"
                >
                  <div className="flex items-center justify-between mb-3">
                    <input
                      type="text"
                      value={item.label}
                      onChange={(e) =>
                        updateContactItem(item.id, "label", e.target.value)
                      }
                      className="text-sm font-medium text-gray-700 bg-transparent border-none focus:outline-none"
                      placeholder="اسم الحقل"
                    />
                    {contactInfo.length > 1 && (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => deleteContactItem(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </motion.button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">
                        نوع الحقل
                      </label>
                      <select
                        value={item.type}
                        onChange={(e) =>
                          updateContactItem(item.id, "type", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      >
                        <option value="text">نص</option>
                        <option value="email">بريد إلكتروني</option>
                        <option value="tel">هاتف</option>
                        <option value="address">عنوان</option>
                        <option value="url">رابط</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-600 mb-1">
                        الأيقونة
                      </label>
                      <select
                        value={item.icon || "phone"}
                        onChange={(e) =>
                          updateContactItem(item.id, "icon", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      >
                        {getIconOptions().map((iconOption) => (
                          <option
                            key={iconOption.value}
                            value={iconOption.value}
                          >
                            {iconOption.icon} {iconOption.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {item.type === "address" ? (
                    <textarea
                      value={item.value}
                      onChange={(e) =>
                        updateContactItem(item.id, "value", e.target.value)
                      }
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
                      placeholder={item.placeholder}
                    />
                  ) : (
                    <input
                      type={item.type}
                      value={item.value}
                      onChange={(e) =>
                        updateContactItem(item.id, "value", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder={item.placeholder}
                    />
                  )}
                </motion.div>
              ))}

              {/* Add New Contact Item Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={addContactItem}
                className="w-full border-2 border-dashed border-blue-300 text-blue-600 py-3 px-4 rounded-lg hover:border-blue-500 hover:text-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <span>إضافة عنصر تواصل جديد</span>
              </motion.button>

              {/* Save Button */}
              <div className="flex justify-center pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSave}
                  disabled={saving}
                  className="bg-gradient-to-r cursor-pointer from-blue-600 to-blue-700 text-white py-3 px-8 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  {saving ? "جاري الحفظ..." : "حفظ التغييرات"}
                </motion.button>
              </div>
            </div>

            {/* Preview Section */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                معاينة المعلومات
              </h3>
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 space-y-4 border border-gray-100">
                {contactInfo.map((item) => {
                  const iconOption = getIconOptions().find(
                    (opt) => opt.value === (item.icon || "phone")
                  );
                  return (
                    <div
                      key={item.id}
                      className="flex items-start space-x-3 space-x-reverse"
                    >
                      <div className="w-8 h-8 ml-3 bg-blue-100 rounded-lg flex items-center justify-center mt-1">
                        <span className="text-lg">
                          {iconOption?.icon || "📞"}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600 text-sm">
                          {item.label}
                        </span>
                        <p className="text-gray-900 font-medium">
                          {item.value || "لم يتم تحديده بعد"}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Working Hours */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
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
                </div>
                <h2 className="text-2xl font-bold text-gray-700 mr-2">
                  ساعات العمل
                </h2>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <span className="text-base text-gray-700 ml-8 font-medium">
                  إظهار القسم
                </span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowWorkingHours(!showWorkingHours)}
                  className={`relative cursor-pointer inline-flex h-7 w-14 items-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-md ${
                    showWorkingHours
                      ? "bg-gradient-to-r from-green-500 to-green-600 shadow-green-200"
                      : "bg-gradient-to-r from-gray-300 to-gray-400 shadow-gray-200"
                  }`}
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-lg transition-all duration-300 ${
                      showWorkingHours ? "-translate-x-2" : "-translate-x-8"
                    }`}
                  />
                  <div className="absolute inset-0 flex items-center justify-between px-1.5">
                    <svg
                      className={`w-3 h-3 transition-opacity duration-300 ${
                        showWorkingHours ? "opacity-0" : "opacity-100"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      className={`w-3 h-3 transition-opacity duration-300 ${
                        showWorkingHours ? "opacity-100" : "opacity-0"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </motion.button>
              </div>
            </div>

            {showWorkingHours && (
              <>
                <div className="space-y-6">
                  {/* Dynamic Working Hours Items */}
                  {workingHours.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative border border-gray-200 rounded-lg p-4 bg-gray-50"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <input
                          type="text"
                          value={item.label}
                          onChange={(e) =>
                            updateWorkingHoursItem(
                              item.id,
                              "label",
                              e.target.value
                            )
                          }
                          className="text-sm font-medium text-gray-700 bg-transparent border-none focus:outline-none"
                          placeholder="اسم اليوم أو الفترة"
                        />
                        {workingHours.length > 1 && (
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => deleteWorkingHoursItem(item.id)}
                            className="text-red-500 hover:text-red-700 transition-colors"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </motion.button>
                        )}
                      </div>
                      <input
                        type="text"
                        value={item.value}
                        onChange={(e) =>
                          updateWorkingHoursItem(
                            item.id,
                            "value",
                            e.target.value
                          )
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        placeholder="مثال: 8:00 ص - 6:00 م"
                      />
                    </motion.div>
                  ))}

                  {/* Add New Working Hours Item Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={addWorkingHoursItem}
                    className="w-full border-2 border-dashed border-green-300 text-green-600 py-3 px-4 rounded-lg hover:border-green-500 hover:text-green-700 transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    <span>إضافة فترة عمل جديدة</span>
                  </motion.button>
                </div>

                {/* Preview Section */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">
                    معاينة ساعات العمل
                  </h3>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 space-y-4 border border-green-100">
                    {workingHours.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center space-x-3 space-x-reverse"
                      >
                        <div className="w-8 h-8 ml-3 bg-green-100 rounded-lg flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-green-600"
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
                        </div>
                        <div>
                          <span className="text-gray-600 text-sm">
                            {item.label}
                          </span>
                          <p className="text-gray-900 font-medium">
                            {item.value || "لم يتم تحديده بعد"}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Save Button - Always visible */}
            <div className="flex justify-center pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSave}
                disabled={saving}
                className="bg-gradient-to-r cursor-pointer from-green-600 to-green-700 text-white py-3 px-8 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                {saving ? "جاري الحفظ..." : "حفظ ساعات العمل"}
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Form Fields Management */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
        >
          <div className="flex items-center space-x-3 space-x-reverse mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-700 mr-2">
              إدارة حقول النموذج
            </h2>
          </div>

          <div className="space-y-6">
            {/* Dynamic Form Fields */}
            {formFields.map((field, index) => (
              <motion.div
                key={field.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative border border-gray-200 rounded-lg p-4 bg-gray-50"
              >
                <div className="flex items-center justify-between mb-3">
                  <input
                    type="text"
                    value={field.label}
                    onChange={(e) =>
                      updateFormField(field.id, "label", e.target.value)
                    }
                    className="text-sm font-medium text-gray-700 bg-transparent border-none focus:outline-none"
                    placeholder="اسم الحقل"
                  />
                  {formFields.length > 1 && (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => deleteFormField(field.id)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </motion.button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">
                      نوع الحقل
                    </label>
                    <select
                      value={field.type}
                      onChange={(e) =>
                        updateFormField(field.id, "type", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                    >
                      <option value="text">نص</option>
                      <option value="email">بريد إلكتروني</option>
                      <option value="tel">هاتف</option>
                      <option value="textarea">نص طويل</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-600 mb-1">
                      النص التوضيحي
                    </label>
                    <input
                      type="text"
                      value={field.placeholder}
                      onChange={(e) =>
                        updateFormField(field.id, "placeholder", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                      placeholder="النص التوضيحي"
                    />
                  </div>

                  <div className="flex items-center">
                    <label className="flex items-center space-x-2 space-x-reverse">
                      <input
                        type="checkbox"
                        checked={field.required}
                        onChange={(e) =>
                          updateFormField(
                            field.id,
                            "required",
                            e.target.checked
                          )
                        }
                        className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                      />
                      <span className="text-sm text-gray-700">مطلوب</span>
                    </label>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Add New Form Field Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={addFormField}
              className="w-full border-2 border-dashed border-purple-300 text-purple-600 py-3 px-4 rounded-lg hover:border-purple-500 hover:text-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <span>إضافة حقل جديد</span>
            </motion.button>

            {/* Save Button */}
            <div className="flex justify-center pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSave}
                disabled={saving}
                className="bg-gradient-to-r cursor-pointer from-purple-600 to-purple-700 text-white py-3 px-8 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                {saving ? "جاري الحفظ..." : "حفظ حقول النموذج"}
              </motion.button>
            </div>
          </div>

          {/* Preview Section */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              معاينة النموذج
            </h3>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 space-y-4 border border-purple-100">
              {formFields.map((field) => (
                <div key={field.id} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    {field.label}{" "}
                    {field.required && <span className="text-red-500">*</span>}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm resize-none"
                      placeholder={field.placeholder}
                      disabled
                    />
                  ) : (
                    <input
                      type={field.type}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm"
                      placeholder={field.placeholder}
                      disabled
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Footer Management */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
        >
          <div className="flex items-center space-x-3 space-x-reverse mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
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
            </div>
            <h2 className="text-2xl font-bold text-gray-700 mr-2">
              إدارة الفوتر
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                معلومات الشركة
              </h3>

              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  اسم الشركة
                </label>
                <input
                  type="text"
                  value={footerData.companyInfo?.name || ""}
                  onChange={(e) => updateCompanyInfo("name", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="اسم الشركة"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  وصف الشركة
                </label>
                <textarea
                  value={footerData.companyInfo?.description || ""}
                  onChange={(e) =>
                    updateCompanyInfo("description", e.target.value)
                  }
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="وصف الشركة"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  نص حقوق النشر
                </label>
                <input
                  type="text"
                  value={footerData.companyInfo?.copyright || ""}
                  onChange={(e) =>
                    updateCompanyInfo("copyright", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="جميع الحقوق محفوظة."
                />
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-700">
                  روابط التواصل الاجتماعي
                </h3>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={addSocialLink}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
                >
                  إضافة منصة
                </motion.button>
              </div>

              <div className="space-y-4">
                {footerData.socialLinks?.map((link, index) => (
                  <motion.div
                    key={link.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative border border-gray-200 rounded-lg p-4 bg-gray-50"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <input
                        type="text"
                        value={link.name}
                        onChange={(e) =>
                          updateSocialLink(link.id, "name", e.target.value)
                        }
                        className="text-sm font-medium text-gray-700 bg-transparent border-none focus:outline-none"
                        placeholder="اسم المنصة"
                      />
                      {footerData.socialLinks.length > 1 && (
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => deleteSocialLink(link.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </motion.button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">
                          الرابط
                        </label>
                        <input
                          type="url"
                          value={link.href}
                          onChange={(e) =>
                            updateSocialLink(link.id, "href", e.target.value)
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                          placeholder="https://"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-gray-600 mb-1">
                          الأيقونة
                        </label>
                        <select
                          value={link.icon}
                          onChange={(e) =>
                            updateSocialLink(link.id, "icon", e.target.value)
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                        >
                          <option value="linkedin">LinkedIn</option>
                          <option value="twitter">Twitter</option>
                          <option value="facebook">Facebook</option>
                          <option value="instagram">Instagram</option>
                          <option value="youtube">YouTube</option>
                        </select>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700 mb-6">
              أقسام الفوتر
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(footerData.sections || {}).map(
                ([sectionKey, section]) => (
                  <motion.div
                    key={sectionKey}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border border-gray-200 rounded-lg p-6 bg-gray-50"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <input
                        type="text"
                        value={section.title}
                        onChange={(e) =>
                          updateSectionTitle(sectionKey, e.target.value)
                        }
                        className="text-lg font-semibold text-gray-700 bg-transparent border-none focus:outline-none"
                        placeholder="عنوان القسم"
                      />
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => addSectionLink(sectionKey)}
                        className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded text-sm font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
                      >
                        إضافة رابط
                      </motion.button>
                    </div>

                    <div className="space-y-3">
                      {section.links?.map((link, index) => (
                        <motion.div
                          key={link.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-3 space-x-reverse"
                        >
                          <input
                            type="text"
                            value={link.name}
                            onChange={(e) =>
                              updateSectionLink(
                                sectionKey,
                                link.id,
                                "name",
                                e.target.value
                              )
                            }
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                            placeholder="اسم الرابط"
                          />
                          <input
                            type="text"
                            value={link.href}
                            onChange={(e) =>
                              updateSectionLink(
                                sectionKey,
                                link.id,
                                "href",
                                e.target.value
                              )
                            }
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                            placeholder="#"
                          />
                          {section.links.length > 1 && (
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() =>
                                deleteSectionLink(sectionKey, link.id)
                              }
                              className="text-red-500 hover:text-red-700 transition-colors"
                            >
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                            </motion.button>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-center pt-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSave}
              disabled={saving}
              className="bg-gradient-to-r cursor-pointer from-orange-600 to-orange-700 text-white py-3 px-8 rounded-lg font-semibold hover:from-orange-700 hover:to-orange-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {saving ? "جاري الحفظ..." : "حفظ الفوتر"}
            </motion.button>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default AdminDashboard;
