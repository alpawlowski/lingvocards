import React, { ReactNode } from 'react';
import { Wrapper, Header, HeaderText, InnerWrapper, } from "./ModalTemplate.styles";

interface ModalTemplateProps {
  title: string;
  children: ReactNode;
}

const ModalTemplate: React.FC<ModalTemplateProps> = ({ title, children }) => {

  return (
    <Wrapper>
      <Header>
        <HeaderText>{title}</HeaderText>
      </Header>
      <InnerWrapper>
        {children}
      </InnerWrapper>
    </Wrapper>
  );
}

export default ModalTemplate;