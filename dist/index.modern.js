import n,{useEffect as e}from"react";import r from"styled-components";import t from"prismjs";import"@fontsource/fira-code";import{Marked as o}from"@ts-stack/markdown";import a from"html-react-parser";function l(n,e){return e||(e=n.slice(0)),n.raw=e,n}function i(){var n=l(["\n  padding: 1.5rem;\n  margin: 3.5rem 0 0;\n  box-sizing: border-box;\n  text-align: center;\n  font-size: 1.5rem;\n"]);return i=function(){return n},n}var c=r.section(i()),d=function(e){return n.createElement(c,{className:"dmp__blurb"},e.children)};function m(){var n=l(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 900px;\n  max-width: 100%;\n  margin: 0 auto;\n  padding: 1.5rem ;\n"]);return m=function(){return n},n}var s=r.main(m()),u=function(e){return n.createElement(s,{className:"dmp__content",role:"main"},e.children)};function p(){var n=l(["\n  display: block;\n  box-sizing: border-box;\n  padding: 1rem 1.5rem;\n  font-family: Fira Code, source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\n  font-size: 1rem;\n  > .token.comment,\n  > .token.prolog,\n  > .token.doctype,\n  > .token.cdata {\n    color: hsl(30, 20%, 50%);\n  }\n  > .token.punctuation {\n    opacity: 0.7;\n  }\n  > .token.namespace {\n    opacity: 0.7;\n  }\n  > .token.property,\n  > .token.tag,\n  > .token.boolean,\n  > .token.number,\n  > .token.constant,\n  > .token.symbol {\n    color: hsl(350, 40%, 70%);\n  }\n  > .token.selector,\n  > .token.attr-name,\n  > .token.string,\n  > .token.char,\n  > .token.builtin,\n  > .token.inserted {\n    color: hsl(75, 70%, 60%);\n  }\n  > .token.operator,\n  > .token.entity,\n  > .token.url,\n  > .language-css .token.string,\n  > .style .token.string,\n  > .token.variable {\n    color: hsl(40, 90%, 60%);\n  }\n  > .token.atrule,\n  > .token.attr-value,\n  > .token.keyword {\n    color: hsl(350, 40%, 70%);\n  }\n  > .token.regex,\n  > .token.important {\n    color: #e90;\n  }\n  > .token.important,\n  > .token.bold {\n    font-weight: bold;\n  }\n  > .token.italic {\n    font-style: italic;\n  }\n  > .token.entity {\n    cursor: help;\n  }\n  > .token.deleted {\n    color: red;\n  }\n"]);return p=function(){return n},n}function b(){var n=l(["\n  box-sizing: border-box;\n  font-family: Fira Code, source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\n  margin: 0;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  word-wrap: normal;\n  line-height: 1.5;\n  tab-size: 2;\n  hyphens: none;\n"]);return b=function(){return n},n}function g(){var n=l(["\n  box-sizing: border-box;\n  background-color: rgb(26, 26, 26);\n  margin: 1rem;\n  border-radius: 5px;\n"]);return g=function(){return n},n}function f(){var n=l(["\n  padding: 1.5rem;\n  margin: 3.5rem 0 0;\n  box-sizing: border-box;\n  width: 100%;\n  color: rgb(230, 230, 230);\n  border-radius: 5px\n"]);return f=function(){return n},n}var h=r.section(f()),_=r.div(g()),x=r.pre(b()),v=r.code(p()),k=function(r){var o=r.code,a=r.label;return e(function(){t.highlightAll()},[]),n.createElement(h,{className:"dmp__example"},n.createElement("h2",null,a=a||"Example"),n.createElement(_,{className:"dmp_code-wrap"},n.createElement(x,null,n.createElement(v,{className:"dmp_code language-javascript"},o))))};function w(){var n=l(["\n  padding: 1rem 1.5rem;\n  text-align: center;\n  font-size: 0.8rem;\n"]);return w=function(){return n},n}var y=r.footer(w()),E=function(e){var r=e.text,t=(new Date).getFullYear();return n.createElement(y,{className:"dmp__footer",role:"contentinfo"},t," © ",r=r||"Jason Witt")};function z(){var n=l(["\n    display: inline-flex;\n    align-Items: center;\n    padding: 0.25rem 0.5rem;\n    background-Color: rgb(20, 20, 20);\n    color: rgb(255, 186, 0);\n    border-radius: 5px;\n    text-decoration: none;\n"]);return z=function(){return n},n}function N(){var n=l(["\n  display: none;\n  margin-left: 0.5rem;\n  @media (min-width: 600px) {\n    display: inline;\n  }\n"]);return N=function(){return n},n}var C=r.span(N()),M=r.a(z()),A=function(e){return n.createElement(M,{href:e.link,className:"dmp__github-link"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",width:"1.5rem",height:"1.5rem",fill:"rgb(230, 230, 230)"},n.createElement("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})),n.createElement(C,{className:"dmp__github-link-text"},"View on Github"))};function j(){var n=l(["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.5rem;\n  color: rgb(230, 230, 230);\n  background-color: rgb(31, 34, 35);\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px, rgba(0, 0, 0, 0.1) 0px 1px 4px, rgba(0, 0, 0, 0.1) 0px 2px 8px;\n"]);return j=function(){return n},n}var L=r.header(j()),q=function(e){return n.createElement(L,{className:"dmp__header",role:"banner"},e.children)};function D(){var n=l(["\n  display: block;\n  box-sizing: border-box;\n  padding: 1rem 1.5rem;\n  font-family: Fira Code, source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\n"]);return D=function(){return n},n}function F(){var n=l(["\n  box-sizing: border-box;\n  padding: 0.5rem;\n  background-color: rgb(26, 26, 26);\n  margin: 1rem;\n  border-radius: 5px;\n"]);return F=function(){return n},n}function S(){var n=l(["\n  padding: 1.5rem;\n  margin: 3.5rem 0 0;\n  box-sizing: border-box;\n  width: 100%;\n  color: rgb(230, 230, 230);\n  border-radius: 5px\n"]);return S=function(){return n},n}var I=r.section(S()),J=r.div(F()),W=r.code(D()),B=function(e){var r=e.name;return n.createElement(I,{className:"dmp__install"},n.createElement("h2",null,"Install"),n.createElement(J,{className:"dmp_code-wrap"},n.createElement(W,{className:"dmp_code"},"npm install ",r," --save")),n.createElement(J,{className:"dmp_code-wrap"},n.createElement(W,{className:"dmp_code"},"yarn add ",r)))};function G(){var n=l(["\n  font-size: 1.2rem;\n  margin-right: 1rem;\n"]);return G=function(){return n},n}var O=r.h1(G()),T=function(e){var r=e.logo.replace(/-|\//g," ").toLowerCase().split(" ").map(function(n){return n.charAt(0).toUpperCase()+n.substring(1)}).join(" ");return r.includes("@jaw Dev")&&(r=r.replace("@jaw Dev","@JAW-Dev ")),r.includes("Example")&&(r=r.replace("Example","")),n.createElement(O,{className:"dmp__logo"},r)};function U(){var n=l(["\n  padding: 0.5rem;\n  margin: 1rem;\n  > table {\n    border-collapse: collapse;\n  }\n  > table > thead > tr > .dmp__table-th,\n  > table > tbody > tr > .dmp__table-td {\n    box-sizing: border-box;\n    border: 1px solid rgb(179, 179, 179);\n    padding: 1rem 0.5rem; hyphens: auto;\n  }\n  > table > thead > tr > .dmp__table-th-2,\n  > table > tbody > tr > .dmp__table-td-2,\n  > table > thead > tr > .dmp__table-th-4,\n  > table > tbody > tr > .dmp__table-td-4 {\n    display: none;\n  }\n  @media (min-width: 380px) {\n    > table > thead > tr > .dmp__table-th-4,\n    > table > tbody > tr > .dmp__table-td-4 {\n      display: table-cell;\n    }\n  }\n  @media (min-width: 600px) {\n    > table > thead > tr > .dmp__table-th-2,\n    > table > tbody > tr > .dmp__table-td-2 {\n      display: table-cell;\n    }\n  }\n"]);return U=function(){return n},n}function V(){var n=l(["\n  padding: 1.5rem;\n  margin: 3.5rem 0 0;\n  box-sizing: border-box;\n  width: 100%;\n"]);return V=function(){return n},n}var Y=r.section(V()),H=r.div(U()),K=function(e){var r,t=e.name,l=(r=e.table,o.setOptions({tables:!0}),a(o.parse(r).replace(/>\s/g,">")));return setTimeout(function(){for(var n=document.querySelectorAll(".dmp__table thead tr"),e=document.querySelectorAll(".dmp__table tbody tr"),r=0;r<n.length;r++)for(var t=n[r].querySelectorAll("th"),o=0;o<t.length;o++)t[o].classList.add("dmp__table-th"),t[o].classList.add("dmp__table-th-"+(o+1));for(var a=0;a<e.length;a++)for(var l=e[a].querySelectorAll("td"),i=0;i<l.length;i++)l[i].classList.add("dmp__table-td"),l[i].classList.add("dmp__table-td-"+(i+1))}),n.createElement(Y,{className:"dmp__table"},n.createElement("h2",null,t),n.createElement(H,null,l))};function P(){var n=l(["\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  grid-template-columns: 100%;\n  position: relative;\n  min-height: 100vh;\n  color: rgb(230, 230, 230);\n  background-color: rgb(38, 41, 43);\n  overflow: hidden;\n"]);return P=function(){return n},n}var Q=r.div(P()),R=function(e){return n.createElement(Q,{className:"dmp__wrap"},e.children)};export{d as DMPBlurb,u as DMPContent,k as DMPExample,E as DMPFooter,A as DMPGHLink,q as DMPHeader,B as DMPInstall,T as DMPLogo,K as DMPTable,R as DMPWrap};
//# sourceMappingURL=index.modern.js.map