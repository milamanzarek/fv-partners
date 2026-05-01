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
    'home.hero.title': 'Financial Clarity That Helps Your Business Grow, Scale, and Raise Capital\u00A0Confidently',
    'home.hero.subtitle': 'Turn Uncertainty into Insight and Make Every Decision with\u00A0Confidence.',
    'home.hero.cta': 'Get Your Financial Assessment',
    
    // Home Section 2
    'home.s2.title': 'Running a Business Without Financial Clarity Is Risky. We Fix\u00A0That.',
    'home.s2.desc': 'Most growing companies struggle with:',
    'home.s2.list1': 'Unclear financial reporting',
    'home.s2.list2': 'Cash flow uncertainty',
    'home.s2.list3': 'Inaccurate forecasting',
    'home.s2.list4': 'Capital-unready financials',
    'home.s2.list5': 'Lack of strategic guidance',
    'home.s2.conclusion': 'FV Partners becomes your strategic finance partner - giving you the structure, insight, and leadership needed to scale confidently and make smarter business\u00A0decisions.',
    'home.s2.cta': 'Discover More',

    // Home Section 3
    'home.s3.title': 'Take Control of Your Financial Future\u00A0Today',
    'home.s3.subtitle': 'From accurate books to actionable insights, we help growing businesses make confident decisions and scale\u00A0smarter.',
    'home.s3.cta': 'Book Your Free Consultation',
    
    // Home Trust Carousel
    'home.carousel.title': 'COMPANIES THAT TRUST FV PARTNERS',

    // Home Reviews
    'home.reviews.title': 'REAL RESULTS FOR REAL BUSINESSES',
    'home.reviews.placeholder1': '"FV Partners prepared our company for fundraising in record time. The investor-ready financials and precise forecasting made pitching easy and boosted investor confidence immediately."',
    // NotFound
    '404.title': 'Page Not Found',
    '404.desc': 'The page you are looking for does not exist.',
    '404.body1': "We couldn't locate the page you're looking for.",
    '404.body2': 'It might have been moved or the URL may be incorrect.',
    '404.home': 'Return Home',
    '404.contact': 'Contact Support',

    // GeoTemplate static strings
    'geo.serving': 'Serving',
    'geo.strategic': 'Strategic',
    'geo.for': 'for',
    'geo.why': 'Why',
    'geo.businesses_choose': 'businesses choose FV Partners',
    'geo.intro1': 'In a dynamic market like',
    'geo.intro2': ', especially for',
    'geo.intro3': ', off-the-shelf financial solutions fall short. You need a dedicated partner who understands the local economic landscape.',
    'geo.customized': 'Customized\u00A0Approach',
    'geo.approach1': 'Our',
    'geo.approach2': 'approach is completely customized. We go beyond basic compliance to deliver structured reporting and accurate forecasting.',
    'geo.fed_auth': 'Federal\u00A0Authorization',
    'geo.cta_title': 'READY TO ELEVATE YOUR\u00A0BUSINESS?',
    'geo.cta_body': 'Book your complimentary consultation and discover how FV Partners can help you\u00A0scale.',
    'geo.cta_btn': 'Schedule\u00A0Diagnostic',
    'geo.growth': 'Strategic Financial\u00A0Growth',
    'geo.providing': 'Providing uncompromising financial architecture tailored for',
    'geo.operating': 'operating in',
    'geo.advisory': 'Comprehensive Financial\u00A0Advisory',
    'geo.view': 'View Details',
    'geo.cta_hub_title': 'READY TO ELEVATE YOUR',
    'geo.cta_hub_title2': 'BUSINESS?',
    'geo.get_started': 'Get Started',
    'geo.elite': 'We bring elite quantitative modeling and operational clarity to businesses operating in',
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
    'home.s3.title': 'Возьмите контроль над своим финансовым будущим\u00A0сегодня',
    'home.s3.subtitle': 'От точного бухгалтерского учета до действенных идей — мы помогаем растущему бизнесу принимать уверенные решения и разумно\u00A0масштабироваться.',
    'home.s3.cta': 'Записаться на бесплатную консультацию',

    // Home Trust Carousel
    'home.carousel.title': 'КОМПАНИИ, ДОВЕРЯЮЩИЕ FV PARTNERS',

    // Home Reviews
    'home.reviews.title': 'РЕАЛЬНЫЕ РЕЗУЛЬТАТЫ ДЛЯ РЕАЛЬНОГО БИЗНЕСА',
    'home.reviews.placeholder1': '"FV Partners подготовили нашу компанию к привлечению инвестиций в рекордно короткие сроки. Финансовая отчетность инвестиционного уровня и точное прогнозирование значительно упростили презентацию и сразу же повысили доверие инвесторов."',
    
    // NotFound
    '404.title': 'Страница не найдена',
    '404.desc': 'Страница, которую вы ищете, не существует.',
    '404.body1': 'Мы не смогли найти страницу, которую вы ищете.',
    '404.body2': 'Возможно, она была перемещена или URL-адрес неверен.',
    '404.home': 'Вернуться на главную',
    '404.contact': 'Служба поддержки',

    // GeoTemplate static strings
    'geo.serving': 'Обслуживаем г.',
    'geo.strategic': 'Стратегический',
    'geo.for': 'для',
    'geo.why': 'Почему бизнес в г.',
    'geo.businesses_choose': 'выбирает FV Partners',
    'geo.intro1': 'На таком динамичном рынке, как',
    'geo.intro2': ', особенно для',
    'geo.intro3': ', стандартные финансовые решения не подходят. Вам нужен преданный партнер, понимающий местную экономическую ситуацию.',
    'geo.customized': 'Индивидуальный\u00A0подход',
    'geo.approach1': 'Наш подход\u00A0к',
    'geo.approach2': 'полностью индивидуален. Мы выходим за рамки базового соответствия требованиям, предоставляя структурированную отчетность и точное\u00A0прогнозирование.',
    'geo.fed_auth': 'Федеральная\u00A0лицензия',
    'geo.cta_title': 'ГОТОВЫ МАСШТАБИРОВАТЬ ВАШ\u00A0БИЗНЕС?',
    'geo.cta_body': 'Запишитесь на бесплатную консультацию и узнайте, как FV Partners может помочь вам\u00A0масштабироваться.',
    'geo.cta_btn': 'Запланировать\u00A0диагностику',
    'geo.growth': 'Стратегический финансовый\u00A0рост',
    'geo.providing': 'Предоставление бескомпромиссной финансовой архитектуры, адаптированной\u00A0для',
    'geo.operating': 'работающих\u00A0в\u00A0г.',
    'geo.advisory': 'Комплексный финансовый\u00A0консалтинг',
    'geo.view': 'Подробнее',
    'geo.cta_hub_title': 'ГОТОВЫ МАСШТАБИРОВАТЬ БИЗНЕС В Г.',
    'geo.cta_hub_title2': '?',
    'geo.get_started': 'Начать',
    'geo.elite': 'Мы приносим элитное количественное моделирование и операционную ясность предприятиям, работающим в',

    // GeoMatrix mappings
    'Burbank': 'Бербанк',
    'Glendale': 'Глендейл',
    'Agoura Hills': 'Агура-Хиллз',
    'Thousand Oaks': 'Саузенд-Окс',
    'Pasadena': 'Пасадена',
    'Santa Clarita': 'Санта-Кларита',
    'Westlake Village': 'Уэстлейк-Виллидж',
    'El Segundo': 'Эль-Сегундо',
    'Culver City': 'Калвер-Сити',
    'Torrance': 'Торранс',
    'Santa Monica': 'Санта-Моника',
    'Los Angeles': 'Лос-Анджелес',
    
    'Creative Agencies & Media': 'Креативные агентства и медиа',
    'Professional Services': 'Профессиональные услуги',
    'Tech & Consulting': 'ИТ и консалтинг',
    'Biotech & Retail': 'Биотехнологии и ритейл',
    'Tech Startups & Medical': 'ИТ-стартапы и медицина',
    'Construction & Logistics': 'Строительство и логистика',
    'High-Wealth Consultancies': 'Консалтинг для крупного капитала',
    'Aerospace & Clean Energy': 'Аэрокосмическая отрасль и чистая энергия',
    'Content Creators & Post-Production': 'Создатели контента и постпродакшн',
    'Manufacturing & Import/Export': 'Производство и импорт/экспорт',
    'VC-Backed Startups & SaaS': 'Стартапы с венчурным капиталом и SaaS',
    'Small Businesses & Entrepreneurs': 'Малый бизнес и предприниматели',

    'the entertainment capital': 'столице развлечений',
    'the corporate hub': 'корпоративном центре',
    'the 101 tech corridor': 'технологическом коридоре 101',
    'the biotech hub': 'центре биотехнологий',
    'the innovation center': 'центре инноваций',
    'the expanding valley': 'развивающейся долине',
    'the premier business district': 'главном деловом районе',
    'the tech and defense hub': 'центре технологий и обороны',
    'the creative epicenter': 'творческом эпицентре',
    'the industrial powerhouse': 'промышленном центре',
    'Silicon Beach': 'Кремниевом пляже',
    'the greater LA area': 'большом Лос-Анджелесе',

    'Fractional CFO': 'Внештатный финансовый директор (CFO)',
    'Catch-up Bookkeeping': 'Восстановление бухгалтерии',
    'Payroll & Compliance': 'Расчет зарплаты и комплаенс',
    'Business Tax Planning': 'Налоговое планирование для бизнеса',
    'Inventory & Cost Accounting': 'Учет запасов и затрат',

    'Strategic scenario planning, cash flow forecasting, and advisory services to help you survive tighter lending markets and scale profitably.': 'Стратегическое планирование сценариев, прогнозирование денежных потоков и консультационные услуги, которые помогут вам выжить на ужесточающихся кредитных рынках и масштабироваться с прибылью.',
    'Clean-up services for businesses that need to get their books audit-ready and capital-ready immediately.': 'Услуги по очистке и восстановлению бухгалтерии для предприятий, которым необходимо немедленно подготовить свои книги к аудиту и привлечению капитала.',
    'Strict payroll management protecting California businesses against EDD audits and AB5 misclassification risks.': 'Строгое управление заработной платой, защищающее калифорнийские предприятия от аудитов EDD и рисков неправильной классификации по AB5.',
    'Year-round proactive tax strategy to minimize liabilities and optimize your structure.': 'Круглогодичная проактивная налоговая стратегия для минимизации обязательств и оптимизации вашей структуры.',
    'Precise margin analysis and cost tracking essential for e-commerce, manufacturing, and wholesale businesses.': 'Точный анализ рентабельности и отслеживание затрат, необходимые для предприятий электронной коммерции, производства и оптовой торговли.',

    'As IRS Authorized Enrolled Agents (EA), we are federally licensed to represent taxpayers and sign returns.': 'Как авторизованные агенты IRS (EA), мы имеем федеральную лицензию на представление интересов налогоплательщиков и подписание деклараций.',
  }
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');
    if (urlLang === 'ru' || urlLang === 'en') return urlLang;
    return 'en';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    const url = new URL(window.location.href);
    url.searchParams.set('lang', newLang);
    window.history.pushState({}, '', url);
  };

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
