import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
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