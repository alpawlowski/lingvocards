import { Wrapper } from "./HomePage.styles";
import ButtonLink from "../../components/ButtonLink/ButtonLink";
import { useAppContext } from '../../context/AppContext';

const HomePage = () => {
  
  const { decks } = useAppContext();
  
  return (
    <Wrapper>
      <h2>Welcome to</h2>
      <h1>LingvoCards</h1>
      {/* <h1>LingvoLernado</h1> */}
      <p>A program for creating and learning flashcards, which is used to support the learning process.</p>

      { decks ? (
        <ButtonLink to='/decks'>
          Go to decks
        </ButtonLink>
      ) : (
        <ButtonLink to='/create-deck'>
          Create a learning deck
        </ButtonLink>
      )}
    </Wrapper>
  )
}

export default HomePage