import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Calculator from "./components/calculator"

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      result: ""
    }
  }
  onClickHandler = (event) => {
    if(event.target.id === "="){
      this.calcualte();
    }
    else if(event.target.id === "clear"){
      this.reset();
    }
    else {      
      this.setState({
          result: this.state.result + event.target.id
      })
    }    
    }
    calcualte = () => {       
      try {        
        this.setState({ 
            // eslint-disable-next-line no-eval
            result: eval(this.state.result)     
        })
      }      
      catch (e) {
        this.setState({
            result: "error"
        })
      }
    }
    reset = () =>{
      this.setState({
        result: ""
      });
    }
  render(){
    return (
      <div className="App">
        <Calculator result= {this.state.result} onClick= {(event)=> this.onClickHandler(event)} />        
      </div>      
    )
  }  
}
export default App;
