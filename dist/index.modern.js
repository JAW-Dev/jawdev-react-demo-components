import React, { useEffect } from 'react';
import styled from 'styled-components';
import Prism from 'prismjs';
import '@fontsource/fira-code';
import { Marked } from '@ts-stack/markdown';
import parse from 'html-react-parser';

let _ = t => t,
    _t;
const StyledDMLBlurb = styled.section(_t || (_t = _`
  padding: 1.5rem;
  margin: 3.5rem 0 0;
  box-sizing: border-box;
  text-align: center;
  font-size: 1.5rem;
`));

const DMPBlurb = ({
  children
}) => {
  return React.createElement(StyledDMLBlurb, {
    className: 'dmp__blurb'
  }, children);
};

let _$1 = t => t,
    _t$1;
const StyledDMPContent = styled.main(_t$1 || (_t$1 = _$1`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 900px;
  max-width: 100%;
  margin: 0 auto;
  padding: 1.5rem ;
`));

const DMPContent = ({
  children
}) => {
  return React.createElement(StyledDMPContent, {
    className: 'dmp__content',
    role: 'main'
  }, children);
};

let _$2 = t => t,
    _t$2,
    _t2,
    _t3,
    _t4;
const StyledDMLExample = styled.section(_t$2 || (_t$2 = _$2`
  padding: 1.5rem;
  margin: 3.5rem 0 0;
  box-sizing: border-box;
  width: 100%;
  color: rgb(230, 230, 230);
  border-radius: 5px
`));
const StyledDMPCodeWrap = styled.div(_t2 || (_t2 = _$2`
  box-sizing: border-box;
  background-color: rgb(26, 26, 26);
  margin: 1rem;
  border-radius: 5px;
`));
const StyledDMPCodePre = styled.pre(_t3 || (_t3 = _$2`
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
`));
const StyledDMPCode = styled.code(_t4 || (_t4 = _$2`
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
`));

const DMPExample = ({
  code,
  label
}) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  label = label || 'Example';
  return React.createElement(StyledDMLExample, {
    className: 'dmp__example'
  }, React.createElement("h2", null, label), React.createElement(StyledDMPCodeWrap, {
    className: 'dmp_code-wrap'
  }, React.createElement(StyledDMPCodePre, null, React.createElement(StyledDMPCode, {
    className: 'dmp_code language-javascript'
  }, code))));
};

let _$3 = t => t,
    _t$3;
const StyledDMLFooter = styled.footer(_t$3 || (_t$3 = _$3`
  padding: 1rem 1.5rem;
  text-align: center;
  font-size: 0.8rem;
`));

const DMPFooter = ({
  text
}) => {
  const currentYear = new Date().getFullYear();
  text = text || 'Jason Witt';
  return React.createElement(StyledDMLFooter, {
    className: 'dmp__footer',
    role: 'contentinfo'
  }, currentYear, " \u00A9 ", text);
};

let _$4 = t => t,
    _t$4,
    _t2$1;
const StyledDMPGHLinkText = styled.span(_t$4 || (_t$4 = _$4`
  display: none;
  margin-left: 0.5rem;
  @media (min-width: 600px) {
    display: inline;
  }
`));
const StyledLink = styled.a(_t2$1 || (_t2$1 = _$4`
    display: inline-flex;
    align-Items: center;
    padding: 0.25rem 0.5rem;
    background-Color: rgb(20, 20, 20);
    color: rgb(255, 186, 0);
    border-radius: 5px;
    text-decoration: none;
`));

const DMPGHLink = ({
  link
}) => {
  return React.createElement(StyledLink, {
    href: link,
    className: 'dmp__github-link'
  }, React.createElement("svg", {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 496 512',
    width: '1.5rem',
    height: '1.5rem',
    fill: 'rgb(230, 230, 230)'
  }, React.createElement("path", {
    d: 'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
  })), React.createElement(StyledDMPGHLinkText, {
    className: 'dmp__github-link-text'
  }, "View on Github"));
};

let _$5 = t => t,
    _t$5;
const StyledDMPHeader = styled.header(_t$5 || (_t$5 = _$5`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  color: rgb(230, 230, 230);
  background-color: rgb(31, 34, 35);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px, rgba(0, 0, 0, 0.1) 0px 1px 4px, rgba(0, 0, 0, 0.1) 0px 2px 8px;
`));

const DMPHeader = ({
  children
}) => {
  return React.createElement(StyledDMPHeader, {
    className: 'dmp__header',
    role: 'banner'
  }, children);
};

let _$6 = t => t,
    _t$6,
    _t2$2,
    _t3$1;
const StyledDMPInstall = styled.section(_t$6 || (_t$6 = _$6`
  padding: 1.5rem;
  margin: 3.5rem 0 0;
  box-sizing: border-box;
  width: 100%;
  color: rgb(230, 230, 230);
  border-radius: 5px
`));
const StyledDMPCodeWrap$1 = styled.div(_t2$2 || (_t2$2 = _$6`
  box-sizing: border-box;
  padding: 0.5rem;
  background-color: rgb(26, 26, 26);
  margin: 1rem;
  border-radius: 5px;
`));
const StyledDMPCode$1 = styled.code(_t3$1 || (_t3$1 = _$6`
  display: block;
  box-sizing: border-box;
  padding: 1rem 1.5rem;
  font-family: Fira Code, source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
`));

