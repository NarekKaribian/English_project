let words;
{
  if (document.title === "Words 01-20") {
    words = randomWords([
      { original: "Continue", translation: "Продолжать" },
      { original: "Title", translation: "Заголовок" },
      { original: "Rows", translation: "Ряды" },
      { original: "Configure", translation: "Настроить" },
      { original: "Tasks", translation: "Задания" },
      { original: "Sync", translation: "Синхронизировать" },
      { original: "Select", translation: "Выбирать" },
      { original: "Above", translation: "Выше" },
      { original: "Below", translation: "Ниже" },
      { original: "Back", translation: "Назад" },
      { original: "Forward", translation: "Вперед" },
      { original: "Run", translation: "Запустить" },
      { original: "Without", translation: "Без" },
      { original: "References", translation: "Рекомендации" },
      { original: "Bracket", translation: "Скобка" },
      { original: "Debugging", translation: "Отладка" },
      { original: "Step", translation: "Шаг" },
      { original: "Step over", translation: "Переступить" },
      { original: "Breakpoint", translation: "Точка останова" },
      { original: "Inline", translation: "В соответствии" },
    ]);
  } else if (document.title === "Words 20-40") {
    words = randomWords([
      { original: "Autofill", translation: "Автозаполнение" },
      { original: "Browsing", translation: "просмотр" },
      { original: "Customize", translation: "Настроить" },
      { original: "Manage", translation: "Управлять" },
      { original: "Other", translation: "Другой" },
      { original: "Guest", translation: "Гость" },
      { original: "Payment", translation: "Оплата" },
      { original: "Multiply", translation: "Умножить" },
      { original: "Link", translation: "Связь" },
      { original: "Performance", translation: "Производительность" },
      { original: "Turn off", translation: "Выключать" },
      { original: "Review", translation: "Обзор" },
      { original: "Data", translation: "Данные" },
      { original: "Following", translation: "Следующий" },
      { original: "Signin", translation: "Войти" },
      { original: "Divide", translation: "Разделять" },
      { original: "Improve", translation: "Улучшать" },
      { original: "Being", translation: "Существование" },
      { original: "Crash reports", translation: "Отчеты о сбоях" },
      { original: "Rules", translation: "Правила" },
    ]);
  } else if (document.title === "Words 40-60") {
    words = randomWords([
      { original: "Last", translation: "Последний" },
      { original: "Next", translation: "Следующий" },
      { original: "Page", translation: "Страница" },
      { original: "Use", translation: "Использовать" },
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
      { original: "Launch", translation: "Запуск" },
      { original: "Justify", translation: "Оправдывать" },
      { original: "Tutorials", translation: "Обучающие программы" },
      { original: "Change", translation: "Изменять" },
    ]);
  } else if (document.title === "Words 60-80") {
    words = randomWords([
      { original: "Basic", translation: "Базовый" },
      { original: "Report", translation: "Отчет" },
      { original: "Will teach", translation: "Будет учить" },
      { original: "Toggle", translation: "Переключать" },
      { original: "Emment", translation: "Наполнять" },
      { original: "Recent", translation: "Недавний" },
      { original: "Again", translation: "Снова" },
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
      { original: "Notification", translation: "Уведомление" },
      { original: "Security", translation: "Безопасность" },
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
      { original: "Declare", translation: "Объявить" },
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
      { original: "How many times", translation: "Сколько раз" },
      { original: "Reference error", translation: "Ошибка данных" },
      { original: "Score", translation: "Счет" },
      { original: "Slice", translation: "Часть" },
      { original: "Duration", translation: "Продолжительность" },
      { original: "Links", translation: "Ссылки" },
      { original: "Confirm", translation: "Подтвердить" },
      { original: "Remaining", translation: "Оставшийся" },
      { original: "Commonly", translation: "Обычно" },
      { original: "Congratulate", translation: "Поздравить" },
      { original: "Fode out", translation: "Исчезать" },
      { original: "Fode in", translation: "Постепенно усиливаться" },
      { original: "Slide up", translation: "Скользить вверх" },
      { original: "Remainder", translation: "Остаток" },
      { original: "Target", translation: "Цель" },
      { original: "Hint", translation: "Подсказка" },
      { original: "Set direction", translation: "Задать направление" },
      { original: "Sample", translation: "Шаблон" },
      { original: "Equal", translation: "Равняется" },
      { original: "Delay", translation: "Задерживать" },
    ]);
  } else if (document.title === "Words 140-160") {
    words = randomWords([
      { original: "Single", translation: "Одинокий" },
      { original: "Split", translation: "Расколоть" },
      { original: "Flip", translation: "Подбросить" },
      { original: "Shortcuts", translation: "Ярлыки" },
      { original: "Snippets", translation: "Фрагменты" },
      { original: "Abbreviation", translation: "Сокращенное название" },
      { original: "Shrink", translation: "Сокращать" },
      { original: "Move", translation: "Двигаться" },
      { original: "Previous", translation: "Предыдущий" },
      { original: "Share", translation: "Делиться" },
      { original: "Privacy", translation: "Конфиденциальность" },
      { original: "Disable", translation: "Запрещать" },
      { original: "Definition", translation: "Определение" },
      { original: "Make", translation: "Делать" },
      { original: "itional", translation: "Дополнительный" },
      { original: "Build", translation: "Сборка" },
      { original: "Terminate", translation: "Прекратить" },
      { original: "Release", translation: "Выпускать" },
      { original: "Notes", translation: "Примечания" },
      { original: "Statement", translation: "Заявление" },
    ]);
  } else if (document.title === "Words 160-180") {
    words = randomWords([
      { original: "Introduction", translation: "Введение" },
      { original: "Most", translation: "Большинство" },
      { original: "Easy", translation: "Легкий" },
      { original: "Advanced", translation: "Продвинутый" },
      { original: "Called ", translation: "Называется" },
      { original: "Exercise", translation: "Упражнение" },
      { original: "Submit", translation: "Представлять на рассмотрение" },
      { original: "using", translation: "С использованием" },
      { original: "Try", translation: "Пытаться" },
      { original: "Describe", translation: "Описывать" },
      { original: "Join", translation: "Присоединиться" },
      { original: "Feature", translation: "Особенность" },
      { original: "Tools", translation: "Инструменты" },
      { original: "Preferences", translation: "Предпочтения" },
      { original: "Appearance", translation: "Появление" },
      { original: "Send", translation: "Отправлять" },
      { original: "Encryption", translation: "Шифрование" },
      { original: "Turning", translation: "Превращение" },
      { original: "Usage", translation: "Применение" },
      { original: "Postpone", translation: "Отложить" },
    ]);
  } else if (document.title === "Words 180-200") {
    words = randomWords([
      { original: "Wallpapers", translation: "Обои" },
      { original: "Lock", translation: "Замок" },
      { original: "Brightness", translation: "Яркость" },
      { original: "Look", translation: "Смотреть" },
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
      { original: "Guess", translation: "Предполагать" },
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
      { original: "Responsibility", translation: "Ответственность" },
      { original: "Separation", translation: "Разделение" },
      { original: "Concerns", translation: "Обеспокоенность" },
      { original: "Reproduce", translation: "Воспроизводить" },
      { original: "Represent", translation: "Представлять" },
      { original: "Protective", translation: "Защитный" },
      { original: "Total", translation: "Общий" },
      { original: "Beginner", translation: "Новичок" },
      { original: "Goal", translation: "Цель" },
      { original: "Agree", translation: "Соглашаться" },
      { original: "Article", translation: "Статья" },
      { original: "Learning", translation: "Обучение" },
      { original: "Jobs", translation: "Вакансии" },
      { original: "Spread", translation: "Распространение" },
      { original: "Included", translation: "Включено" },
      { original: "Anyone", translation: "Любой" },
      { original: "Against", translation: "Против" },
      { original: "Proverbial", translation: "Пресловутый" },
      { original: "Wall", translation: "Стена" },
      { original: "Response", translation: "Отклик" },
    ]);
  } else if (document.title === "Words 280-300") {
    words = randomWords([
      { original: "Quiz", translation: "Контрольный опрос" },
      { original: "Init", translation: "В этом" },
      { original: "Core", translation: "Основной" },
      { original: "Within", translation: "В пределах" },
      { original: "Along with", translation: "Вместе с" },
      { original: "Modern", translation: "Современный" },
      { original: "Own", translation: "Собственный" },
      { original: "Loops", translation: "Петли" },
      { original: "Health", translation: "Здоровье" },
      { original: "Must", translation: "Должен" },
      { original: "Defeat", translation: "Поражение" },
      { original: "Which", translation: "Который" },
      { original: "Build", translation: "Строить" },
      { original: "Curriculum", translation: "Учебный план" },
      { original: "Will need to", translation: "Нужно будет" },
      { original: "Knowledge", translation: "Знание" },
      { original: "Through", translation: "Через" },
      { original: "Responsive", translation: "Отзывчивый" },
      { original: "First", translation: "Первый" },
      { original: "Boilerplate", translation: "Шаблон" },
    ]);
  } else if (document.title === "Words 300-320") {
    words = randomWords([
      { original: "Should", translation: "Должен" },
      { original: "Writing", translation: "Письмо" },
      { original: "Begin", translation: "Начинать" },
      { original: "Into", translation: "В" },
      { original: "Passes", translation: "Проходит" },
      { original: "Depending", translation: "В зависимости" },
      { original: "Might", translation: "Мощь" },
      { original: "Preview", translation: "Предварительный просмотр" },
      { original: "Built-in", translation: "Встроенный" },
      { original: "Helpful", translation: "Полезный" },
      { original: "Note", translation: "Примечание" },
      { original: "Semicolon", translation: "Точка с запятой" },
      { original: "Everything", translation: "Все" },
      { original: "Coming up", translation: "Скоро" },
      { original: "Before you start", translation: "Прежде чем ты начнешь" },
      { original: "Keep", translation: "Держать" },
      { original: "Then", translation: "Затем" },
      { original: "Has been", translation: "Был" },
      { original: "Remember", translation: "Помнить" },
      { original: "Hold a value", translation: "Удерживайте значение" },
    ]);
  } else if (document.title === "Words 320-340") {
    words = randomWords([
      { original: "Example", translation: "Пример" },
      { original: "Would", translation: "бы" },
      { original: "Tell", translation: "Рассказывать" },
      { original: "Does", translation: "Делает" },
      { original: "There", translation: "Там" },
      { original: "Named", translation: "Именованный" },
      { original: "Convention", translation: "Соглашение" },
      { original: "Conventional", translation: "Общепринятый" },
      { original: "Multiple", translation: "Несколько" },
      { original: "Has", translation: "Имеет" },
      { original: "Letter", translation: "Письмо" },
      { original: "Them", translation: "Их" },
      { original: "Different", translation: "Другой" },
      { original: "Store things like", translation: "Храните такие вещи, как" },
      { original: "Surrounded", translation: "Окруженный" },
      { original: "Quotes", translation: "Кавычки" },
      { original: "Backticks", translation: "Обратные кавычки" },
      { original: "Able", translation: "Способный" },
      { original: "Items", translation: "Предметы" },
      { original: "That do", translation: "Это делает" },
    ]);
  } else if (document.title === "Words 340-360") {
    words = randomWords([
      { original: "Notice how", translation: "Обратите внимание, как" },
      { original: "Commas", translation: "Запятые" },
      { original: "For now", translation: "На данный момент" },
      { original: "Just", translation: "Только" },
      { original: "Track", translation: "Отслеживать" },
      { original: "Respective", translation: "Соответствующий" },
      { original: "Each", translation: "Каждый" },
      { original: "Second", translation: "Второй" },
      { original: "Third", translation: "Третий" },
      { original: "Wrap", translation: "Сворачивать" },
      { original: "Those", translation: "Те" },
      { original: "Around", translation: "Вокруг" },
      { original: "Us", translation: "Нас" },
      { original: "Mean", translation: "Иметь в виду" },
      { original: "Much", translation: "Много" },
      { original: "Shape", translation: "Форма" },
      { original: "Charts", translation: "Графики" },
      { original: "Notation", translation: "Обозначения" },
      { original: "Driven", translation: "управляемый" },
      { original: "Library", translation: "Библиотека" },
    ]);
  } else if (document.title === "Words 360-380") {
    words = randomWords([
      { original: "Credentialless", translation: "Без учетных данных" },
      { original: "Property", translation: "Свойство" },
      { original: "Queue", translation: "Очередь" },
      { original: "Frame", translation: "Рамка" },
      { original: "Blur", translation: "Размытие" },
      { original: "Caches", translation: "Тайники" },
      { original: "Capture", translation: "Захватывать" },
      { original: "Event", translation: "Событие" },
      { original: "Tick", translation: "Галочка" },
      { original: "Aid", translation: "Помогать" },
      { original: "Bit", translation: "Немного" },
      { original: "Credential", translation: "Учетные данные" },
      { original: "Cross", translation: "Пересекать" },
      { original: "Custom elements", translation: "Пользовательские элементы" },
      { original: "Ratio", translation: "Соотношение" },
      { original: "Fetch", translation: "Привести" },
      { original: "Such", translation: "Такой" },
      { original: "Runtime", translation: "Время выполнения" },
      { original: "Some", translation: "Некоторый" },
      { original: "Express", translation: "Выражать" },
    ]);
  }
}
// functions------------------------------------
(function burgerClick() {
  const burgerNav = document.querySelector(".burger_nav");
  const burgerIcon = document.querySelector(".burger_icon");

  burgerIcon.addEventListener("click", function () {
    this.classList.toggle("active");
    burgerNav.classList.toggle("open");
  });
})();

