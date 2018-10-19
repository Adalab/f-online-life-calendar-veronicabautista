import React, { Component } from 'react';

class NewDay extends Component {
	render() {
		const { submitDay, addDate, addFace, addMessage} = this.props;
	
		return (
		<form className="form__container" onSubmit={submitDay}>
		<div className="date__container">
			<label name="date">Fecha</label>
			<input type="date" name="date" onChange={addDate} required />
		</div>
		<div className="status__container">
			<label name="status">Estado</label>
				<label for="smile" name="happy">
					<input type="checkbox" name="happy" onChange={addFace} /> :)
				</label>
				<label for="smile" name="sad">
					<input type="checkbox" name="sad" onChange={addFace} /> :(
				</label>
		</div> 
		<div className="message">
			<label for="message" name="mesagge" onChange={addMessage}>Mensaje
				<input type="text" name="happy" placeholder="¿Por qué es un buen día?" />
			</label>
		</div>
		<div className="buttons__container">
			<button type="submit" className="save__button">GUARDAR</button>
			<button className="cancel__button">CANCELAR</button>      
		</div>
		</form>
		);
	}
}

export default NewDay;