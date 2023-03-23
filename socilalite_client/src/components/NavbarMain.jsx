import React from "react";
import { useNavigate } from "react-router-dom";

const NavBarMain = () =>{
    const navigate = useNavigate();
    return(
        <div className="flex bg-red-400 justify-around items-center  h-15   w-full">
            <div></div>
        
            <div>
                <button   onClick={()=>{navigate("/main")}} className="rounded-xl  h-8 w-20  bg-orange-400  text-white items-center">Start</button>

            </div>


        </div>
    )

}

export default NavBarMain;