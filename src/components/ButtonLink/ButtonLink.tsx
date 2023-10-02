import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

interface ButtonProps {
  secondary?: boolean;
  to: string;
  children: ReactNode;
  onClick?: () => void;
}

const StyledButton = styled(Button)`
`;

const ButtonLink: React.FC<ButtonProps> = ({ secondary, to, children, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link to={to}>
      <StyledButton secondary={secondary} onClick={handleClick}>
        {children}
      </StyledButton>
    </Link>
  );
};

export default ButtonLink;