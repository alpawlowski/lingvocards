import styled from 'styled-components';

export const Wrapper = styled.section`
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
`;