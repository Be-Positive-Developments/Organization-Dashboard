import { createContext, useContext, useState, useEffect } from 'react';









const LanguageContext = createContext(undefined);

const translations = {
  en: {
    // Hero Section
    'hero.title': 'Be Positive',
    'hero.tagline': 'Connecting Donors, Saving Lives',
    'hero.description': 'A revolutionary platform that bridges the gap between blood donors and those in urgent need. Our mission is to make blood donation accessible, efficient, and life-saving through technology.',
    'hero.cta': 'Explore Our Idea',

    // About Section
    'about.title': 'About Our Team',
    'about.description': 'We are a passionate team of innovators, developers, and healthcare enthusiasts committed to revolutionizing blood donation. Our diverse expertise drives us to create solutions that matter.',
    'about.innovation.title': 'Innovation',
    'about.innovation.desc': 'Pioneering solutions that transform the blood donation landscape with cutting-edge technology.',
    'about.impact.title': 'Impact',
    'about.impact.desc': 'Creating meaningful change by connecting donors with recipients in real-time, saving countless lives.',
    'about.technology.title': 'Technology',
    'about.technology.desc': 'Leveraging modern tech stack to build a seamless, efficient, and user-friendly platform.',
    'about.collaboration.title': 'Collaboration',
    'about.collaboration.desc': 'Building bridges between hospitals, donors, and communities to create a unified ecosystem.',

    // Idea Section
    'idea.title': 'Our Idea',
    'idea.description': 'Be Positive is a comprehensive digital platform that revolutionizes the blood donation process. We connect blood donors with those in urgent need through an intelligent, location-based system.',
    'idea.problem.title': 'The Problem',
    'idea.problem.desc': 'Thousands of people die each year due to blood shortages. The current system is fragmented, inefficient, and relies on outdated methods of communication. Finding a matching donor in time can be a matter of life and death.',
    'idea.solution.title': 'Our Solution',
    'idea.solution.desc': 'Be Positive creates a digital ecosystem where donors can register, receive alerts when needed, and connect with recipients instantly. Our platform ensures no request goes unheard and every donor can make a difference.',
    'idea.feature1.title': 'Mobile-First Experience',
    'idea.feature1.desc': 'Access the platform anywhere, anytime through our intuitive mobile interface.',
    'idea.feature2.title': 'Smart Matching',
    'idea.feature2.desc': 'Advanced algorithms match donors with recipients based on blood type and location.',
    'idea.feature3.title': 'Location Services',
    'idea.feature3.desc': 'Find the nearest donation centers or donors in your area instantly.',
    'idea.feature4.title': 'Real-Time Alerts',
    'idea.feature4.desc': 'Get notified immediately when your blood type is needed nearby.',

    // Mission Section
    'mission.title': 'Our Mission',
    'mission.desc1': 'To eliminate blood shortages by creating a seamless, technology-driven platform that connects willing donors with those in need, ensuring that no life is lost due to unavailability of blood.',
    'mission.desc2': 'We strive to make blood donation as simple as sending a message, fostering a community where every individual can be a hero.',
    'vision.title': 'Our Vision',
    'vision.desc1': 'To create a world where blood is always available when needed, where every potential donor is aware and empowered, and where technology serves humanity at its finest.',
    'vision.desc2': 'We envision a future where Be Positive becomes the global standard for blood donation networks, saving millions of lives annually.',

    // Features Section
    'features.title': 'Platform Features',
    'features.description': 'Discover the powerful features that make Be Positive the ultimate blood donation platform',
    'features.secure.title': 'Secure & Private',
    'features.secure.desc': 'Your data is protected with enterprise-grade security and encryption.',
    'features.instant.title': 'Instant Matching',
    'features.instant.desc': 'Find compatible donors in seconds with our advanced matching algorithm.',
    'features.community.title': 'Community Driven',
    'features.community.desc': 'Join a growing network of lifesavers making a real difference.',
    'features.track.title': 'Track Donations',
    'features.track.desc': "Monitor your donation history and see the lives you've impacted.",
    'features.communication.title': 'Direct Communication',
    'features.communication.desc': 'Connect with donors and recipients through secure messaging.',
    'features.recognition.title': 'Recognition System',
    'features.recognition.desc': 'Earn badges and rewards for your life-saving contributions.',

    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.description': "Have questions about our project? Want to collaborate or contribute? We'd love to hear from you!",
    'contact.email': 'Email Us',
    'contact.connect': 'Connect With Us',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Email Address',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.form.placeholder.name': 'John Doe',
    'contact.form.placeholder.email': 'john@example.com',
    'contact.form.placeholder.message': 'Tell us about your inquiry...',

    // Footer
    'footer.tagline': 'Connecting Donors, Saving Lives',
    'footer.copyright': '© 2026 Be Positive. All rights reserved.',
    'footer.made': 'Made with',
    'footer.team': 'by our team',

    // Scroll to top
    'scroll.top': 'Back to Top',

    // 404 Page
    'notfound.title': 'Page Not Found',
    'notfound.message': "Sorry, the page you looking for doesn't exist or has been moved.",
    'notfound.backHome': 'Back to Home'
  },
  ar: {
    // Hero Section
    'hero.title': 'كن إيجابياً',
    'hero.tagline': 'ربط المتبرعين، إنقاذ الأرواح',
    'hero.description': 'منصة ثورية تربط بين المتبرعين بالدم والمحتاجين إليه بشكل عاجل. مهمتنا هي جعل التبرع بالدم متاحًا وفعالًا ومنقذًا للحياة من خلال التكنولوجيا.',
    'hero.cta': 'اكتشف فكرتنا',

    // About Section
    'about.title': 'عن فريقنا',
    'about.description': 'نحن فريق شغوف من المبتكرين والمطورين وعشاق الرعاية الصحية الملتزمين بإحداث ثورة في التبرع بالدم. خبراتنا المتنوعة تدفعنا لإنشاء حلول ذات أهمية.',
    'about.innovation.title': 'الابتكار',
    'about.innovation.desc': 'حلول رائدة تحول مشهد التبرع بالدم بتكنولوجيا متطورة.',
    'about.impact.title': 'التأثير',
    'about.impact.desc': 'إحداث تغيير ذي مغزى من خلال ربط المتبرعين بالمستفيدين في الوقت الفعلي، وإنقاذ عدد لا يحصى من الأرواح.',
    'about.technology.title': 'التكنولوجيا',
    'about.technology.desc': 'الاستفادة من أحدث التقنيات لبناء منصة سلسة وفعالة وسهلة الاستخدام.',
    'about.collaboration.title': 'التعاون',
    'about.collaboration.desc': 'بناء جسور بين المستشفيات والمتبرعين والمجتمعات لإنشاء نظام بيئي موحد.',

    // Idea Section
    'idea.title': 'فكرتنا',
    'idea.description': 'كن إيجابياً هي منصة رقمية شاملة تُحدث ثورة في عملية التبرع بالدم. نربط المتبرعين بالدم بالمحتاجين إليه بشكل عاجل من خلال نظام ذكي قائم على الموقع.',
    'idea.problem.title': 'المشكلة',
    'idea.problem.desc': 'يموت الآلاف من الناس كل عام بسبب نقص الدم. النظام الحالي مجزأ وغير فعال ويعتمد على أساليب تواصل قديمة. إيجاد متبرع مطابق في الوقت المناسب يمكن أن يكون مسألة حياة أو موت.',
    'idea.solution.title': 'حلنا',
    'idea.solution.desc': 'كن إيجابياً يخلق نظامًا بيئيًا رقميًا حيث يمكن للمتبرعين التسجيل وتلقي التنبيهات عند الحاجة والاتصال بالمستفيدين على الفور. تضمن منصتنا عدم مرور أي طلب دون أن يُسمع وأن كل متبرع يمكنه إحداث فرق.',
    'idea.feature1.title': 'تجربة محمولة أولاً',
    'idea.feature1.desc': 'الوصول إلى المنصة في أي مكان وفي أي وقت من خلال واجهتنا المحمولة البديهية.',
    'idea.feature2.title': 'مطابقة ذكية',
    'idea.feature2.desc': 'خوارزميات متقدمة تطابق المتبرعين مع المستفيدين بناءً على فصيلة الدم والموقع.',
    'idea.feature3.title': 'خدمات الموقع',
    'idea.feature3.desc': 'اعثر على أقرب مراكز التبرع أو المتبرعين في منطقتك على الفور.',
    'idea.feature4.title': 'تنبيهات فورية',
    'idea.feature4.desc': 'احصل على إشعار فوري عندما تكون فصيلة دمك مطلوبة بالقرب منك.',

    // Mission Section
    'mission.title': 'مهمتنا',
    'mission.desc1': 'القضاء على نقص الدم من خلال إنشاء منصة سلسة تعتمد على التكنولوجيا تربط المتبرعين الراغبين بالمحتاجين، مما يضمن عدم فقدان أي حياة بسبب عدم توفر الدم.',
    'mission.desc2': 'نسعى جاهدين لجعل التبرع بالدم بسيطًا مثل إرسال رسالة، وتعزيز مجتمع حيث يمكن لكل فرد أن يكون بطلاً.',
    'vision.title': 'رؤيتنا',
    'vision.desc1': 'خلق عالم يكون فيه الدم متاحًا دائمًا عند الحاجة، حيث يكون كل متبرع محتمل على دراية وتمكين، وحيث تخدم التكنولوجيا الإنسانية في أفضل حالاتها.',
    'vision.desc2': 'نتصور مستقبلًا يصبح فيه كن إيجابياً المعيار العالمي لشبكات التبرع بالدم، لإنقاذ ملايين الأرواح سنويًا.',

    // Features Section
    'features.title': 'مميزات المنصة',
    'features.description': 'اكتشف المميزات القوية التي تجعل من كن إيجابياً منصة التبرع بالدم المثالية',
    'features.secure.title': 'آمن وخاص',
    'features.secure.desc': 'بياناتك محمية بأمان وتشفير على مستوى المؤسسات.',
    'features.instant.title': 'مطابقة فورية',
    'features.instant.desc': 'ابحث عن متبرعين متوافقين في ثوانٍ باستخدام خوارزمية المطابقة المتقدمة لدينا.',
    'features.community.title': 'يقودها المجتمع',
    'features.community.desc': 'انضم إلى شبكة متنامية من منقذي الحياة الذين يحدثون فرقًا حقيقيًا.',
    'features.track.title': 'تتبع التبرعات',
    'features.track.desc': 'راقب سجل تبرعاتك وشاهد الأرواح التي أثرت عليها.',
    'features.communication.title': 'تواصل مباشر',
    'features.communication.desc': 'تواصل مع المتبرعين والمستفيدين من خلال الرسائل الآمنة.',
    'features.recognition.title': 'نظام التقدير',
    'features.recognition.desc': 'احصل على شارات ومكافآت لمساهماتك المنقذة للحياة.',

    // Contact Section
    'contact.title': 'تواصل معنا',
    'contact.description': 'هل لديك أسئلة حول مشروعنا؟ هل تريد التعاون أو المساهمة؟ نحن نحب أن نسمع منك!',
    'contact.email': 'راسلنا عبر البريد الإلكتروني',
    'contact.connect': 'تواصل معنا',
    'contact.form.name': 'اسمك',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.message': 'الرسالة',
    'contact.form.submit': 'إرسال الرسالة',
    'contact.form.placeholder.name': 'أحمد محمد',
    'contact.form.placeholder.email': 'ahmed@example.com',
    'contact.form.placeholder.message': 'أخبرنا عن استفسارك...',

    // Footer
    'footer.tagline': 'ربط المتبرعين، إنقاذ الأرواح',
    'footer.copyright': '© 2026 كن إيجابياً. جميع الحقوق محفوظة.',
    'footer.made': 'صنع بـ',
    'footer.team': 'من قبل فريقنا',

    // Scroll to top
    'scroll.top': 'العودة للأعلى',

    // 404 Page
    'notfound.title': 'الصفحة غير موجودة',
    'notfound.message': 'عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.',
    'notfound.backHome': 'العودة للرئيسية'
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState('en');

  useEffect(() => {
    // Apply RTL for Arabic
    if (language === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
    }
  }, [language]);

  const setLanguage = (lang) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  // Load saved language on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang && (savedLang === 'en' || savedLang === 'ar')) {
      setLanguageState(savedLang);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>);

}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}