const DMPInstall = ({
  name
}) => {
  return React.createElement(StyledDMPInstall, {
    className: 'dmp__install'
  }, React.createElement("h2", null, "Install"), React.createElement(StyledDMPCodeWrap$1, {
    className: 'dmp_code-wrap'
  }, React.createElement(StyledDMPCode$1, {
    className: 'dmp_code'
  }, "npm install ", name, " --save")), React.createElement(StyledDMPCodeWrap$1, {
    className: 'dmp_code-wrap'
  }, React.createElement(StyledDMPCode$1, {
    className: 'dmp_code'
  }, "yarn add ", name)));
};

let _$7 = t => t,
    _t$7;
const StyledDMPLogo = styled.h1(_t$7 || (_t$7 = _$7`
  font-size: 1.2rem;
  margin-right: 1rem;
`));

const DMPLogo = ({
  logo
}) => {
  let name = logo.replace(/-|\//g, ' ').toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');

  if (name.includes('@jaw Dev')) {
    name = name.replace('@jaw Dev', '@JAW-Dev ');
  }

  if (name.includes('Example')) {
    name = name.replace('Example', '');
  }

  return React.createElement(StyledDMPLogo, {
    className: 'dmp__logo'
  }, name);
};

const parseTable = table => {
  Marked.setOptions({
    tables: true
  });
  const html = parse(Marked.parse(table).replace(/>\s/g, '>'));
  return html;
};
const addCellClasses = () => {
  setTimeout(() => {
    const headTr = document.querySelectorAll('.dmp__table thead tr');
    const bodyTr = document.querySelectorAll('.dmp__table tbody tr');

    for (let i = 0; i < headTr.length; i++) {
      const headTh = headTr[i].querySelectorAll('th');

      for (let _i = 0; _i < headTh.length; _i++) {
        headTh[_i].classList.add('dmp__table-th');

        headTh[_i].classList.add(`dmp__table-th-${_i + 1}`);
      }
    }

    for (let i = 0; i < bodyTr.length; i++) {
      const bodyTd = bodyTr[i].querySelectorAll('td');

      for (let _i2 = 0; _i2 < bodyTd.length; _i2++) {
        bodyTd[_i2].classList.add('dmp__table-td');

        bodyTd[_i2].classList.add(`dmp__table-td-${_i2 + 1}`);
      }
    }
  });
};

let _$8 = t => t,
    _t$8,
    _t2$3;
const StyledDMPTable = styled.section(_t$8 || (_t$8 = _$8`
  padding: 1.5rem;
  margin: 3.5rem 0 0;
  box-sizing: border-box;
  width: 100%;
`));
const StyledDMPTableWrap = styled.div(_t2$3 || (_t2$3 = _$8`
  padding: 0.5rem;
  margin: 1rem;
  > table {
    border-collapse: collapse;
  }
  > table > thead > tr > .dmp__table-th,
  > table > tbody > tr > .dmp__table-td {
    box-sizing: border-box;
    border: 1px solid rgb(179, 179, 179);
    padding: 1rem 0.5rem; hyphens: auto;
  }
  > table > thead > tr > .dmp__table-th-2,
  > table > tbody > tr > .dmp__table-td-2,
  > table > thead > tr > .dmp__table-th-4,
  > table > tbody > tr > .dmp__table-td-4 {
    display: none;
  }
  @media (min-width: 380px) {
    > table > thead > tr > .dmp__table-th-4,
    > table > tbody > tr > .dmp__table-td-4 {
      display: table-cell;
    }
  }
  @media (min-width: 600px) {
    > table > thead > tr > .dmp__table-th-2,
    > table > tbody > tr > .dmp__table-td-2 {
      display: table-cell;
    }
  }
`));

const DMPTable = ({
  table,
  name
}) => {
  const html = parseTable(table);
  addCellClasses();
  return React.createElement(StyledDMPTable, {
    className: 'dmp__table'
  }, React.createElement("h2", null, name), React.createElement(StyledDMPTableWrap, null, html));
};

let _$9 = t => t,
    _t$9;
const StyledDMPWrap = styled.div(_t$9 || (_t$9 = _$9`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  position: relative;
  min-height: 100vh;
  color: rgb(230, 230, 230);
  background-color: rgb(38, 41, 43);
  overflow: hidden;
`));

const DMPWrap = ({
  children
}) => {
  return React.createElement(StyledDMPWrap, {
    className: 'dmp__wrap'
  }, children);
};

export { DMPBlurb, DMPContent, DMPExample, DMPFooter, DMPGHLink, DMPHeader, DMPInstall, DMPLogo, DMPTable, DMPWrap };
//# sourceMappingURL=index.modern.js.map
