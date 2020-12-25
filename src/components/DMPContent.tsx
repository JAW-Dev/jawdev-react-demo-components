// Import packages
import React from 'react';
import styled from 'styled-components';

const StyledDMPContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 900px;
  max-width: 100%;
  margin: 0 auto;
  padding: 1.5rem ;
`;

const DMPContent: React.FC = ({ children }) => {
  return (
    <StyledDMPContent className='dmp__content' role='main'>
      {children}
    </StyledDMPContent>
  );
};

export default DMPContent;
