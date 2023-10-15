import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

interface ButtonProps {
  secondary?: boolean;
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const ButtonDisabled = styled(Button)`
  cursor: not-allowed;
  opacity: 0.5;
  
  &:hover {
    opacity: 0.3;
  }
`;

const ButtonLink: React.FC<ButtonProps> = ({ secondary, to, children, onClick, disabled }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  if (disabled) {
    return (
      <ButtonDisabled secondary={secondary} onClick={handleClick}>
        {children}
      </ButtonDisabled>
    );
  }

  return (
    <Link to={to}>
      <Button secondary={secondary} onClick={handleClick}>
        {children}
      </Button>
    </Link>
  );
};

export default ButtonLink;
