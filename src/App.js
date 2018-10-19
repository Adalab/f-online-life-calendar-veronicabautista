import React, { Component } from 'react';
import './App.css';
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
      <div className>
        <header className="plus__button">
          <span> + </span>
        </header>
        <NewDay 
        submitDay={this.submitDay}
        addDate={this.addDate}
        addFace={this.addFace}
        addMessage={this.addMessage}
        />
      </div>
    );
  }
}

export default App;
