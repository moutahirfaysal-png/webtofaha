import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Language } from './i18n';
import { DEFAULT_LANGUAGE, isRTL } from './i18n';

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    const stored = localStorage.getItem('riad_lang') as Language | null;
    return stored || DEFAULT_LANGUAGE;
  });

  const dir: 'ltr' | 'rtl' = isRTL(lang) ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    localStorage.setItem('riad_lang', lang);
  }, [lang, dir]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
