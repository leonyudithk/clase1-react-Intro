# crear desde git bash
 npx create-react-app nombreCarpeta

 # esperar hasta que salga Happy hacking!

 # desde git bash cd nombreCarpeta  cunado ya entre a la carpeta escribo code . e ingreso

 # Debo limpiar todo
    dejo dentro de public solo el index.html y dentro de index.html
    debe quedar asign<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="utf-8" />
                    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="theme-color" content="#000000" />
                
                    <title>Clase 1 de F11 React</title>
                </head>
                <body>
                    <noscript>You need to enable JavaScript to run this app.</noscript>
                    <div id="root"></div>

                </body>
                </html>

# debe limpiar el SRC
 solo debe quedar el index.js y debe quedar asi
             import React from 'react';
            import ReactDOM from 'react-dom/client';
            import App from './App';


            const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(
            <React.StrictMode>
                <App/>
            </React.StrictMode>
            );

# y modifico mi App.js para conectar al navegador

# para correr el programa con la    
    npm run start    o        npm start app

# Snippets deben instalar desde las extensiones Simple React Snippets y ES7+ React/Redux/React-Natives

//////////////////////////////////////////////
///-------------Sniper---------------------/// 
/**     para componentes de Clases rcc
 *      para componente de funcion rsf
 *      para componente de Estados rsc
 *      rafce

 *////////////////////////////////////////////


 # Creamos el data.json
 # levantamos el servidor de
 json-server --watch ./src/assets/data.json --port 3004

 http://localhost:3004/peliculas


 # instalar React Router Dom para el manejo de las rutas