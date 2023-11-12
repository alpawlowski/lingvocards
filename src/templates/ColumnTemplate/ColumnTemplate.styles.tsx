import styled from 'styled-components';

export const Wrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center; */
  display: grid;
  grid-template-rows: 60px 1fr 60px;
  min-height: 100dvh;
  height: 100dvh;
  width: 100%;
  max-width: 100%;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    grid-template-rows: 60px 1fr;
    min-height: calc(100dvh - 60px);
    height: calc(100dvh - 60px);
  }
`;

export const InnerWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100%;
  height: 100%;
  width: 100%;
  max-width: 100%;
  padding: 5rem 5rem 10rem;
  overflow: auto;

  @media screen and (max-width: 768px) {
    padding: 2rem;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const HeaderText = styled.h2`
  color: ${({ theme }) => theme.colors.gray};
  
  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const BottomMenu = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 60px;
  padding: 0 3.5rem;
  color: ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme }) => theme.colors.secondary};

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;