function n(n){return n&&"object"==typeof n&&"default"in n?n.default:n}var e=require("react"),r=n(e),t=n(require("styled-components")),o=n(require("prismjs"));require("@fontsource/fira-code");var a=require("@ts-stack/markdown"),l=n(require("html-react-parser"));function i(n,e){return e||(e=n.slice(0)),n.raw=e,n}function c(){var n=i(["\n  padding: 1.5rem;\n  margin: 3.5rem 0 0;\n  box-sizing: border-box;\n  text-align: center;\n  font-size: 1.5rem;\n"]);return c=function(){return n},n}var d=t.section(c());function m(){var n=i(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 900px;\n  max-width: 100%;\n  margin: 0 auto;\n  padding: 1.5rem ;\n"]);return m=function(){return n},n}var s=t.main(m());function u(){var n=i(["\n  display: block;\n  box-sizing: border-box;\n  padding: 1rem 1.5rem;\n  font-family: Fira Code, source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\n  font-size: 1rem;\n  > .token.comment,\n  > .token.prolog,\n  > .token.doctype,\n  > .token.cdata {\n    color: hsl(30, 20%, 50%);\n  }\n  > .token.punctuation {\n    opacity: 0.7;\n  }\n  > .token.namespace {\n    opacity: 0.7;\n  }\n  > .token.property,\n  > .token.tag,\n  > .token.boolean,\n  > .token.number,\n  > .token.constant,\n  > .token.symbol {\n    color: hsl(350, 40%, 70%);\n  }\n  > .token.selector,\n  > .token.attr-name,\n  > .token.string,\n  > .token.char,\n  > .token.builtin,\n  > .token.inserted {\n    color: hsl(75, 70%, 60%);\n  }\n  > .token.operator,\n  > .token.entity,\n  > .token.url,\n  > .language-css .token.string,\n  > .style .token.string,\n  > .token.variable {\n    color: hsl(40, 90%, 60%);\n  }\n  > .token.atrule,\n  > .token.attr-value,\n  > .token.keyword {\n    color: hsl(350, 40%, 70%);\n  }\n  > .token.regex,\n  > .token.important {\n    color: #e90;\n  }\n  > .token.important,\n  > .token.bold {\n    font-weight: bold;\n  }\n  > .token.italic {\n    font-style: italic;\n  }\n  > .token.entity {\n    cursor: help;\n  }\n  > .token.deleted {\n    color: red;\n  }\n"]);return u=function(){return n},n}function p(){var n=i(["\n  box-sizing: border-box;\n  font-family: Fira Code, source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\n  margin: 0;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  word-wrap: normal;\n  line-height: 1.5;\n  tab-size: 2;\n  hyphens: none;\n"]);return p=function(){return n},n}function b(){var n=i(["\n  box-sizing: border-box;\n  background-color: rgb(26, 26, 26);\n  margin: 1rem;\n  border-radius: 5px;\n"]);return b=function(){return n},n}function g(){var n=i(["\n  padding: 1.5rem;\n  margin: 3.5rem 0 0;\n  box-sizing: border-box;\n  width: 100%;\n  color: rgb(230, 230, 230);\n  border-radius: 5px\n"]);return g=function(){return n},n}var f=t.section(g()),h=t.div(b()),x=t.pre(p()),_=t.code(u());function v(){var n=i(["\n  padding: 1rem 1.5rem;\n  text-align: center;\n  font-size: 0.8rem;\n"]);return v=function(){return n},n}var k=t.footer(v());function y(){var n=i(["\n    display: inline-flex;\n    align-Items: center;\n    padding: 0.25rem 0.5rem;\n    background-Color: rgb(20, 20, 20);\n    color: rgb(255, 186, 0);\n    border-radius: 5px;\n    text-decoration: none;\n"]);return y=function(){return n},n}function w(){var n=i(["\n  display: none;\n  margin-left: 0.5rem;\n  @media (min-width: 600px) {\n    display: inline;\n  }\n"]);return w=function(){return n},n}var E=t.span(w()),z=t.a(y());function M(){var n=i(["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.5rem;\n  color: rgb(230, 230, 230);\n  background-color: rgb(31, 34, 35);\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px, rgba(0, 0, 0, 0.1) 0px 1px 4px, rgba(0, 0, 0, 0.1) 0px 2px 8px;\n"]);return M=function(){return n},n}var N=t.header(M());function C(){var n=i(["\n  display: block;\n  box-sizing: border-box;\n  padding: 1rem 1.5rem;\n  font-family: Fira Code, source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\n"]);return C=function(){return n},n}function D(){var n=i(["\n  box-sizing: border-box;\n  padding: 0.5rem;\n  background-color: rgb(26, 26, 26);\n  margin: 1rem;\n  border-radius: 5px;\n"]);return D=function(){return n},n}function q(){var n=i(["\n  padding: 1.5rem;\n  margin: 3.5rem 0 0;\n  box-sizing: border-box;\n  width: 100%;\n  color: rgb(230, 230, 230);\n  border-radius: 5px\n"]);return q=function(){return n},n}var P=t.section(q()),j=t.div(D()),A=t.code(C());function L(){var n=i(["\n  font-size: 1.2rem;\n  margin-right: 1rem;\n"]);return L=function(){return n},n}var F=t.h1(L());function S(){var n=i(["\n  padding: 0.5rem;\n  margin: 1rem;\n  > table {\n    border-collapse: collapse;\n  }\n  > table > thead > tr > .dmp__table-th,\n  > table > tbody > tr > .dmp__table-td {\n    box-sizing: border-box;\n    border: 1px solid rgb(179, 179, 179);\n    padding: 1rem 0.5rem; hyphens: auto;\n  }\n  > table > thead > tr > .dmp__table-th-2,\n  > table > tbody > tr > .dmp__table-td-2,\n  > table > thead > tr > .dmp__table-th-4,\n  > table > tbody > tr > .dmp__table-td-4 {\n    display: none;\n  }\n  @media (min-width: 380px) {\n    > table > thead > tr > .dmp__table-th-4,\n    > table > tbody > tr > .dmp__table-td-4 {\n      display: table-cell;\n    }\n  }\n  @media (min-width: 600px) {\n    > table > thead > tr > .dmp__table-th-2,\n    > table > tbody > tr > .dmp__table-td-2 {\n      display: table-cell;\n    }\n  }\n"]);return S=function(){return n},n}function I(){var n=i(["\n  padding: 1.5rem;\n  margin: 3.5rem 0 0;\n  box-sizing: border-box;\n  width: 100%;\n"]);return I=function(){return n},n}var W=t.section(I()),B=t.div(S());function G(){var n=i(["\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  grid-template-columns: 100%;\n  position: relative;\n  min-height: 100vh;\n  color: rgb(230, 230, 230);\n  background-color: rgb(38, 41, 43);\n  overflow: hidden;\n"]);return G=function(){return n},n}var H=t.div(G());exports.DMPBlurb=function(n){return r.createElement(d,{className:"dmp__blurb"},n.children)},exports.DMPContent=function(n){return r.createElement(s,{className:"dmp__content",role:"main"},n.children)},exports.DMPExample=function(n){var t=n.code,a=n.label;return e.useEffect(function(){o.highlightAll()},[]),r.createElement(f,{className:"dmp__example"},r.createElement("h2",null,a=a||"Example"),r.createElement(h,{className:"dmp_code-wrap"},r.createElement(x,null,r.createElement(_,{className:"dmp_code language-javascript"},t))))},exports.DMPFooter=function(n){var e=n.text,t=(new Date).getFullYear();return r.createElement(k,{className:"dmp__footer",role:"contentinfo"},t," © ",e=e||"Jason Witt")},exports.DMPGHLink=function(n){return r.createElement(z,{href:n.link,className:"dmp__github-link"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",width:"1.5rem",height:"1.5rem",fill:"rgb(230, 230, 230)"},r.createElement("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})),r.createElement(E,{className:"dmp__github-link-text"},"View on Github"))},exports.DMPHeader=function(n){return r.createElement(N,{className:"dmp__header",role:"banner"},n.children)},exports.DMPInstall=function(n){var e=n.name;return r.createElement(P,{className:"dmp__install"},r.createElement("h2",null,"Install"),r.createElement(j,{className:"dmp_code-wrap"},r.createElement(A,{className:"dmp_code"},"npm install ",e," --save")),r.createElement(j,{className:"dmp_code-wrap"},r.createElement(A,{className:"dmp_code"},"yarn add ",e)))},exports.DMPLogo=function(n){var e=n.logo.replace(/-|\//g," ").toLowerCase().split(" ").map(function(n){return n.charAt(0).toUpperCase()+n.substring(1)}).join(" ");return e.includes("@jaw Dev")&&(e=e.replace("@jaw Dev","@JAW-Dev ")),e.includes("Example")&&(e=e.replace("Example","")),r.createElement(F,{className:"dmp__logo"},e)},exports.DMPTable=function(n){var e,t=n.name,o=(e=n.table,a.Marked.setOptions({tables:!0}),l(a.Marked.parse(e).replace(/>\s/g,">")));return setTimeout(function(){for(var n=document.querySelectorAll(".dmp__table thead tr"),e=document.querySelectorAll(".dmp__table tbody tr"),r=0;r<n.length;r++)for(var t=n[r].querySelectorAll("th"),o=0;o<t.length;o++)t[o].classList.add("dmp__table-th"),t[o].classList.add("dmp__table-th-"+(o+1));for(var a=0;a<e.length;a++)for(var l=e[a].querySelectorAll("td"),i=0;i<l.length;i++)l[i].classList.add("dmp__table-td"),l[i].classList.add("dmp__table-td-"+(i+1))}),r.createElement(W,{className:"dmp__table"},r.createElement("h2",null,t),r.createElement(B,null,o))},exports.DMPWrap=function(n){return r.createElement(H,{className:"dmp__wrap"},n.children)};
//# sourceMappingURL=index.js.map