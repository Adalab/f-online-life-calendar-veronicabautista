import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className>
        <header className="plus__button">
          <button> + </button>
        </header>
        <form className="form__container">
          <div className="date__container">
            <label name="date">Fecha</label>
            <input type="date" name="date" required />
          </div>
          <div className="status__container">
            <label name="status">Estado</label>
              <label for="smile" name="happy">
                <input type="checkbox" name="happy" required /> :)
              </label>
              <label for="smile" name="sad">
                <input type="checkbox" name="sad" required /> :(
              </label>
          </div> 
          <div className="message">
            <label for="message" name="mesagge">Mensaje
              <input type="text" name="happy" placeholder="¿Por qué es un buen día?" />
            </label>
          </div>
          <div className="buttons__container">
            <button type="submit" className="save__button">GUARDAR</button>
            <button className="cancel__button">CANCELAR</button>      
          </div>
        </form>
      </div>
    );
  }
}

export default App;
