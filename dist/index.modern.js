import React, { useEffect } from 'react';
import styled from 'styled-components';
import Prism from 'prismjs';
import '@fontsource/fira-code';
import { Marked } from '@ts-stack/markdown';
import parse from 'html-react-parser';

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: 1.5rem;\n  margin: 3.5rem 0 0;\n  box-sizing: border-box;\n  text-align: center;\n  font-size: 1.5rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var StyledDMLBlurb = styled.section(_templateObject());

var DMPBlurb = function DMPBlurb(_ref) {
  var children = _ref.children;
  return React.createElement(StyledDMLBlurb, {
    className: 'dmp__blurb'
  }, children);
};

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 900px;\n  max-width: 100%;\n  margin: 0 auto;\n  padding: 1.5rem ;\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledDMPContent = styled.main(_templateObject$1());

var DMPContent = function DMPContent(_ref) {
  var children = _ref.children;
  return React.createElement(StyledDMPContent, {
    className: 'dmp__content',
    role: 'main'
  }, children);
};

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  display: block;\n  box-sizing: border-box;\n  padding: 1rem 1.5rem;\n  font-family: Fira Code, source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\n  font-size: 1rem;\n  > .token.comment,\n  > .token.prolog,\n  > .token.doctype,\n  > .token.cdata {\n    color: hsl(30, 20%, 50%);\n  }\n  > .token.punctuation {\n    opacity: 0.7;\n  }\n  > .token.namespace {\n    opacity: 0.7;\n  }\n  > .token.property,\n  > .token.tag,\n  > .token.boolean,\n  > .token.number,\n  > .token.constant,\n  > .token.symbol {\n    color: hsl(350, 40%, 70%);\n  }\n  > .token.selector,\n  > .token.attr-name,\n  > .token.string,\n  > .token.char,\n  > .token.builtin,\n  > .token.inserted {\n    color: hsl(75, 70%, 60%);\n  }\n  > .token.operator,\n  > .token.entity,\n  > .token.url,\n  > .language-css .token.string,\n  > .style .token.string,\n  > .token.variable {\n    color: hsl(40, 90%, 60%);\n  }\n  > .token.atrule,\n  > .token.attr-value,\n  > .token.keyword {\n    color: hsl(350, 40%, 70%);\n  }\n  > .token.regex,\n  > .token.important {\n    color: #e90;\n  }\n  > .token.important,\n  > .token.bold {\n    font-weight: bold;\n  }\n  > .token.italic {\n    font-style: italic;\n  }\n  > .token.entity {\n    cursor: help;\n  }\n  > .token.deleted {\n    color: red;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  font-family: Fira Code, source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\n  margin: 0;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  word-wrap: normal;\n  line-height: 1.5;\n  tab-size: 2;\n  hyphens: none;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  background-color: rgb(26, 26, 26);\n  margin: 1rem;\n  border-radius: 5px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: 1.5rem;\n  margin: 3.5rem 0 0;\n  box-sizing: border-box;\n  width: 100%;\n  color: rgb(230, 230, 230);\n  border-radius: 5px\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledDMLExample = styled.section(_templateObject$2());
var StyledDMPCodeWrap = styled.div(_templateObject2());
var StyledDMPCodePre = styled.pre(_templateObject3());
var StyledDMPCode = styled.code(_templateObject4());

var DMPExample = function DMPExample(_ref) {
  var code = _ref.code,
      label = _ref.label;
  useEffect(function () {
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

function _templateObject$3() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: 1rem 1.5rem;\n  text-align: center;\n  font-size: 0.8rem;\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledDMLFooter = styled.footer(_templateObject$3());

var DMPFooter = function DMPFooter(_ref) {
  var text = _ref.text;
  var currentYear = new Date().getFullYear();
  text = text || 'Jason Witt';
  return React.createElement(StyledDMLFooter, {
    className: 'dmp__footer',
    role: 'contentinfo'
  }, currentYear, " \xA9 ", text);
};

function _templateObject2$1() {
  var data = _taggedTemplateLiteralLoose(["\n    display: inline-flex;\n    align-Items: center;\n    padding: 0.25rem 0.5rem;\n    background-Color: rgb(20, 20, 20);\n    color: rgb(255, 186, 0);\n    border-radius: 5px;\n    text-decoration: none;\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$4() {
  var data = _taggedTemplateLiteralLoose(["\n  display: none;\n  margin-left: 0.5rem;\n  @media (min-width: 600px) {\n    display: inline;\n  }\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledDMPGHLinkText = styled.span(_templateObject$4());
var StyledLink = styled.a(_templateObject2$1());

var DMPGHLink = function DMPGHLink(_ref) {
  var link = _ref.link;
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

function _templateObject$5() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.5rem;\n  color: rgb(230, 230, 230);\n  background-color: rgb(31, 34, 35);\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px, rgba(0, 0, 0, 0.1) 0px 1px 4px, rgba(0, 0, 0, 0.1) 0px 2px 8px;\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledDMPHeader = styled.header(_templateObject$5());

var DMPHeader = function DMPHeader(_ref) {
  var children = _ref.children;
  return React.createElement(StyledDMPHeader, {
    className: 'dmp__header',
    role: 'banner'
  }, children);
};

function _templateObject3$1() {
  var data = _taggedTemplateLiteralLoose(["\n  display: block;\n  box-sizing: border-box;\n  padding: 1rem 1.5rem;\n  font-family: Fira Code, source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  padding: 0.5rem;\n  background-color: rgb(26, 26, 26);\n  margin: 1rem;\n  border-radius: 5px;\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$6() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: 1.5rem;\n  margin: 3.5rem 0 0;\n  box-sizing: border-box;\n  width: 100%;\n  color: rgb(230, 230, 230);\n  border-radius: 5px\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledDMPInstall = styled.section(_templateObject$6());
var StyledDMPCodeWrap$1 = styled.div(_templateObject2$2());
var StyledDMPCode$1 = styled.code(_templateObject3$1());

var DMPInstall = function DMPInstall(_ref) {
  var name = _ref.name;
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

function _templateObject$7() {
  var data = _taggedTemplateLiteralLoose(["\n  font-size: 1.2rem;\n  margin-right: 1rem;\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledDMPLogo = styled.h1(_templateObject$7());

var DMPLogo = function DMPLogo(_ref) {
  var logo = _ref.logo;
  var name = logo.replace(/-|\//g, ' ').toLowerCase().split(' ').map(function (word) {
    return word.charAt(0).toUpperCase() + word.substring(1);
  }).join(' ');

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

var parseTable = function parseTable(table) {
  Marked.setOptions({
    tables: true
  });
  var html = parse(Marked.parse(table).replace(/>\s/g, '>'));
  return html;
};
var addCellClasses = function addCellClasses() {
  setTimeout(function () {
    var headTr = document.querySelectorAll('.dmp__table thead tr');
    var bodyTr = document.querySelectorAll('.dmp__table tbody tr');

    for (var i = 0; i < headTr.length; i++) {
      var headTh = headTr[i].querySelectorAll('th');

      for (var _i = 0; _i < headTh.length; _i++) {
        headTh[_i].classList.add('dmp__table-th');

        headTh[_i].classList.add("dmp__table-th-" + (_i + 1));
      }
    }

    for (var _i2 = 0; _i2 < bodyTr.length; _i2++) {
      var bodyTd = bodyTr[_i2].querySelectorAll('td');

      for (var _i3 = 0; _i3 < bodyTd.length; _i3++) {
        bodyTd[_i3].classList.add('dmp__table-td');

        bodyTd[_i3].classList.add("dmp__table-td-" + (_i3 + 1));
      }
    }
  });
};

function _templateObject2$3() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: 0.5rem;\n  margin: 1rem;\n  > table {\n    border-collapse: collapse;\n  }\n  > table > thead > tr > .dmp__table-th,\n  > table > tbody > tr > .dmp__table-td {\n    box-sizing: border-box;\n    border: 1px solid rgb(179, 179, 179);\n    padding: 1rem 0.5rem; hyphens: auto;\n  }\n  > table > thead > tr > .dmp__table-th-2,\n  > table > tbody > tr > .dmp__table-td-2,\n  > table > thead > tr > .dmp__table-th-4,\n  > table > tbody > tr > .dmp__table-td-4 {\n    display: none;\n  }\n  @media (min-width: 380px) {\n    > table > thead > tr > .dmp__table-th-4,\n    > table > tbody > tr > .dmp__table-td-4 {\n      display: table-cell;\n    }\n  }\n  @media (min-width: 600px) {\n    > table > thead > tr > .dmp__table-th-2,\n    > table > tbody > tr > .dmp__table-td-2 {\n      display: table-cell;\n    }\n  }\n"]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$8() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: 1.5rem;\n  margin: 3.5rem 0 0;\n  box-sizing: border-box;\n  width: 100%;\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledDMPTable = styled.section(_templateObject$8());
var StyledDMPTableWrap = styled.div(_templateObject2$3());

var DMPTable = function DMPTable(_ref) {
  var table = _ref.table,
      name = _ref.name;
  var html = parseTable(table);
  addCellClasses();
  return React.createElement(StyledDMPTable, {
    className: 'dmp__table'
  }, React.createElement("h2", null, name), React.createElement(StyledDMPTableWrap, null, html));
};

function _templateObject$9() {
  var data = _taggedTemplateLiteralLoose(["\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  grid-template-columns: 100%;\n  position: relative;\n  min-height: 100vh;\n  color: rgb(230, 230, 230);\n  background-color: rgb(38, 41, 43);\n  overflow: hidden;\n"]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledDMPWrap = styled.div(_templateObject$9());

var DMPWrap = function DMPWrap(_ref) {
  var children = _ref.children;
  return React.createElement(StyledDMPWrap, {
    className: 'dmp__wrap'
  }, children);
};

export { DMPBlurb, DMPContent, DMPExample, DMPFooter, DMPGHLink, DMPHeader, DMPInstall, DMPLogo, DMPTable, DMPWrap };
//# sourceMappingURL=index.modern.js.map
