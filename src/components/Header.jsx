import niñosplaya from '../img/niñosplaya.webp';
import bebes from '../img/bebes.jpg';
import accesorios from '../img/accesorios.webp'
import '../App.css'
import { Link } from "react-router-dom";

function Header (){
return ( 
<div>


    
<div className="containerMenu">
        <div className="ninos">
            <h1 className="txtniños">Niños</h1>
            <Link to= "/Coleccion">
            <img className="imgmenu" src={niñosplaya} alt="icono"/>
           </Link>
        </div>

        <div className="bebes">
            <h1 className="txtbebes">Bebes</h1>
            <img className="imgmenu" src={bebes} alt="icono" />
   
        </div>

        <div className="accesorios">
            <h1 className="txtaccesorios">Accesorios</h1>
            <img className="imgmenu" src={accesorios} alt="icono" />
    
        </div>

    </div>

</div>

)}
export default Header;