import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from '../pages/Home';
import Coleccion from '../pages/Coleccion';
import Productos from '../pages/Productos';
import Comprar from '../pages/Comprar';
import App from '../App';


export default function Router(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element ={<App/>}/>
           
            <Route path='/home' element={<Home/>}/>
            <Route path='/coleccion' element={<Coleccion/>}/>
            <Route path='/productos' element={<Productos/>}/>
            <Route path='/comprar' element={<Comprar/>}/>
            
           
         
        </Routes>
    </BrowserRouter>
)
}
