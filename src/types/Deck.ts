interface Deck {
  name: string;
  description?: string;
  content: { [key: string]: { 
    text: string;
    language: { [key: string]: { 
      original_name: string;
      code: string;
      flag: string;
      english_name: string;
    } }[];
   } }[];
  createdDate?: string;
}

export default Deck;