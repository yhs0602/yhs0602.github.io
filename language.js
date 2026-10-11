(() => {
  const storageKey = "homepage-language";
  const buttons = document.querySelectorAll("[data-set-language]");
  const translations = document.querySelectorAll("[data-ko][data-en]");
  const valid = (value) => value === "ko" || value === "en";

  function setLanguage(language, updateUrl = false) {
    if (!valid(language)) return;
    document.documentElement.lang = language;
    translations.forEach((element) => {
      element.textContent = element.dataset[language];
    });
    buttons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.setLanguage === language));
    });
    document.title = language === "ko" ? "양현서 · Hyeonseo Yang" : "Hyeonseo Yang · Research & Engineering";
    document.querySelector("nav").setAttribute("aria-label", language === "ko" ? "주요 메뉴" : "Main navigation");
    document.querySelector('meta[name="description"]').content = language === "ko"
      ? "양현서의 연구, 소프트웨어 개발 경험, 논문과 오픈소스 프로젝트를 소개합니다."
      : "Research, engineering experience, publications, and open-source projects by Hyeonseo Yang.";
    try { localStorage.setItem(storageKey, language); } catch { /* Storage is optional. */ }
    if (updateUrl) {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", language);
      history.replaceState(null, "", url);
    }
  }

  let saved;
  try { saved = localStorage.getItem(storageKey); } catch { /* Use the default language. */ }
  const requested = new URLSearchParams(window.location.search).get("lang");
  setLanguage(valid(requested) ? requested : valid(saved) ? saved : "ko");
  buttons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.setLanguage, true));
  });
})();
