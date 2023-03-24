
import React,{useState} from "react";
import LandingPage from "../components/LandingPage/Land";

function LandPage() {
    const [count, setCount] = useState(0)
  
    return (
      <div className=" h-screen w-full">
        <LandingPage/>
       </div>
    )
  }
  
  export default LandPage;