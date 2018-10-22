import React, { Component } from 'react';

class Main extends Component {
	render() {
		console.log(this.props.faces);
	
		return (
			<div>	
				<header className="plus__button">
					<span> + </span>
				</header>
				<ul className="smileys__container">
					{/* {this.props.faces.map((face, i) => {
						let smileys = face === ':)' ? 'happy__smile' : 'sad__smile' */}
					{this.props.faces.map(function (face, i) {			
						let myFace;
              let smileys;
              if (face === 'happy') {
                myFace = ':)'
                smileys = 'happy__smile'
              } else {
                myFace = ':('
                smileys = 'sad__smile'
              }
              console.log(myFace);
						return (
							<li key={i} className={`face ${smileys}`}>
								{myFace}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default Main;