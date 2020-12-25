// Import packages
import React from 'react';
import styled from 'styled-components';

const StyledDMPWrap = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  position: relative;
  min-height: 100vh;
  color: rgb(230, 230, 230);
  background-color: rgb(38, 41, 43);
  overflow: hidden;
`;

const DMPWrap: React.FC = ({ children }) => {
  return (
    <StyledDMPWrap className='dmp__wrap'>
      {children}
    </StyledDMPWrap>
  );
};

export default DMPWrap;
