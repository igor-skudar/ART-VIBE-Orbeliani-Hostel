export const translations = {
  en: {
    text: {
      // hero section
      langBtn: "RU",
      heroDescription: "Stay in the heart of Tbilisi",
      bookBtn: "Book Your Stay",

      // about section
      aboutTitle: "<span>A</span>bout Us",
      firstAboutParagraph: "More than just a place to sleep, ART VIBE Orbeliani Hostel is a space where travelers can relax, meet new people, and experience the unique atmosphere of old Tbilisi.",
      secondAboutParagraph: "Enjoy cozy indoor lounges, a charming terrace overlooking historic buildings, and a welcoming environment designed for both adventure and comfort.",

      // rooms section
      roomsTitle: "<span>F</span>ind Your Space",
      roomsParagraph: "From private rooms to shared dorms, choose the space that fits your travel style and budget.",
      pricePrefix: "From",
      pricePeriod: "per night",
      vip3Title: "Private Double Room",
      vip5Title: "Private 4-Bed Room",
      dorm4Title: "4-Bed Dormitory",
      dorm6Title: "6-Bed Dormitory", 
      femaleDormTitle: "6-Bed Female Dormitory",

      // amenities section
      amenitiesTitle: "<span>A</span>menities",
      amenitiesParagraph: "Everything you need for a comfortable and memorable stay.",
      freeWiFi: "Free WiFi",
      sharedKitchen: "Shared kitchen",
      laundry: "Laundry",
      balcony: "Balcony",
      airConditioning: "Air conditioning",
      heating: "Heating",
      centralLocation: "Central location",
      movieNights: "Movie nights",
      lockers: "Lockers",
      englishRussianStaff: "English &amp; Russian staff",

      // location section
      locationTitle: "<span>L</span>ocation",
      locationParagraph: "Find us in the heart of Tbilisi, just a short walk from the city's main attractions.",
      locationAddress: "29 Vakhtang Orbeliani St, Tbilisi 0105",

      // contact section
      contactTitle: "<span>B</span>ook your stay",
      contactParagraph: "Have a question or want to book directly? Get in touch with us.",

      // footer
      footerMessage: "Safe travels and see you soon!",
      backToTopBtn: "Back to top",
    },

    ariaLabels: {
      // hero section
      langBtn: "Switch to Russian",

      // contact section
      whatsappBtn: "Contact us on WhatsApp (opens in a new tab)",
      telegramBtn: "Contact us on Telegram (opens in a new tab)",
      emailBtn: "Send us an email (opens in a new tab)",
    },

    alt: {
      // about section
      aboutImage: "Terrace overlooking historic buildings in Tbilisi",

      // amenities section
      amenitiesImage: "Movie night in the cozy basement",
    },

    meta: {
      title: "ART VIBE Orbeliani Hostel | Hostel in Central Tbilisi",
      description: "Stay at ART VIBE Orbeliani Hostel in the heart of Tbilisi. Cozy rooms, free WiFi, shared kitchen, terrace, and easy direct booking without intermediaries!"
    }
  },

  ru: {
    text: {
      // hero section
      langBtn: "EN",
      heroDescription: "Остановись в самом сердце Тбилиси",
      bookBtn: "Забронировать",

      // about section
      aboutTitle: "<span>O</span> нас",
      firstAboutParagraph: "ART VIBE Orbeliani Hostel — это не просто место для ночлега, а пространство, где путешественники могут отдохнуть, познакомиться с новыми людьми и почувствовать неповторимую атмосферу старого Тбилиси.",
      secondAboutParagraph: "Наслаждайтесь уютными зонами отдыха, атмосферной террасой с видом на исторические здания и гостеприимной атмосферой, созданной для комфортного отдыха и новых впечатлений.",

      // rooms section
      roomsTitle: "<span>Н</span>омера и цены",
      roomsParagraph: "От приватных комнат до общих спален, выберите место, которое подходит вашему стилю путешествий и бюджету.",
      pricePrefix: "От",
      pricePeriod: "за ночь",
      vip3Title: "Приватная комната",
      vip5Title: "Приватная комната на четверых",
      dorm4Title: "Общая комната на четверых",
      dorm6Title: "Общая комната на шестерых", 
      femaleDormTitle: "Женская комната на шестерых",

      // amenities section
      amenitiesTitle: "<span>У</span>добства",
      amenitiesParagraph: "Всё необходимое для комфортного и приятного проживания.",
      freeWiFi: "Бесплатный Wi-Fi",
      sharedKitchen: "Общая кухня",
      laundry: "Прачечная",
      balcony: "Терраса",
      airConditioning: "Кондиционер",
      heating: "Отопление",
      centralLocation: "Центр города",
      movieNights: "Киновечера",
      lockers: "Локеры",
      englishRussianStaff: "Русский хост",

      // location section
      locationTitle: "<span>Р</span>асположение",
      locationParagraph: "Мы находимся в самом центре Тбилиси, всего в нескольких минутах ходьбы от главных достопримечательностей города.",
      locationAddress: "ул. Вахтанга Орбелиани, 29, Тбилиси 0105",

      // contact section
      contactTitle: "<span>С</span>вяжитесь с нами",
      contactParagraph: "Есть вопросы или хотите забронировать? Напишите нам.",

      // footer
      footerMessage: "Счастливого путешествия и до встречи!",
      backToTopBtn: "Наверх",
    },

    ariaLabels: {
      // hero section
      langBtn: "Переключить на английский",

      // contact section
      whatsappBtn: "Написать нам в WhatsApp (откроется в новой вкладке)",
      telegramBtn: "Написать нам в Telegram (откроется в новой вкладке)",
      emailBtn: "Написать нам на электронную почту (откроется в новой вкладке)",
    },

    alt: {
      // about section
      aboutImage: "Терраса с видом на исторические здания Тбилиси",

      // amenities section
      amenitiesImage: "Киновечер в уютном подвале",
    },

    meta: {
      title: "ART VIBE Orbeliani Hostel | Хостел в центре Тбилиси",
      description: "Ищете жилье в центре Тбилиси? Хостел ART VIBE Orbeliani предлагает комфортные комнаты, бесплатный Wi-Fi, кухню и террасу. Забронируйте напрямую без посредников!"
    }
  }
};

export function setLang(lang) {
  const language = translations[lang];

  document.documentElement.lang = lang;
  document.title = language.meta.title;
  document
    .querySelector("meta[name='description']")
    .setAttribute("content", language.meta.description);
  
  const flag = document.querySelector("#flag");

  if (lang === "en") {
    flag.src = "Assets/Icons/russian-flag.svg";
  } else {
    flag.src = "Assets/Icons/uk-flag.svg";
  }

  
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    element.innerHTML= language.text[key];
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach(element => {
    const key = element.dataset.i18nAriaLabel;

    element.setAttribute(
      "aria-label",
      language.ariaLabels[key]
    );
  });

  document.querySelectorAll("[data-i18n-alt]").forEach(element => {
    const key = element.dataset.i18nAlt;

    element.setAttribute(
      "alt",
      language.alt[key]
    );
  });
}
