import React from "react";
import { useNavigate } from "react-router-dom";

const FeatureTitle = () =>{
    const navigate = useNavigate();
    return(
        <div className="flex bg-black justify-center items-center  h-20 text-white   w-full">
            
        
            <div>
                <span   className=" text-5xl w-52  h-20     font-sans items-center">Features</span>

            </div>


        </div>
    )

}

export default FeatureTitle;