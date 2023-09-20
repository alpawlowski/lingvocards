import React, { ReactNode } from 'react';
import { Wrapper, Header, HeaderText, InnerWrapper, BottomMenu } from "./ColumnTemplate.styles";
import ButtonLink from '../../components/ButtonLink/ButtonLink';

interface ColumnTemplateProps {
  title: string;
  menu: menuProps[];
  children: ReactNode;
}

interface menuProps {
  to: string;
  name: string;
}

const ColumnTemplate: React.FC<ColumnTemplateProps> = ({ title, menu, children }) => {

  return (
    <Wrapper>
      <Header>
        <HeaderText>{title}</HeaderText>
      </Header>
      <InnerWrapper>
        {children}
      </InnerWrapper>
      <BottomMenu>
        {menu.map((link: menuProps) => (
          <ButtonLink secondary to={link.to} key={link.to}>
            {link.name}
          </ButtonLink>
        ))}
      </BottomMenu>
    </Wrapper>
  );
}

export default ColumnTemplate;