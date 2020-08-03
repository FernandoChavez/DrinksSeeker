//En este componente se consumen los datos de CategoraContext y mostrarlos
//El useContext es el hook
import React, {useContext, useState} from 'react'
//Tenemos que pasar el valor o variable que retorne createContext()
import {CategoriasContext} from '../context/CategoriaContext'
import {RecetasContext} from '../context/RecetasContext';
const Formulario = () => {

    const [busqueda, guardarBusqueda] = useState({
        nombre: '',
        categoria: ''
    }) 

    //Extraigo las categorias ingresadas en el value del CategoriasContext.Provider en CategoriasContesxt.js
    const { categorias} = useContext(CategoriasContext);
    const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);


    //funcion para leer contenidos
    const obtenerDatosReceta = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }
  
    //console.log(categorias);

    return (
       <form
        className="col-12"
        //onSubmit={buscarRecetas}
        onSubmit={e => {
            e.preventDefault();
            buscarRecetas(busqueda);
            guardarConsultar(true);
        }}
       >
           <fieldset className="text-center">
               <legend>Busca bebidas por Categorias o Ingredientes</legend>
           </fieldset>

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