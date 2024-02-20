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
      { original: "Tutorials", translation: "Обучающие программы" },
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
      { original: "Make", translation: "Делать" },
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
      { original: "Privacy", translation: "Конфиденциальность" },
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
      { original: "Statement", translation: "Заявление" },
      { original: "Report", translation: "Отчет" },
      { original: "Join", translation: "Присоединиться" },
      { original: "Feature", translation: "Особенность" },
      { original: "Tools", translation: "Инструменты" },
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
  } else if (document.title === "Words 120-140") {
    words = randomWords([
      { original: "Autofill", translation: "Автозаполнение" },
      { original: "Browsing", translation: "просмотр" },
      { original: "Customize", translation: "Настроить" },
      { original: "Manage", translation: "Управлять" },
      { original: "Other", translation: "Другой" },
      { original: "Guest", translation: "Гость" },
      { original: "Payment", translation: "Оплата" },
      { original: "Send", translation: "Отправлять" },
      { original: "Link", translation: "Связь" },
      { original: "Performance", translation: "Производительность" },
      { original: "Turn off", translation: "Выключать" },
      { original: "Review", translation: "Обзор" },
      { original: "Data", translation: "Данные" },
      { original: "Encryption", translation: "Шифрование" },
      { original: "Signin", translation: "Войти" },
      { original: "Turning", translation: "Превращение" },
      { original: "Improve", translation: "Улучшать" },
      { original: "Usage", translation: "Применение" },
      { original: "Crash reports", translation: "Отчеты о сбоях" },
      { original: "Rules", translation: "Правила" },
    ]);
  } else if (document.title === "Words 140-160") {
    words = randomWords([
      { original: "How many times", translation: "Сколько раз" },
      { original: "Reference error", translation: "Ошибка данных" },
      { original: "Score", translation: "Счет" },
      { original: "Slice", translation: "Часть" },
      { original: "Duration", translation: "Продолжительность" },
      { original: "Links", translation: "Ссылки" },
      { original: "Confirm", translation: "Подтвердить" },
      { original: "Remaining", translation: "Оставшийся" },
      { original: "Guess", translation: "Предполагать" },
      { original: "Congratulate", translation: "Поздравить" },
      { original: "Fode out", translation: "Исчезать" },
      { original: "Fode in", translation: "Постепенно усиливаться" },
      { original: "Slide up", translation: "Скользить вверх" },
      { original: "Postpone", translation: "Отложить" },
      { original: "Delay", translation: "Задерживать" },
      { original: "Target", translation: "Цель" },
      { original: "Hint", translation: "Подсказка" },
      { original: "Set direction", translation: "Задать направление" },
      { original: "Sample", translation: "Шаблон" },
      { original: "Equal", translation: "Равняется" },
    ]);
  } else if (document.title === "Words 160-180") {
    words = randomWords([
      { original: "Introduction", translation: "Введение" },
      { original: "Most", translation: "Большинство" },
      { original: "Easy", translation: "Легкий" },
      { original: "Will teach", translation: "Будет учить" },
      { original: "Basic", translation: "Базовый" },
      { original: "Advanced", translation: "Продвинутый" },
      { original: "Called ", translation: "Называется" },
      { original: "Exercise", translation: "Упражнение" },
      { original: "Submit", translation: "Представлять на рассмотрение" },
      { original: "using", translation: "С использованием" },
      { original: "Declare", translation: "Объявить" },
      { original: "Following", translation: "Следующий" },
      { original: "Again", translation: "Снова" },
      { original: "Try", translation: "Пытаться" },
      { original: "Multiply", translation: "Умножить" },
      { original: "Divide", translation: "Разделять" },
      { original: "Remainder", translation: "Остаток" },
      { original: "Being", translation: "Существование" },
      { original: "Describe", translation: "Описывать" },
      { original: "Commonly", translation: "Обычно" },
    ]);
  } else if (document.title === "Words 180-200") {
    words = randomWords([
      { original: "Wallpapers", translation: "Обои" },
      { original: "Lock", translation: "Замок" },
      { original: "Brightness", translation: "Яркость" },
      { original: "Notification", translation: "Уведомление" },
      { original: "Security", translation: "Безопасность" },
      { original: "Safety", translation: "Безопасность" },
      { original: "Emergency", translation: "Чрезвычайная ситуация" },
      { original: "Digital", translation: "Цифровой" },
      { original: "Wellbeing", translation: "Благополучие" },
      { original: "Parent", translation: "Родитель" },
      { original: "Feedback", translation: "Обратная связь" },
      { original: "Call", translation: "Вызов" },
      { original: "Access", translation: "Доступ" },
      { original: "Between", translation: "Между" },
      { original: "Consumption", translation: "Потребление" },
      {
        original: "Carrier-related",
        translation: "Связанные с оператором связи",
      },
      { original: "Dialing", translation: "Набор номера" },
      { original: "Forwarding", translation: "Пересылка" },
      { original: "Barring", translation: "Запрет" },
      { original: "Waitin", translation: "Ожидание" },
    ]);
  } else if (document.title === "Words 200-220") {
    words = randomWords([
      { original: "Found", translation: "Найденный" },
      { original: "Tethering", translation: "Модем" },
      { original: "Give", translation: "Давать" },
      { original: "Turn", translation: "Повернуть" },
      { original: "Quick", translation: "Быстрый" },
      { original: "Discover", translation: "Обнаружить" },
      { original: "Fingerprint", translation: "Отпечаток пальца" },
      { original: "Edge ", translation: "Край" },
      { original: "Lighting", translation: "Осветительные приборы" },
      { original: "Square", translation: "Квадрат" },
      { original: "Drawer", translation: "Ящик" },
      { original: "Swipe ", translation: "Проведите пальцем по экрану" },
      { original: "Lower part", translation: "Нижняя часть" },
      { original: "Raise", translation: "Поднимать" },
      { original: "Prevention of", translation: "Предотвращение" },
      { original: "Scheduled", translation: "Запланированное" },
      { original: "Eye", translation: "Глаз" },
      { original: "Boost", translation: "Способствовать росту" },
      { original: "Rotate", translation: "Вращать" },
      { original: "Refresh rate", translation: "Частота обновления" },
    ]);
  } else if (document.title === "Words 220-240") {
    words = randomWords([
      { original: "Pull", translation: "Тянуть" },
      { original: "Hand", translation: "Рука" },
      { original: "Empty", translation: "Пустой" },
      { original: "Accidental", translation: "Случайный" },
      { original: "Thing", translation: "Вещь" },
      { original: "Space", translation: "Космос" },
      { original: "Wake", translation: "Будить" },
      { original: "Touch", translation: "Трогать" },
      { original: "Occur", translation: "Происходить" },
      { original: "Adjust", translation: "Регулировать" },
      { original: "Response", translation: "Ответ" },
      { original: "Ambient", translation: "Окружающий" },
      { original: "Increase", translation: "Увеличивать" },
      { original: "Power", translation: "Мощь" },
      { original: "Cause", translation: "Причина" },
      { original: "Heat", translation: "Нагреваться" },
      { original: "Resolution", translation: "Разрешение" },
      { original: "High", translation: "Высокий" },
      { original: "Conserve", translation: "Сохранить" },
      { original: "Smooth", translation: "Гладкий" },
    ]);
  } else if (document.title === "Words 240-260") {
    words = randomWords([
      { original: "Available", translation: "Доступный" },
      { original: "Best", translation: "Лучший" },
      { original: "Same", translation: "Такой же" },
      { original: "Faster", translation: "Быстрее" },
      { original: "Acceleration", translation: "Ускорение" },
      { original: "Reduce", translation: "Уменьшать" },
      { original: "External", translation: "Внешний" },
      { original: "Wired", translation: "Проводной" },
      { original: "Earphones", translation: "Наушники" },
      { original: "Reject", translation: "Отклонять" },
      { original: "Press", translation: "Нажимать" },
      { original: "Incoming", translation: "Вход" },
      { original: "Disabled", translation: "Неполноценный" },
      { original: "Always", translation: "Всегда" },
      { original: "Alway", translation: "Запланированный" },
      { original: "Busy", translation: "Занятый" },
      { original: "Reachable", translation: "Достижимый" },
      { original: "Unreachable", translation: "Недоступно" },
      { original: "Barring", translation: "За исключением" },
      { original: "Outgoing", translation: "Исходящий" },
    ]);
  } else if (document.title === "Words 260-280") {
    words = randomWords([
      { originai: "Responsibility", translation: "Ответственность" },
      { originai: "Separation", translation: "Разделение" },
      { originai: "Concerns", translation: "Обеспокоенность" },
      { originai: "Reproduce", translation: "Воспроизводить" },
      { originai: "Represent", translation: "Представлять" },
      { originai: "Protective", translation: "Защитный" },
      { originai: "Total", translation: "Общий" },
      { originai: "Beginner", translation: "Новичок" },
      { originai: "Goal", translation: "Цель" },
      { originai: "Agree", translation: "Соглашаться" },
      { originai: "Article", translation: "Статья" },
      { originai: "Learning", translation: "Обучение" },
      { originai: "Jobs", translation: "Вакансии" },
      { originai: "Spread", translation: "Распространение" },
      { originai: "Included", translation: "Включено" },
      { originai: "Look", translation: "Смотреть" },
      { originai: "Anyone", translation: "Любой" },
      { originai: "Against", translation: "Против" },
      { originai: "Proverbial", translation: "Пресловутый" },
      { originai: "Wall", translation: "Стена" },
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
