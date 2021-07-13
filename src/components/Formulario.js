
import { useHistory } from 'react-router-dom';
import imagenes from '../images/imagenes';
import '../paginas/Login/Login.css';
import auth from './protect/auth';




function enviarDatos (e, history) {
    if (document.getElementById('correo').value.length > 0 && document.getElementById('password').value.length > 0) {
        auth.login(()=>{
            history.push("/playlists")
        })
        
    }
    else {
        e.preventDefault()
        alert ("rellenar datos para ingresar")

    }
}

function Formulario () {
    const history = useHistory()
return (
    <>
        <div className="card-container">
        <img className="candado1" src={imagenes.imgCandado}/>
        
        <h3 className="titleCard">Ingresar</h3>
        
    
    <div>
    <form className="login" onSubmit={(e)=> enviarDatos(e, history)}  id="form">
        
  <input 
        className="correo "
                id="correo"
                name="correo"
                placeholder="Correo electronico"
                 type="email"  />
                 
  
  
    <br />

        <input
         className="contraseña" 
         id="password"
        name="password"
         type="password"
         placeholder="contraseña"  /> 
         
        
        
        <br />

        <button className="btn enviar"
                 id="submit"
                 type="submit" 

            >Comienza a crear playlists
          
        </button>
            <a className="olvideContraseña" href="">¿Has olvidado la contraseña?</a>
            <div className="div-form"></div>
        <br />
                 <p className="sinCuenta">¿No tienes cuenta?</p>
        <br />
       
    </form>
   
    
    
    <button className="btn-btn registrarse">Registrate</button>

</div>
</div>
</>

)}
export default Formulario;                            
