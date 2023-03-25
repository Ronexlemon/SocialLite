import React, { useState,useEffect } from "react";
import { useContext } from "react";

import {FcPositiveDynamic} from "react-icons/fc"
import { SocialAbi } from "../abi/socilaliteabi";
import { SocialLiteContractAddress } from "../contractAddress/socialContractAddress";
import { AppContext } from "../../contexts/AppContexts";

const TrendingPosts = () => {
  const [datablock,setdatablock] = useState([]);
  const {
    getProviderOrSigner,
        Contract,
} = useContext(AppContext)
const getAllTrending = async () => {
  try {
    let _data = [];
    const provider = await getProviderOrSigner();
    const contract = new Contract(SocialLiteContractAddress,SocialAbi,provider);
    const results = await contract.trendingPosts();

    results?.forEach((element) => {
      _data.push(element);
    });
    setdatablock(_data);
   
  } catch (error) {
    console.log("all info ", error);
  }
};

  
  useEffect(()=>{
    getAllTrending();
    },[]);

  return (
    <div className="content-center bg-black h-full   min-h-screen ">
      <div>
        <button></button>
      </div>
      {datablock?.map((element) => (
        <div
          key={element.id}
          className=" h-20 w-3/4  text-white border-b border-gray-100 m-4   relative"
        >
            <h3 className="font-bold text-lg"><span className="text-orange-400">##:</span> {element.information}</h3>
          
          <h3 className="font-bold flex  justify-around w-10 items-center text-lg"><FcPositiveDynamic/>  {Number(element.upVote) + Number(element.downVote) }</h3>
          
         
         
        </div>
      ))}
    </div>
  );
};

export default TrendingPosts;
