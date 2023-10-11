import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  & > h2 {
    color: ${({ theme }) => theme.colors.gray};
  }
  
  & > h1 {
    color: ${({ theme }) => theme.colors.gold};
    font-size: 4rem;
  }

  & a button {
    margin: 4rem;
  }
`;