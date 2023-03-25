import React, { useState,useContext,useEffect } from "react";
import {FaComment} from "react-icons/fa"
import {MdSend} from "react-icons/md"
import {BiShowAlt} from "react-icons/bi"
import { SocialAbi } from "../abi/socilaliteabi";
import { SocialLiteContractAddress } from "../contractAddress/socialContractAddress";
import { AppContext } from "../../contexts/AppContexts";
import { useLocation } from "react-router-dom";
import NavBarDash from "../components/NavbarDashboard";

const SinglePostComment = ({ route }) => {
     
    const { state } = useLocation();
    const messageId = state?.messageId;
    
    const {
        getProviderOrSigner,
            Contract,
    } = useContext(AppContext)
    const [datablock,setdatablock] = useState([]);


    const getAllCommentsForApost = async () => {
        try {
            // console.log("the index is", _index);
          let _data = [];
          const provider = await getProviderOrSigner();
          const contract = new Contract(SocialLiteContractAddress,SocialAbi,provider);
          const results = await contract.readComments(messageId);
    
          results?.forEach((element) => {
            _data.push(element);
          });
          setdatablock(_data);
         
        } catch (error) {
          console.log("all info ", error);
        }
      };

  useEffect(()=>{
getAllCommentsForApost();
  },[])

  

  return (
    <div className="content-center bg-black h-full  min-h-screen ">
      <NavBarDash/>

      {datablock?.map((element,index) => (
        <div
          key={index}
          className=" h-20 w-3/4  text-gray-400 border-b border-gray-100 m-4  relative"
        >
            <h3 className="font-bold  text-lg"><span className="text-orange-200">From:</span> {element.commentor}</h3>
          
          <h3 className="font-bold text-sm">{element._comment}</h3>
          
         
         
        </div>
      ))}
    </div>
  );
};

export default SinglePostComment;
