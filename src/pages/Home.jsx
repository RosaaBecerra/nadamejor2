import Botonfooter from "../components/Botonfooter";
import Header from "../components/Header";
import nadando from '../img/nadando.gif';
import '../App.css'
function Home (){

    return(
        <div className="ContainerHomeFuera">
        <div> 
            <div className="container1">
        <p className="nadamejor"> NADA MEJOR</p>  
    </div>


    
         <Header/>
         <Botonfooter/>
       
         <main>
        <div className="containerMain">
        <p className="eslogan"> NO PUEDES PONERLE LÍMITES A NADA </p> 

        <img className="nadando" src= {nadando} alt= "lilo" />
    
    </div>
    </main>

    </div>
    </div>
      
    )

}
export default Home;