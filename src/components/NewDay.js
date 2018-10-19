import React, { Component } from 'react';

class NewDay extends Component {
	render() {
		const { status, submitDay, addDate, addFace, addMessage, cancelButton} = this.props;
	
		let hideMessage = status === ':)' ? null : "hide__message" ;

		return (
		<form className="form__container" onSubmit={submitDay}>
		<div className="date__container">
			<label name="date">Fecha</label>
			<input type="date" name="date" onChange={addDate} required />
		</div>
		<div className="status__container">
			<label name="status">Estado</label>
				<label name="happy">
					<input type="checkbox" name="happy" onChange={addFace} /> :)
				</label>
				<label name="sad">
					<input type="checkbox" name="sad" onChange={addFace} /> :(
				</label>
		</div> 
		<div className={hideMessage}>
			<label name="mesagge" onChange={addMessage}>Mensaje
				<input type="text" name="happy" placeholder="¿Por qué es un buen día?" />
			</label>
		</div>
		<div className="buttons__container">
			<button type="submit" className="save__button">GUARDAR</button>
			<button className="cancel__button" onClick={cancelButton}>CANCELAR</button>      
		</div>
		</form>
		);
	}
}

export default NewDay;