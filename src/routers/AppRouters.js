import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListarPeliculas from '../componentes/AppPeliculas/ListarPeliculas';
import App from '../containers/App';

function AppRouters() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ListarPeliculas/>}/>
                    <Route path="/App" element={<App/>}/>

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default AppRouters;