import React from 'react';
import styled from 'styled-components';
import PageTemplateHeader from './PageTemplateHeader';

interface Props {}

const PageTemplateBlock = styled.div``;

const PageTemplate: React.FC<Props> = ({ children }) => {
  return (
    <PageTemplateBlock>
      <PageTemplateHeader title="byom.exe" />
      {children}
    </PageTemplateBlock>
  );
};

export default PageTemplate;
