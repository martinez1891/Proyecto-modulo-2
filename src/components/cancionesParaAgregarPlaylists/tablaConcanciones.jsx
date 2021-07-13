import React, {Fragment} from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './tablaConCanciones.css';






const ResultadoCanciones = () => {
  const history= useHistory();

  const [list, setList] = useState([
   {
     id: 1,
     name:'A las nueve',
     artista: 'NTVG',
     duracion: '3:24',
     votos: 4,
   },
   {
     id: 2,
     name:'Maldicion',
     artista: 'Once tiros',
     duracion: '3:04',
     votos: 3,
   },
   {
     id: 3,
     name: 'Cancion para uno',
     artista: 'La Vela Puerca',
     duracion: '2:53',
     votos: 2,
   },
   {
     id: 4,
     name: 'Mi Revolucion',
     artista: 'Cuatro Pesos de Propina',
     duracion: '3:24',
     votos: 1,
   },
   {
     id: 5,
     name: 'Lo mas simple de las cosas',
     artista: 'Hereford',
     duracion: '3:17',
     votos: 0,
   }
   
 ]);



 const updateVote = (editVote) => {
   const changeVote = list.map(listas => (
     listas.id === editVote.id 
     ? editVote 
     : listas
   ))
   setList(changeVote)
   
 }
 const ordenList = [...list].sort((a, b) => (a.votos < b.votos ? 1 : a.votos > b.votos ? -1 : 0))

    return (
      <Fragment>
      <div >
        <table className="table-two">
          <p className="text-table">Resultados</p>
          <tr>
            <th>Nombre</th>
            <th>Artista</th>
            <th >Álbum</th>
            <th >Duración</th>
            <th>Agregar</th>
          </tr>
          <tr>
            <td>A las nueve</td>
            <td>NTVG</td>
            <td >El calor del pleno invierno</td>
            <td >3:24</td>
            <button className="boton-add">  </button>
          </tr>
        </table>
       
      </div>
      

      <div className="table-list-two">
        <table className="table-two">
          <p className="text-table">Tu Playlist</p>
          <tr>
            <th>Nombre</th>
            <th>Artista</th>
            <th >Duración</th>
            <th >Cant.Votos</th>
            <th>Votar</th>
          </tr>
          
          {ordenList.map(listas => (
              <tr>
                <td>{listas.name}</td>
                <td>{listas.artista}</td>
                <td >{listas.duracion}</td>
                <td  >{listas.votos}</td>
                <button className="like"   
                onClick={() => updateVote ({id: listas.id, name: listas.name,
               artista: listas.artista,duracion: listas.duracion, votos: listas.votos +1  })}>  </button> 
                <button className="dislike eliminar-mob"               
                onClick={() => updateVote ({id: listas.id, name: listas.name,
               artista: listas.artista, duracion: listas.duracion, votos: listas.votos -1  })}></button>
              </tr> 
          ))
          } 
        </table>
    
</div>
      </Fragment>
    )  
  
}
export default ResultadoCanciones;