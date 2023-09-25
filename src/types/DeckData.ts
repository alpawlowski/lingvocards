interface DeckData {
  [key: string]: {
    name: string;
    description: string;
    createdDate: string;
    content: {
      type: {
        text: string;
      };
      front: {
        text: string;
        transcription: string;
      };
      back: {
        text: string;
        transcription: string;
      };
    }[];
  };
}

export default DeckData;