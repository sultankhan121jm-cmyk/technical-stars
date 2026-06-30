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
      en: [
        "Drain and spin issue repair",
        "Motor and belt replacement",
        "Door lock and seal fixing",
        "Control board diagnosis and repair",
        "Water inlet valve replacement",
        "Drum bearing and suspension repair",
        "Pump and hose leak fix",
        "Noise and vibration troubleshooting",
      ],
      ar: [
        "إصلاح مشاكل التصريف والدوران",
        "استبدال المحرك والحزام",
        "إصلاح قفل الباب والحشية",
        "تشخيص وإصلاح لوحة التحكم",
        "استبدال صمام دخول الماء",
        "إصلاح محامل الطبل ونظام التعليق",
        "إصلاح تسربات المضخة والخراطيم",
        "فحص وإصلاح الضوضاء والاهتزاز",
      ],
    },
    brands: ["Samsung", "LG", "Whirlpool", "Bosch", "Haier", "Midea", "Toshiba", "Super General"],
  },
  {
    id: 5, slug: "ac-gas-filling", iconName: "FaWind",
    shortDesc: {
      en: "Professional refrigerant gas refill for all AC types with leak detection.",
      ar: "تعبئة غاز التبريد الاحترافية لجميع أنواع المكيفات مع كشف التسريبات.",
    },
    fullDesc: {
      en: "Is your AC not cooling properly? It might be low on refrigerant gas. Our certified technicians provide complete gas filling services for split ACs, window ACs, and central systems. We use premium R-22, R-410A, and R-32 refrigerants with full leak detection and pressure testing to ensure long-lasting cooling performance.",
      ar: "هل مكيفك لا يبرد بشكل صحيح؟ ربما ينقصه غاز التبريد. يقدم فنيونا المعتمدون خدمة تعبئة غاز شاملة للمكيفات المنفصلة ومكيفات النوافذ والأنظمة المركزية. نستخدم غازات R-22 و R-410A و R-32 عالية الجودة مع كشف كامل للتسريبات واختبار الضغط لضمان أداء تبريد مستدام.",
    },
    features: {
      en: [
        "Complete refrigerant gas top-up & refill",
        "Digital leak detection with UV dye",
        "Pressure testing before & after filling",
        "Premium R-22, R-410A, R-32 gases",
        "Compressor performance check",
        "Pipe & joint inspection for leaks",
        "Cooling performance verification",
        "90-day gas warranty included",
      ],
      ar: [
        "تعبئة وملء غاز التبريد بالكامل",
        "كشف التسريبات الرقمي بصبغة الأشعة فوق البنفسجية",
        "اختبار الضغط قبل وبعد التعبئة",
        "غازات R-22 و R-410A و R-32 عالية الجودة",
        "فحص أداء الضاغط",
        "فحص الأنابيب والوصلات للتسريبات",
        "التحقق من أداء التبريد",
        "ضمان غاز لمدة 90 يومًا",
      ],
    },
    brands: ["Samsung", "LG", "Gree", "Carrier", "York", "Midea", "Toshiba", "Daikin"],
  },
];

export default services;