import './style.scss';

type Language = 'en' | 'sv';

const translations = {
  en: {
    jobTitle: 'Front-end Developer',
    downloadCv: 'Download CV',
    languages: 'Languages',
    englishLevel: 'English - fluent',
    swedishLevel: 'Swedish - fluent',
    russianLevel: 'Russian - native',
    education: 'Education',
    bachelorDegree: "Bachelor's Degree in Management and Economics",
    masterDegree: "Master's Degree in Economics and Management",
    frontendCourse: 'JavaScript / React Frontend Developer',
    workExperience: 'Work Experience',
    accountManager: 'Account Manager',
    accountExperience: 'Key Responsibilities:',
    accountTask1: 'Managed client relationships and daily communication.',
    accountTask2: 'Prepared commercial proposals and project briefs.',
    accountTask3: 'Participated in client meetings and negotiations.',
    accountTask4:
      'Coordinated work between project teams and external partners.',
    accountTask5: 'Monitored advertising campaign performance and KPIs.',
    accountTask6:
      'Analyzed campaign results using Google Analytics, Yandex Metrica, and audit tools.',
    studentTitle: 'Student Frontend Developer',
    developmentExperience: 'Development Experience:',
    task1: 'Developing application code',
    task2: 'Debugging and resolving technical issues',
    task3: 'Reviewing and validating code for correctness and quality',
    task4: 'Refactoring and improving existing codebases',
    task5: 'Optimizing code for better performance and readability',
    projects: 'Projects',
    movieDescription:
      'Implemented movie search, filtering, pagination, detailed movie information, API integration and internationalization with next-intl',
    movieStack: 'Stack: React, TypeScript, Next.js, next-intl',
    swaggerDescription:
      'React application for editing and testing OpenAPI specifications. Implemented authentication, API request execution, Swagger Editor/Viewer, request history, analytics, and responsive UI.',
    swaggerStack: 'Stack: React, TypeScript, Next.js, Vite',
    nonogramsDescription:
      'Interactive puzzle game built with Vanilla JavaScript, featuring dynamic game logic, user interactions, and responsive UI.',
    nonogramsStack: 'Stack: JavaScript, HTML, CSS',
    liveDemo: 'Live Demo',
    certificates: 'Certificates',
    techStack: 'Tech Stack',
  },
  sv: {
    jobTitle: 'Front-end utvecklare',
    downloadCv: 'Ladda ner CV',
    languages: 'Språkkunskaper',
    englishLevel: 'Engelska – flytande',
    swedishLevel: 'Svenska – flytande',
    russianLevel: 'Ryska – modersmål',
    education: 'Utbildning',
    bachelorDegree: 'Kandidatexamen i management och ekonomi',
    masterDegree: 'Masterexamen i ekonomi och management',
    frontendCourse: 'JavaScript / React – frontendutvecklare',
    workExperience: 'Arbetslivserfarenhet',

    accountManager: 'Kundansvarig',
    accountExperience: 'Huvudsakliga arbetsuppgifter:',
    accountTask1: 'Ansvarade för kundrelationer och daglig kundkommunikation.',
    accountTask2: 'Tog fram kommersiella offerter och projektbeskrivningar.',
    accountTask3: 'Deltog i kundmöten och förhandlingar.',
    accountTask4:
      'Samordnade arbetet mellan projektteam och externa samarbetspartner.',
    accountTask5: 'Följde upp annonskampanjers resultat och KPI:er',
    accountTask6:
      'Analyserade kampanjresultat med hjälp av Google Analytics, Yandex Metrica och verktyg för annonsgranskning.',

    studentTitle: 'Frontendutvecklare under utbildning',
    developmentExperience: 'Utvecklingserfarenhet:',
    task1: 'Utveckling av applikationskod',
    task2: 'Felsökning och lösning av tekniska problem',
    task3: 'Granskning och validering av kodens korrekthet och kvalitet',
    task4: 'Refaktorering och förbättring av befintlig kod',
    task5: 'Optimering av kod för bättre prestanda och läsbarhet',
    projects: 'Projekt',
    movieDescription:
      'Implementerade filmsökning, filtrering, sidindelning, detaljerad filminformation, API-integration och internationalisering med next-intl.',
    movieStack: 'Teknikstack: React, TypeScript, Next.js, next-intl',
    swaggerDescription:
      'React-applikation för att redigera och testa OpenAPI-specifikationer. Implementerade autentisering, körning av API-anrop, Swagger Editor/Viewer, historik över anrop, analys och responsivt gränssnitt.',
    swaggerStack: 'Teknikstack: React, TypeScript, Next.js, Vite',
    nonogramsDescription:
      'Interaktivt pusselspel byggt med Vanilla JavaScript, med dynamisk spellogik, användarinteraktioner och responsivt gränssnitt.',
    nonogramsStack: 'Teknikstack: JavaScript, HTML, CSS',
    liveDemo: 'Live-demo',
    certificates: 'Certifikat',
    techStack: 'Teknikstack',
  },
} satisfies Record<Language, Record<string, string>>;

type TranslationKey = keyof typeof translations.en;

const languageButtons =
  document.querySelectorAll<HTMLButtonElement>('.language-btn');

function setLanguage(language: Language): void {
  document.documentElement.lang = language;

  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n as TranslationKey;

    if (key && key in translations[language]) {
      element.textContent = translations[language][key];
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;

    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const language = button.dataset.lang;

    if (language === 'en' || language === 'sv') {
      setLanguage(language);
    }
    const cvLink = document.querySelector<HTMLAnchorElement>('#download-cv');

    if (cvLink) {
      cvLink.href =
        language === 'sv'
          ? '/Alexandra_Redkova_CV_SV.pdf'
          : '/Alexandra_Redkova_CV_EN.pdf';
    }
  });
});
