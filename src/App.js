import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import NewDay from './components/NewDay';

class App extends Component {
  constructor(props) {
    super(props);

    this.state ={
      faces: [],
      date: "",
      status: "",
      mesagge: "",
    }

    this.submitDay = this.submitDay.bind(this);
    this.addDate = this.addDate.bind(this);
    this.addFace = this.addFace.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.cancelButton = this.cancelButton.bind(this);
  }

  submitDay(e) {
    e.preventDefault();
    const newDay = this.state.faces;
    newDay.push(this.state.status)
    this.setState({ face: newDay })
  }

  addDate(e) {
    this.setState({ date: e.target.value })
  }

  addFace(e) {
    this.setState({ status: e.target.value })
  }

  addMessage(e) {
    this.setState({ message: e.target.value })
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
        submitDay={this.submitDay}
        addDate={this.addDate}
        addFace={this.addFace}
        addMessage={this.addMessage}
        cancelButton={this.cancelButton}
        />
      </div>
    );
  }
}

export default App;
