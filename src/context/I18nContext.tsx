import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ru';

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.resources': 'Resources',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',
    
    // Home Hero
    'home.hero.title': 'Financial Clarity That Helps Your Business Grow, Scale, and Raise Capital Confidently',
    'home.hero.subtitle': 'Turn Uncertainty into Insight and Make Every Decision with Confidence.',
    'home.hero.cta': 'Get Your Financial Assessment',
    
    // Home Section 2
    'home.s2.title': 'Running a Business Without Financial Clarity Is Risky. We Fix\u00A0That.',
    'home.s2.desc': 'Most growing companies struggle with:',
    'home.s2.list1': 'Unclear financial reporting',
    'home.s2.list2': 'Cash flow uncertainty',
    'home.s2.list3': 'Inaccurate forecasting',
    'home.s2.list4': 'Capital-unready financials',
    'home.s2.list5': 'Lack of strategic guidance',
    'home.s2.conclusion': 'FV Partners becomes your strategic finance partner - giving you the structure, insight, and leadership needed to scale confidently and make smarter business decisions.',
    'home.s2.cta': 'Discover More',

    // Home Section 3
    'home.s3.title': 'Take Control of Your Financial Future Today',
    'home.s3.subtitle': 'From accurate books to actionable insights, we help growing businesses make confident decisions and scale smarter.',
    'home.s3.cta': 'Book Your Free Consultation',
    
    // More keys can be added here...
  },
  ru: {
    // Nav
    'nav.home': 'Главная',
    'nav.about': 'О Нас',
    'nav.services': 'Услуги',
    'nav.resources': 'Ресурсы',
    'nav.contact': 'Контакты',
    'nav.getStarted': 'Начать',
    
    // Home Hero
    'home.hero.title': 'Финансовая ясность, помогающая вашему бизнесу расти, масштабироваться и уверенно привлекать капитал',
    'home.hero.subtitle': 'Превратите неопределенность в понимание и принимайте каждое решение с уверенностью.',
    'home.hero.cta': 'Получить финансовую оценку',
    
    // Home Section 2
    'home.s2.title': 'Вести бизнес без финансовой ясности рискованно. Мы это\u00A0исправляем.',
    'home.s2.desc': 'Большинство растущих компаний сталкиваются с:',
    'home.s2.list1': 'Непонятной финансовой отчетностью',
    'home.s2.list2': 'Неопределенностью денежных потоков',
    'home.s2.list3': 'Неточным прогнозированием',
    'home.s2.list4': 'Неготовностью финансов к привлечению капитала',
    'home.s2.list5': 'Отсутствием стратегического руководства',
    'home.s2.conclusion': 'FV Partners становится вашим стратегическим финансовым партнером - предоставляя структуру, понимание и лидерство, необходимые для уверенного масштабирования и принятия более разумных бизнес-решений.',
    'home.s2.cta': 'Узнать больше',

    // Home Section 3
    'home.s3.title': 'Возьмите под контроль свое финансовое будущее сегодня',
    'home.s3.subtitle': 'От точной бухгалтерии до практических выводов, мы помогаем растущим предприятиям принимать уверенные решения и масштабироваться умнее.',
    'home.s3.cta': 'Записаться на бесплатную консультацию',
  }
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('en');

  const t = (key: string): string => {
    // @ts-ignore
    return translations[lang][key] || key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
