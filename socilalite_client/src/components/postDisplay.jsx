import React, { useState,useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {FaComment} from "react-icons/fa"
import {MdSend} from "react-icons/md"
import {BiShowAlt} from "react-icons/bi"
import { SocialAbi } from "../abi/socilaliteabi";
import {BiUpvote} from "react-icons/bi"
import {BiDownvote} from "react-icons/bi"
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
    //upvote and downvote
    const vote = async (_vote,_index)=>{
        try{
            const signer = await getProviderOrSigner(true);
            const contract = new Contract(SocialLiteContractAddress,SocialAbi,signer);
            const tx = await contract.upvoteOrdownvote(_vote,_index);
            await tx.wait();

        }catch(error){
            console.log("vote error",error);
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
          className="h-36 w-3/4 bg-black text-white p-4 border-b border-gray-100 mb-4 mt-4 relative"
        >
          <h3 className="font-bold text-lg">
            <span className="text-orange-400">From :</span> {element.owner}</h3>
          
          <p>Description: {element.information}</p>
          <div className="mt-4 grid grid-cols-4 items-center p-2 gap-4 w-3/4">
          <div className="flex items-center justify-center gap-2">
            <button onClick={() => { vote(true, element.messageIndex) }}>
              <BiUpvote />
            </button>
            <h3 className="text-green-500">{Number(element.upVote)}</h3>
            <button onClick={() => { vote(false, element.messageIndex) }}>
              <BiDownvote />
            </button>
            <h3 className="text-red-500">{Number(element.downVote)}</h3>
          </div>


          </div>
          {selectedCard === element.messageIndex && (
            <div  className="relative items-center shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text">
              
               <input
            className=" relative items-center  shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            
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
                <div className="flex justify-around items-center gap-8">
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
