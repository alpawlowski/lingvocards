import languages, { LanguageData } from './webSpeechLanguages';

export function getLanguages(): LanguageData[] {
  return languages;
}

export function getAvailableVoices() {
  return window.speechSynthesis.getVoices();
}

export const handleTextToSpeech = (text: string, language: string) => {

  const speech = new SpeechSynthesisUtterance();
  speech.text = text;
  speech.lang = language;
  speechSynthesis.speak(speech);
  return null;
};