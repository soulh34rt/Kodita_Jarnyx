const alphabet = (() => {
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  chars += 'ÁÉÍÓÚáéíóúÑñÄÖÜäöüÀÂÈÊËÎÔÙÛÇàâèêëîôùûç';
  chars += 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん';
  chars += 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
  chars += '一二三四五六七八九十百千万年月日時分秒上下左右前後中大小長高早';
  chars += '你好吗谢谢再见一二三四五六七八九十';
  chars += '안녕하세요감사합니다';
  chars += 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя';
  return chars;
})();

function processText(text, mode) {
  if (text.trim() === '') return '';

  const alphabetSize = alphabet.length;
  const words = text.split(/(\s+)/);

  return words.map(word => {
    const validChars = [...word].filter(char => alphabet.includes(char));
    const seed = validChars.length;

    let charPosition = 0;
    return [...word].map(char => {
      const indexInAlphabet = alphabet.indexOf(char);

      if (indexInAlphabet !== -1) {
        charPosition++;
        let newIndex;

        if (mode === 'encode') {
          newIndex = (indexInAlphabet + seed + charPosition) % alphabetSize;
        } else {
          newIndex = (indexInAlphabet - seed - charPosition) % alphabetSize;
          if (newIndex < 0) newIndex += alphabetSize;
        }

        return alphabet[newIndex];
      }

      return char;
    }).join('');
  }).join('');
}
