import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import NewDay from './components/NewDay';

class App extends Component {
  constructor(props) {
    super(props);

    this.state ={
      faces: [],
      date: null,
      status: null,
      mesagge: null,
    }
    console.log(this.state.faces);

    this.submitDay = this.submitDay.bind(this);
    this.addDate = this.addDate.bind(this);
    this.addFace = this.addFace.bind(this);
    this.cancelButton = this.cancelButton.bind(this);
  }

  // submitDay(e) {
  //   e.preventDefault();
  //   const newDay = this.state.faces;
  //   newDay.push(this.state.faces)
  //   this.setState({ faces: newDay })
  //   console.log("day" + faces)
  // }

  addDate(e) {
    let todayDate = e.target.value;
    this.setState({ date: todayDate });
  }

  addFace(e) {
    let todayFace = e.target.value;
    this.setState({ status: todayFace });
  }

  addMessage(e) {
    let todayMessage = e.target.value;
    this.setState({ message: todayMessage });
  }

  submitDay (e) {
    let arrayOfFaces = this.state.faces.push(this.state.status);
    console.log(this.state.status);
    this.setState({ 
      faces: [arrayOfFaces]
    });
  }

  cancelButton() {
    this.setState({
      date: "",
      status: "",
      message: "",
    })
  }

  render() {
    return (
      <div className="page__container">
        <Main 
        faces={this.state.faces}
        status={this.state.status}
        />
        <NewDay 
        status={this.state.status}
        submitDay={this.submitDay}
        addDate={this.addDate}
        addFace={this.addFace}
        cancelButton={this.cancelButton}
        />
      </div>
    );
  }
}

export default App;
