import React from "react";
import { useNavigate } from "react-router-dom";

const NavBarLanding = () =>{
    const navigate = useNavigate();
    return(
        <div className="flex bg-black justify-evenly items-center  h-20 text-white   w-full">
            <div className="text-2xl font-bold">
                <h1>SOCIALLITE</h1>
            </div>
        
            <div>
                <button   onClick={()=>{navigate("/main")}} className="rounded-xl  h-8 w-28  border border-sky-200  text-sm items-center">Get Started</button>

            </div>


        </div>
    )

}

export default NavBarLanding;