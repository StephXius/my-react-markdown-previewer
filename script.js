function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const initialState = `
This is a paragraph
** This is bolded text**

> Block Quotes!

# This is a heading 
## This is heading2

- This is List item 1
- This is List item 2
- This is List item 3

[Visit my portfolio website](https://stephxius.github.io/stephanexiuswebsite/)

This is a inline \`<div></div>\`

This is a block of code:  
\`\`\` 
let x = 5;
let y = 5;
let z = x + y;
\`\`\`

Embedded Image down below:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

`;

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      text: initialState });_defineProperty(this, "handleChange",


    e => {
      this.setState({
        text: e.target.value });

    });}
  render() {
    const { text } = this.state;

    const markdown = marked(text, { breaks: true });
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h2", { className: "text-center mt-4" }, "Convert your Markdown"), /*#__PURE__*/
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: "col-6" }, /*#__PURE__*/
      React.createElement("h6", { className: "text-center" }, "Enter your Markdown here:"), /*#__PURE__*/
      React.createElement("textarea", {
        className: "form-control p-2",
        id: "editor",
        value: text,
        onChange: this.handleChange })), /*#__PURE__*/


      React.createElement("div", { className: "col-6" }, /*#__PURE__*/
      React.createElement("h6", { className: "text-center" }, "See the result:"), /*#__PURE__*/
      React.createElement("div", {
        className: "preview rounded",
        dangerouslySetInnerHTML: { __html: markdown },
        id: "preview" })))));





  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));