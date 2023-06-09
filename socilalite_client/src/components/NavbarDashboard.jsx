import React from "react";
import { useNavigate } from "react-router-dom";

const NavBarDash = () =>{
    const navigate = useNavigate();
    return(
        <div className="flex bg-black justify-around items-center text-white h-15  border-b border-gray-100  w-full">
            <div>
                <button onClick={()=>{navigate("/main")}}>
                    Home
                </button>
            </div>
        
            <div>
                <button    className="rounded-xl  h-8 w-24  bg-blue-400  text-white items-center">Connected</button>

            </div>


        </div>
    )

}

export default NavBarDash;