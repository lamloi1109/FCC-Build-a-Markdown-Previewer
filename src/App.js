import "./App.css";
import { marked } from "marked";
import React from "react";
class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  render() {
    const markDown = marked(this.state.text, {
      highlight: function (code, lang) {
        const hljs = require("highlight.js");
        const language = hljs.getLanguage(lang) ? lang : "plaintext";
        return hljs.highlight(code, { language }).value;
      },
      langPrefix: "hljs language-",
      pedantic: false,
      gfm: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false,
    });
    return (
      <div className="App">
        <div id="editor">
          <div id="editor-header">
            <span>Editor</span>
          </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            onChange={this.handleChange}
            value={this.state.text}
          ></textarea>
        </div>
        <div id="preview">
          <div id="preview-header">
            <span>Preview</span>
          </div>
          <div
            id="preview-text"
            dangerouslySetInnerHTML={{ __html: markDown }}
          ></div>
        </div>
      </div>
    );
  }
}

export default App;
