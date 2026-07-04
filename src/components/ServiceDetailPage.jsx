import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaPhone, FaWhatsapp, FaCheckCircle, FaClock, FaShieldAlt, FaTools,
  FaWrench, FaSnowflake, FaWind, FaTshirt, FaFaucet, FaBolt, FaWater,
  FaMapMarkerAlt, FaStar, FaTag, FaSearch, FaCogs, FaClipboardCheck
} from "react-icons/fa";
import CTABanner from "./CTABanner";
import services from "../data/services";
import { useLang } from "../contexts/LanguageContext";

// --- EXISTING IMAGE IMPORTS ---
import acRepairImg from "../assets/images/service-ac-repair.jpg";
import acInstallImg from "../assets/images/service-ac-installation.jpg";
import acCleanImg from "../assets/images/service-ac-cleaning.jpg";
import washingImg from "../assets/images/service-washing-machine.jpg";
import gasFillingImg from "../assets/images/service-ac-gas-filling.jpg";

// --- NEW IMAGE IMPORTS ---
import centralAcCleanImg from "../assets/images/central-ac-cleaning.jpg";
import windowAcCleanImg from "../assets/images/window-ac-cleaning.jpg";

// --- NEW GALLERY IMPORTS ---
import acRepairImg2 from "../assets/images/service-ac-repair-2.jpg";
import acRepairImg3 from "../assets/images/service-ac-repair-3.jpg";
import acInstallImg2 from "../assets/images/service-ac-installation-2.jpg";
import acInstallImg3 from "../assets/images/service-ac-installation-3.jpg";
import washingImg2 from "../assets/images/service-washing-machine-2.jpg";
import washingImg3 from "../assets/images/service-washing-machine-3.jpg";
import gasFillingImg2 from "../assets/images/service-ac-gas-filling-2.jpg";
import gasFillingImg3 from "../assets/images/service-ac-gas-filling-3.jpg";

// --- IMAGE MAP (complete — all slugs covered) ---
const serviceImages = {
  'ac-repair': acRepairImg,
  'ac-installation': acInstallImg,
  'ac-cleaning': acCleanImg,
  'washing-machine': washingImg,
  'central-ac-cleaning': centralAcCleanImg,
  'window-ac-cleaning': windowAcCleanImg,
  'ac-gas-filling': gasFillingImg,
};

const defaultServiceImg = acRepairImg;

// --- UPDATED PROMO CONFIG MAP ---
const promoConfig = {
  'ac-cleaning': {
    show: true, discount: '30%', showLocalProof: true,
    localProof: { en: "Fast AC Cleaning Service in North Riyadh", ar: "خدمة تنظيف مكيفات سريعة في شمال الرياض" },
    promoTitle: { en: "AC Cleaning Offers", ar: "عروض تنظيف مكيفات" },
    promoDesc: { en: "Get 30% OFF your first AC cleaning!", ar: "احصل على خصم 30% على أول تنظيف مكيفات!" },
  },
  'ac-repair': {
    show: true, discount: '30%', showLocalProof: true,
    localProof: { en: "Fast AC Repair Service in North Riyadh", ar: "خدمة إصلاح المكيفات السريعة في شمال الرياض" },
    promoTitle: { en: "Repair Discount", ar: "خصم على الإصلاح" },
    promoDesc: { en: "Get 30% OFF your first AC repair!", ar: "احصل على خصم 30% على أول إصلاح مكيف!" },
  },
  'ac-installation': {
    show: true, discount: '30%', showLocalProof: true,
    localProof: { en: "Professional AC Installation in North Riyadh", ar: "تركيب مكيفات احترافي في شمال الرياض" },
    promoTitle: { en: "Installation Offer", ar: "عرض التركيب" },
    promoDesc: { en: "Get 30% OFF on new AC installation!", ar: "احصل على خصم 30% على تركيب مكيف جديد!" },
  },
  'washing-machine': {
    show: true, discount: '30%', showLocalProof: true,
    localProof: { en: "Fast Washing Machine Repair in North Riyadh", ar: "إصلاح غسالات سريع في شمال الرياض" },
    promoTitle: { en: "Washing Machine Deal", ar: "عرض الغسالات" },
    promoDesc: { en: "Get 30% OFF your first washing machine service!", ar: "احصل على خصم 30% على أول خدمة غسالة!" },
  },
  'central-ac-cleaning': {
    show: true, discount: '30%', showLocalProof: true,
    localProof: { en: "Central AC Cleaning in North Riyadh", ar: "تنظيف المكيف المركزي في شمال الرياض" },
    promoTitle: { en: "Central AC Special", ar: "عرض المكيف المركزي" },
    promoDesc: { en: "Get 30% OFF central AC cleaning!", ar: "احصل على خصم 30% على تنظيف المكيف المركزي!" },
  },
  'window-ac-cleaning': {
    show: true, discount: '30%', showLocalProof: true,
    localProof: { en: "Window AC Cleaning in North Riyadh", ar: "تنظيف مكيف النافذة في شمال الرياض" },
    promoTitle: { en: "Window AC Special", ar: "عرض مكيف النافذة" },
    promoDesc: { en: "Get 30% OFF window AC cleaning!", ar: "احصل على خصم 30% على تنظيف مكيف النافذة!" },
  },
  'ac-gas-filling': {
    show: true, discount: '30%', showLocalProof: true,
    localProof: { en: "Fast AC Gas Filling Service in North Riyadh", ar: "خدمة تعبئة غاز المكيفات السريعة في شمال الرياض" },
    promoTitle: { en: "Gas Filling Offer", ar: "عرض تعبئة الغاز" },
    promoDesc: { en: "Get 30% OFF your first AC gas refill!", ar: "احصل على خصم 30% على أول تعبئة غاز مكيف!" },
  },
};

