interface Deck {
  name: string;
  description?: string;
  content: { [key: string]: { text: string } }[];
  createdDate?: string;
}

export default Deck;