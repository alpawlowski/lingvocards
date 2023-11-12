import styled from 'styled-components';

interface MainTemplateProps {
  isOpen?: boolean;
}

export const Wrapper = styled.div<MainTemplateProps>`
  max-width: 100vw;
  width: 100vw;
  min-height: 100dvh;
  max-height: 100dvh;
  height: 100dvh;
  overflow-y: hidden;
  display: grid;
  grid-template-columns: ${({ isOpen }) => (isOpen ? '260px 1fr' : '60px 1fr')};
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.primary};
  transition: grid-template-columns 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    min-height: ${({ isOpen }) => (isOpen ? '100dvh' : '100%')};
    max-height: ${({ isOpen }) => (isOpen ? '100dvh' : '100%')};
    height: ${({ isOpen }) => (isOpen ? '100dvh' : '100%')};
    grid-template-columns: 1fr;
    grid-template-rows: ${({ isOpen }) => (isOpen ? '260px' : '60px')} 1fr;
    text-align: center;

    & section {
      opacity: ${({ isOpen }) => (isOpen ? 0.5 : 1)};
      filter: ${({ isOpen }) => (isOpen ? 'blur(3px)' : 'blur(0)')};
    }
  }
`;