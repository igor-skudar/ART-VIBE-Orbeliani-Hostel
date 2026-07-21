const savedLanguage = localStorage.getItem("language");

if (!savedLanguage) {
  const browserLanguage = navigator.language.toLowerCase();

  if (browserLanguage.startsWith("ru") && !window.location.pathname.endsWith("ru.html")) {
    window.location.href = "ru.html";
  }
}

function setLanguage(language) {
  localStorage.setItem("language", language);
}