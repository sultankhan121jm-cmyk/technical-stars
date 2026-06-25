const services = [
  {
    id: 1, slug: "ac-repair", iconName: "FaWrench",
    shortDesc: { en: "Expert diagnosis and repair for all AC types.", ar: "تشخيص وإصلاح احترافي لجميع أنواع المكيفات." },
    fullDesc: {
      en: "Our certified technicians quickly diagnose and fix any AC issue — from compressor failures and thermostat malfunctions to refrigerant leaks and electrical faults. We service split units, window ACs, and central systems across Riyadh with guaranteed results.",
      ar: "يشخص فنيونا المعتمدون ويصلحون أي مشكلة تكييف بسرعة — من أعطال الضاغط وأعطال منظم الحرارة إلى تسربات المبرد والأعطال الكهربائية. نخدم الوحدات المنفصلية والمكيفات النافذة والأنظمة المركزية في جميع أنحاء الرياض بنتائج مضمونة.",
    },
    features: {
      en: ["Comprehensive fault diagnosis", "Compressor and motor repair", "Thermostat and sensor replacement", "Refrigerant leak detection and fix"],
      ar: ["تشخيص أعطال شامل", "إصلاح الضاغط والمحرك", "استبدال منظم الحرارة والمستشعر", "كشف وإصلاح تسربات المبرد"],
    },
    brands: ["Samsung", "LG", "Gree", "Carrier", "York", "Midea"],
  },
  {
    id: 2, slug: "ac-installation", iconName: "FaSnowflake",
    shortDesc: { en: "Professional AC setup for homes and offices.", ar: "تركيب احترافي للمكيفات للمنازل والمكاتب." },
    fullDesc: {
      en: "Get your new AC unit installed correctly the first time. Our team handles everything from wall mounting and piping to electrical wiring and system testing. We ensure optimal airflow and efficient cooling from day one in your Riyadh property.",
      ar: "ثبّت وحدة التكييف الجديدة بشكل صحيح من المرة الأولى. يتعامل فريقنا مع كل شيء من التثبيت على الحائط والتمديدات إلى التوصيلات الكهربائية واختبار النظام. نضمن تدفق هواء مثالي وتبريد فعال من اليوم الأول في عقارك بالرياض.",
    },
    features: {
      en: ["Wall and ceiling unit mounting", "Copper piping and drainage setup", "Electrical wiring and connection", "Full system testing and commissioning"],
      ar: ["تثبيت وحدات الحائط والسقف", "تمديدات النحاس والتصريف", "التوصيلات الكهربائية والربط", "اختبار وتشغيل النظام بالكامل"],
    },
    brands: ["Samsung", "LG", "Gree", "Carrier", "York", "Midea"],
  },
  {
    id: 3, slug: "ac-cleaning", iconName: "FaWater",
    shortDesc: { en: "Deep cleaning to restore AC performance.", ar: "تنظيف عميق لاستعادة أداء المكيف." },
    fullDesc: {
      en: "Over time, dust and mold build up inside your AC, reducing cooling efficiency and affecting air quality. Our deep cleaning service covers filters, coils, drains, and internal components — helping your unit run like new and lowering your electricity bill.",
      ar: "مع مرور الوقت، يتراكم الغبار والعفن داخل مكيفك مما يقلل كفاءة التبريد ويؤثر على جودة الهواء. تشمل خدمة التنظيف العميق لدينا الفلاتر والملفات والمصارف والمكونات الداخلية — مما يساعد وحدتك على العمل كأنها جديدة ويخفض فاتورة الكهرباء.",
    },
    features: {
      en: ["Filter and coil deep cleaning", "Drainage pipe flushing", "Mold and bacteria treatment", "Performance check after cleaning"],
      ar: ["تنظيف عميق للفلاتر والملفات", "شطف أنابيب التصريف", "معالجة العفن والبكتيريا", "فحص الأداء بعد التنظيف"],
    },
    brands: ["Samsung", "LG", "Gree", "Carrier", "York", "Midea"],
  },
  {
    id: 4, slug: "washing-machine", iconName: "FaTshirt",
    shortDesc: { en: "Fast fixes for all washing machine problems.", ar: "إصلاحات سريعة لجميع مشاكل الغسالات." },
    fullDesc: {
      en: "Whether your washing machine won't spin, drain, or turn on at all, our technicians can handle it. We repair top-load and front-load machines from all major brands, using genuine parts and offering reliable same-day service across Riyadh.",
      ar: "سواء لم تدور غسالتك أو لم تصرف أو لم تعمل على الإطلاق، يستطيع فنيونا التعامل معها. نصلح الغسالات ذات التحميل العلوي والسفلي من جميع العلامات التجارية الكبرى باستخدام قطع أصلية مع خدمة موثوقة في نفس اليوم في الرياض.",
    },
    features: {
      en: ["Drain and spin issue repair", "Motor and belt replacement", "Door lock and seal fixing", "Control board diagnosis and repair"],
      ar: ["إصلاح مشاكل التصريف والدوران", "استبدال المحرك والحزام", "إصلاح قفل الباب والحشية", "تشخيص وإصلاح لوحة التحكم"],
    },
    brands: ["Samsung", "LG", "Gree", "Carrier", "York", "Midea"],
  },
  {
    id: 5, slug: "plumbing", iconName: "FaFaucet",
    shortDesc: { en: "Fast plumbing repairs, leak detection and pipe installation", ar: "إصلاحات سباكة سريعة، كشف تسربات وتركيب أنابيب" },
    fullDesc: {
      en: "Our professional plumbers handle everything from leak detection to pipe installations — without breaking your walls. Whether it's a bathroom renovation or an emergency pipe burst, we deliver fast, reliable plumbing solutions across Riyadh.",
      ar: "يتعامل سباكونا المحترفون مع كل شيء من كشف التسربات إلى تركيب الأنابيب — دون كسر جدرانك. سواء كانت تجديد حمام أو انفجار أنبوب طوارئ، نقدم حلول سباكة سريعة وموثوقة في جميع أنحاء الرياض.",
    },
    features: {
      en: ["Leak Detection Without Breaking Walls", "Drain Unblocking", "Water Heater Installation", "Sanitary Ware Fitting"],
      ar: ["كشف التسربات بدون كسر الجدران", "فتح المجاري المسدودة", "تركيب سخانات المياه", "تركيب أدوات صحية"],
    },
    brands: ["Grohe", "American Standard", "TOTO", "Hansgrohe"],
  },
  {
    id: 6, slug: "electricity", iconName: "FaBolt",
    shortDesc: { en: "Certified electrical repairs, wiring and panel installation", ar: "إصلاحات كهربائية معتمدة، تمديدات وتركيب لوحات" },
    fullDesc: {
      en: "Our certified electricians handle all electrical work, from short circuit repairs to complete panel upgrades and wiring. We ensure your home or office in Riyadh remains safe, code-compliant, and efficiently powered.",
      ar: "يتعامل كهربائيونا المعتمدون مع جميع الأعمال الكهربائية، من إصلاحات القصر الكهربائي إلى ترقية اللوحات والتمديدات الكاملة. نضمن بقاء منزلك أو مكتبك في الرياض آمناً ومطابقاً للمواصفات ومزوداً بالكفاءة.",
    },
    features: {
      en: ["Short Circuit Repair", "Electrical Panel Installation", "Certified Cable Extensions", "Smart Lighting Setup"],
      ar: ["إصلاح القصر الكهربائي", "تركيب اللوحات الكهربائية", "تمديدات كابلات معتمدة", "تركيب إضاءة ذكية"],
    },
    brands: ["Schneider Electric", "ABB", "Legrand", "Siemens"],
  },
];

export default services;
