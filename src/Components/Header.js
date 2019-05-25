import React, { Component } from 'react';
import Editor from './Editor';
import ReactHtmlParser from 'react-html-parser';

export default class Header extends Component {
  changeContent=(index,contentId,content)=>{
    this.props.changeContent(index,contentId,content)
  }

  getContent =(contentId)=> {
    if(this.props.editMode){
      return(
        //Return Editor as its in edit moed
        <Editor
               readOnly={! this.props.editMode}
               value={this.props.extra[contentId]}
               contentId= {contentId}
               changeContent={this.changeContent}
               index={this.props.index}
       />
      );
     }
    else{
      //When it's not in edit mode
        var src = this.props.extra[contentId];
        if(src[0]==='<'){
          // Content will have extra <p,h1,h2 > tags that we have to remove as we already have declared that before calling this
          var editedContent= 
          src
          .trim()
          .slice(src.search(">")+1,src.lastIndexOf("</"));
        }
       else{
        //If content don't have any tags that return that string
        editedContent=src;
       }
      return ReactHtmlParser(editedContent);
    }
  }


  render() {
    return (
      <div>
      <header className="masthead">
      <div className="container">
        <div className="intro-text">
          <div className="intro-lead-in">
          
          {this.getContent(0)}

          </div>
          <div className="intro-heading text-uppercase" >
          
          {this.getContent(1)}
          
          </div>
          <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
        </div>
      </div>
    </header>
      </div>
    )
  }
}
