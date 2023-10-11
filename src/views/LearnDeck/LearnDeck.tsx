import React from 'react';
import { Wrapper, StyledLink } from "./LearnDeck.styles"
import ModalTemplate from '../../templates/ModalTemplate/ModalTemplate';

const LearnDeck: React.FC = () => {

  return (
    <ModalTemplate title="Continue learning the deck">
      <Wrapper>
        <h2>You haven't been learning any decks lately</h2>
        <StyledLink to='/decks'>
          Select a learning deck
        </StyledLink>
      </Wrapper>
    </ModalTemplate>
  )
}

export default LearnDeck;
