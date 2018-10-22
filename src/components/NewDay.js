import React, { Component } from 'react';

class NewDay extends Component {
	render() {
		const { status, submitDay, addDate, addFace, addMessage, cancelButton} = this.props;
	
		let hideMessage = status === 'happy' ? null : "hide__message" ;

		return (
		<form className="form__container">
		<div className="date__container">
			<label htmlFor="date">Fecha</label>
			<input type="date" id="date" onChange={addDate} required />
		</div>
		<div className="status__container">
			<label name="status">Estado</label>
				<label name="happy" htmlFor="happy">
					<input type="checkbox" value="happy" onChange={addFace} /> :)
				</label>
				<label name="sad" htmlFor="sad">
					<input type="checkbox"  value="sad" onChange={addFace} /> :(
				</label>
		</div> 
		<div className={hideMessage}>
			<label name="mesagge" htmlFor="message" onChange={addMessage} >Mensaje
				<input type="text" name="happy" placeholder="¿Por qué es un buen día?" />
			</label>
		</div>
		<div className="buttons__container">
			<button type="submit" className="save__button" onClick={submitDay}>GUARDAR</button>
			<button className="cancel__button" onClick={cancelButton}>CANCELAR</button>      
		</div>
		</form>
		);
	}
}

export default NewDay;