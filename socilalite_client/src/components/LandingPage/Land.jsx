import React from "react";

import NavBarLanding from "../NavbarLanding";
import Description from "../Description";
import Feature from "../features";
import FeatureTitle from "../featureTitle";
import FeatureTwo from "../featuretwo";
const LandingPage = () =>{
    return(
        <div className="bg-black h-full min-h-screen6  w-full ">
            <NavBarLanding/>
            <Description/>
            <FeatureTitle/>
            <Feature/>
            <FeatureTwo/>
            
            
        </div>
        
    )
   
    

}
export default LandingPage;