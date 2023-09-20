import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  & > h1, h2, p {
    color: ${({ theme }) => theme.colors.gray};
  }
`;