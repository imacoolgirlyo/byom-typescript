import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import NavigationIcons from './NavigationIcons';

interface Props {}

const PageTemplateBlock = styled.div`
  margin: auto;
  width: 80%;
  background-color: white;
  min-width: 360px;
`;
const ContentBlock = styled.div``;

const PageTemplate: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NavigationIcons />
      <PageTemplateBlock>
        <Header />
        <ContentBlock>{children}</ContentBlock>
      </PageTemplateBlock>
    </>
  );
};

export default PageTemplate;
