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

  const data = [
    { comments: "ronex the graate person ever", owner: "0x546475673842782462t6174614",id: 0 },
    { comments: "The economic recession",owner: "0x546475673842782462t6174614",id: 1 },
    { comments: "one of the best comment keep it up",owner: "0x546475673842782462t6174614",id: 2 },
    { comments: "all is bad i don't know whats keep happenning but its bad",owner: "0x546475673842782462t6174614",id: 3 },
  ];

  useEffect(()=>{
    getAllTrending();
    },[]);

  return (
    <div className="content-center ">
      {datablock?.map((element) => (
        <div
          key={element.id}
          className="rounded-xl h-20 w-3/4 bg-green-200 p-4 m-4 relative"
        >
            <h3 className="font-bold text-lg">##: {element.information}</h3>
          
          <h3 className="font-bold flex  justify-around w-10 items-center text-lg"><FcPositiveDynamic/>  {Number(element.upVote) + Number(element.downVote) }</h3>
          
         
         
        </div>
      ))}
    </div>
  );
};

export default TrendingPosts;
