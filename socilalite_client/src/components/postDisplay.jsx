import React, { useState,useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {FaComment} from "react-icons/fa"
import {MdSend} from "react-icons/md"
import {BiShowAlt} from "react-icons/bi"
import { SocialAbi } from "../abi/socilaliteabi";
import { SocialLiteContractAddress } from "../contractAddress/socialContractAddress";
import { AppContext } from "../../contexts/AppContexts";

const PostDisplay = () => {
    const {
        getProviderOrSigner,
            Contract,
    } = useContext(AppContext)
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [datablock,setdatablock] = useState([]);

    //comment on a message
    const commentMessage = async(_index,_message)=>{
        try{
            const signer = await getProviderOrSigner(true);
            const contract = new Contract(SocialLiteContractAddress,SocialAbi,signer);
          const tx =  await contract.writeComment(_index,_message);
          await tx.wait();
          setMessage("");
        }catch(error){
            console.log("sende message",error);
        }
    }
    
    const getAllMessage = async () => {
        try {
          let _data = [];
          const provider = await getProviderOrSigner();
          const contract = new Contract(SocialLiteContractAddress,SocialAbi,provider);
          const results = await contract.readmessages();
    
          results?.forEach((element) => {
            _data.push(element);
          });
          setdatablock(_data);
         
        } catch (error) {
          console.log("all info ", error);
        }
      };

    

  

  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (id) => {
    if (selectedCard === id) {
      setSelectedCard(null);
    } else {
      setSelectedCard(id);
    }
  };
useEffect(()=>{
getAllMessage();
},[]);
{console.log("the typr ",typeof(datablock))}
  return (
    <div className="content-center ">
      {datablock?.map((element) => (
        <div
          key={element.messageIndex}
          className="rounded-xl h-36 w-3/4 bg-green-200 p-4 m-4 relative"
        >
          <h3 className="font-bold text-lg"><span className="text-orange-400">From :</span> {element.owner}</h3>
          
          <p>Description: {element.information}</p>
          {selectedCard === element.messageIndex && (
            <div className="absolute bottom-1 left-1/4 transform -translate-x-1/2">
               <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            
            type="text"
            placeholder="Enter comment"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
            </div>
          )}
          <div className="absolute bottom-1 right-0 m-4">
            {selectedCard === element.messageIndex ? (
               <button onClick={() => {
                handleCardClick(element.messageIndex );
                commentMessage(element.messageIndex, message);
              }}>
                <MdSend />
              </button>
              
            ) : (
                <div className="flex justify-around items-center gap-2">
<button onClick={() =>{navigate("/comment",{ state: {messageId: element.messageIndex} })} }>
<BiShowAlt/>
              </button>
              <button onClick={() => handleCardClick(element.messageIndex)}>
              <FaComment/>
              </button>
                </div>
              
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostDisplay;
