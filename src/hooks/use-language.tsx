
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Países de habla hispana
const SPANISH_SPEAKING_COUNTRIES = [
  'ES', // España
  'MX', // México
  'AR', // Argentina
  'CO', // Colombia
  'CL', // Chile
  'PE', // Perú
  'VE', // Venezuela
  'EC', // Ecuador
  'GT', // Guatemala
  'CU', // Cuba
  'BO', // Bolivia
  'DO', // República Dominicana
  'HN', // Honduras
  'PY', // Paraguay
  'SV', // El Salvador
  'NI', // Nicaragua
  'CR', // Costa Rica
  'PA', // Panamá
  'UY', // Uruguay
  'PR', // Puerto Rico
];

// Función para obtener el país del visitante usando una API gratuita
const getUserCountry = async (): Promise<string | null> => {
  try {
    // Usamos ipapi.co que es gratuita y no requiere API key
    const response = await fetch('https://ipapi.co/json/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch country');
    }

    const data = await response.json();
    return data.country_code || null;
  } catch (error) {
    console.error('Error detecting country:', error);
    return null;
  }
};

// Función para detectar el idioma basado en el país
const detectLanguageFromCountry = async (): Promise<Language> => {
  const countryCode = await getUserCountry();
  
  if (countryCode && SPANISH_SPEAKING_COUNTRIES.includes(countryCode)) {
    return 'es';
  }
  
  // Por defecto, inglés
  return 'en';
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('es');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const initializeLanguage = async () => {
      // Primero, verificar si hay un idioma guardado en localStorage
      const storedLang = localStorage.getItem('language') as Language | null;
      
      if (storedLang && ['en', 'es'].includes(storedLang)) {
        // Si hay un idioma guardado, usarlo (preferencia del usuario)
        setLanguageState(storedLang);
        setIsMounted(true);
        return;
      }

      // Si no hay idioma guardado, detectar automáticamente
      try {
        const detectedLang = await detectLanguageFromCountry();
        setLanguageState(detectedLang);
        // Guardar el idioma detectado para próximas visitas
        localStorage.setItem('language', detectedLang);
      } catch (error) {
        console.error('Error detecting language:', error);
        // En caso de error, usar español por defecto
        setLanguageState('es');
      } finally {
        setIsMounted(true);
      }
    };

    initializeLanguage();
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