// --- NEW: EXTENDED FEATURES MAP (Guarantees 6 lines & Rich Keywords) ---
const dynamicFeatures = {
  'ac-cleaning': [
    { en: "Deep washing of split AC indoor units", ar: "غسيل عميق لوحدات مكيفات سبليت الداخلية" },
    { en: "Central AC ductwork and coil cleaning", ar: "تنظيف قنوات الهواء والملفات للمكيف المركزي" },
    { en: "Filter washing and mold removal for AC hygiene", ar: "غسيل الفلاتر وإزالة العفن لضمان نظافة مكيفات" },
    { en: "Drain pipe unblocking to prevent water leaks", ar: "تسليك أنابيب التصريف لمنع تسربات الماء" },
    { en: "Evaporator and condenser coil chemical washing", ar: "غسيل كيميائي لملفات المبخر والمكثف" },
    { en: "AC performance testing and cooling efficiency check", ar: "اختبار أداء المكيف والتأكد من كفاءة التبريد" }
  ],
  'ac-repair': [
    { en: "AC compressor repair and replacement", ar: "إصلاح واستبدال ضاغط المكيف (الكمبروسر)" },
    { en: "Fixing AC gas leaks and refrigerant refilling", ar: "إصلاح تسريبات غاز الفريون وإعادة تعبئته" },
    { en: "PCB board and electrical fault repair", ar: "إصلاح اللوحة الإلكترونية وأعطال التكييف الكهربائية" },
    { en: "AC motor and fan blade replacement", ar: "استبدال محرك المكيف وشفلات المروحة" },
    { en: "Fixing cooling issues and poor airflow", ar: "معالجة مشاكل التبريد وضعف تدفق الهواء" },
    { en: "Thorough AC maintenance and safety inspection", ar: "صيانة شاملة للمكيف وفحص أمني دقيق" }
  ],
  'ac-installation': [
    { en: "Secure mounting of split AC indoor units", ar: "تثبيت آمن لوحدات مكيفات سبليت الداخلية" },
    { en: "Professional outdoor condenser installation", ar: "تركيب احترافي لوحدة المكثف الخارجية" },
    { en: "High-quality copper piping and insulation", ar: "تمديدات نحاس عالية الجودة وعزل ممتاز" },
    { en: "Safe electrical wiring and breaker connection", ar: "توصيلات كهربائية آمنة وربط القاطع" },
    { en: "AC system pressure testing and vacuuming", ar: "اختبار ضغط نظام التكييف وسحب الهواء" },
    { en: "Final cooling performance and leak testing", ar: "اختبار نهائي لكفاءة التبريد والتأكد من عدم وجود تسريبات" }
  ],
  'washing-machine': [
    { en: "Washing machine motor and drum repair", ar: "إصلاح محرك وطبل الغسالة الأوتوماتيكية" },
    { en: "Fixing water leakage and drainage issues", ar: "إصلاح تسربات الماء ومشاكل التصريف" },
    { en: "Repairing and replacing faulty drain pumps", ar: "إصلاح واستبدال مضخات التصريف المعطلة" },
    { en: "Fixing electronic control board and program faults", ar: "إصلاح اللوحة الإلكترونية وأعطال البرمجة" },
    { en: "Replacing worn-out belts and bearings", ar: "استبدال الأحزام والمحامل التالفة" },
    { en: "Complete washing machine maintenance and testing", ar: "صيانة شاملة للغسالة واختبار التشغيل النهائي" }
  ],
  'central-ac-cleaning': [
    { en: "Deep cleaning of central AC ducts and vents", ar: "تنظيف عميق لقنوات المكيف المركزي والفتحات" },
    { en: "Chemical washing of evaporator coils", ar: "غسيل كيميائي لملفات المبخر" },
    { en: "Blower motor and fan deep cleaning", ar: "تنظيف عميق لمحرك النفخ والمروحة" },
    { en: "Air filter replacement and sanitization", ar: "استبدال الفلاتر وتطهير الهواء" },
    { en: "Drain pan and line flushing", ar: "تنظيف وعاء التصريف وخطوط الصرف" },
    { en: "Indoor air quality and airflow testing", ar: "اختبار جودة الهواء الداخلي وتدفق الهواء" }
  ],
  'window-ac-cleaning': [
    { en: "Complete dismantling and deep washing of window AC", ar: "فك كامل وغسيل عميق لمكيف النافذة" },
    { en: "Internal coil and fan blade cleaning", ar: "تنظيف الملفات الداخلية وشفلات المروحة" },
    { en: "Filter washing and dust removal", ar: "غسيل الفلاتر وإزالة الغبار" },
    { en: "Drainage cleaning to prevent water overflow", ar: "تنظيف التصريف لمنع فيضان الماء" },
    { en: "Mold and bacteria sanitization", ar: "تعقيم وإزالة العفن والبكتيريا" },
    { en: "Reassembly and cooling efficiency test", ar: "إعادة التجميع واختبار كفاءة التبريد" }
  ],
  'ac-gas-filling': [
    { en: "AC gas refill and refrigerant top-up (Freon)", ar: "تعبئة غاز المكيف وشحن الفريون" },
    { en: "UV dye leak detection for hidden AC leaks", ar: "كشف التسريبات المخفية باستخدام الصبغة" },
    { en: "Pressure testing and system vacuuming", ar: "اختبار الضغط وتفريغ النظام" },
    { en: "Compressor oil check and topping up", ar: "فحص زيت الضاغط وتعبئته" },
    { en: "Fixing copper pipe connections and valves", ar: "إصلاح توصيلات النحاس والصمامات" },
    { en: "Cooling efficiency verification and check", ar: "التحقق من كفاءة التبريد واختبار الأداء" }
  ]
};

