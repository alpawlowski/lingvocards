import styled from 'styled-components';
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

export const StyledGrid = styled.div`
  display: grid;
  grid-gap: 5rem;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  align-items: center;
`;