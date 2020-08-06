//En este componente se consumen los datos de CategoraContext y mostrarlos
//El useContext es el hook
import React, {useContext, useState} from 'react'
//Tenemos que pasar el valor o variable que retorne createContext()
import {CategoriasContext} from '../context/CategoriaContext'
import {RecetasContext} from '../context/RecetasContext';
import Error from './Error'

const Formulario = () => {

    const [busqueda, guardarBusqueda] = useState({
        nombre: '',
        categoria: ''
    }) 

    //state del error al hacer bisqueda de campos vacios
    const [ error, guardarError] = useState(false);

    //Extraigo las categorias ingresadas en el value del CategoriasContext.Provider en CategoriasContesxt.js
    const { categorias} = useContext(CategoriasContext);
    const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);

    const {nombre, categoria} = busqueda;

    //funcion para leer contenidos
    const obtenerDatosReceta = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }
  
    //console.log(categorias);

    //Cuando el usuario da submit al form
    const handleSubmit = e =>{
        e.preventDefault();

        //validar
        if (nombre.trim()=== '' || categoria.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false);
        buscarRecetas(busqueda);
        guardarConsultar(true);

    }

    return (
       <form
        className="col-12"
        onSubmit={handleSubmit}
        /*
        onSubmit={e => {
            e.preventDefault();
            buscarRecetas(busqueda);
            guardarConsultar(true);
        }}
        */
       >
        
           <fieldset className="text-center">
               <legend>Busca bebidas por Categorias o Ingredientes</legend>
           </fieldset>

           {error ? <Error mensaje="Ambos campos son obligatorios" /> : null}
           <div className="row mt-4">
               <div className="col-md-4">
                   <input
                    name="nombre"
                    className="form-control"
                    type="text"
                    placeholder="Buscar por Ingrediente"
                    onChange={obtenerDatosReceta}
                   />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                        onChange={obtenerDatosReceta}
                    >
                        <option value="">---Selecciona Categoria---</option>
                        {categorias.map(categoria =>(
                            <option 
                                key = {categoria.strCategory} 
                                value={categoria.strCategory}
                            >{categoria.strCategory}
                            </option>
                        ))}

                    </select>      
                </div>
                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar recetas"
                    />
                </div>
            </div>
        </form>
    );
}

export default Formulario;