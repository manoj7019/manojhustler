(function () {
  var COPY = {
    en: {
      ribbon: "Demo site by ManojHustler — fictional clinic",
      lang: "ಕನ್ನಡ",
      navServices: "Services",
      navDoctor: "Doctor",
      navHours: "Hours",
      navBook: "Book",
      navFaq: "FAQ",
      navReviews: "Reviews",
      navVisit: "Location",
      kicker: "Family dentistry · North Bengaluru",
      book: "Book appointment",
      whatsapp: "WhatsApp us",
      hoursMiniTitle: "Open Monday to Saturday",
      servicesTitle: "Care we offer",
      svcClean: "Cleaning",
      svcFill: "Fillings",
      svcRoot: "Root canal",
      svcBraces: "Braces and aligners",
      svcKids: "Kids dentistry",
      svcWhite: "Teeth whitening",
      doctorTitle: "Your dentist",
      hoursTitle: "Clinic hours",
      bookTitle: "Book a visit",
      send: "Send on WhatsApp",
      faqTitle: "Common questions",
      reviewsTitle: "Sample words from patients",
      locationTitle: "Where we are",
      built: "Built by ManojHustler",
      closed: "Closed on Sunday",
      pickTime: "Choose a time",
      confirmTitle: "Demo booking ready",
      openWa: "Open WhatsApp"
    },
    kn: {
      ribbon: "ಮನೋಜ್‌ಹಸ್ಲರ್ ಡೆಮೊ ಸೈಟ್ — ಇದು ಕಾಲ್ಪನಿಕ ಕ್ಲಿನಿಕ್",
      lang: "English",
      navServices: "ಸೇವೆಗಳು",
      navDoctor: "ವೈದ್ಯರು",
      navHours: "ಸಮಯ",
      navBook: "ಬುಕ್",
      navFaq: "ಪ್ರಶ್ನೆಗಳು",
      navReviews: "ಅಭಿಪ್ರಾಯ",
      navVisit: "ಸ್ಥಳ",
      kicker: "ಕುಟುಂಬ ದಂತ ಚಿಕಿತ್ಸೆ · ಉತ್ತರ ಬೆಂಗಳೂರು",
      book: "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಕಾಯ್ದಿರಿಸಿ",
      whatsapp: "ನಮಗೆ ವಾಟ್ಸಾಪ್ ಮಾಡಿ",
      hoursMiniTitle: "ಸೋಮವಾರದಿಂದ ಶನಿವಾರದವರೆಗೆ ತೆರೆದಿದೆ",
      servicesTitle: "ನಾವು ನೀಡುವ ಚಿಕಿತ್ಸೆ",
      svcClean: "ಹಲ್ಲು ಸ್ವಚ್ಛಗೊಳಿಸುವಿಕೆ",
      svcFill: "ಹಲ್ಲು ತುಂಬಿಸುವಿಕೆ",
      svcRoot: "ರೂಟ್ ಕೆನಾಲ್ ಚಿಕಿತ್ಸೆ",
      svcBraces: "ಬ್ರೇಸ್ ಮತ್ತು ಅಲೈನರ್",
      svcKids: "ಮಕ್ಕಳ ದಂತ ಚಿಕಿತ್ಸೆ",
      svcWhite: "ಹಲ್ಲು ಬಿಳುಪುಗೊಳಿಸುವುದು",
      doctorTitle: "ನಿಮ್ಮ ದಂತವೈದ್ಯರು",
      hoursTitle: "ಕ್ಲಿನಿಕ್ ಸಮಯ",
      bookTitle: "ಭೇಟಿಯನ್ನು ಕಾಯ್ದಿರಿಸಿ",
      send: "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಕಳುಹಿಸಿ",
      faqTitle: "ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳು",
      reviewsTitle: "ರೋಗಿಗಳ ಮಾದರಿ ಮಾತುಗಳು",
      locationTitle: "ನಾವಿರುವ ಸ್ಥಳ",
      built: "ಮನೋಜ್‌ಹಸ್ಲರ್ ನಿರ್ಮಿಸಿದ್ದು",
      closed: "ಭಾನುವಾರ ಮುಚ್ಚಿದೆ",
      pickTime: "ಸಮಯ ಆಯ್ಕೆಮಾಡಿ",
      confirmTitle: "ಡೆಮೊ ಬುಕಿಂಗ್ ಸಿದ್ಧವಾಗಿದೆ",
      openWa: "ವಾಟ್ಸಾಪ್ ತೆರೆಯಿರಿ"
    }
  };

  var RANGES = [["10:00", "13:00"], ["16:00", "20:00"]];
  var WA = "918000000000";
  var lang = "en";

  function text(key) {
    return COPY[lang][key] || COPY.en[key] || "";
  }

  function applyLang() {
    document.documentElement.lang = lang === "kn" ? "kn" : "en";
    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n]"), function (node) {
      var key = node.getAttribute("data-i18n");
      node.textContent = text(key);
      node.lang = lang === "kn" ? "kn" : "en";
    });
    var toggle = document.querySelector("[data-lang-toggle]");
    if (toggle) toggle.setAttribute("aria-pressed", lang === "kn" ? "true" : "false");
  }

  function pad(n) { return n < 10 ? "0" + n : String(n); }

  function slotsFor(dateStr) {
    if (!dateStr) return [];
    var day = new Date(dateStr + "T12:00:00").getDay();
    if (day === 0) return [];
    var out = [];
    RANGES.forEach(function (range) {
      var start = range[0].split(":");
      var end = range[1].split(":");
      var t = Number(start[0]) * 60 + Number(start[1]);
      var stop = Number(end[0]) * 60 + Number(end[1]);
      while (t < stop) {
        out.push(pad(Math.floor(t / 60)) + ":" + pad(t % 60));
        t += 30;
      }
    });
    return out;
  }

  function fillTimes() {
    var date = document.querySelector("#date").value;
    var select = document.querySelector("#time");
    var list = slotsFor(date);
    select.innerHTML = "";
    var first = document.createElement("option");
    first.value = "";
    first.textContent = list.length ? text("pickTime") : text("closed");
    select.appendChild(first);
    list.forEach(function (slot) {
      var opt = document.createElement("option");
      opt.value = slot;
      opt.textContent = slot;
      select.appendChild(opt);
    });
    select.disabled = list.length === 0;
  }

  function message(data) {
    return [
      "Hello Smile Care Dental Clinic (demo),",
      "I would like to book a visit.",
      "Service: " + data.service,
      "Date: " + data.date,
      "Time: " + data.time,
      "Name: " + data.name,
      "Phone: " + data.phone
    ].join("\n");
  }

  function waUrl(body) {
    return "https://wa.me/" + WA + "?text=" + encodeURIComponent(body);
  }

  document.querySelector("[data-lang-toggle]").addEventListener("click", function () {
    lang = lang === "en" ? "kn" : "en";
    applyLang();
    fillTimes();
  });

  var dateInput = document.querySelector("#date");
  var today = new Date();
  dateInput.min = today.getFullYear() + "-" + pad(today.getMonth() + 1) + "-" + pad(today.getDate());
  dateInput.addEventListener("change", fillTimes);
  fillTimes();
  applyLang();

  document.querySelector("#book-form").addEventListener("submit", function (event) {
    event.preventDefault();
    var error = document.querySelector("#form-error");
    var data = {
      service: document.querySelector("#service").value,
      date: dateInput.value,
      time: document.querySelector("#time").value,
      name: document.querySelector("#name").value.trim(),
      phone: document.querySelector("#phone").value.replace(/\s+/g, "")
    };
    if (!data.service || !data.date || !data.time || !data.name || !/^(?:\+?91)?\d{10}$/.test(data.phone)) {
      error.textContent = "Add a service, a weekday date, a time, your name, and a 10-digit phone number.";
      return;
    }
    error.textContent = "";
    var body = message(data);
    var url = waUrl(body);
    var box = document.querySelector("#confirm");
    box.hidden = false;
    document.querySelector("#confirm-summary").textContent = data.service + " · " + data.date + " · " + data.time + " · " + data.name;
    var link = document.querySelector("#confirm-link");
    link.href = url;
    link.textContent = text("openWa");
    window.open(url, "_blank", "noopener");
    box.scrollIntoView({ block: "nearest" });
  });
})();
