import React from 'react';

interface Props {
  title: string;
}

const PageTemplateHeader: React.FC<Props> = ({ title }) => {
  return <div>{title}</div>;
};

export default PageTemplateHeader;
