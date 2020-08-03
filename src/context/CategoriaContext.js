import React, {createContext, useState, useEffect} from  'react';
import axios from 'axios';

//Crear el Context
export const CategoriasContext = createContext(); 

//Siempre que creas un context, tienes que crear un provide.
//El provide es donde va a salir los datos y las funciones


//Provider es donde se encuentran las funcione sy state
const CategoriasProvider = (props) =>{
    
    // crear el state del Context
    const [categorias, guardarCategorias] =  useState([]);
   
    //Ejecutar el llamada a la api
    useEffect(() => {
        const obtenerCategorias = async() => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            
            const categorias = await axios.get(url);

            guardarCategorias(categorias.data.drinks);
        }
        obtenerCategorias();
    }, []);

    //Los diferentes componentes (como app, formulario, etc) estaran dentro de props
    //Todo lo que coloques dentro del .Provider como los value son los valores que estaran disponbiles en todos los componentes
    return (
        <CategoriasContext.Provider
            value={{
               categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

//El export default es para hacerlo disponible en los demas componentes
export default CategoriasProvider;