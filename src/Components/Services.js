import React, { Component } from 'react';
import Editor from './Editor';
import ReactHtmlParser from 'react-html-parser';


export default class  Services extends Component {

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
      <section id="services">
      
      { (this.props.editMode) ?
        <button className='btn btn-primary mx-3' type="button" 
            onClick= {()=>{
              this.props.swapUp(this.props.index)}}
            >
            Move up
        </button>
        : null
    }

      <div className ="container">
        <div className ="row">
          <div className ="col-lg-12 text-center">
            <h2 className ="section-heading text-uppercase">
            {this.getContent(0)}
            </h2>
            <h3 className ="section-subheading text-muted">
            {this.getContent(1)}
              </h3>
          </div>
        </div>
        <div className ="row text-center">
          <div className ="col-md-4">
            <span className ="fa-stack fa-4x">
              <i className ="fas fa-circle fa-stack-2x text-primary"></i>
              <i className ="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className ="service-heading">

            {this.getContent(2)}


            </h4>
          
          <p className ="text-muted">    
          
          {this.getContent(3)}

          </p>

          </div>
          <div className ="col-md-4">
            <span className ="fa-stack fa-4x">
              <i className ="fas fa-circle fa-stack-2x text-primary"></i>
              <i className ="fas fa-laptop fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className ="service-heading">
            
            {this.getContent(4)}  
                 
            </h4>
          <p className ="text-muted">
            
            {this.getContent(5)}
          
          </p>
          </div>
          <div className ="col-md-4">
            <span className ="fa-stack fa-4x">
              <i className ="fas fa-circle fa-stack-2x text-primary"></i>
              <i className ="fas fa-lock fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className ="service-heading">

              {this.getContent(6)}  
                 
            </h4>
            <p className ="text-muted">

            {this.getContent(7)}  
                  
            </p>
          </div>
        </div>
      </div>
    </section>
      </div>
    )
  }
}
