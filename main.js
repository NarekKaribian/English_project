let words;
let correctIndex = 0;
if (document.title === "Words 1-50") {
  words = [
    { original: "primary", translation: "начальный" },
    { original: "hidden", translation: "скрытый" },
    { original: "align", translation: "выровнять" },
    { original: "tab bar", translation: "панель вкладок" },
    { original: "actions", translation: "действия" },
    { original: "sticky", translation: "липкий" },
    { original: "scroll", translation: "прокрутка" },
    { original: "characters", translation: "персонажи" },
    { original: "zoom", translation: "масштабировать" },
    { original: "decrease", translation: "уменьшить" },
    { original: "reset", translation: "перезагрузить" },
    { original: "justify", translation: "оправдывать" },
    { original: "single", translation: "одинокий" },
    { original: "title", translation: "заголовок" },
    { original: "split", translation: "расколоть" },
    { original: "rows", translation: "ряды" },
    { original: "flip", translation: "подбросить" },
    { original: "shortcuts", translation: "ярлыки" },
    { original: "snippets", translation: "фрагменты" },
    { original: "configure", translation: "настроить" },
    { original: "tasks", translation: "задания" },
    { original: "sync", translation: "синхронизировать" },
    { original: "abbreviation", translation: "Сокращенное название" },
    { original: "select", translation: "выбирать" },
    { original: "shrink", translation: "сокращать" },
    { original: "move", translation: "двигаться" },
    { original: "above", translation: "выше" },
    { original: "below", translation: "ниже" },
    { original: "occurrence", translation: "вхождение" },
    { original: "previous", translation: "предыдущий" },
    { original: "switch", translation: "выключатель" },
    { original: "column", translation: "столбец" },
    { original: "mode", translation: "режим" },
    { original: "appearance", translation: "появление" },
    { original: "layout", translation: "макет" },
    { original: "side", translation: "сторона" },
  ];
} else if (document.title === "Words 51-100") {
  words = [
    { original: "edit", translation: "редактировать" },
    { original: "undo", translation: "отменить" },
    { original: "redo", translation: "переделывать" },
    { original: "paste", translation: "вставить" },
    { original: "find", translation: "изыскать" },
    { original: "replace", translation: "заменять" },
    { original: "toggle", translation: "переключать" },
    { original: "emment", translation: "наполнять" },
    { original: "recent", translation: "недавний" },
    { original: "share", translation: "делиться" },
    { original: "preferences", translation: "предпочтения" },
    { original: "revert", translation: "возвращаться" },
    { original: "boot", translation: "загружать" },
    { original: "create", translation: "создать" },
    { original: "cut", translation: "вырезать" },
    { original: "backup", translation: "резервное копирование" },
    { original: "issue", translation: "проблема" },
    { original: "pull requests", translation: "запросы на извлечение" },
    { original: "explore", translation: "исследовать" },
    { original: "assigned", translation: "назначенный" },
    { original: "mentione", translation: "упомянуть" },
    { original: "dashboard", translation: "панель приборов" },
    { original: "upgrade", translation: "обновление" },
    { original: "matched", translation: "соответствует" },
    { original: "visibility", translation: "видимость" },
    { original: "develop", translation: "разрабатовать" },
    { original: "compile", translation: "компилировать" },
    { original: "verify", translation: "проверить" },
    { original: "enable", translation: "активировать" },
    { original: "install", translation: "устанавливать" },
    { original: "load", translation: "загружать" },
    { original: "expansion", translation: "расширение" },
    { original: "hyperlink", translation: "ссылка" },
    { original: "bookmark", translation: "закладка" },
    { original: "cloud storage", translation: "облачное хранилище" },
    { original: "latency", translation: "задержка" },
    { original: "reboot", translation: "перезагрузка" },
    { original: "to update", translation: "обновить" },
    { original: "to display", translation: "отображать" },
    { original: "to eject", translation: "извлекать" },
    { original: "restore", translation: "восстанавливать" },
    { original: "query", translation: "запрос" },
    { original: "firmware", translation: "прошивка" },
    { original: "keyboard", translation: "клавиатура" },
    { original: "device", translation: "устройство" },
    { original: "hard disk drive", translation: "жесткий диск" },
    { original: "power supply unit", translation: "блок питания" },
    { original: "storage device", translation: "накопитель" },
    { original: "touch screen", translation: "сенсорный экран" },
    { original: "allow", translation: "разрешить" },
  ];
}

function burgerClick(_burgerIcon, _burgerNav) {
  _burgerIcon.addEventListener("click", function () {
    this.classList.toggle("active");
    _burgerNav.classList.toggle("open");
  });
}

function translationGenerator(
  _words,
  _userAnswer,
  _countAnswers,
  _input,
  _button,
  _startHeader,
  _translation
) {
  if (_input.value.trim() === "") {
    _startHeader.classList.add("red_text");
    setTimeout(() => {
      _startHeader.classList.remove("red_text");
    }, 1000);
    return;
  }

  let currentWord = getNextWord(words);
  let userTranslation = _input.value.toLowerCase().trim();
  let correctTranslation = currentWord.translation.toLowerCase().trim();

  if (userTranslation === correctTranslation) {
    _translation.innerHTML = `${currentWord.original} - <span class="green_text"> ${currentWord.translation} </span>`;
    correctAnswers++;
    _button.classList.add("green");
  } else {
    _translation.innerHTML = `${currentWord.original} - <span class="red_text">${currentWord.translation}</span>`;
    inCorrectAnswers++;
    _button.classList.add("red");
  }
  setTimeout(() => {
    _button.classList.remove("green", "red");
  }, 1000);

  correctIndex = (correctIndex + 1) % _words.length;

  _userAnswer.textContent = getNextWord(words).original;
  _countAnswers.innerHTML = `
        <p>${correctAnswersText}: <span class="green_text">${correctAnswers}</span></p>
        <p>${inCorrectAnswersText}: <span class="red_text">${inCorrectAnswers}</span></p>
      `;
  _input.value = "";
}

let correctAnswers = 0;
let correctAnswersText = "Правильные ответы";
let inCorrectAnswers = 0;
let inCorrectAnswersText = "Неправильные ответы";

function getNextWord(_words) {
  return _words[correctIndex];
}

// Для header.html и woeds.html
const headerContainer = document.querySelector(".header_container");
const headerLogo = document.querySelector(".header_logo");
const burgerNav = document.querySelector(".burger_nav");
const burgerIcon = document.querySelector(".burger_icon");

burgerClick(burgerIcon, burgerNav);

// Для words1.2.3.4....html
const containerMain = document.querySelector(".container_main");
const startHeader = document.querySelector(".start_header");
const userAnswer = document.querySelector(".user_answer");
const input = document.querySelector(".input");
const button = document.querySelector(".button");
const translation = document.querySelector(".translation");
const countAnswers = document.querySelector(".count_answers");

button.addEventListener("click", () => {
  translationGenerator(
    words,
    userAnswer,
    countAnswers,
    input,
    button,
    startHeader,
    translation
  );
});
// ----------------------------------------------------

userAnswer.textContent = getNextWord(words).original;

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    translationGenerator(
      words,
      userAnswer,
      countAnswers,
      input,
      button,
      startHeader,
      translation
    );
  }
});
