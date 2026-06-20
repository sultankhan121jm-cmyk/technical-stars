import { useLang } from "../contexts/LanguageContext";

const LangToggle = () => {
  const { lang, toggleLang } = useLang();
  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-1.5 min-h-[44px] px-3 rounded-lg text-white/50 hover:text-white transition-all duration-200"
      aria-label={lang === "en" ? "Switch to Arabic" : "Switch to English"}
    >
      <span className={`text-[12px] font-medium transition-colors ${lang === "en" ? "text-white" : "text-white/40"}`}>ENGLISH</span>
      <span className="text-white/20 text-[10px]">|</span>
      <span className={`text-[12px] font-medium transition-colors ${lang === "ar" ? "text-white" : "text-white/40"}`}>عربي</span>
    </button>
  );
};

export default LangToggle;