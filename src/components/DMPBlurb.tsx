// Import packages
import React from 'react';
import styled from 'styled-components';

const StyledDMLBlurb = styled.section`
  padding: 1.5rem;
  margin: 3.5rem 0 0;
  box-sizing: border-box;
  text-align: center;
  font-size: 1.5rem;
`;

const DMPBlurb: React.FC = ({ children }) => {
  return (
    <StyledDMLBlurb className='dmp__blurb'>
      {children}
    </StyledDMLBlurb>
  );
};

export default DMPBlurb;
