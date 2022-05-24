import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PintarCard from './PintarCard';

class ListarPeliculas extends Component {
   
    //2- Crear el Constructor es creado para almacenar los estados y cambios en esos estados
    constructor(){
        //Me permite usar this dentro del constructor y este hace una llamanda al 
        //Componente Base React-Componente Super(props)
        super()
        //puedo acceder a la informacion delestado actual para asi poder renderizar
        this.state={
           peli: []
        }
    }

    //1- Consumir la Api http://localhost:3004/peliculas
    async componentDidMount() {
        const resp = await fetch('http://localhost:3004/peliculas')
        const data = await resp.json()
        console.log(data)
        this.setState({peli:data})
    }

    render() {
        return (
            <div>
             <Link to="/App">Ir a App</Link>
                <h1>Hola estoy dentro de Listar peliculas</h1>
                <div>
                    {
                        this.state.peli.map(movie =>(
                            <div>
                                <img src={movie.Poster} alt=""/>
                                <h1>{movie.Title}</h1>
                                <p>{movie.Year}</p>
                            </div>
                         
                       //  <PintarCard key={movie.id} movies={movie}/>
                        ))
                    }
                </div>
               
            </div>
        );
    }
}

export default ListarPeliculas;