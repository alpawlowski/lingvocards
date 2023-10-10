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
        language: { 
          original_name: string;
          code: string;
          flag: string;
          english_name: string;
        };
      };
      back: {
        text: string;
        language: { 
          original_name: string;
          code: string;
          flag: string;
          english_name: string;
        };
      };
    }[];
  };
}

export default DeckData;