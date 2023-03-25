import React from "react";
import  world from "../assets/world.png"
import privacy from "../assets/lockit.png"

const Feature = () =>{
    return(
        <div className=" grid grid-cols-2 gap-2 bg-black items-center  diplay:block text-white ">
             <div className="flex justify-center items-center ">
            <img src={privacy} alt="Word Image"/>

        </div>
        <div className="flex flex-col  justify-center items-center ">
            <div className="text-6xl font-sans font-extrabold ">
            <p className="mb-4">Privacy & User Control</p>

            </div>
            <div className="flex flex-col text-2xl justify-center items-center">
            We use encryption and other privacy-enhancing technologies that keep your data safe.
You have more control over your data. You can choose what data to share and with whom, and you can revoke access at any time.
            </div>
           
       
            

        </div>
       
        
    </div>
    )

}

export default Feature;