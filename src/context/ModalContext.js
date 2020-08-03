import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';

//crear el context
export const ModalContext = createContext();


const ModalProvider = (props) => {
    //state del provider
    //guardaremos el id de la receta. Sera null por que no habra ninguna receta seleccionada
    //hasta que se le haga click
    const [idrecta, guardarIdReceta] = useState(null);

    return (
        <ModalContext.Provider
            value = {{
                guardarIdReceta
            }}

        >
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;