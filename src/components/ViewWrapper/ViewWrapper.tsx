import styled from 'styled-components';

export const ViewWrapper = styled.div`
  margin: 25px;
  width: 100%;
  max-width: calc(100% - 60px);
  height: calc(100% - 60px);
  padding: 40px 50px;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: none;
`;