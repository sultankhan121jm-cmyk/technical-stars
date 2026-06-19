import { useLang } from "../contexts/LanguageContext";

const LangToggle = () => {
  const { lang, toggleLang } = useLang();
  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-1.5 min-h-[44px] px-3 rounded-lg text-gray-500 hover:text-brand-blue hover:bg-brand-blue/[0.04] transition-all duration-200"
      aria-label={lang === "en" ? "Switch to Arabic" : "Switch to English"}
    >
      <span className={`text-[12px] font-medium transition-colors ${lang === "en" ? "text-brand-blue" : "text-gray-400"}`}>EN</span>
      <span className="text-gray-300 text-[10px]">|</span>
      <span className={`text-[12px] font-medium transition-colors ${lang === "ar" ? "text-brand-blue" : "text-gray-400"}`}>عر</span>
    </button>
  );
};

export default LangToggle;
