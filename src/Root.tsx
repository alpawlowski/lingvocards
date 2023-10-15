import { Routes, Route, Navigate } from 'react-router-dom';
import { Wrapper } from "./Root.styles"
import MainTemplate from "./templates/MainTemplate/MainTemplate"
import HomePage from "./views/HomePage/HomePage"
import DeckOfFlashcards from './views/DeckOfFlashcards/DeckOfFlashcards';
import RemoveDeck from './views/RemoveDeck/RemoveDeck';
import CreateDeck from './views/CreateDeck/CreateDeck';
import DeckDetails from './views/DeckDetails/DeckDetails';
import DeckEditContent from './views/DeckEditContent/DeckEditContent';
import DeckAddContent from './views/DeckAddContent/DeckAddContent';
import TreeLocalStorage from './views/TreeLocalStorage/TreeLocalStorage';
import LearnDeck from './views/LearnDeck/LearnDeck';
import LearnDeckBySelectedMethod from './views/LearnDeckBySelectedMethod/LearnDeckBySelectedMethod';

function Root() {

  return (
    <MainTemplate>
      <Wrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/decks" element={<DeckOfFlashcards />} />
          <Route path="/learn" element={<LearnDeck />} />
          <Route path="/deck-details/:deckKey" element={<DeckDetails />} />
          <Route path="/learn/:deckKey/:method" element={<LearnDeckBySelectedMethod />} />
          <Route path="/create-deck" element={<CreateDeck />} />
          <Route path="/remove-deck" element={<RemoveDeck />} />
          <Route path="/deck-details/:deckKey" element={<DeckDetails />} />
          <Route path="/:deckKey/edit/:contentIndex" element={<DeckEditContent />} />
          <Route path="/:deckKey/add" element={<DeckAddContent />} />
          <Route path="/tree" element={<TreeLocalStorage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Wrapper>
    </MainTemplate>
  )
}

export default Root
