import React from "react";
import  world from "../assets/world.png"

const Feature = () =>{
    return(
        <div className=" grid grid-cols-2 gap-2 bg-black items-center  diplay:block text-white ">
        <div className="flex flex-col  justify-center items-center ">
            <div className="text-6xl font-sans font-extrabold ">
            <p className="mb-4">Now</p>
<p className="mb-4"><span className=" text-blue-400">Everyone</span> Can</p>
<p>Participate</p>
            </div>
            <div className="flex flex-col text-2xl justify-center items-center">
            Join the movement towards a decentralized <br/> social media experience on the web3 version <br/> of our platform and enjoy social media <br/> in a new and exciting way!

            </div>
            <button className="rounded mt-2 bg-blue-400   h-8 w- w-56">Get Started</button>
       
            

        </div>
        <div className="flex justify-center items-center ">
            <img src={world} alt="Word Image"/>

        </div>
        
    </div>
    )

}

export default Feature;