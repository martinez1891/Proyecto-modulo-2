import React from 'react';

import Resultado from '../components/resultados/resultados';
import Header from '../components/Header/Header';
import imagenes from '../images/imagenes';
import auth from '../components/protect/auth';
import { useHistory } from 'react-router-dom';



function enviarDatos (e, history) {
    if (document.getElementById('correo').value.length > 0 ) {
        auth.login(()=>{
            history.push("/playlistcreator")
        })
        
    }
    else {
        e.preventDefault()
        alert ("rellenar datos para ingresar")

    }
}

function PlaylistBlank () {
    const history = useHistory();
   
    return (
<main>
    <Header titulo="Mateify"
            logoMatea={imagenes.imgLogo} 
           />

<form className="login" onSubmit={(e)=> enviarDatos(e, history)}  id="form">
        
  <input 
        className="correo "
                id="correo"
                name="correo"
                placeholder="buscar"
                 type="text"  />
</form>
<Resultado titulo="resultados"
            tercerLugar="Album"
            cuartoLugar="Duración"
            quintoLugar="Agregar"
            playlistVacia="No hay resultados: utiliza la barra de búsqueda para encontrar canciones"/>

<Resultado titulo="Tu playlist"
            tercerLugar="Duración"
            cuartoLugar="Cant.votos"
            quintoLugar="Votar"
            playlistVacia=" UPS,TU PLAYLIST AUN ESTA VACIA"/>
             
    
</main>
       

    )    
}
export default PlaylistBlank;