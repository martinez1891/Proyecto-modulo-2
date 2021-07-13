import React from 'react';
import './Card.css';
import Header from '../Header/Header';
import imagenes from '../../images/imagenes';

function Card() {
    return (
        <>
        <Header titulo="Mateify"
            logoMatea={imagenes.imgLogo} />

        <div className="card_container">
            <div className="card-content">
                <div className="image-container">
                    <img className="matea-img" src={imagenes.imgCandado} alt='' />
                </div>
                <div className="card-login">
                    <h3 className="title">Mmm... algo no salió bien</h3>
                    <h3 className="title_3">Algo no salio bien</h3>
                    <h3 className="title_2">Debes estar autenticado para acceder a esta página</h3>
                </div>
            </div>
        </div>
        </>
    )
}

export default Card;