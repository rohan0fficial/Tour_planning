import React  from "react";
import data from "./data";
import Tours from "./component/Tours";
import { useState } from "react";



const App = () => {

  const [ tours, setTours] = useState(data);


    function removeTour ( id ) {
    const newTours = tours.filter (tour => tour.id !== id);
      setTours(newTours);
     }

     if (tours.length === 0  ){

     return (

      <div  className="refresh"> 


      <h3> No Tours Left </h3>
       <button  className="btn-white" onClick= { () => setTours(data) }>
        Refresh
       </button>


      </div>


     ) ;
     }
  
      
  return ( 
  <div   className="App">  
   
  <Tours tours={tours}   removeTour={removeTour}  >   </Tours>
 
   
  </div>
  )
};

export default App;


