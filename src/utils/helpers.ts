import languages, { LanguageData } from './webSpeechLanguages';

export function getLanguages(): LanguageData[] {
  return languages;
}

export function getAvailableVoices() {
  return window.speechSynthesis.getVoices();
}

export const handleTextToSpeech = (text: string, language: string) => {
  const availableVoices = getAvailableVoices();
  
  const supportedLanguages = availableVoices.map(voice => voice.lang);
  if (!supportedLanguages.includes(language)) {
    return "The selected language is not supported by this browser.";
  }

  const speech = new SpeechSynthesisUtterance();
  speech.text = text;
  speech.lang = language;
  speechSynthesis.speak(speech);
  return null;
};