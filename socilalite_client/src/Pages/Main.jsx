import React from "react";
import MainLand from "../components/mainland";
import NavBarMain from "../components/NavbarMain";
import PostDisplay from "../components/postDisplay";

const Main = ()=>{
return(

    <div>

  <NavBarMain/>
    
    <div className="bg-blue-200 h-full min-h-screen grid grid-cols-3 gap-2 ">
       
        <div>
        <MainLand/>
        </div>
        
        <div className="items-center  col-span-2  ">
        <PostDisplay/>
        </div>
       
        

    </div>
    </div>
)
}
export default Main;