const translations = {
  ar: {
    title: "حكمة اليوم",
    titleSub: "Daily Wisdom",
    showQuote: "اقتباس جديد",
    share: "مشاركة",
    copy: "نسخ",
    copied: "تم النسخ",
    copyError: "فشل النسخ",
    language: "اللغة",
    category: "الفئة",
    all: "الكل",
    wisdom: "حكمة",
    inspiration: "إلهام",
    success: "نجاح",
    life: "حياة",
    quotesAvailable: "<span id='quoteCount'>0</span> اقتباس متاح",
    madeWith: "مصنوع ب ❤️",
    authorPrefix: "— "
  },
  en: {
    title: "Daily Wisdom",
    titleSub: "حكمة اليوم",
    showQuote: "New Quote",
    share: "Share",
    copy: "Copy",
    copied: "Copied to clipboard",
    copyError: "Failed to copy",
    language: "Language",
    category: "Category",
    all: "All",
    wisdom: "Wisdom",
    inspiration: "Inspiration",
    success: "Success",
    life: "Life",
    quotesAvailable: "<span id='quoteCount'>0</span> quotes available",
    madeWith: "Made with ❤️",
    authorPrefix: "— "
  },
  zh: {
    title: "每日格言",
    titleSub: "Daily Wisdom",
    showQuote: "新报价",
    share: "分享",
    language: "语言",
    category: "类别",
    all: "全部",
    wisdom: "智慧",
    inspiration: "灵感",
    success: "成功",
    life: "生活",
    quotesAvailable: "<span id='quoteCount'>0</span> 条可用报价",
    madeWith: "用 ❤️ 制作",
    authorPrefix: "— "
  },
  ru: {
    title: "Мудрость дня",
    titleSub: "Daily Wisdom",
    showQuote: "Новая цитата",
    share: "Поделиться",
    copy: "Копировать",
    copied: "Скопировано",
    copyError: "Ошибка копирования",
    language: "اللغة | Language | Язык",
    category: "الفئة | Category | Категория",
    all: "Все",
    wisdom: "Мудрость",
    inspiration: "Вдохновение",
    success: "Успех",
    life: "Жизнь",
    quotesAvailable: "<span id='quoteCount'>0</span> цитат доступно",
    madeWith: "Сделано с ❤️",
    authorPrefix: "— "
  }
};

