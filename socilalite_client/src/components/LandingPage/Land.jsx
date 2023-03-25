import React from "react";

import NavBarLanding from "../NavbarLanding";
import Description from "../Description";
import Feature from "../features";
import FeatureTitle from "../featureTitle";
const LandingPage = () =>{
    return(
        <div className="bg-black h-full min-h-screen6  w-full ">
            <NavBarLanding/>
            <Description/>
            <FeatureTitle/>
            <Feature/>
            
            
        </div>
        
    )
   
    

}
export default LandingPage;