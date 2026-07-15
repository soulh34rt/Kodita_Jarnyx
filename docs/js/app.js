const inputText = document.getElementById('inputText');
const output = document.getElementById('output');
const modeText = document.getElementById('modeText');
const actionBtns = document.querySelectorAll('.toggle-btn');
const copyBtn = document.getElementById('copyBtn');
const copyAllBtn = document.getElementById('copyAllBtn');
const langBtns = document.querySelectorAll('.lang-btn');

let currentMode = 'encode';
let currentLang = 'es';

function changeLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];

  document.getElementById('appTitle').textContent = t.appTitle;
  document.getElementById('appSubtitle').textContent = t.appSubtitle;
  document.getElementById('modeLabel').textContent = t.modeLabel;
  document.getElementById('inputLabel').textContent = t.inputLabel;
  document.getElementById('encodeBtn').textContent = t.encodeBtn;
  document.getElementById('decodeBtn').textContent = t.decodeBtn;
  document.getElementById('resultLabel').textContent = t.resultLabel;
  document.getElementById('copyBtnText').textContent = t.copyBtnText;
  document.getElementById('copyAllBtnText').textContent = t.copyAllBtnText;
  document.getElementById('howItWorks').textContent = t.howItWorks;
  document.getElementById('explanationText').textContent = t.explanationText;
  document.getElementById('encodeTitle').textContent = t.encodeTitle;
  document.getElementById('encodeStep1').textContent = t.encodeStep1;
  document.getElementById('encodeStep2').textContent = t.encodeStep2;
  document.getElementById('encodeStep3').textContent = t.encodeStep3;
  document.getElementById('decodeTitle').textContent = t.decodeTitle;
  document.getElementById('decodeStep1').textContent = t.decodeStep1;
  document.getElementById('decodeStep2').textContent = t.decodeStep2;
  document.getElementById('decodeStep3').textContent = t.decodeStep3;
  document.getElementById('exampleTitle').textContent = t.exampleTitle;
  document.getElementById('exampleText').textContent = t.exampleText;
  document.getElementById('encodeExample').textContent = t.encodeExample;
  document.getElementById('exampleSteps').innerHTML = t.exampleSteps;
  document.getElementById('resultLabel3').textContent = t.resultLabel3;
  document.getElementById('exampleResult').textContent = t.exampleResult;
  document.getElementById('licenseText').textContent = t.licenseText;
  document.getElementById('authorText').textContent = t.authorText;

  const developedByElement = document.getElementById('developedBy');
  developedByElement.innerHTML = `${t.developedBy}<a href="https://github.com/soulh34rt" target="_blank">ADA</a>`;

  inputText.placeholder = lang === 'jp' ? 'テキストを入力または貼り付け...' : `${t.encodeBtn} ${t.inputLabel.toLowerCase()}...`;

  updateModeText();
}

function updateModeText() {
  const t = translations[currentLang];
  modeText.textContent = currentMode === 'encode' ? t.encodeBtn : t.decodeBtn;
}

function copyResult() {
  const text = output.innerText;
  const t = translations[currentLang];
  if (!text || text === t.resultPlaceholder) return;

  navigator.clipboard.writeText(text).then(() => {
    const feedback = {
      'Copiar': '¡Copiado!', 'Copy': 'Copied!', 'Copier': 'Copié !',
      'Kopieren': 'Kopiert!', 'コピー': 'コピーしました！'
    };
    document.getElementById('copyBtnText').textContent = feedback[t.copyBtnText] || '✓';
    output.classList.add('success');
    setTimeout(() => {
      document.getElementById('copyBtnText').textContent = t.copyBtnText;
      output.classList.remove('success');
    }, 2000);
  }).catch(() => {});
}

function copyAll() {
  const input = inputText.value;
  const result = output.innerText;
  const t = translations[currentLang];
  if (!input || result === t.resultPlaceholder) return;
  const label = `${t.inputLabel}:\n${input}\n\n${t.resultLabel} (${currentMode === 'encode' ? t.encodeBtn : t.decodeBtn}):\n${result}`;

  navigator.clipboard.writeText(label).then(() => {
    const original = document.getElementById('copyAllBtnText').textContent;
    const feedback = {
      'Copiar Todo': '¡Todo Copiado!', 'Copy All': 'All Copied!', 'Tout copier': 'Tout Copié !',
      'Alles kopieren': 'Alles Kopiert!', 'すべてコピー': 'すべてコピーしました！'
    };
    document.getElementById('copyAllBtnText').textContent = feedback[t.copyAllBtnText] || '✓';
    setTimeout(() => {
      document.getElementById('copyAllBtnText').textContent = original;
    }, 2000);
  }).catch(() => {});
}

function updateResult() {
  const text = inputText.value;
  updateModeText();

  if (text.trim() === '') {
    output.textContent = translations[currentLang].resultPlaceholder;
    return;
  }

  output.textContent = processText(text, currentMode);
}

inputText.addEventListener('input', updateResult);

copyBtn.addEventListener('click', copyResult);
copyAllBtn.addEventListener('click', copyAll);

actionBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    currentMode = btn.dataset.mode;
    actionBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    updateResult();
  });
});

langBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    langBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    changeLanguage(lang);

    const examples = {
      es: 'Musi Musi este es un Kodita Ejemplo',
      en: 'Hello world! This is an example.',
      fr: "Bonjour le monde! C'est un exemple.",
      de: 'Hallo Welt! Das ist ein Beispiel.',
      jp: 'こんにちは世界！これは例です。'
    };
    inputText.value = examples[lang] || 'Hello こんにちは! This is a multilingual example.';
    updateResult();
  });
});

updateResult();
