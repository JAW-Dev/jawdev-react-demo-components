// Import packages
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Prism from 'prismjs';

interface Props {
  code?: string,
  label?: string
}

const StyledDMLExample = styled.section`
  padding: 1.5rem;
  margin: 3.5rem 0 0;
  box-sizing: border-box;
  width: 100%;
  color: rgb(230, 230, 230);
  border-radius: 5px
`;

const StyledDMPCodeWrap = styled.div`
  box-sizing: border-box;
  background-color: rgb(26, 26, 26);
  margin: 1rem;
  border-radius: 5px;
`;

const StyledDMPCodePre = styled.pre`
  box-sizing: border-box;
  font-family: Fira Code, source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  margin: 0;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;
  tab-size: 2;
  hyphens: none;
`;

const StyledDMPCode = styled.code`
  display: block;
  box-sizing: border-box;
  padding: 1rem 1.5rem;
  font-family: Fira Code, source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  font-size: 1rem;
  > .token.comment,
  > .token.prolog,
  > .token.doctype,
  > .token.cdata {
    color: hsl(30, 20%, 50%);
  }
  > .token.punctuation {
    opacity: 0.7;
  }
  > .token.namespace {
    opacity: 0.7;
  }
  > .token.property,
  > .token.tag,
  > .token.boolean,
  > .token.number,
  > .token.constant,
  > .token.symbol {
    color: hsl(350, 40%, 70%);
  }
  > .token.selector,
  > .token.attr-name,
  > .token.string,
  > .token.char,
  > .token.builtin,
  > .token.inserted {
    color: hsl(75, 70%, 60%);
  }
  > .token.operator,
  > .token.entity,
  > .token.url,
  > .language-css .token.string,
  > .style .token.string,
  > .token.variable {
    color: hsl(40, 90%, 60%);
  }
  > .token.atrule,
  > .token.attr-value,
  > .token.keyword {
    color: hsl(350, 40%, 70%);
  }
  > .token.regex,
  > .token.important {
    color: #e90;
  }
  > .token.important,
  > .token.bold {
    font-weight: bold;
  }
  > .token.italic {
    font-style: italic;
  }
  > .token.entity {
    cursor: help;
  }
  > .token.deleted {
    color: red;
  }
`;

const DMPExample: React.FC<Props> = ({ code, label }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  label = label || 'Example';

  return (
    <StyledDMLExample className='dmp__example'>
      <h2>Example</h2>
      <StyledDMPCodeWrap className='dmp_code-wrap'>
        <StyledDMPCodePre>
          <StyledDMPCode className='dmp_code language-javascript'>{code}</StyledDMPCode>
        </StyledDMPCodePre>
      </StyledDMPCodeWrap>
    </StyledDMLExample>

  );
};

export default DMPExample;