// --- UPDATED DYNAMIC SEO TEXT MAP ---
const dynamicSeoText = {
  'ac-cleaning': {
    includedTitle: { en: "What Our AC Cleaning Service Includes", ar: "ما تتضمنه خدمة تنظيف المكيفات لدينا" },
    brandsText: { en: "As a leading AC washing company, we provide certified technicians for maintaining split and central ACs of all brands.", ar: "كشركة غسيل مكيفات رائدة، نوفر فنيين معتمدون لغسيل وتنظيف وصيانة مكيفات سبليت ومركزية لجميع الماركات لضمان أعلى نظافة مكيفات." },
    fastDesc: { en: "AC cleaning technician at your door within 60 minutes", ar: "فني صيانة وتنظيف مكيفات عند بابك خلال 60 دقيقة" },
    expertDesc: { en: "Specialists in cleaning and maintaining all AC types in Riyadh.", ar: "متخصصون في تنظيف وصيانة جميع أنواع المكيفات بالرياض." },
    processTitle: { en: "Our Professional AC Cleaning Process", ar: "عملية تنظيف المكيفات الاحترافية لدينا" },
    step1: { en: "Book & Inspect", ar: "الحجز والفحص", desc_en: "Schedule your AC cleaning service. Our technician inspects the split or central AC unit for dust and blockages.", desc_ar: "احجز خدمة تنظيف المكيفات. يفحص الفني وحدة المكيف السبليت أو المركزي للبحث عن الغبار والانسدادات." },
    step2: { en: "Deep Wash & Clean", ar: "الغسيل والتنظيف العميق", desc_en: "Complete washing of coils, filters, and internal parts. We ensure thorough AC hygiene and mold removal.", desc_ar: "غسيل كامل للملفات والفلاتر والأجزاء الداخلية. نضمن تنظيف التكييف من الداخل بشكل شامل وإزالة العفن." },
    step3: { en: "Reinstall & Test", ar: "إعادة التركيب والاختبار", desc_en: "Reassemble the AC, check for leaks, and ensure optimal cooling efficiency in your Riyadh home.", desc_ar: "إعادة تجميع المكيف، والتحقق من عدم وجود تسريبات، وضمان كفاءة تبريد مثالية في منزلك بالرياض." }
  },
  'ac-repair': {
    includedTitle: { en: "What Our AC Repair & Maintenance Includes", ar: "ما تتضمنه خدمات صيانة وتصليح المكيفات" },
    brandsText: { en: "Experts in fixing faults and maintaining ACs for all models in Riyadh.", ar: "خبراء في إصلاح أعطال وصيانة التكييف لجميع الموديلات في الرياض." },
    fastDesc: { en: "AC repair technician in Riyadh within 60 minutes", ar: "فني تصليح مكيفات في الرياض خلال 60 دقيقة" },
    expertDesc: { en: "Certified professionals for fast AC repair and maintenance.", ar: "محترفون معتمدون لإصلاح وصيانة المكيفات بسرعة." },
    processTitle: { en: "Our AC Repair Process", ar: "عملية إصلاح المكيفات لدينا" },
    step1: { en: "Diagnose Fault", ar: "تشخيص العطل", desc_en: "Our AC repair technician diagnoses the issue, whether it's a compressor, leak, or electrical fault.", desc_ar: "يقوم فني تصليح مكيفات بتشخيص المشكلة، سواء كانت ضاغط أو تسريب أو عطل كهربائي." },
    step2: { en: "Expert Repair", ar: "إصلاح احترافي", desc_en: "We perform the necessary AC maintenance and replace faulty parts with original components.", desc_ar: "نقوم بصيانة المكيفات اللازمة واستبدال القطع المعطلة بمكونات أصلية." },
    step3: { en: "Test & Warranty", ar: "الاختبار والضمان", desc_en: "We test the cooling performance and provide a full warranty on AC repair services in Riyadh.", desc_ar: "نختبر أداء التبريد ونقدم ضماناً كاملاً على خدمات تصليح المكيفات في الرياض." }
  },
  'ac-installation': {
    includedTitle: { en: "What Our AC Installation Includes", ar: "ما يتضمنه تركيب المكيفات لدينا" },
    brandsText: { en: "Specialists in professionally installing split and central ACs in Riyadh.", ar: "متخصصون في تركيب مكيفات سبليت ومركزية باحترافية في الرياض." },
    fastDesc: { en: "AC installation technician at your door within 60 minutes", ar: "فني تركيب مكيفات عند بابك خلال 60 دقيقة" },
    expertDesc: { en: "Certified professionals for safe and precise AC installation.", ar: "محترفون معتمدون لتركيب المكيفات بأمان ودقة." },
    processTitle: { en: "Our AC Installation Process", ar: "عملية تركيب المكيفات لدينا" },
    step1: { en: "Site Inspection", ar: "فحص الموقع", desc_en: "Our technician visits your Riyadh home to determine the best placement for indoor and outdoor units.", desc_ar: "يزور الفني منزلك في الرياض لتحديد أفضل مكان للوحدات الداخلية والخارجية." },
    step2: { en: "Mounting & Piping", ar: "التثبيت والتمديد", desc_en: "Secure mounting of units, precise copper pipe bending, and safe electrical connections.", desc_ar: "تثبيت آمن للوحدات، ثني دقيق لأنابيب النحاس، وتوصيلات كهربائية آمنة." },
    step3: { en: "Testing & Handover", ar: "الاختبار والتسليم", desc_en: "We test the new AC installation for leaks and cooling efficiency before handing over.", desc_ar: "نختبر تركيب المكيف الجديد للتحقق من التسريبات وكفاءة التبريد قبل التسليم." }
  },
  'washing-machine': {
    includedTitle: { en: "What Our Washing Machine Repair Includes", ar: "ما تتضمنه صيانة وتصليح الغسالات" },
    brandsText: { en: "Technicians for repairing automatic washing machines of all brands in Riyadh.", ar: "فنيون متخصصون في تصليح الغسالات الاوتوماتيكية بالرياض وصيانة الغسالات بجميع الماركات." },
    fastDesc: { en: "Washing machine repair technician in Riyadh within 60 minutes", ar: "فني صيانة غسالات في الرياض خلال 60 دقيقة" },
    expertDesc: { en: "Certified professionals for fast washing machine repair.", ar: "محترفون معتمدون لإصلاح الغسالات بسرعة." },
    processTitle: { en: "Our Washing Machine Repair Process", ar: "عملية إصلاح الغسالات لدينا" },
    step1: { en: "Identify Issue", ar: "تحديد المشكلة", desc_en: "Our technician checks the washing machine for motor faults, leaks, or drainage issues.", desc_ar: "يفحص الفني الغسالة للبحث عن أعطال المحرك أو التسريبات أو مشاكل التصريف." },
    step2: { en: "Fix & Replace", ar: "الإصلاح والاستبدال", desc_en: "We perform the washing machine repair, replacing any faulty parts with original spares.", desc_ar: "نقوم بإصلاح الغسالة، واستبدال أي قطع معطلة بقطع غيار أصلية." },
    step3: { en: "Final Test Run", ar: "اختبار التشغيل", desc_en: "We run a full wash cycle to ensure the maintenance is successful and the machine works perfectly.", desc_ar: "نشغل دورة غسيل كاملة لضمان نجاح الصيانة وعمل الغسالة بشكل مثالي." }
  },
  'ac-gas-filling': {
    includedTitle: { en: "What Our AC Gas Filling Includes", ar: "ما تتضمنه خدمة تعبئة غاز المكيفات" },
    brandsText: { en: "Experts in AC gas refill and leak repair for all models in Riyadh.", ar: "خبراء في تعبئة غاز المكيفات وإصلاح التسريبات لجميع الموديلات في الرياض." },
    fastDesc: { en: "AC gas filling technician in Riyadh within 60 minutes", ar: "فني تعبئة غاز مكيفات في الرياض خلال 60 دقيقة" },
    expertDesc: { en: "Certified professionals for fast and safe AC gas refill.", ar: "محترفون معتمدون لتعبئة غاز المكيفات بسرعة وأمان." },
    processTitle: { en: "Our AC Gas Refill Process", ar: "عملية تعبئة غاز المكيفات لدينا" },
    step1: { en: "Leak Detection", ar: "كشف التسريب", desc_en: "Our technician checks the AC for gas leaks using UV dye before refilling the refrigerant.", desc_ar: "يفحص الفني المكيف للبحث عن تسريبات الغاز باستخدام الصبغة قبل إعادة التعبئة." },
    step2: { en: "Vacuum & Refill", ar: "تفريغ وتعبئة", desc_en: "We vacuum the system and refill the AC gas to optimal pressure levels for perfect cooling.", desc_ar: "نفرغ النظام ونعيد تعبئة غاز المكيف إلى مستويات الضغط المثالية لتبريد مثالي." },
    step3: { en: "Performance Check", ar: "فحص الأداء", desc_en: "We test the AC cooling efficiency to ensure the gas refill was successful.", desc_ar: "نختبر كفاءة تبريد المكيف للتأكد من نجاح تعبئة الغاز." }
  },
  'central-ac-cleaning': {
    includedTitle: { en: "What Our Central AC Cleaning Includes", ar: "ما تتضمنه خدمة تنظيف المكيفات المركزية" },
    brandsText: { en: "Specialists in deep cleaning central AC ducts and coils in Riyadh.", ar: "متخصصون في التنظيف العميق لقنوات وملفات المكيفات المركزية في الرياض." },
    fastDesc: { en: "Central AC cleaning technician at your door within 60 minutes", ar: "فني تنظيف مكيفات مركزية عند بابك خلال 60 دقيقة" },
    expertDesc: { en: "Certified professionals for thorough central AC hygiene.", ar: "محترفون معتمدون لضمان نظافة شاملة للمكيف المركزي." },
    processTitle: { en: "Our Central AC Cleaning Process", ar: "عملية تنظيف المكيف المركزي لدينا" },
    step1: { en: "Inspect Ducts", ar: "فحص القنوات", desc_en: "Our technician inspects the central AC ductwork for heavy dust and mold buildup.", desc_ar: "يفحص الفني قنوات المكيف المركزي للبحث عن تراكم الغبار والعفن." },
    step2: { en: "Deep Wash", ar: "غسيل عميق", desc_en: "We deep wash the coils, clean the ducts, and sanitize the system to improve air quality.", desc_ar: "نقوم بغسيل عميق للملفات وتنظيف القنوات وتعقيم النظام لتحسين جودة الهواء." },
    step3: { en: "Airflow Test", ar: "اختبار تدفق الهواء", desc_en: "We test the airflow and cooling efficiency to ensure your central AC works perfectly.", desc_ar: "نختبر تدفق الهواء وكفاءة التبريد للتأكد من عمل مكيفك المركزي بشكل مثالي." }
  },
  'window-ac-cleaning': {
    includedTitle: { en: "What Our Window AC Cleaning Includes", ar: "ما تتضمنه خدمة تنظيف مكيف النافذة" },
    brandsText: { en: "Experts in washing and cleaning window AC units in Riyadh.", ar: "خبراء في غسيل وتنظيف وحدات مكيف النافذة في الرياض." },
    fastDesc: { en: "Window AC cleaning technician at your door within 60 minutes", ar: "فني تنظيف مكيف نافذة عند بابك خلال 60 دقيقة" },
    expertDesc: { en: "Certified professionals for thorough window AC hygiene.", ar: "محترفون معتمدون لضمان نظافة شاملة لمكيف النافذة." },
    processTitle: { en: "Our Window AC Cleaning Process", ar: "عملية تنظيف مكيف النافذة لدينا" },
    step1: { en: "Dismantle & Inspect", ar: "الفك والفحص", desc_en: "We safely dismantle the window AC unit and inspect internal parts for dust and mold.", desc_ar: "نفك وحدة مكيف النافذة بأمان ونفحص الأجزاء الداخلية للبحث عن الغبار والعفن." },
    step2: { en: "Wash & Sanitize", ar: "الغسيل والتعقيم", desc_en: "We pressure wash the coils and fins, and sanitize the system to remove bacteria.", desc_ar: "نغسل الملفات والزعانف بالضغط ونعقم النظام لإزالة البكتيريا." },
    step3: { en: "Reassemble & Test", ar: "التجميع والاختبار", desc_en: "We reassemble the unit, install it back, and test the cooling performance.", desc_ar: "نعيد تجميع الوحدة وتركيبها ونختبر أداء التبريد." }
  }
};

