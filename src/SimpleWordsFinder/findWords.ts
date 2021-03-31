function isEnglishLetters(char: string): boolean {
  return char.match(/\w+/) !== null;
}

function isInvalidLetters(char: string): boolean {
  return [',', ' ', '.', '?', '\'', '\"', '!', '-'].includes(char);
}

export function findWords(text: string): string[] {
  const result: string[] = [];
  const chars = [...text];
  let currentWord: string | null = null;
  for (const char of chars) {
    if (currentWord === null) {
      if (isInvalidLetters(char)) {
        // ignore
      } else {
        currentWord = char;
      }
      continue;
    }

    if (isInvalidLetters(char)) {
      result.push(currentWord);
      currentWord = null;
      continue;
    }

    if (!isEnglishLetters(char)) {
      result.push(currentWord);
      currentWord = char;
      continue;
    }

    if (isEnglishLetters(char) && !isEnglishLetters(currentWord)) {
      result.push(currentWord);
      currentWord = char;
      continue;
    }

    currentWord = currentWord + char;
  }

  if (currentWord !== null) {
    result.push(currentWord)
  }

  return result;
}
