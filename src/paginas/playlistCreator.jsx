import React from 'react';
import Header from '../components/Header/Header';
import imagenes from '../images/imagenes';
import ResultadoCanciones from '../components/cancionesParaAgregarPlaylists/tablaConcanciones';




function PlaylistCreator () {
    
   

   
    return (
<main>
    <Header titulo="Mateify"
            logoMatea={imagenes.imgLogo}
           />

<form className="login"   id="form">
        
  <input 
        className="correo "
                id="correo"
                name="correo"
                placeholder="buscar"
                 type="text"  />
</form>

<ResultadoCanciones />



             
    
</main>
       

    )    
}
export default PlaylistCreator;