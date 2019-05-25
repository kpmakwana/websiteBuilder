import React, { Component } from 'react';
import Editor from './Editor';
import ReactHtmlParser from 'react-html-parser';



export default class Contact extends Component {
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
      <section id="contact">

      { (this.props.editMode) ?
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
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">
              {this.getContent(0)}      
              </h2>
            <h3 className="section-subheading text-muted">
              
            {this.getContent(1)}      
           
              </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form id="contactForm" name="sentMessage" noValidate="novalidate">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="clearfix"></div>
                <div className="col-lg-12 text-center">
                  <div id="success"></div>
                  <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
      </div>
    )
  }
}
