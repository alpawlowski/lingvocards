import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ViewWrapper } from '../../components/ViewWrapper/ViewWrapper';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const InnerWrapper = styled(ViewWrapper)`

`;

export const StyledLink = styled(NavLink)`
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 1.5rem;
  height: 47px;
  color: ${({ theme }) => theme.colors.gold};
  border: 2px solid ${({ theme }) => theme.colors.gold};
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.transparent};

  &:hover {
    color: ${({ theme }) => theme.colors.gray};
    border: 2px solid ${({ theme }) => theme.colors.gray};
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-gap: 5rem;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  align-items: center;
  
  /* @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  } */
`;

export const StyledRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;