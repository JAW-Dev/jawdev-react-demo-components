// Import packages
import React from 'react';
import styled from 'styled-components';

const StyledDMLFooter = styled.footer`
  padding: 1rem 1.5rem;
  text-align: center;
  font-size: 0.8rem;
`;

const DMPFooter: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <StyledDMLFooter className='dmp__footer' role='contentinfo'>
      {currentYear} &copy; Jason Witt
    </StyledDMLFooter>
  );
};

export default DMPFooter;
