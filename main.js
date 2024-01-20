// lets, consts----------------------------------------
let words;
let correctIndex = 0;
let correctAnswers = 0;
let correctAnswersText = "Правильные ответы";
let inCorrectAnswers = 0;
let inCorrectAnswersText = "Неправильные ответы";

// words array---------------------------
{
  if (document.title === "Words 01-20") {
    words = randomWords([
      { original: "References", translation: "Рекомендации" },
      { original: "Bracket", translation: "Скобка" },
      { original: "Change", translation: "Изменять" },
      { original: "Debugging", translation: "Отладка" },
      { original: "Without", translation: "Без" },
      { original: "Launch", translation: "Запуск" },
      { original: "Without", translation: "Без" },
      { original: "Step", translation: "Шаг" },
      { original: "Continue", translation: "Продолжать" },
      { original: "Step over", translation: "Переступить" },
      { original: "Breakpoint", translation: "Точка останова" },
      { original: "Inline", translation: "В соответствии" },
      { original: "Disable", translation: "Запрещать" },
      { original: "itional", translation: "Дополнительный" },
      { original: "Run", translation: "Запустить" },
      { original: "Build", translation: "Сборка" },
      { original: "Running", translation: "Текущиая" },
      { original: "Terminate", translation: "Прекратить" },
      { original: "Release", translation: "Выпускать" },
      { original: "Notes", translation: "Примечания" },
    ]);
  } else if (document.title === "Words 20-40") {
    words = randomWords([
      { original: "Single", translation: "Одинокий" },
      { original: "Title", translation: "Заголовок" },
      { original: "Split", translation: "Расколоть" },
      { original: "Rows", translation: "Ряды" },
      { original: "Flip", translation: "Подбросить" },
      { original: "Shortcuts", translation: "Ярлыки" },
      { original: "Snippets", translation: "Фрагменты" },
      { original: "Configure", translation: "Настроить" },
      { original: "Tasks", translation: "Задания" },
      { original: "Sync", translation: "Синхронизировать" },
      { original: "Abbreviation", translation: "Сокращенное название" },
      { original: "Select", translation: "Выбирать" },
      { original: "Shrink", translation: "Сокращать" },
      { original: "Move", translation: "Двигаться" },
      { original: "Above", translation: "Выше" },
      { original: "Below", translation: "Ниже" },
      { original: "Occurrence", translation: "Вхождение" },
      { original: "Previous", translation: "Предыдущий" },
      { original: "Share", translation: "Делиться" },
      { original: "Find", translation: "Изыскать" },
    ]);
  } else if (document.title === "Words 40-60") {
    words = randomWords([
      { original: "Back", translation: "Назад" },
      { original: "Forward", translation: "Вперед" },
      { original: "Last", translation: "Последний" },
      { original: "Next", translation: "Следующий" },
      { original: "Page", translation: "Страница" },
      { original: "Use", translation: "Использовать" },
      { original: "Definition", translation: "Определение" },
      { original: "Implementation", translation: "Реализация" },
      { original: "Primary", translation: "Начальный" },
      { original: "Hidden", translation: "Скрытый" },
      { original: "Align", translation: "Выровнять" },
      { original: "Tab bar", translation: "Панель вкладок" },
      { original: "Actions", translation: "Действия" },
      { original: "Sticky", translation: "Липкий" },
      { original: "Scroll", translation: "Прокрутка" },
      { original: "Characters", translation: "Персонажи" },
      { original: "Zoom", translation: "Масштабировать" },
      { original: "Decrease", translation: "Уменьшить" },
      { original: "Reset", translation: "Перезагрузить" },
      { original: "Justify", translation: "Оправдывать" },
    ]);
  } else if (document.title === "Words 60-80") {
    words = randomWords([
      { original: "Edit", translation: "Редактировать" },
      { original: "Undo", translation: "Отменить" },
      { original: "Redo", translation: "Переделывать" },
      { original: "Paste", translation: "Вставить" },
      { original: "Replace", translation: "Заменять" },
      { original: "Toggle", translation: "Переключать" },
      { original: "Emment", translation: "Наполнять" },
      { original: "Recent", translation: "Недавний" },
      { original: "Preferences", translation: "Предпочтения" },
      { original: "Revert", translation: "Возвращаться" },
      { original: "Boot", translation: "Загружать" },
      { original: "Create", translation: "Создать" },
      { original: "Cut", translation: "Вырезать" },
      { original: "Backup", translation: "Резервное копирование" },
      { original: "Issue", translation: "Проблема" },
      { original: "Pull requests", translation: "Запросы на извлечение" },
      { original: "Explore", translation: "Исследовать" },
      { original: "Assigned", translation: "Назначенный" },
      { original: "Mentione", translation: "Упомянуть" },
      { original: "Dashboard", translation: "Панель приборов" },
    ]);
  } else if (document.title === "Words 80-100") {
    words = randomWords([
      { original: "Upgrade", translation: "Обновление" },
      { original: "Matched", translation: "Соответствует" },
      { original: "Visibility", translation: "Видимость" },
      { original: "Develop", translation: "Разрабатовать" },
      { original: "Compile", translation: "Компилировать" },
      { original: "Verify", translation: "Проверить" },
      { original: "Enable", translation: "Активировать" },
      { original: "Install", translation: "Устанавливать" },
      { original: "Load", translation: "Загружать" },
      { original: "Expansion", translation: "Расширение" },
      { original: "Hyperlink", translation: "Ссылка" },
      { original: "Bookmark", translation: "Закладка" },
      { original: "Cloud storage", translation: "Облачное хранилище" },
      { original: "Latency", translation: "Задержка" },
      { original: "Reboot", translation: "Перезагрузка" },
      { original: "To update", translation: "Обновить" },
      { original: "To display", translation: "Отображать" },
      { original: "To eject", translation: "Извлекать" },
      { original: "Restore", translation: "Восстанавливать" },
      { original: "Query", translation: "Запрос" },
    ]);
  } else if (document.title === "Words 100-120") {
    words = randomWords([
      { original: "Switch", translation: "Выключатель" },
      { original: "Column", translation: "Столбец" },
      { original: "Mode", translation: "Режим" },
      { original: "Appearance", translation: "Появление" },
      { original: "Layout", translation: "Макет" },
      { original: "Side", translation: "Сторона" },
      { original: "Edit", translation: "Редактировать" },
      { original: "Undo", translation: "Отменить" },
      { original: "Redo", translation: "Переделывать" },
      { original: "Paste", translation: "Вставить" },
      { original: "Find", translation: "Изыскать" },
      { original: "Replace", translation: "Заменять" },
      { original: "Firmware", translation: "Прошивка" },
      { original: "Keyboard", translation: "Клавиатура" },
      { original: "Device", translation: "Устройство" },
      { original: "Hard disk drive", translation: "Жесткий диск" },
      { original: "Power supply unit", translation: "Блок питания" },
      { original: "Storage device", translation: "Накопитель" },
      { original: "Touch screen", translation: "Сенсорный экран" },
      { original: "Allow", translation: "Разрешить" },
    ]);
  }
}

