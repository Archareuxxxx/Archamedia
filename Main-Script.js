(() => {
  const body = document.body;
  const toggle = document.getElementById('themeToggle');
  const saved = localStorage.getItem('archamedia-theme');
  if (saved === 'light') body.classList.add('light');

  toggle.addEventListener('click', () => {
    body.classList.toggle('light');
    localStorage.setItem('archamedia-theme', body.classList.contains('light') ? 'light' : 'dark');
  });

  document.getElementById('year').textContent = new Date().getFullYear();


  // ticker auto write
  const tickerText = document.getElementById('tickerText');
  const tickerWords = [
    'CHESS',
    'MUSIC',
    'WRITING',
    'BOOKS',
    'TECHNOLOGY',
    'ASTRONOMY',
    'HISTORY',
    'SCIENCE',
    'PHILOSOPHY',
    'DOOM',
    'PROGRAMMING',
    'JEALOUSLY',
    'CHAOS',
    'NOTHING IN PARTICULAR'
  ];
  const tickerSequence = ['. . . . .', '__RANDOM__'];
  let tickerStep = 0;
  let tickerTimer;

  function randomTickerWord(previous) {
    const choices = tickerWords.filter(word => word !== previous);
    return choices[Math.floor(Math.random() * choices.length)];
  }

  function changeTickerText(nextText) {
    tickerText.classList.remove('is-changing');
    void tickerText.offsetWidth;
    tickerText.classList.add('is-changing');
    tickerText.textContent = nextText;
  }

  function runTicker() {
    const current = tickerText.textContent;
    const next = tickerSequence[tickerStep];
    const value = next === '__RANDOM__' ? randomTickerWord(current) : next;
    changeTickerText(value);
    tickerStep = (tickerStep + 1) % tickerSequence.length;
    tickerTimer = window.setTimeout(runTicker, 3000 + Math.random() * 1800);
  }

  // durasi idle
  tickerTimer = window.setTimeout(runTicker, 4200);

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const menu = document.getElementById('nav');
      if (menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
    });
  });

  const nav = document.querySelector('.arch-nav');
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 20 ? '0 10px 35px rgba(0,0,0,.18)' : 'none';
  }, { passive: true });
})();
