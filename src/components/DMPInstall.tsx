// Import packages
import React from 'react';
import styled from 'styled-components';

// Import CSS
import '@fontsource/fira-code';

interface Props {
  name?: string
}

const StyledDMPInstall = styled.section`
  padding: 1.5rem;
  margin: 3.5rem 0 0;
  box-sizing: border-box;
  width: 100%;
  color: rgb(230, 230, 230);
  border-radius: 5px
`;

const StyledDMPCodeWrap = styled.div`
  box-sizing: border-box;
  padding: 0.5rem;
  background-color: rgb(26, 26, 26);
  margin: 1rem;
  border-radius: 5px;
`;

const StyledDMPCode = styled.code`
  display: block;
  box-sizing: border-box;
  padding: 1rem 1.5rem;
  font-family: Fira Code, source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
`;

const DMPInstall: React.FC<Props> = ({ name }) => {
  return (
    <StyledDMPInstall className='dmp__install'>
      <h2>Install</h2>
      <StyledDMPCodeWrap className='dmp_code-wrap'>
        <StyledDMPCode className='dmp_code'>npm install {name} --save</StyledDMPCode>
      </StyledDMPCodeWrap>
      <StyledDMPCodeWrap className='dmp_code-wrap'>
        <StyledDMPCode className='dmp_code'>yarn add {name}</StyledDMPCode>
      </StyledDMPCodeWrap>
    </StyledDMPInstall>
  );
};

export default DMPInstall;
