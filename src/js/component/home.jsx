import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	// Añado al console.log los numero1 que es el nombre que me aparece en la terminal
	console.log(props.numero1, props.numero2, props.numero3, props.numero4, props.numero5, props.numero6);
	
	return (
		<div className="text-center">
			{/* Hago visibles los numeros alado del texto usando llaves y props */}
			<h1 className="text-center mt-5">⏱ {props.numero1} {props.numero2} {props.numero3} {props.numero4} {props.numero5} {props.numero6}</h1>
			
		</div>
	);
};

export default Home;
