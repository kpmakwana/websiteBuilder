import React, { Component } from 'react';
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.bubble.css';
import Data from '../Data/Data.json'


export default class Editor extends Component { 
  constructor (props) {
    //const parsedElement= "<" +props.type +">" +props.value +"<" +props.type +" />"
    super(props)
    this.state = {
        editorHtml: props.value,
    }
    this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange (content) {
        this.props.changeContent(this.props.index,this.props.contentId,content);
        Data[this.props.index].extra[this.props.contentId] = content;
    }
    
    render () {
      return (
          <ReactQuill
            theme= 'bubble'
            readOnly= {this.props.readOnly}
            onChange={this.handleChange}
            defaultValue={this.state.editorHtml}
            modules={Editor.modules}
            formats={Editor.formats}
           />
       )
    }
  }
  
  /* 
   * Quill modules to attach to editor
   * See https://quilljs.com/docs/modules/ for complete options
   */
  Editor.modules = {
      toolbar: [
        [ {'font':[]}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'bullet' }],
        ['clean'],

      ],
    clipboard: {
      matchVisual: true,
    }
  }
  /* 
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
  Editor.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ];