// Import packages
import React from 'react';
import styled from 'styled-components';

const StyledDMPHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  color: rgb(230, 230, 230);
  background-color: rgb(31, 34, 35);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px, rgba(0, 0, 0, 0.1) 0px 1px 4px, rgba(0, 0, 0, 0.1) 0px 2px 8px;
`;

const DMPHeader: React.FC = ({ children }) => {
  return (
    <StyledDMPHeader className='dmp__header' role='banner'>
      {children}
    </StyledDMPHeader>
  );
};

export default DMPHeader;
