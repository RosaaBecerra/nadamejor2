import React from "react"
import '../App.css'
import rojo from '../img/rojo.png';
import conjunto from '../img/conjunto.png';
import unicornio from '../img/unicornio.png';
import banadoramarillo from '../img/banadoramarillo.png'; 


function Productos() {
    return (
<div className="containerHeader"> 
        <h1> Productos</h1>
    <div className="containerTituloHeader">
        <h2> Bañadores</h2>
    </div>

          <div className="containerImgBanadores">
            <div className="containerProducto">
              <img className="img-banador" src= {rojo} alt= "banadorrojo"/> 
                
                <div className="containerCajaPrecio">
                 <button className='btn-emoji'>♥</button> 
                    <h3 className="precio">10.99$</h3>
                </div>
              </div>

              <div className="containerProducto">
              <img className="img-banador" src= {conjunto} alt= "conjuntobebe"/> 
                
                <div className="containerCajaPrecio">
                 <button className='btn-emoji'>♥</button> 
                    <h3 className="precio">10.99$</h3>
                </div>
              </div>

              <div className="containerProducto">
              <img className="img-banador" src= {unicornio} alt= "banadorunicornio"/> 
                
                <div className="containerCajaPrecio">
                 <button className='btn-emoji'>♥</button> 
                    <h3 className="precio">10.99$</h3>
                </div>
              </div>

              <div className="containerProducto">
              <img className="img-banador" src= {banadoramarillo} alt= "banadoramarillo"/> 
                
                <div className="containerCajaPrecio">
                 <button className='btn-emoji'>♥</button> 
                    <h3 className="precio">10.99$</h3>
                </div>
              </div>
               
          </div>


</div>












    )




}

export default Productos;