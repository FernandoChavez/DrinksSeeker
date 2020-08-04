import React, {useContext, useState} from 'react';
import {ModalContext} from '../context/ModalContext';

//Componente Modal del material ui
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';


//Definimos la ubicacion del modal
function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

//Le agramos estilos en apariencia y no de posicionamiento
const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

//se tiene que poner "receta" entre corchetes {} por que va a iterar en cada uno de ellos en el map
const Receta = ({receta}) => {

    //Configurcion del modal tel material-ui
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleOpen= () =>{
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    //extraer los valores del context
    const {informacion, guardarIdReceta, guardarReceta} = useContext(ModalContext);

    
    return(
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{receta.strDrink}</h2>
                <img className="card-img-top" src={receta.strDrinkThumb} alt={`Imagen de ${receta.strDrink}`}/>
                <div className="card-body">
                    <button 
                        type ="button"
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            guardarIdReceta(receta.idDrink);
                            //abrir  o cerrar modal
                            handleOpen();
                        }}
                    >
                        Ver Recetas
                    </button>
                    <Modal
                        open={open}
                        onClose={() => {
                           guardarIdReceta(null); 
                           handleClose(); 
                           //Para actualizar que aparesca la receta actual y no la anterior
                           guardarReceta({});
                        }} 
                    >
                        <div style = {modalStyle} className={classes.paper}>
                            <h2>{informacion.strDrink}</h2>
                            <h3 className="mt-4">Instrucciones</h3>
                            <p>
                                {informacion.strInstructions}
                            </p>
                            <img className="img-fluid my-4" src={informacion.strDrinkThumb}/>
                        </div>
                    </Modal>
                </div>
            </div>

        </div>
    );
}
export default Receta;