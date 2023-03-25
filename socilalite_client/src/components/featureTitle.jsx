import React from "react";
import { useNavigate } from "react-router-dom";

const FeatureTitle = () =>{
    const navigate = useNavigate();
    return(
        <div className="flex bg-black justify-center items-center  h-20 text-white   w-full">
            
        
            <div>
                <button   onClick={()=>{navigate("/main")}} className="rounded-xl  h-8 w-28  border border-sky-200  text-sm items-center">Features</button>

            </div>


        </div>
    )

}

export default FeatureTitle;