// --- UPDATED GALLERY CONFIG MAP ---
const galleryConfig = {
  'ac-repair': {
    title: { en: "Professional AC Repair in Action", ar: "إصلاح المكيفات الاحترافي أثناء العمل" },
    cards: [
      { img: acRepairImg2, title: { en: "Compressor & Motor Repair", ar: "إصلاح الضاغط والمحرك" }, desc: { en: "Expert diagnosis and replacement of faulty AC compressors and motors to restore perfect cooling. Our AC repair service ensures your unit runs smoothly.", ar: "تشخيص واستبدال احترافي للضواغط والمحركات المعطلة لاستعادة التبريد المثالي. تضمن خدمة صيانة المكيفات لدينا تشغيل وحدتك بسلاسة." }, alt: "Technician repairing AC compressor motor in Riyadh" },
      { img: acRepairImg3, title: { en: "PCB & Electrical Fault Fixing", ar: "إصلاح أعطال اللوحة الإلكترونية" }, desc: { en: "Precision soldering and repair of AC control boards and electrical wiring issues. We fix all AC faults promptly.", ar: "لحام دقيق وإصلاح لوحات التحكم والمشاكل الكهربائية في المكيفات. نقوم بإصلاح جميع أعطال التكييف على الفور." }, alt: "Fixing AC circuit board and electrical faults" }
    ]
  },
  'ac-installation': {
    title: { en: "Expert AC Installation Process", ar: "عملية تركيب المكيفات الاحترافية" },
    cards: [
      { img: acInstallImg2, title: { en: "Indoor Unit Mounting", ar: "تثبيت الوحدة الداخلية" }, desc: { en: "Secure and level wall mounting of split AC indoor units with proper bracket fitting. Professional AC installation prevents vibrations and leaks.", ar: "تثبيت آمن ومستوي لوحدات المكيف الداخلية على الحائط مع تركيب الحوامل بشكل صحيح. تركيب المكيفات الاحترافي يمنع الاهتزازات والتسريبات." }, alt: "Mounting split AC indoor unit on wall in Riyadh" },
      { img: acInstallImg3, title: { en: "Copper Piping & Outdoor Setup", ar: "تمديدات النحاس وتركيب الوحدة الخارجية" }, desc: { en: "Professional copper pipe bending, insulation, and outdoor condenser unit installation. We use high-quality materials for all AC installations.", ar: "ثني وتمديد عزل أنابيب النحاس وتركيب وحدة المكثف الخارجية باحترافية. نستخدم مواد عالية الجودة لجميع عمليات تركيب المكيفات." }, alt: "Installing copper pipes and outdoor AC unit" }
    ]
  },
  'ac-cleaning': {
    title: { en: "Professional Cleaning for All AC Types", ar: "نظافة احترافية لكل أنواع المكيفات" },
    cards: [
      { img: centralAcCleanImg, title: { en: "Central AC Cleaning", ar: "تنظيف المكيفات المركزية" }, desc: { en: "Expert deep cleaning for central AC units, coils, and ductwork. As a leading AC cleaning company in Riyadh, we remove dust, mold, and bacteria to restore maximum airflow and cooling efficiency.", ar: "تنظيف عميق احترافي لوحدات المكيف المركزي والملفات وقنوات الهواء. كشركة تنظيف مكيفات رائدة في الرياض، نزيل الغبار والعفن والبكتيريا لاستعادة أقصى تدفق هواء وكفاءة تبريد." }, alt: "Professional Central AC Deep Cleaning Service in Riyadh - Coil and Duct Wash" },
      { img: windowAcCleanImg, title: { en: "Split AC Washing", ar: "غسيل مكيفات سبليت" }, desc: { en: "Complete split AC washing and window AC cleaning including filters, drain pipes, and internal coils. Eliminate bad odors and allergens with our professional AC hygiene service.", ar: "غسيل مكيفات سبليت شامل وتنظيف مكيف النافذة يشمل الفلاتر وأنابيب التصريف والملفات الداخلية. تخلص من الروائح الكريهة ومسببات الحساسية مع خدمة نظافة مكيفات احترافية." }, alt: "Affordable Window AC Cleaning Service in Riyadh - Filter Wash and Mold Removal" }
    ]
  },
  'washing-machine': {
    title: { en: "Washing Machine Repair in Action", ar: "إصلاح الغسالات أثناء العمل" },
    cards: [
      { img: washingImg2, title: { en: "Motor & Drum Repair", ar: "إصلاح المحرك والطبل" }, desc: { en: "Disassembling the washing machine to repair or replace faulty motors, drums, and belts. Our technicians ensure reliable washing machine maintenance.", ar: "تفكيك الغسالة لإصلاح أو استبدال المحركات والأطواح والأحزام المعطلة. يضمن فنيونا صيانة غسالات موثوقة." }, alt: "Repairing washing machine motor and drum in Riyadh" },
      { img: washingImg3, title: { en: "Water Leak & Drain Fixing", ar: "إصلاح تسربات الماء والتصريف" }, desc: { en: "Locating and fixing water leaks, replacing pumps, and clearing blocked drain hoses. We fix all automatic washing machine issues.", ar: "تحديد موقع وإصلاح تسربات الماء واستبدال المضخات وتنظيف خراطيم الصرف المسدودة. نصلح جميع مشاكل الغسالات الأوتوماتيكية." }, alt: "Fixing washing machine water leak and drain pump" }
    ]
  },
  'ac-gas-filling': {
    title: { en: "AC Gas Refill Process", ar: "عملية تعبئة غاز المكيفات" },
    cards: [
      { img: gasFillingImg2, title: { en: "Leak Detection & Gas Hookup", ar: "كشف التسريبات وتوصيل الغاز" }, desc: { en: "Connecting refrigerant cylinders and using UV dye to detect hidden leaks in the AC system before refilling the gas.", ar: "توصيل أسطوانات غاز التبريد واستخدام الصبغة الفوق بنفسجية لكشف التسريبات المخفية في نظام التكييف قبل إعادة تعبئة الغاز." }, alt: "AC gas filling and leak detection with UV dye" },
      { img: gasFillingImg3, title: { en: "Pressure Testing & Verification", ar: "اختبار الضغط والتحقق" }, desc: { en: "Monitoring pressure gauges during and after gas filling to ensure optimal refrigerant levels for your AC.", ar: "مراقبة مقاييس الضغط أثناء وبعد تعبئة الغاز لضمان مستويات مبرد مثالية لمكيفك." }, alt: "Checking AC pressure gauges after gas refill" }
    ]
  }
};

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
const fadeInLeft = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } };
const fadeInRight = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } };

