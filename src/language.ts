import {
  translations,
  type Language,
  type TranslationKey,
} from './translations';

const languageButtons =
  document.querySelectorAll<HTMLButtonElement>('.language-btn');

const cvLink = document.querySelector<HTMLAnchorElement>('#download-cv');

function setLanguage(language: Language): void {
  document.documentElement.lang = language;

  localStorage.setItem('cv-language', language);

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

  if (cvLink) {
    cvLink.href =
      language === 'sv'
        ? '/Alexandra_Redkova_CV_SV.pdf'
        : '/Alexandra_Redkova_CV_EN.pdf';
  }
}

languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const language = button.dataset.lang;

    if (language === 'en' || language === 'sv') {
      setLanguage(language);
    }
  });
});

const savedLanguage = localStorage.getItem('cv-language');

const initialLanguage: Language = savedLanguage === 'sv' ? 'sv' : 'en';

setLanguage(initialLanguage);
