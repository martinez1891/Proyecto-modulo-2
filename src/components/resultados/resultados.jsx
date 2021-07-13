import React, {Fragment} from 'react';
import './resultados.css';



const Resultado = (props) => {
    return (
      <Fragment>
        <div className="bodyTable">
    <table class="table card resultados">
  <thead>
      <h2 className="tituloPlaylist">{props.titulo}</h2>
    <tr className="tituloTabla">
      <th scope="col">Nombre</th>
      <th scope="col">Artista</th>
      <th scope="col">{props.tercerLugar}</th>
      <th scope="col">{props.cuartoLugar}</th>
      <th scope="col">{props.quintoLugar}</th>
    </tr>
  </thead>
        <tbody>
            <tr>
              
      
            </tr>
            <tr>
      
      
            </tr>
            <tr>
      
      
             </tr>
        </tbody>
        <p className="sinResultado">{props.playlistVacia}</p>
        
    </table>
</div>
      </Fragment>
    )  
  
}
export default Resultado;