// Sample quotes data structure
const quotes = {
  ar: [
    // Existing quotes remain...
    { text: "المعرفة كنز لا ينفد", category: "wisdom", author: "حكمة عربية" },
    { text: "العقل السليم في الجسم السليم", category: "wisdom", author: "حكمة عربية" },
    { text: "خير الكلام ما قل ودل", category: "wisdom", author: "حكمة عربية" },
    { text: "الوقت كالسيف إن لم تقطعه قطعك", category: "life", author: "حكمة عربية" },
    { text: "الصديق وقت الضيق", category: "life", author: "مثل عربي" },
    { text: "درهم وقاية خير من قنطار علاج", category: "wisdom", author: "حكمة عربية" },
    { text: "من سار على الدرب وصل", category: "success", author: "مثل عربي" },
    { text: "الأفعال أبلغ من الأقوال", category: "wisdom", author: "حكمة عربية" },
    { text: "اطلب العلم من المهد إلى اللحد", category: "wisdom", author: "حديث شريف" },
    { text: "خير الأمور الوسط", category: "wisdom", author: "حكمة عربية" },
    { text: "لكل مجتهد نصيب", category: "success", author: "مثل عربي" },
    { text: "الحياة مدرسة والتجارب دروس", category: "life", author: "حكمة عربية" },
    { text: "النجاح رحلة وليس وجهة", category: "success", author: "حكمة عربية" },
    { text: "كن جميلاً ترى الوجود جميلا", category: "inspiration", author: "إيليا أبو ماضي" },
    { text: "السعادة في العطاء", category: "life", author: "حكمة عربية" },
    { text: "الإخلاص أساس النجاح", category: "success", author: "حكمة عربية" },
    { text: "التغيير يبدأ من الداخل", category: "inspiration", author: "حكمة عربية" },
    { text: "الأمل يحرك الجبال", category: "inspiration", author: "حكمة عربية" },
    { text: "الحكمة ضالة المؤمن", category: "wisdom", author: "حديث شريف" },
    { text: "العلم يرفع بيتاً لا عماد له", category: "wisdom", author: "حكمة عربية" },
    { text: "العلم نور", category: "wisdom", author: "حديث شريف" },
    { text: "من جد وجد", category: "success", author: "مثل عربي" },
    { text: "لا تؤجل عمل اليوم إلى الغد", category: "life", author: "حكمة قديمة" },
    { text: "الصبر مفتاح الفرج", category: "wisdom", author: "حكمة عربية" },
    { text: "العلم في الصغر كالنقش على الحجر", category: "wisdom", author: "حكمة عربية" },
    { text: "كل النجاحات تبدأ بالنجاح على النفس", category: "inspiration", author: "حكمة عربية" },
    { text: "للوصول إلى الهدف، عليك أن تبدأ بالمشي", category: "success", author: "حكمة عربية" },
    { text: "كل يوم هو حياة صغيرة", category: "life", author: "حكمة عربية" },
    { text: "أعظم ثروة هي التواصل الإنساني", category: "wisdom", author: "حكمة عربية" },
    { text: "الطيبة لغة يفهمها الأصم ويتحدث بها الأبكم", category: "wisdom", author: "حكمة عربية" },
    { text: "المستقبل ملك لمن يؤمن بجمال أحلامه", category: "inspiration", author: "حكمة عربية" },
    { text: "المعرفة قوة والقوة معرفة", category: "wisdom", author: "حكمة عربية" },
    { text: "في نهاية المطاف سيصل السائر", category: "success", author: "مثل عربي" },
    { text: "السعادة ليست في أن تفعل دائماً ما تريد، بل في أن تريد ما تفعل", category: "life", author: "حكمة عربية" },
    { text: "الإبداع لغز يطرحه الفنان على نفسه", category: "inspiration", author: "حكمة عربية" },
    { text: "ما تستطيع أن تتخيله يمكنك تحقيقه", category: "success", author: "حكمة عربية" },
    { text: "الحياة حركة مستمرة", category: "life", author: "حكمة عربية" },
    { text: "الفرص يجدها من يبحث عنها", category: "success", author: "مثل عربي" },
    { text: "الحكمة تأتي مع إدراك جهلنا", category: "wisdom", author: "حكمة عربية" },
    { text: "أفضل طريقة للتنبؤ بالمستقبل هي صنعه", category: "inspiration", author: "حكمة عربية" }
  ],
  en: [
    // Existing quotes remain...
    { text: "Knowledge is power.", category: "wisdom", author: "Francis Bacon" },
    { text: "A healthy mind in a healthy body.", category: "wisdom", author: "Juvenal" },
    { text: "Brevity is the soul of wit.", category: "wisdom", author: "William Shakespeare" },
    { text: "Time and tide wait for no man.", category: "life", author: "Geoffrey Chaucer" },
    { text: "A friend in need is a friend indeed.", category: "life", author: "Ancient Proverb" },
    { text: "Prevention is better than cure.", category: "wisdom", author: "Erasmus" },
    { text: "The journey of a thousand miles begins with a single step.", category: "success", author: "Lao Tzu" },
    { text: "Actions speak louder than words.", category: "wisdom", author: "Ancient Proverb" },
    { text: "Never stop learning.", category: "wisdom", author: "Ancient Wisdom" },
    { text: "All things in moderation.", category: "wisdom", author: "Ancient Greek Proverb" },
    { text: "Fortune favors the bold.", category: "success", author: "Virgil" },
    { text: "Life is a school and experience is the teacher.", category: "life", author: "Ancient Wisdom" },
    { text: "Success is a journey, not a destination.", category: "success", author: "Arthur Ashe" },
    { text: "Be the change you wish to see in the world.", category: "inspiration", author: "Mahatma Gandhi" },
    { text: "Happiness lies in giving.", category: "life", author: "Ancient Wisdom" },
    { text: "Dedication is the path to success.", category: "success", author: "Ancient Wisdom" },
    { text: "Change starts from within.", category: "inspiration", author: "Ancient Wisdom" },
    { text: "Hope moves mountains.", category: "inspiration", author: "Ancient Proverb" },
    { text: "Wisdom is the supreme part of happiness.", category: "wisdom", author: "Sophocles" },
    { text: "Education is the foundation of progress.", category: "wisdom", author: "Ancient Wisdom" },
    { text: "The only way to do great work is to love what you do.", category: "success", author: "Steve Jobs" },
    { text: "In the middle of difficulty lies opportunity.", category: "inspiration", author: "Albert Einstein" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", category: "inspiration", author: "Eleanor Roosevelt" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", category: "success", author: "Winston Churchill" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "wisdom", author: "Franklin D. Roosevelt" },
    { text: "All victories begin with victory over oneself.", category: "inspiration", author: "Ancient Wisdom" },
    { text: "To reach your goal, you must first begin walking.", category: "success", author: "Honoré de Balzac" },
    { text: "Each day is a little life.", category: "life", author: "Ancient Wisdom" },
    { text: "The greatest luxury is human connection.", category: "wisdom", author: "Antoine de Saint-Exupéry" },
    { text: "Kindness is a language the deaf can hear and the blind can see.", category: "wisdom", author: "Mark Twain" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", category: "inspiration", author: "Ancient Wisdom" },
    { text: "Knowledge is power, and power is knowledge.", category: "wisdom", author: "Francis Bacon" },
    { text: "The journey is completed by taking steps.", category: "success", author: "Ancient Proverb" },
    { text: "Happiness is not in doing what one likes, but in liking what one does.", category: "life", author: "Leo Tolstoy" },
    { text: "Creativity is a riddle where the artist is both the questioner and solver.", category: "inspiration", author: "Ancient Wisdom" },
    { text: "What you can imagine, you can achieve.", category: "success", author: "Ancient Wisdom" },
    { text: "Life demands movement.", category: "life", author: "Aristotle" },
    { text: "Opportunities are found by those who seek them.", category: "success", author: "Ancient Proverb" },
    { text: "Wisdom comes from acknowledging our ignorance.", category: "wisdom", author: "Socrates" },
    { text: "The best way to predict the future is to create it.", category: "inspiration", author: "Peter Drucker" }
  ],
  zh: [
    // Existing quotes remain...
    { text: "千里之行，始于足下。", category: "success", author: "老子" },
    { text: "学而不思则罔，思而不学则殆。", category: "wisdom", author: "孔子" },
    { text: "三人行，必有我师焉。", category: "wisdom", author: "孔子" },
    { text: "知之者不如好之者，好之者不如乐之者。", category: "wisdom", author: "孔子" },
    { text: "己所不欲，勿施于人。", category: "wisdom", author: "孔子" },
    { text: "不积跬步，无以至千里。", category: "success", author: "荀子" },
    { text: "天行健，君子以自强不息。", category: "inspiration", author: "易经" },
    { text: "生命在于运动。", category: "life", author: "中国谚语" },
    { text: "一日之计在于晨。", category: "wisdom", author: "中国谚语" },
    { text: "前事不忘，后事之师。", category: "wisdom", author: "中国谚语" },
    { text: "万事开头难。", category: "success", author: "中国谚语" },
    { text: "有志者事竟成。", category: "success", author: "中国谚语" },
    { text: "知识就是力量。", category: "wisdom", author: "中国谚语" },
    { text: "机不可失，时不再来。", category: "success", author: "中国谚语" },
    { text: "取法乎上，仅得其中。", category: "success", author: "中国谚语" },
    { text: "宝剑锋从磨砺出，梅花香自苦寒来。", category: "success", author: "中国谚语" },
    { text: "读书破万卷，下笔如有神。", category: "wisdom", author: "杜甫" },
    { text: "日行千里，致广大而尽精微。", category: "success", author: "中国谚语" },
    { text: "学海无涯苦作舟。", category: "wisdom", author: "中国谚语" },
    { text: "勿以恶小而为之，勿以善小而不为。", category: "wisdom", author: "中国谚语" },
    { text: "学而不思则罔，思而不学则殆。", category: "wisdom", author: "孔子" },
    { text: "千里之行，始于足下。", category: "success", author: "老子" },
    { text: "己所不欲，勿施于人。", category: "wisdom", author: "孔子" },
    { text: "天行健，君子以自强不息。", category: "inspiration", author: "《周易》" },
    { text: "海内存知己，天涯若比邻。", category: "life", author: "王勃" },
    { text: "所有的胜利都始于战胜自我。", category: "inspiration", author: "中国谚语" },
    { text: "欲达目标，必先启程。", category: "success", author: "中国谚语" },
    { text: "每一天都是一个小生命。", category: "life", author: "中国谚语" },
    { text: "人与人之间的联系是最大的财富。", category: "wisdom", author: "中国谚语" },
    { text: "善良是一种无声的语言。", category: "wisdom", author: "中国谚语" },
    { text: "未来属于相信梦想之美的人。", category: "inspiration", author: "中国谚语" },
    { text: "知识就是力量，力量源于知识。", category: "wisdom", author: "中国谚语" },
    { text: "坚持的人最终会到达终点。", category: "success", author: "中国谚语" },
    { text: "快乐不在于做什么，而在于爱做什么。", category: "life", author: "中国谚语" },
    { text: "创造力是艺术家给自己的谜题。", category: "inspiration", author: "中国谚语" },
    { text: "能想到的就能做到。", category: "success", author: "中国谚语" },
    { text: "生命在于运动。", category: "life", author: "中国谚语" },
    { text: "机会总是留给有准备的人。", category: "success", author: "中国谚语" },
    { text: "承认无知是智慧的开始。", category: "wisdom", author: "中国谚语" },
    { text: "创造未来是最好的预测方式。", category: "inspiration", author: "中国谚语" }
  ],
  ru: [
    // Existing quotes remain...
    { text: "Знание — сила.", category: "wisdom", author: "Фрэнсис Бэкон" },
    { text: "В здоровом теле здоровый дух.", category: "wisdom", author: "Древняя мудрость" },
    { text: "Краткость — сестра таланта.", category: "wisdom", author: "А.П. Чехов" },
    { text: "Время не ждет.", category: "life", author: "Русская пословица" },
    { text: "Друг познается в беде.", category: "life", author: "Русская пословица" },
    { text: "Береженого Бог бережет.", category: "wisdom", author: "Русская пословица" },
    { text: "Дорогу осилит идущий.", category: "success", author: "Русская пословица" },
    { text: "Не словом, а делом.", category: "wisdom", author: "Русская пословица" },
    { text: "Век живи — век учись.", category: "wisdom", author: "Русская пословица" },
    { text: "Всему своя мера.", category: "wisdom", author: "Русская пословица" },
    { text: "Смелость города берет.", category: "success", author: "Русская пословица" },
    { text: "Жизнь прожить — не поле перейти.", category: "life", author: "Русская пословица" },
    { text: "Успех — это путь, а не пункт назначения.", category: "success", author: "Древняя мудрость" },
    { text: "Будь тем изменением, которое хочешь видеть в мире.", category: "inspiration", author: "Махатма Ганди" },
    { text: "Счастье в том, чтобы давать.", category: "life", author: "Русская мудрость" },
    { text: "Усердие — мать успеха.", category: "success", author: "Русская пословица" },
    { text: "Перемены начинаются с себя.", category: "inspiration", author: "Русская мудрость" },
    { text: "Надежда умирает последней.", category: "inspiration", author: "Русская пословица" },
    { text: "Мудрость — высшее благо.", category: "wisdom", author: "Древняя мудрость" },
    { text: "Учение — свет, а неучение — тьма.", category: "wisdom", author: "Русская пословица" },
    { text: "Учитесь так, словно вы постоянно ощущаете нехватку своих знаний.", category: "wisdom", author: "Иван Павлов" },
    { text: "Жизнь — это то, что с тобой происходит, пока ты строишь другие планы.", category: "life", author: "Джон Леннон" },
    { text: "Успех — это способность идти от поражения к поражению, не теряя оптимизма.", category: "success", author: "Уинстон Черчилль" },
    { text: "Великие умы обсуждают идеи, средние — события, а маленькие — людей.", category: "wisdom", author: "Элеонора Рузвельт" },
    { text: "Единственный способ сделать что-то очень хорошо — любить то, что ты делаешь.", category: "success", author: "Стив Джобс" },
    { text: "Все победы начинаются с победы над самим собой.", category: "inspiration", author: "Леонид Леонов" },
    { text: "Чтобы дойти до цели, надо прежде всего идти.", category: "success", author: "Оноре де Бальзак" },
    { text: "Каждый день – это маленькая жизнь.", category: "life", author: "Максим Горький" },
    { text: "Самая большая роскошь – это роскошь человеческого общения.", category: "wisdom", author: "Антуан де Сент-Экзюпери" },
    { text: "Доброта – язык, на котором немые могут говорить и который глухие могут слышать.", category: "wisdom", author: "Марк Твен" },
    { text: "Будущее принадлежит тем, кто верит в красоту своей мечты.", category: "inspiration", author: "Анна Павлова" },
    { text: "Знание – это сила, сила – это знание.", category: "wisdom", author: "В.Г. Белинский" },
    { text: "Дорогу осилит идущий.", category: "success", author: "Русская пословица" },
    { text: "Счастье не в том, чтобы делать всегда, что хочешь, а в том, чтобы всегда хотеть того, что делаешь.", category: "life", author: "Лев Толстой" },
    { text: "Творчество – это загадка, которую художник задает сам себе.", category: "inspiration", author: "Станиславский" },
    { text: "Если ты можешь что-то представить – ты можешь этого достичь.", category: "success", author: "А.С. Пушкин" },
    { text: "Жизнь требует движения.", category: "life", author: "Аристотель" },
    { text: "Возможности находит тот, кто их ищет.", category: "success", author: "Русская пословица" },
    { text: "Мудрость приходит с осознанием своего незнания.", category: "wisdom", author: "Сократ" },
    { text: "Лучший способ предсказать будущее – создать его.", category: "inspiration", author: "Петр Первый" }
  ]
};

let currentLang = "ru";
let currentCategory = "all";
let filteredQuotes = [];
let isDarkMode = false;

// Quote of the Day functionality
function isNewDay() {
  const lastDate = localStorage.getItem('lastQuoteDate');
  const today = new Date().toLocaleDateString();
  return lastDate !== today;
}

function setQuoteOfTheDay() {
  const currentLangQuotes = quotes[currentLang];
  if (isNewDay() || !localStorage.getItem('quoteOfTheDay')) {
    const randomIndex = Math.floor(Math.random() * currentLangQuotes.length);
    const todaysQuote = currentLangQuotes[randomIndex];
    localStorage.setItem('quoteOfTheDay', JSON.stringify(todaysQuote));
    localStorage.setItem('lastQuoteDate', new Date().toLocaleDateString());
  }
  return JSON.parse(localStorage.getItem('quoteOfTheDay'));
}

// Initialize the application
function init() {
  // Set up event listeners
  const elements = {
    languageSelect: document.getElementById('languageSelect'),
    categorySelect: document.getElementById('categorySelect'),
    quoteButton: document.getElementById('quoteButton'),
    shareButton: document.getElementById('shareButton'),
    darkModeButton: document.getElementById('darkModeButton'),
    darkModeIcon: document.getElementById('darkModeIcon')
  };
  
  // Add event listeners if elements exist
  if (elements.languageSelect) elements.languageSelect.addEventListener('change', changeLanguage);
  if (elements.categorySelect) elements.categorySelect.addEventListener('change', filterQuotes);
  if (elements.quoteButton) elements.quoteButton.addEventListener('click', showQuote);
  if (elements.shareButton) elements.shareButton.addEventListener('click', shareQuote);
  if (elements.darkModeButton) {
    elements.darkModeButton.addEventListener('click', () => {
      isDarkMode = !isDarkMode;
      updateDarkMode();
    });
  }
  
  // Initialize dark mode state
  const savedPreferences = localStorage.getItem('quoteAppPreferences');
  if (savedPreferences) {
    try {
      const prefs = JSON.parse(savedPreferences);
      isDarkMode = !!prefs.darkMode;
    } catch (e) {
      isDarkMode = false;
    }
  }
  
  // Apply initial dark mode state
  updateDarkMode();
  
  // Load other preferences and initialize UI
  loadPreferences();
  updateTexts();
  filterQuotes();
  showQuote();
  
  console.log('Application initialized');
  console.log('Current dark mode state:', document.body.classList.contains('dark-mode'));
  
  // Add a small delay and check again to ensure dark mode is applied
  setTimeout(() => {
    console.log('Delayed check - Dark mode state:', document.body.classList.contains('dark-mode'));
    console.log('Body classes:', document.body.className);
  }, 100);
}

// Update all text elements based on current language
function updateTexts() {
  const t = translations[currentLang];
  
  // Update UI elements
  document.querySelector('.title-text').textContent = t.title;
  document.querySelector('.title-sub').textContent = t.titleSub;
  document.getElementById('quoteButtonText').textContent = t.showQuote;
  document.getElementById('shareButtonText').textContent = t.share;
  document.getElementById('copyButtonText').textContent = t.copy;
  document.querySelector('footer p').innerHTML = `${t.madeWith} | ${t.quotesAvailable}`;
  
  // Update language options
  const langSelect = document.getElementById('languageSelect');
  langSelect.innerHTML = `
    <option value="ar">العربية</option>
    <option value="en">English</option>
    <option value="zh">中文</option>
    <option value="ru">Русский</option>
  `;
  langSelect.value = currentLang;
  
  // Update category options
  const catSelect = document.getElementById('categorySelect');
  catSelect.innerHTML = `
    <option value="all">${t.all}</option>
    <option value="wisdom">${t.wisdom}</option>
    <option value="inspiration">${t.inspiration}</option>
    <option value="success">${t.success}</option>
    <option value="life">${t.life}</option>
  `;
  catSelect.value = currentCategory;
  
  // Update RTL/LTR direction
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
}

// Filter quotes based on selected category
function filterQuotes() {
  currentCategory = document.getElementById('categorySelect').value;
  
  if (currentCategory === 'all') {
    filteredQuotes = [...quotes[currentLang]];
  } else {
    filteredQuotes = quotes[currentLang].filter(quote => quote.category === currentCategory);
  }
  
  // Update quote count
  document.getElementById('quoteCount').textContent = filteredQuotes.length;
  
  // Save preferences
  savePreferences();
  
  return filteredQuotes;
}

// Display a random quote
function showQuote() {
  const quoteCard = document.getElementById('quoteCard');
  const quoteText = document.getElementById('quote');
  const quoteAuthor = document.getElementById('quoteAuthor');
  const t = translations[currentLang];

  try {
    // Add loading state
    quoteCard.classList.add('loading');
    quoteCard.classList.remove('error');
    
    // Check for empty quotes
    if (filteredQuotes.length === 0) {
      throw new Error('No quotes available in this category.');
    }
    
    const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
    const quote = filteredQuotes[randomIndex];
    
    // Validate quote data
    if (!quote || !quote.text) {
      throw new Error('Invalid quote data.');
    }

    // Fade out current quote
    quoteCard.style.opacity = '0';
    quoteCard.style.transform = 'translateY(20px)';
    
    // Update quote after brief delay for smooth transition
    setTimeout(() => {
      quoteText.textContent = quote.text;
      quoteAuthor.textContent = quote.author ? `${t.authorPrefix}${quote.author}` : '';
      
      // Fade in new quote
      quoteCard.style.opacity = '1';
      quoteCard.style.transform = 'translateY(0)';
    }, 300);

    // Add animation classes
    quoteCard.classList.remove('animate__animated', 'animate__fadeIn');
    void quoteCard.offsetWidth; // Trigger reflow
    quoteCard.classList.add('animate__animated', 'animate__fadeIn');
    
  } catch (error) {
    // Handle errors gracefully
    quoteCard.classList.add('error');
    quoteText.innerHTML = `<div class="error-message">${error.message}</div>`;
    quoteAuthor.textContent = '';
  } finally {
    // Remove loading state
    quoteCard.classList.remove('loading');
  }
}

// Change language
function changeLanguage() {
  currentLang = document.getElementById('languageSelect').value;
  savePreferences();
  updateTexts();
  filterQuotes();
  showQuote();
}

// Share current quote
function shareQuote() {
  const quoteText = document.getElementById('quote').textContent;
  const quoteAuthor = document.getElementById('quoteAuthor').textContent;
  const shareText = `"${quoteText}" ${quoteAuthor}`;
  
  if (navigator.share) {
    navigator.share({
      title: translations[currentLang].title,
      text: shareText,
      url: window.location.href
    }).catch(console.error);
  } else {
    // Fallback for browsers that don't support Web Share API
    const textArea = document.createElement('textarea');
    textArea.value = shareText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    
    // Show copied message
    const originalText = document.getElementById('shareButtonText').textContent;
    document.getElementById('shareButtonText').textContent = translations[currentLang].share === 'Share' ? 'Copied!' : 'تم النسخ!';
    setTimeout(() => {
      document.getElementById('shareButtonText').textContent = originalText;
    }, 2000);
  }
}

// Update dark mode state and UI
function updateDarkMode() {
  const body = document.body;
  const darkModeIcon = document.getElementById('darkModeIcon');
  
  // Update body class
  if (isDarkMode) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
  
  // Update icon
  if (darkModeIcon) {
    darkModeIcon.textContent = isDarkMode ? '☀️' : '🌙';
  }
  
  // Save the preference
  savePreferences();
}

// Save user preferences to localStorage
function savePreferences() {
  const preferences = {
    language: currentLang,
    category: currentCategory,
    darkMode: isDarkMode
  };
  try {
    localStorage.setItem('quoteAppPreferences', JSON.stringify(preferences));
  } catch (e) {
    console.error('Failed to save preferences:', e);
  }
}

// Load user preferences from localStorage
function loadPreferences() {
  const saved = localStorage.getItem('quoteAppPreferences');
  if (saved) {
    try {
      const preferences = JSON.parse(saved);
      
      // Set language and category
      currentLang = preferences.language || 'ar';
      currentCategory = preferences.category || 'all';
      
      // Set dark mode
      if (preferences.darkMode) {
        document.body.classList.add('dark-mode');
        const darkModeIcon = document.getElementById('darkModeIcon');
        if (darkModeIcon) {
          darkModeIcon.textContent = '☀️';
        }
      } else {
        document.body.classList.remove('dark-mode');
        const darkModeIcon = document.getElementById('darkModeIcon');
        if (darkModeIcon) {
          darkModeIcon.textContent = '🌙';
        }
      }
    } catch (error) {
      console.error('Error loading preferences:', error);
      document.body.classList.remove('dark-mode');
    }
  }
}

// Copy to clipboard functionality
function copyToClipboard() {
  const quoteText = document.getElementById('quote').textContent;
  const quoteAuthor = document.getElementById('quoteAuthor').textContent;
  const textToCopy = `${quoteText} ${quoteAuthor}`;
  
  navigator.clipboard.writeText(textToCopy).then(() => {
    showToast('success', '✅', translations[currentLang].copied || 'Copied to clipboard');
  }).catch(() => {
    showToast('error', '❌', translations[currentLang].copyError || 'Failed to copy');
  });
}

// Toast notification system
function showToast(type, icon, message) {
  // Create toast container if it doesn't exist
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  // Create toast element
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span class="icon">${icon}</span>${message}`;
  container.appendChild(toast);

  // Remove toast after animation
  setTimeout(() => {
    toast.addEventListener('animationend', () => {
      toast.remove();
      if (container.children.length === 0) {
        container.remove();
      }
    });
  }, 3000);
}

// Update translations for copy feature
Object.keys(translations).forEach(lang => {
  translations[lang] = {
    ...translations[lang],
    copied: lang === 'ar' ? 'تم النسخ' :
            lang === 'en' ? 'Copied to clipboard' :
            lang === 'zh' ? '已复制' :
            lang === 'ru' ? 'Скопировано' : 'Copied to clipboard',
    copyError: lang === 'ar' ? 'فشل النسخ' :
               lang === 'en' ? 'Failed to copy' :
               lang === 'zh' ? '复制失败' :
               lang === 'ru' ? 'Не удалось скопировать' : 'Failed to copy',
    copy: lang === 'ar' ? 'نسخ' :
          lang === 'en' ? 'Copy' :
          lang === 'zh' ? '复制' :
          lang === 'ru' ? 'Копировать' : 'Copy'
  };
});

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