// functions------------------------------------
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
  _translation
) {
  let currentWord = getNextWord(_words);
  let userTranslation = _input.value.toLowerCase().trim();
  let correctTranslation = currentWord.translation.toLowerCase().trim();

  if (_input.value.trim() === "") {
    _userAnswer.classList.add("red_text");
    setTimeout(() => {
      _userAnswer.classList.remove("red_text");
    }, 600);
    return;
  }

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
  }, 400);

  correctIndex = (correctIndex + 1) % _words.length;

  _userAnswer.textContent = getNextWord(_words).original;
  _countAnswers.innerHTML = `
          <p>${correctAnswersText}: <span class="green_text">${correctAnswers}</span></p>
          <p>${inCorrectAnswersText}: <span class="red_text">${inCorrectAnswers}</span></p>
        `;
  _input.value = "";
}

function getNextWord(_words) {
  return _words[correctIndex];
}

function randomWords(random) {
  for (let i = random.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [random[i], random[j]] = [random[j], random[i]];
  }
  return random;
}

// Для header.html и woeds.html
const headerContainer = document.querySelector(".header_container");
const headerLogo = document.querySelector(".header_logo");
const burgerNav = document.querySelector(".burger_nav");
const burgerIcon = document.querySelector(".burger_icon");

// Для words1.2.3.4....html
const containerMain = document.querySelector(".container_main");
const userAnswer = document.querySelector(".user_answer");
const input = document.querySelector(".input");
const button = document.querySelector(".button");
const translation = document.querySelector(".translation");
const countAnswers = document.querySelector(".count_answers");

burgerClick(burgerIcon, burgerNav);

countAnswers.innerHTML = `
<p>${correctAnswersText}: <span class="green_text">${correctAnswers}</span></p>
<p>${inCorrectAnswersText}: <span class="red_text">${inCorrectAnswers}</span></p>
`;
userAnswer.textContent = getNextWord(words).original;

// button, Enter-------------------------------------------
button.addEventListener("click", () => {
  translationGenerator(
    words,
    userAnswer,
    countAnswers,
    input,
    button,
    translation
  );
});

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    translationGenerator(
      words,
      userAnswer,
      countAnswers,
      input,
      button,
      translation
    );
  }
});
