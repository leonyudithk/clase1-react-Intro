import React, { Component } from 'react';
import ListarPeliculas from '../componentes/AppPeliculas/ListarPeliculas';
import PintarCard from '../componentes/AppPeliculas/PintarCard';
import Saludos from '../componentes/Saludo';
import User from '../componentes/User';

class App extends Component {
  render() {
    return (
      <div>
        <div>
            <PintarCard/>
        </div>

        <h1>------------------------------------</h1>
        <h1>Ejercicio de Prueba!!!</h1>
        <User/>

        <h1>Con la Props!!!</h1>
        <Saludos saludar='Los de frontend 11'/>
      </div>
    );
  }
}

export default App;

