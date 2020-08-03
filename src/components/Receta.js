import React, {useContext} from 'react'
import {ModalContext} from '../context/ModalContext';

//se tiene que poner "receta" entre corchetes {} por que va a iterar en cada uno de ellos en el map
const Receta = ({receta}) => {


    //extraer los valores del context
    const {guardarIdReceta} = useContext(ModalContext);

    return(
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{receta.strDrink}</h2>
                <img className="card-img-top" src={receta.strDrinkThumb} alt={`Imagen de ${receta.strDrink}`}/>
                <div className="card-body">
                    <button 
                        type ="button"
                        className="btn btn-block btn-primary"
                        oncClick={() => {
                            guardarIdReceta(receta.idDrink)
                        }}
                    >
                        Ver Recetas
                    </button>
                </div>
            </div>

        </div>
    );
}
export default Receta;