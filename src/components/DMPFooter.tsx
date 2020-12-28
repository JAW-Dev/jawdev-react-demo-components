// Import packages
import React from 'react';
import styled from 'styled-components';

const StyledDMLFooter = styled.footer`
  padding: 1rem 1.5rem;
  text-align: center;
  font-size: 0.8rem;
`;

interface Props {
  text?: string
}

const DMPFooter: React.FC<Props> = ({ text }) => {
  const currentYear: number = new Date().getFullYear();
  text = text || '&copy; Jason Witt';

  return (
    <StyledDMLFooter className='dmp__footer' role='contentinfo'>
      {currentYear} {text}
    </StyledDMLFooter>
  );
};

export default DMPFooter;
