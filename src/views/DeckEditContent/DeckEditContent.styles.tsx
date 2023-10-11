import styled from 'styled-components';
import { Select } from '../../components/Select/Select';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const StyledSelect = styled(Select)`
  color: ${({ theme }) => theme.colors.gray};
`;