function translationGenerator(_words, _userAnswer, _countAnswers, _input) {
  let currentWord = getNextWord();
  let userTranslation = _input.value.toLowerCase().trim();
  let correctTranslation = currentWord.translation.toLowerCase().trim();

  if (userTranslation === correctTranslation) {
    renderCorrectText(currentWord);
    correctAnswers++;
  } else {
    inCorrectAnswers++;
    renderIncorrectText(currentWord);
  }

  correctIndex = (correctIndex + 1) % _words.length;

  renderTextAnswer(_userAnswer, _countAnswers);

  _input.value = "";
}

function getNextWord() {
  return words[correctIndex];
}

function renderCorrectText(currentWord) {
  translation.innerHTML = `${currentWord.original} - <span class="green_text"> ${currentWord.translation} </span>`;
}

function renderIncorrectText(currentWord) {
  translation.innerHTML = `${currentWord.original} - <span class="red_text">${currentWord.translation}</span>`;
}

function randomWords(random) {
  for (let i = random.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [random[i], random[j]] = [random[j], random[i]];
  }
  return random;
}

function renderTextAnswer(nextWord, countUserAnswers) {
  nextWord.textContent = getNextWord().original;
  countUserAnswers.innerHTML = `
          <p>${correctAnswersText}: <span class="green_text">${correctAnswers}</span></p>
          <p>${inCorrectAnswersText}: <span class="red_text">${inCorrectAnswers}</span></p>
        `;
}

let correctIndex = 0;
let correctAnswers = 0;
let correctAnswersText = "Правильные ответы";
let inCorrectAnswers = 0;
let inCorrectAnswersText = "Неправильные ответы";

const userAnswer = document.querySelector(".user_answer");
const input = document.querySelector(".input");
const translation = document.querySelector(".translation");
const countAnswers = document.querySelector(".count_answers");

renderTextAnswer(userAnswer, countAnswers);

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    if (input.value.trim() === "") {
      userAnswer.classList.add("red_text");
      setTimeout(() => {
        userAnswer.classList.remove("red_text");
      }, 600);
      return;
    }
    translationGenerator(words, userAnswer, countAnswers, input);
  }
});
