import { useLang } from "../contexts/LanguageContext";

const LangToggle = () => {
  const { lang, toggleLang } = useLang();

  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-1.5 min-h-[44px] px-3 rounded-lg border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-200"
      aria-label={lang === "en" ? "Switch to Arabic" : "Switch to English"}
    >
      <span className={`text-sm font-medium transition-colors duration-200 ${lang === "en" ? "text-white" : "text-white/50"}`}>
        English
      </span>
      <span className="text-white/30 text-xs">/</span>
      <span className={`text-sm font-medium transition-colors duration-200 ${lang === "ar" ? "text-white" : "text-white/50"}`}>
        العربية
      </span>
    </button>
  );
};

export default LangToggle;
