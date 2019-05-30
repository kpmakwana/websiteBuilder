import React, { Component } from 'react';
import '../CSS/Main.css';
import Editor from './Editor';
import ReactHtmlParser from 'react-html-parser';


export default class About extends Component {

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
    <section id="about">
    { ((this.props.editMode) &&  (this.props.index!==2) )?
        <button className='btn btn-primary mx-3' type="button" 
            onClick= {()=>{
            // console.log(this.props.extra);
              this.props.swapUp(this.props.index)}}
            >
            Move up
        </button>
        : null
    }
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-3 text-center">
            <h2 className="section-heading text-uppercase">
            
            {this.getContent(0)}


            </h2>
            <h3 className="section-subheading text-muted ">
            
            {this.getContent(1)}

            </h3>
          </div>
        </div>
        </div>
    </section>
    )
  }
}
