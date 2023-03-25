import React from "react";
import { useNavigate } from "react-router-dom";

const NavBarMain = () =>{
    const navigate = useNavigate();
    return(
        <div className="flex bg-black border-b border-gray-100 justify-around items-center  h-15   w-full">
            <div>
                <button onClick={()=>{navigate("/home")}}>
                    Home
                </button>
            </div>
        
            <div>
                <button    className="rounded-xl  h-8 w-24  bg-blue-400  text-white items-center">Connected</button>

            </div>


        </div>
    )

}

export default NavBarMain;