import React from "react";
import MainLand from "../components/mainland";
import NavBarMain from "../components/NavbarMain";
import PostDisplay from "../components/postDisplay";

const Main = ()=>{
return(

    <div>

  <NavBarMain/>
    
    <div className="bg-black h-full min-h-screen grid grid-cols-3 gap-2 ">
       
        <div>
        <MainLand/>
        </div>
        
        <div className="items-start  col-span-2   ">
        <PostDisplay/>
        </div>
       
        

    </div>
    </div>
)
}
export default Main;