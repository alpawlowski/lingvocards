import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';


interface ButtonProps {
  secondary?: boolean;
  to: string;
  children: ReactNode;
}

const StyledButton = styled(Button)`
`;

const ButtonLink: React.FC<ButtonProps> = ({ secondary, to, children }) => {
  return (
    <Link to={to}>
      <StyledButton secondary={secondary}>{children}</StyledButton>
    </Link>
  );
};

export default ButtonLink;