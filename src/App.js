import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Servicios from './components/Servicios';

class App extends Component {
  render() {

    const servicio1 = {
      "periodicidad":"La consulta será una vez al mes o cada 15 días vía Skupe, o por teléfono. Incluye:",
      "image1":"",
      "diagnostico":"Diagnóstico nutricional por medio de la historia clínica, estilo de vida y hábitos alimenticios.",
      "plan":"Plan de alimentación totalmente personalizado que se adapte a las necesidades del cliente",
      "atencion":"Atención personalizada por celular o Whatsapp para dudas y ayuda.",
    };
    const servicio2 = {
      "periodicidad":"Análisis de composición corporal mediante medidas antropométricas + medidas de pliegues cutáneos (opcional)",
      "diagnostico":"Diagnóstico nutricional por medio de la historia clínica, estilo de vida y hábitos alimenticios",
      "plan":"Plan de alimentación personalizado que se adapte a las necesidades del cliente.",
      "dinamica":"Dinámicas para reforzar aprendizajes (en consultas posteriores)",
      "atencion":"Atención personalizada por celular o Whatsapp para dudas y ayuda.",
    };

    return (

      <div>
          <Servicios servicio1={servicio1} />
          <Servicios servicio2={servicio2} />
        </div>











      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
