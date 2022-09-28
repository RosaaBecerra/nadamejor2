import React from "react";
import '../App.css'
import conjunto from '../img/conjunto.png';
function Compra () {
    return ( 
        <div className="containerHeader"> 
        <h1 className="txt-bolsa"> Bolsa</h1>
       
        <div className="containerPagar">
        
    <div className="containerInfoProduct">
         <div className="containerImgCompra">
         <img className="img-pagar-banador" src= {conjunto} alt= "conjuntobebe"/> 
         </div>

              <div className="container-txt">
                <h1 className="txt-conjunto">conjunto bebé</h1>
              </div>
                     <div className="containerPrecioProducto">
                         <h2 className="txt-precio">10.99$</h2>
                     </div>
   </div>
        </div>


 <div className="containerTotal">
 <h3> Total 29.99</h3>
 </div>

 <div className="botonfooter"> 
        <p className="bnt-pagar"> Pagar</p>
        
        </div>

        </div>
        
    )
}

export default Compra;