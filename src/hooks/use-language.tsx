
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('es');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const storedLang = localStorage.getItem('language') as Language | null;
    if (storedLang && ['en', 'es'].includes(storedLang)) {
      setLanguageState(storedLang);
    }
    setIsMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    localStorage.setItem('language', lang);
    setLanguageState(lang);
  };
  
  if (!isMounted) {
    return null; 
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
