export const handleTextToSpeech = (text: string) => {
  if ('speechSynthesis' in window) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speechSynthesis.speak(speech);
  }
};