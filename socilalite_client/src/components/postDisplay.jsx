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
    const [datablock,setdatablock] = useState([]);
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

    

  const data = [
    { name: "ronex", salary: 200, description: "yollow", id: 0 },
    { name: "ronex", salary: 200, description: "yollow", id: 1 },
    { name: "ronex", salary: 200, description: "yollow", id: 2 },
    { name: "ronex", salary: 200, description: "yollow", id: 3 },
  ];

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
          key={element.id}
          className="rounded-xl h-36 w-3/4 bg-green-200 p-4 m-4 relative"
        >
          <h3 className="font-bold text-lg"><span className="text-orange-400">From :</span> {element.owner}</h3>
          
          <p>Description: {element.information}</p>
          {selectedCard === element.id && (
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
              <input type="textArea" placeholder="Enter your comment" />
            </div>
          )}
          <div className="absolute bottom-1 right-0 m-4">
            {selectedCard === element.id ? (
                <button onClick={() => handleCardClick(element.id)}>
                <MdSend/>
              </button>
                
              
            ) : (
                <div className="flex justify-around items-center gap-2">
<button onClick={() =>{navigate("/comment")} }>
<BiShowAlt/>
              </button>
              <button onClick={() => handleCardClick(element.id)}>
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
