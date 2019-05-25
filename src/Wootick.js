import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Services from './Components/Services';
import About from './Components/About';
import Team from './Components/Team';
import Contact from './Components/Contact';
//import axios from 'axios';
import  Data  from "./Data/Data";
var renderData, apiData;

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      editMode: false,
      isLoaded: false,
      myState : {},
    };
  }


  componentWillMount(){
  /*
  axios.get('http://localhost:3040/api/items')
    .then(res =>{
      console.log("Axios")
      apiData=res.data[0].data;
      console.log(res.data[0].data);
   */
      apiData=Data;
      if(localStorage.getItem('Data')){
        renderData=JSON.parse(localStorage.getItem('Data'));
        console.log("it's coming from ls");
        console.log(renderData);
      }
      else{
        console.log("No local storage")
        renderData = apiData;
        localStorage.setItem('Data',JSON.stringify(apiData));
      }
      
      var dummy=[...renderData];
        dummy.forEach(recivedData =>{
          if(recivedData.type === 'Navbar')
            recivedData.component = Navbar;
          else if(recivedData.type === "Header")
            recivedData.component = Header;
          else if(recivedData.type === "Services")
            recivedData.component= Services;
          else if(recivedData.type === "About")
            recivedData.component= About;
          else if(recivedData.type === "Team")
            recivedData.component= Team;
          else if(recivedData.type === "Contact")
            recivedData.component= Contact;
          else{
          console.log("Something went wrong in component names")
          console.log(recivedData.type);
          }
        });
        this.setState({
          isLoaded: true,
          myState: dummy
        }) 
    //});
  }
  toggleEditMode= () =>{
    this.setState((state) => ({
        editMode: !state.editMode
      })
    )
  }

  
  getElement(){
    const comp = this.state.myState.map( data =>
      {
        return <
                  data.component 
                  key={this.state.myState.indexOf(data)} 
                  extra={data.extra}
                  swapUp={this.swapUp}
                  index={this.state.myState.indexOf(data)}
                  changeContent={this.changeContent}
                  editMode= {this.state.editMode}
                  toggleEditMode = {this.toggleEditMode}
              />;
      });
    const ret =
              <div >
                {comp}
              </div>;
    return  ret;
  }

  swapUp = (index) =>{
    if(index>2){
      const temp=renderData[index];
      renderData[index]=renderData[index-1];
      renderData[index-1]=temp;
      this.setState({
        myState: renderData
      });
      localStorage.setItem('Data',JSON.stringify(renderData));
    }
  }

  changeContent=(index,contentId,content)=>{ 
    renderData[index].extra[contentId]=content;
    localStorage.setItem('Data',JSON.stringify(renderData));
    console.log(renderData);
  }


  render() {
      var isLoaded = this.state.isLoaded;
      if(!isLoaded){
        return(
          <div style={{padding: "25%"}}>
            <h2>
              Please wait few seconds to get wooticked!!
            </h2>
          </div>
        );
      }
      else{
        return (
          <div className="App">        
            {
              this.getElement()
            }
          </div>
      );
    }
  }
}