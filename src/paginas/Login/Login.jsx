
import imagenes from '../../images/imagenes';
import Header from '../../components/Header/Header';
import '../../fonts/fonts.css';
import Formulario from '../../components/Formulario';





                           
function Login () {

   


return (
    <div className="container-fluid">
    <Header titulo="Mateify"
            logoMatea={imagenes.imgLogo} />


    <div>
        <Formulario />
    </div>
                               

</div>
)
}
export default Login;


