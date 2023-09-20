import styled from 'styled-components';

interface MainTemplateProps {
  isOpen?: boolean;
}

export const Wrapper = styled.div<MainTemplateProps>`
  max-width: 100vw;
  width: 100vw;
  min-height: 100vh;
  max-height: 100vh;
  height: 100vh;
  overflow-y: hidden;
  display: grid;
  grid-template-columns: ${({ isOpen }) => (isOpen ? '260px 1fr' : '60px 1fr')};
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.primary};
  transition: grid-template-columns 0.3s ease-in-out;
`;