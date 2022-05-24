import React, { Component } from 'react';
import Saludos from '../componentes/Saludo';
import User from '../componentes/User';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Ejercicio de Prueba!!!</h1>
        <User/>

        <h1>Con la Props!!!</h1>
        <Saludos saludar='Los de frontend 11'/>
      </div>
    );
  }
}

export default App;

