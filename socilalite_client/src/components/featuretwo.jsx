import React from "react";
import  world from "../assets/world.png"
import decent2 from "../assets/decent2.png"

const FeatureTwo = () =>{
    return(
        <div className=" grid grid-cols-2 gap-2 bg-black items-center  diplay:block text-white ">
          
        <div className="flex flex-col  justify-center items-center ml-8">
            <div className="text-6xl font-sans font-extrabold ">
            <p className="mb-4">Decentralization</p>

            </div>
            <div className="flex flex-col text-2xl justify-center items-center">
            We  don't rely on a central authority or server to store data. Everything is owned and governed by you the users, giving you a greater sense of ownership and control over the platform
            </div>
           
           
       
            

        </div>
        <div className="flex justify-center items-center ">
            <img src={decent2} alt="Word Image"/>

        </div>
       
        
    </div>
    )

}

export default FeatureTwo;