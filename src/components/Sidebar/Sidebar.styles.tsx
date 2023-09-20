import styled from "styled-components";
import { NavLink } from 'react-router-dom';

interface SidebarProps {
  isOpen?: boolean;
}

export const SidebarContainer = styled.aside<SidebarProps>`
  display: block;
  visibility: visible;
  overflow: hidden;
  width: ${({ isOpen }) => (isOpen ? '260px' : '60px')};
  height: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 10px;
  border-radius: 0 .75rem .75rem 0;
  overflow-y: auto;
  transition: width 0.3s ease-in-out;
`;

export const ToggleMenuWrapper = styled.div<SidebarProps>`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

`;

export const ToggleMenuButton = styled.button<SidebarProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
  border: none;
  color: #fff;
  fill: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: .5rem;
  border: 1px solid ${({ theme }) => theme.colors.primaryLight};
  border-radius: .75rem;
  `;

export const MenuWrapper = styled.nav`
  margin-top: 2rem;
  padding: 10px;
  color: #fff;
  cursor: pointer;
  border-radius: .75rem;
  transition: background-color 0.3s;
`;

export const MenuItem = styled(NavLink)`
  display: block;
  margin-top: 2rem;
  padding: 10px;
  color: #fff;
  cursor: pointer;
  border-radius: .75rem;
  transition: background-color 0.3s;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primaryLight};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;