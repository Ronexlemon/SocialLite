import React from "react";
import MainLand from "../components/mainland";
import NavBarMain from "../components/NavbarMain";

const Main = ()=>{
return(

    <div>

  <NavBarMain/>
    
    <div className="bg-blue-200 h-screen grid grid-cols-2 gap-2 ">
       
        <div>
        <MainLand/>
        </div>
        
        <div>
        <h1 className="text-red-700 text-7xl">bubehwvhe</h1>
        </div>
       
        

    </div>
    </div>
)
}
export default Main;