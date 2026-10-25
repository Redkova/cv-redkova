export type Language = 'en' | 'sv';

export const translations = {
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
    javascriptCourse: 'JavaScript / Frontend Developer',
    reactCourse: 'React Developer',
    workExperience: 'Work Experience',
    accountManager: 'Account Manager',
    accountExperience: 'Key Responsibilities:',
    accountTask1: 'Managed client relationships and daily communication',
    accountTask2: 'Prepared commercial proposals and project briefs',
    accountTask3: 'Participated in client meetings and negotiations',
    accountTask4:
      'Coordinated work between project teams and external partners',
    accountTask5: 'Monitored advertising campaign performance and KPIs',
    accountTask6:
      'Analyzed campaign results using Google Analytics, Yandex Metrica, and audit tools',
    studentTitle: 'Student Frontend Developer',
    developmentExperience: 'Development Experience:',
    task1:
      'Developing application features using JavaScript, TypeScript, and React',
    task2: 'Building responsive and interactive user interfaces',
    task3:
      'Writing and reviewing code with a focus on correctness, readability, and maintainability',
    task4: 'Debugging and resolving technical issues',
    task5: 'Collaborating with team members on development projects',
    task6: 'Integrating REST APIs',
    task7: 'Implementing routing, state management, and form validation',
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
    jobTitle: 'Frontendutvecklare',
    downloadCv: 'Ladda ner CV',
    languages: 'Språkkunskaper',
    englishLevel: 'Engelska – flytande',
    swedishLevel: 'Svenska – flytande',
    russianLevel: 'Ryska – modersmål',
    education: 'Utbildning',
    bachelorDegree: 'Kandidatexamen i management och ekonomi',
    masterDegree: 'Masterexamen i ekonomi och management',
    javascriptCourse: 'JavaScript frontendutvecklare',
    reactCourse: 'React utvecklare',
    workExperience: 'Arbetslivserfarenhet',

    accountManager: 'Kundansvarig',
    accountExperience: 'Huvudsakliga arbetsuppgifter:',
    accountTask1:
      'Ansvarade för kundrelationer och den dagliga kommunikationen med kunder',
    accountTask2: 'Tog fram kommersiella offerter och projektbeskrivningar',
    accountTask3: 'Deltog i kundmöten och affärsförhandlingar',
    accountTask4:
      'Samordnade arbetet mellan projektteam och externa samarbetspartner',
    accountTask5: 'Följde upp annonskampanjers resultat och KPI:er',
    accountTask6:
      'Analyserade kampanjresultat med hjälp av Google Analytics, Yandex Metrica och verktyg för annonsgranskning',

    studentTitle: 'Frontendutvecklare under utbildning',
    developmentExperience: 'Utvecklingserfarenhet:',
    task1:
      'Utveckling av nya funktioner i applikationer med JavaScript, TypeScript och React',
    task2: 'Utveckling av responsiva och interaktiva användargränssnitt',
    task3:
      'Skrivning och granskning av kod med fokus på korrekthet, läsbarhet och långsiktig underhållbarhet',
    task4: 'Felsökning och åtgärdande av tekniska problem',
    task5: 'Samarbete med teammedlemmar i utvecklingsprojekt',
    task6: 'Integration av REST-API:er',
    task7:
      'Implementering av routning, tillståndshantering och formulärvalidering',
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

export type TranslationKey = keyof typeof translations.en;
