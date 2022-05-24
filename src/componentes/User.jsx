import React, { Component } from 'react';
import Saludos from './Saludo';


export default class User extends Component {
    render() {
        return (
            <div>
             <Saludos saludar='Los quiero Felicitar por estar aqui' />
            </div>
        );
    }
}



