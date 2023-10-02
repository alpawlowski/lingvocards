import React from 'react';
import { SidebarContainer, ToggleMenuWrapper, ToggleMenuButton, MenuWrapper, MenuItem } from './Sidebar.styles';

import { useAppContext } from '../../context/AppContext';

interface SidebarProps {
  isOpen?: boolean;
  toggleMenu?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({isOpen, toggleMenu}) => {

  const { selectedLink, defaultLink } = useAppContext();

  const linkToUse = selectedLink || defaultLink;

  return (
    <SidebarContainer  isOpen={isOpen}>
      <ToggleMenuWrapper>
        <ToggleMenuButton onClick={toggleMenu}>
          {!isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
              <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
              <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
            </svg>
          )}
        </ToggleMenuButton>
      </ToggleMenuWrapper>
      {isOpen && (
        <MenuWrapper>
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to={linkToUse}>Learn</MenuItem>
          <MenuItem to="/decks">Decks</MenuItem>
          <MenuItem to="/tree">Tree</MenuItem>
        </MenuWrapper>
      )}
    </SidebarContainer>
  )

}

export default Sidebar