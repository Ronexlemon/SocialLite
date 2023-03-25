import React from "react";
import { useNavigate } from "react-router-dom";

const NavBarDash = () =>{
    const navigate = useNavigate();
    return(
        <div className="flex bg-slate-400 justify-around items-center  h-15   w-full">
            <div>
                <button onClick={()=>{navigate("/main")}}>
                    Home
                </button>
            </div>
        
            <div>
                <button    className="rounded-xl  h-8 w-24  bg-green-700  text-white items-center">Connected</button>

            </div>


        </div>
    )

}

export default NavBarDash;