import { useLang } from "../contexts/LanguageContext";

const LangToggle = () => {
  const { lang, toggleLang } = useLang();

  return (
    <div className="flex items-center gap-3 select-none">
      {/* Left Label */}
      <span
        className={`text-xs font-serif tracking-wider transition-colors duration-300 ${lang === "en"
            ? "text-slate-900 dark:text-white font-bold"
            : "text-slate-400 dark:text-slate-600"
          }`}
      >
        ENGLISH
      </span>

      {/* Center Small Oval Switch */}
      <button
        onClick={toggleLang}
        className="relative flex items-center h-6 w-14 bg-slate-900 dark:bg-slate-800 rounded-full p-[2px] cursor-pointer border border-slate-950 shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.6)] overflow-hidden"
        aria-label={lang === "en" ? "Switch to Arabic" : "Switch to English"}
      >
        {/* Elastic Fluid Slide Puck */}
        <div
          className={`absolute top-[2px] bottom-[2px] h-[20px] rounded-full transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center justify-center group-active:w-[26px] ${lang === "ar"
              ? "left-[calc(100%-22px)] w-[20px] bg-amber-400 shadow-[0_1px_3px_rgba(0,0,0,0.4)] group-active:left-[calc(100%-28px)]"
              : "left-[2px] w-[20px] bg-sky-400 shadow-[0_1px_3px_rgba(0,0,0,0.4)]"
            }`}
        >
          {/* Inner Mini Glyphs */}
          <span className="text-[10px] font-black text-slate-950 leading-none transition-transform duration-300">
            {lang === "en" ? "E" : "ع"}
          </span>
        </div>
      </button>

      {/* Right Label */}
      <span
        className={`text-sm font-serif transition-colors duration-300 ${lang === "ar"
            ? "text-slate-900 dark:text-white font-bold"
            : "text-slate-400 dark:text-slate-600"
          }`}
      >
        العربية
      </span>
    </div>
  );
};

export default LangToggle;