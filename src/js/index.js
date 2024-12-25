//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./component/home";

// include your styles into the webpack bundle
import "../styles/index.css";
import PropTypes from "prop-types";
// import fontawesome from '@fortawesome/fontawesome';

//import your own components
// import Home from "./component/home.jsx";

// function SimpleCounter(props){
//     // return (<div className= "counter-container">
//     //     <div className= "icon">
//     //         <i className= "fa-regular fa-clock"></i>
//     //     </div>
//     //     <div className= "sexto"></div>
//     //     <div className= "quinto"></div>
//     //     <div className= "cuarto"></div>
//     //     <div className= "tercero"></div>
//     //     <div className= "segundo"></div>
//         <div className= "primero"></div>

//     </div>)
// }
// Declaro todos los numeros que necesio en mi contador
let num1 = 0 
let num2 = 0
let num3 = 0
let num4 = 0 
let num5 = 0
let num6 = 0

// setInterval(function(props) {
    // Aumento los numeros de uno en uno
    // num1;
    // num2;
    // num3;
    // num4;
    // num5;
    // num6++; 

    setInterval(function () {
        num6++;
        if (num6 === 10) {
            num6 = 0;
            num5++;
            if (num5 === 10) {
                num5 = 0;
                num4++; 
                if (num4 === 10) {
                    num4 = 0;
                    num3++; 
                    if (num3 === 10) {
                        num3 = 0;
                        num2++; 
                        if (num2 === 10) {
                            num2 = 0;
                            num1++; 
                        }
                    }
                }
            }
        }
    

// Chequeo si funciona
console.log (num1, num2, num3, num4, num5, num6)
    //render your react application
    // Le paso por props la informacion de los numeros al componente home
ReactDOM.createRoot(document.getElementById('app')).render (<Home numero1={num1} numero2={num2} numero3={num3} numero4={num4} numero5={num5} numero6={num6}/>);
}, 1000);






