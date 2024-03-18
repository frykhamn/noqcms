import {ContentState, Editor, EditorState, RichUtils} from 'draft-js';
import React from 'react';
import './RichText.css';
import { stateToHTML } from "draft-js-export-html";


class RichEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createWithContent(ContentState.createFromText(props.text)) };
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  onChange = (editorState) => {
    const newText = editorState.getCurrentContent().getPlainText();
    this.props.setText(newText);
    this.setState({ editorState });
    const contentState = editorState.getCurrentContent();
    const html = stateToHTML(contentState);
    console.log(html); 
  
  
  };

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      this.onChange(newState);
      return 'handled';
    }

    return 'not-handled';
  }

  render() {
    return (
      <Editor
        editorState={this.state.editorState}
        handleKeyCommand={this.handleKeyCommand}
        onChange={this.onChange}
      />
    );
  }
}



export default RichEditor;