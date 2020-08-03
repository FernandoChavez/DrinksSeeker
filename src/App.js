import React, { Fragment } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaRecetas from './components/ListaRecetas';

//Con CategoriasProvider, todo lo que esta en CategoriasContext.Provider estara disponible
//en las etiquetas 
import CategoriasProvider from './context/CategoriaContext';
import RecetasProvider  from  './context/RecetasContext';
import ModalProvider  from  './context/ModalContext';

function App() {
  return (
      <CategoriasProvider>
        <RecetasProvider>
          <ModalProvider>
            <Header/>

            <div className="container mt-5">
              <div className="row">
                <Formulario/>
              </div> 
              <ListaRecetas /> 
            </div>
          </ModalProvider>
        </RecetasProvider>
      </CategoriasProvider>
  );
}

export default App;