const serviceIconMap = { FaWrench, FaSnowflake, FaWind, FaTshirt, FaFaucet, FaBolt, FaWater };

const getLocalized = (content, lang) => {
  if (typeof content === 'string') return content;
  if (typeof content === 'object' && content !== null) {
    return content[lang] || content.en || '';
  }
  return content;
};

const ServiceDetailPage = ({ slug }) => {
  const { lang } = useLang();
  const isAr = lang === 'ar';

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="text-center py-20 text-red-500 text-xl font-bold">
        Service not found for slug: {slug}
      </div>
    );
  }

  const promo = promoConfig[slug] || {};
  const hasPromo = !!promo.show;
  const promoDiscount = promo.discount || '30%';
  const showLocalProof = hasPromo && promo.showLocalProof;
  const heroImage = serviceImages[slug] || defaultServiceImg;

  const resolvedLocalProof = getLocalized(promo.localProof, lang);
  const resolvedPromoTitle = getLocalized(promo.promoTitle, lang);
  const resolvedPromoDesc = getLocalized(promo.promoDesc, lang);

  const Icon = serviceIconMap[service.iconName] || FaWrench;

  const fullDesc = getLocalized(service.fullDesc, lang);

  // Use dynamic 6-item features if available, otherwise fallback to default data
  const rawFeatures = dynamicFeatures[slug] || getLocalized(service.features, lang);
  const safeFeatures = Array.isArray(rawFeatures) ? rawFeatures.map(f => getLocalized(f, lang)) : [];

  const currentSeo = dynamicSeoText[slug] || {};

  const staticText = {
    home: isAr ? "الرئيسية" : "Home",
    services: isAr ? "الخدمات" : "Services",
    whatsIncluded: isAr ? "ما يتضمنه" : "What's Included",
    everythingCovered: isAr ? "كل ما يتضمنه هذه الخدمة" : "Everything covered in this service",
    brandsWeService: isAr ? "العلامات التجارية التي نخدمها" : "Brands We Service",
    compatibleBrands: isAr ? "العلامات التجارية المتوافقة" : "Compatible Brands",
    callNow: isAr ? "اتصل الآن واطلب خصم" : "Call Now & Claim",
    whatsappUs: isAr ? "تواصل واتساب" : "WhatsApp Us",
    fastResponse: isAr ? "استجابة سريعة" : "Fast Response",
    fullWarranty: isAr ? "ضمان كامل" : "Full Warranty",
    fullWarrantyDesc: isAr ? "ضمان مكتوب على جميع القطع وأجور العمالة" : "Written warranty on all parts and labor",
    expertTeam: isAr ? "فريق خبراء" : "Expert Team",
    ourWork: isAr ? "عملنا" : "Our Work",
    topRated: isAr ? "تقييم 5 نجوم" : "5-Star Rated",
    trustExp: isAr ? "خبرة +10 سنوات" : "10+ Yrs Experience",
    trustSameDay: isAr ? "خدمة نفس اليوم" : "Same Day Service",
    processTitle: isAr ? "كيف نعمل" : "How We Work"
  };

  const displayLocalProof = resolvedLocalProof || (isAr ? "خدمة سريعة في شمال الرياض" : "Fast Service in North Riyadh");
  const displayPromoTitle = resolvedPromoTitle || (isAr ? "عرض خاص للعملاء الجدد" : "Exclusive First-Time Offer");
  const displayPromoDesc = resolvedPromoDesc || (isAr ? "احصل على خصم 30% على أول خدمة!" : "Get 30% OFF your first service!");

  const displayIncludedTitle = getLocalized(currentSeo.includedTitle, lang) || staticText.everythingCovered;
  const displayBrandsText = getLocalized(currentSeo.brandsText, lang) || (isAr ? "فنيون معتمدون لإصلاح وصيانة جميع الموديلات والعلامات التجارية." : "Certified technicians equipped to repair and maintain all models and brands.");
  const displayFastDesc = getLocalized(currentSeo.fastDesc, lang) || (isAr ? "الفني عند بابك خلال 60 دقيقة" : "Technician at your door within 60 minutes");
  const displayExpertDesc = getLocalized(currentSeo.expertDesc, lang) || (isAr ? "محترفون معتمدون بخبرة تزيد عن 10 سنوات" : "Certified professionals with 10+ years experience");
  const displayProcessTitle = getLocalized(currentSeo.processTitle, lang) || (isAr ? "عملية خدمة بسيطة وسريعة" : "Simple & Fast Service Process");

  return (
    <main dir={isAr ? "rtl" : "ltr"} className="bg-brand-background overflow-x-hidden">

      {/* Section 1: The Stunning, High-Converting Hero */}
      <section className="bg-brand-primary py-16 md:py-24 relative overflow-hidden">
        {/* Removed the yellow blur background element here */}
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div variants={fadeInLeft} initial="hidden" animate="visible" transition={{ duration: 0.6 }} className={isAr ? "lg:order-2" : ""}>
            <nav className="text-brand-accent text-xs md:text-sm opacity-80 mb-6" dir="ltr">
              <Link to="/" className="hover:underline">{staticText.home}</Link>
              <span className="mx-2">&gt;</span>
              <Link to="/services" className="hover:underline">{staticText.services}</Link>
              <span className="mx-2">&gt;</span>
              <span className="text-white/60 capitalize">{slug.replace(/-/g, ' ')}</span>
            </nav>

            {showLocalProof && (
              <motion.div
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center gap-2 bg-brand-accent/10 border border-[#EF9F27]/40 text-brand-accent px-4 py-2 rounded-full text-sm font-bold mb-6"
              >
                <FaMapMarkerAlt className="text-[#EF9F27] text-base" />
                {displayLocalProof}
              </motion.div>
            )}

            <div className="flex items-center gap-4 mb-4">
              {/* Removed yellow drop shadow (shadow-[#EF9F27]/30) from the icon container */}
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="bg-[#EF9F27] p-4 rounded-2xl flex-shrink-0 shadow-lg"
              >
                <Icon className="text-white text-3xl" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">{service.title}</h1>
            </div>

            <p className="text-base md:text-lg text-brand-light/90 leading-relaxed max-w-xl mb-8">{fullDesc}</p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-8 pb-8 border-b border-white/10">
              <div className="flex items-center gap-2 text-white">
                <div className="flex text-[#EF9F27]"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                <span className="font-bold text-sm">{staticText.topRated}</span>
              </div>
              <div className="flex items-center gap-2 text-white/80"><FaShieldAlt className="text-[#EF9F27]" /><span className="font-medium text-sm">{staticText.trustExp}</span></div>
              <div className="flex items-center gap-2 text-white/80"><FaBolt className="text-[#EF9F27]" /><span className="font-medium text-sm">{staticText.trustSameDay}</span></div>
            </div>

            {hasPromo && (
              <motion.div
                variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.3, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="mb-8 bg-gradient-to-r from-[#EF9F27] to-[#e08e15] rounded-2xl p-6 shadow-xl flex items-center gap-5 cursor-pointer"
              >
                <div className="bg-white/20 p-4 rounded-xl flex-shrink-0"><FaTag className="text-white text-3xl" /></div>
                <div>
                  <p className="text-white/90 text-xs font-bold uppercase tracking-wider">{displayPromoTitle}</p>
                  <p className="text-white text-xl md:text-2xl font-extrabold mt-1">{displayPromoDesc}</p>
                </div>
              </motion.div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <motion.a
                href="tel:+966556380709"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="group flex-1 min-h-[56px] flex items-center justify-center gap-3 px-8 py-4 bg-white text-brand-primary font-extrabold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg text-lg"
              >
                <FaPhone className="group-hover:scale-110 transition-transform" /> {staticText.callNow} {hasPromo ? promoDiscount : ''}
              </motion.a>
              <motion.a
                href="https://wa.me/966556380709" target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="flex-1 min-h-[56px] flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-200 text-lg"
              >
                <FaWhatsapp className="text-xl" /> {staticText.whatsappUs}
              </motion.a>
            </div>
          </motion.div>

          <motion.div variants={fadeInRight} initial="hidden" animate="visible" transition={{ duration: 0.7, delay: 0.2 }} className={`w-full relative ${isAr ? "lg:mr-auto lg:ml-0" : "lg:ml-auto lg:mr-0"}`}>
            <motion.div
              animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <img src={heroImage} alt={isAr ? `${service.title} في الرياض` : `${service.title} in Riyadh`} loading="lazy" className="w-full rounded-3xl object-cover h-[450px] md:h-[550px] shadow-2xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent rounded-3xl"></div>

              {hasPromo && (
                <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 0.5 }} className="absolute top-6 right-6">
                  <div className="bg-red-600 text-white px-3 py-1.5 rounded-l-lg shadow-lg flex items-center gap-1.5 border border-red-500">
                    <span className="text-xl md:text-2xl font-extrabold leading-none">{promoDiscount}</span>
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider">OFF</span>
                  </div>
                </motion.div>
              )}

              <div className="absolute -bottom-6 left-8 bg-white p-4 rounded-2xl shadow-xl hidden md:flex items-center gap-3 border border-gray-100">
                <div className="bg-green-100 p-3 rounded-xl"><FaShieldAlt className="text-green-600 text-xl" /></div>
                <div>
                  <p className="text-brand-primary font-bold text-sm">{staticText.fullWarranty}</p>
                  <p className="text-gray-500 text-xs">{staticText.fullWarrantyDesc}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* REDESIGNED SECTION 2: What's Included & Brands (Dark vs Light Split) */}
      {/* ==================================================================== */}
      <section className="bg-brand-background py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Features (Left - 7 cols) */}
          <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-7">
            <span className="text-brand-accent font-bold text-xs tracking-widest uppercase">{staticText.whatsIncluded}</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-brand-primary">{displayIncludedTitle}</h2>
            <div className="w-16 h-1.5 bg-[#EF9F27] mt-4 rounded-full mb-10" />

            {/* Changed to grid-cols-2 so it displays 2 columns on mobile as well */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {safeFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  className="group bg-white p-4 sm:p-6 rounded-2xl border border-gray-100 transition-all duration-300"
                >
                  {/* Adjusted layout to stack icon above text on mobile for better fit */}
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                    <div className="bg-gradient-to-br from-[#EF9F27] to-[#e08e15] p-2.5 sm:p-3 rounded-xl flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300 w-max">
                      <FaCheckCircle className="text-white text-lg sm:text-xl" />
                    </div>
                    <span className="text-brand-primary text-sm sm:text-base font-semibold sm:pt-1 leading-snug">{feature}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Brands (Right - 5 cols) - Dark Premium Card */}
          <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-5">
            <div className="bg-brand-primary rounded-3xl p-8 md:p-10 shadow-xl border border-[#EF9F27]/20 sticky top-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#EF9F27]/10 rounded-full blur-3xl"></div>
              <span className="text-[#EF9F27] font-bold text-xs tracking-widest uppercase relative z-10">{staticText.brandsWeService}</span>
              <h2 className="mt-3 text-2xl md:text-3xl font-extrabold text-white relative z-10">{staticText.compatibleBrands}</h2>
              <div className="w-16 h-1.5 bg-[#EF9F27] mt-4 rounded-full mb-8 relative z-10" />

              <div className="grid grid-cols-2 gap-4 relative z-10">
                {(Array.isArray(service.brands) ? service.brands : []).map((brand, index) => (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 text-white text-sm font-bold py-4 px-4 rounded-xl text-center hover:border-[#EF9F27] hover:text-[#EF9F27] hover:bg-[#EF9F27]/10 transition-all duration-300 flex items-center justify-center cursor-default"
                  >
                    {brand}
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4 relative z-10">
                <FaShieldAlt className="text-[#EF9F27] text-3xl flex-shrink-0" />
                <p className="text-white/80 text-sm font-medium leading-relaxed">{displayBrandsText}</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Dynamic Image Gallery for ALL Services */}
      {galleryConfig[slug] && (
        <section className="bg-white py-20 md:py-24 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-8">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
              <span className="text-brand-accent font-bold text-xs tracking-widest uppercase">{staticText.ourWork}</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-brand-primary">{getLocalized(galleryConfig[slug].title, lang)}</h2>
              <div className="w-16 h-1.5 bg-[#EF9F27] mt-4 mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {galleryConfig[slug].cards.map((card, index) => (
                <motion.div
                  key={index}
                  variants={index === 0 ? fadeInLeft : fadeInRight}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-3xl shadow-xl cursor-pointer h-[450px] md:h-[550px]"
                >
                  <img src={card.img} alt={card.alt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/60 to-transparent flex flex-col justify-end p-8 text-white">
                    <h3 className="text-2xl md:text-3xl font-extrabold drop-shadow-lg mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">{getLocalized(card.title, lang)}</h3>
                    <p className="text-white/85 text-sm md:text-base leading-relaxed opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-40 transition-all duration-500 ease-out overflow-hidden">
                      {getLocalized(card.desc, lang)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ==================================================================== */}
      {/* NEW SECTION: Service Process (How We Work) - No Numbers, Sleek UI     */}
      {/* ==================================================================== */}
      {currentSeo.step1 && (
        <section className="bg-brand-background py-20 md:py-24 border-t border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#EF9F27]/5 rounded-full blur-3xl"></div>
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
            <div className="text-center mb-16">
              <span className="text-brand-accent font-bold text-xs tracking-widest uppercase">{staticText.processTitle}</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-brand-primary">{displayProcessTitle}</h2>
              <div className="w-16 h-1.5 bg-[#EF9F27] mt-4 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {[
                { icon: FaSearch, step: currentSeo.step1 },
                { icon: FaCogs, step: currentSeo.step2 },
                { icon: FaClipboardCheck, step: currentSeo.step3 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:border-[#EF9F27]/30 transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-[#EF9F27] to-[#e08e15] text-white rounded-2xl flex items-center justify-center text-2xl font-extrabold mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 relative z-10">
                    <item.icon className="text-3xl" />
                  </div>
                  <h3 className="text-brand-primary text-xl font-extrabold mb-3 relative z-10">{getLocalized(item.step, lang)}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed relative z-10">{isAr ? item.step.desc_ar : item.step.desc_en}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* ==================================================================== */}

      {/* Section 3: Why Choose Us */}
      <section className="bg-brand-primary py-20 md:py-24 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#EF9F27]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <div className="text-center mb-16">
            <span className="text-brand-accent font-bold text-xs tracking-widest uppercase">{isAr ? "لماذا نحن" : "Why Choose Us"}</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-white">{isAr ? "نحن نلتزم بالتميز" : "Committed to Excellence"}</h2>
            <div className="w-16 h-1.5 bg-[#EF9F27] mt-4 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: FaClock, title: staticText.fastResponse, desc: displayFastDesc },
              { icon: FaShieldAlt, title: staticText.fullWarranty, desc: staticText.fullWarrantyDesc },
              { icon: FaTools, title: staticText.expertTeam, desc: displayExpertDesc },
            ].map((reason, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ scale: 1.03, borderColor: "rgba(239, 159, 39, 0.4)" }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center transition-all duration-300 relative group"
              >
                <div className="inline-block bg-[#EF9F27]/10 p-5 rounded-2xl mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="text-[#EF9F27] text-3xl" />
                </div>
                <h3 className="text-white text-xl font-bold mb-3 relative z-10">{reason.title}</h3>
                <p className="text-brand-light/80 text-sm leading-relaxed relative z-10">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
};

export default ServiceDetailPage;