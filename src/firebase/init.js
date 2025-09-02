import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "./config";

// Initialize Firebase with admin user and contact data
export const initializeFirebase = async () => {
  try {
    // Initialize contact information in Firestore (this will work even without authentication)
    const contactData = {
      contactInfo: [
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
      ],
    };

    try {
      // Check if contact document exists before creating
      const contactDoc = await getDoc(doc(db, "settings", "contact"));
      if (!contactDoc.exists()) {
        await setDoc(doc(db, "settings", "contact"), contactData);
        console.log("Contact information initialized successfully");
      } else {
        console.log("Contact information already exists, skipping initialization");
      }
    } catch (error) {
      console.log(
        "Error checking/creating contact info:",
        error.message
      );
    }

    // Initialize working hours
    const workingHoursData = {
      workingHours: [
        { id: 1, label: "الأحد - الخميس", value: "8:00 ص - 6:00 م" },
        { id: 2, label: "الجمعة", value: "9:00 ص - 1:00 م" },
        { id: 3, label: "السبت", value: "مغلق" },
        { id: 4, label: "الدعم الفني", value: "متاح على مدار 24/7" },
      ],
    };

    try {
      // Check if working hours document exists before creating
      const hoursDoc = await getDoc(doc(db, "settings", "workingHours"));
      if (!hoursDoc.exists()) {
        await setDoc(doc(db, "settings", "workingHours"), workingHoursData);
        console.log("Working hours initialized successfully");
      } else {
        console.log("Working hours already exists, skipping initialization");
      }
    } catch (error) {
      console.log(
        "Error checking/creating working hours:",
        error.message
      );
    }

    // Initialize footer data
    const footerData = {
      companyInfo: {
        name: "Autonique",
        description: "شريككم الموثوق في الأمن السيبراني. نقدم حلولاً متقدمة ومتكاملة لحماية أعمالكم في العصر الرقمي.",
        copyright: "جميع الحقوق محفوظة."
      },
      sections: {
        services: {
          title: "الخدمات",
          links: [
            { id: 1, name: "إدارة الهوية والوصول", href: "#" },
            { id: 2, name: "تقنيات التشغيل الصناعية", href: "#" },
            { id: 3, name: "التوعية بالأمن السيبراني", href: "#" },
            { id: 4, name: "مدير أمن معلومات افتراضي", href: "#" },
          ]
        },
        solutions: {
          title: "الحلول",
          links: [
            { id: 1, name: "إدارة الوصول المميز", href: "#" },
            { id: 2, name: "نظام كشف الاختراقات", href: "#" },
            { id: 3, name: "استخبارات التهديدات", href: "#" },
            { id: 4, name: "حماية الهوية الرقمية", href: "#" },
          ]
        },
        company: {
          title: "الشركة",
          links: [
            { id: 1, name: "من نحن", href: "#about" },
            { id: 2, name: "فريق العمل", href: "#" },
          ]
        },
        support: {
          title: "الدعم",
          links: [
            { id: 1, name: "الدعم الفني", href: "#" },
            { id: 2, name: "الأسئلة الشائعة", href: "#" },
            { id: 3, name: "تواصل معنا", href: "#contact" },
            { id: 4, name: "الخصوصية", href: "#" },
          ]
        }
      },
      socialLinks: [
        { id: 1, name: "LinkedIn", href: "#", icon: "linkedin" },
        { id: 2, name: "Twitter", href: "#", icon: "twitter" },
        { id: 3, name: "Facebook", href: "#", icon: "facebook" }
      ]
    };

    try {
      // Check if footer document exists before creating
      const footerDoc = await getDoc(doc(db, "settings", "footer"));
      if (!footerDoc.exists()) {
        await setDoc(doc(db, "settings", "footer"), footerData);
        console.log("Footer data initialized successfully");
      } else {
        console.log("Footer data already exists, skipping initialization");
      }
    } catch (error) {
      console.log(
        "Error checking/creating footer data:",
        error.message
      );
    }

    // Note: Admin user creation should be done manually in Firebase Console
    // or through a separate admin setup process
    console.log(
      "Firebase initialized. Admin user should be created manually in Firebase Console."
    );
  } catch (error) {
    console.error("Error initializing Firebase:", error);
  }
};
