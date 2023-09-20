import React, { ReactNode, useState } from 'react';
import { Wrapper } from "./MainTemplate.styles";
import Sidebar from '../../components/Sidebar/Sidebar';

interface MainTemplateProps {
  children: ReactNode;
}

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  return (
    <Wrapper isOpen={isOpen}>
      <Sidebar isOpen={isOpen} toggleMenu={toggleMenu}/>
        {children}
    </Wrapper>
  );
}

export default MainTemplate;