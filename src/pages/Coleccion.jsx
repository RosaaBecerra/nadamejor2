
import unicornio from '../img/unicornio.png';
import rojo from '../img/rojo.png';
import '../App.css'
import React from "react";
import Header from '../components/Header';

function Coleccion () {
    return ( 
      
        <div>
            <div className="containerHeader"></div>
        <p className="txt-coleccion"> <i className="fa-solid fa-less-than"></i> Colección <i class="fa-solid fa-cart-shopping"></i> </p>
       
       <Header/>
              

            <main>
        <div className="containerProductos"> 
     
        <div className="containerTituloProductos">
               <p className="txt-nuevacoleccion"> NUEVA COLECCIÓN </p> 
        </div>
        <div className="containerImgProductos">
             <img className="img-unicornio" src= {unicornio} alt= "banador-unicornio" /> 
              <img className="img-banadorojo" src= {rojo} alt= "banador" />
              </div>
        <div className="containerCardProducto">
            <button className='btn-mas'>+</button> 
            <h3 className="precio">10.99$</h3>
            <button className='btn-mas'>+</button> 
            <h3 className="precio">10.99$</h3>
                
                <div className="CointainerImgCardProducto">
                 
                    </div>
            </div>        
    </div>
 
    </main>
    <div className="botonfooter"> 
        <p className="buscar"> BUSCAR</p>
        
        </div>

        </div>  
     
    
        )}

export default Coleccion;