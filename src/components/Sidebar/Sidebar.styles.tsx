import styled from "styled-components";
import { NavLink } from 'react-router-dom';

interface SidebarProps {
  isOpen?: boolean;
}

export const SidebarContainer = styled.aside<SidebarProps>`
  display: grid;
  grid-template-rows: auto 1fr;
  visibility: visible;
  overflow: hidden;
  width: ${({ isOpen }) => (isOpen ? '260px' : '60px')};
  height: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 10px;
  overflow-y: auto;
  transition: width 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: fit-content;
  }
`;

export const ToggleMenuWrapper = styled.div<SidebarProps>`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ToggleMenuButton = styled.button<SidebarProps>`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
  border: none;
  color: #fff;
  fill: ${({ theme }) => theme.colors.elements};
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: .5rem;
  border: 1px solid ${({ theme }) => theme.colors.primaryLight};
  border-radius: .75rem;
`;

export const MenuWrapper = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  color: ${({ theme }) => theme.colors.elements};
  cursor: pointer;
  border-radius: .75rem;
  transition: background-color 0.3s;
`;

export const MenuTopItems = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const MenuBottomItems = styled.div`
  display: flex;
  margin-top: auto;
`;

export const MenuItem = styled(NavLink)`
  display: flex;
  width: 100%;
  margin-top: 2rem;
  padding: 10px;
  color: ${({ theme }) => theme.colors.elements};
  cursor: pointer;
  border-radius: .75rem;
  transition: background-color 0.3s;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primaryLight};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;