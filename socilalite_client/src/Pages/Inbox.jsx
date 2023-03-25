import React, { useState,useContext,useEffect,useRef } from "react";
import { useNavigate } from "react-router-dom";
import {FaComment} from "react-icons/fa"
import {MdSend} from "react-icons/md"
import {BiShowAlt} from "react-icons/bi"
import { SocialAbi } from "../abi/socilaliteabi";
import { AppContext } from "../../contexts/AppContexts";
import {providers,Contract} from "ethers"
import Web3Modal from "web3modal"
import { SocialLiteContractAddress } from "../contractAddress/socialContractAddress";
import NavBarDash from "../components/NavbarDashboard";

const Inbox = () => {
    const [userAccount, setUserAccount] = useState();
    const web3ModalRef = useRef();
  const getProviderOrSigner = async (needSigner = false)=>{
    try{
        const provider = await web3ModalRef.current.connect();
        const web3Provider = new providers.Web3Provider(provider);
        const {chainId}  = await web3Provider.getNetwork();
        const signer = web3Provider.getSigner();
        const accounts = await signer.getAddress();
        setUserAccount(accounts);
        console.log("the chain",chainId);
        if(chainId !=51){
            alert("please connect to The XDC Apothem Network")
        }
        
        if(needSigner){
            const signer = web3Provider.getSigner();
            return signer;
        }
        return web3Provider;

    }catch(error){
        console.log(error);
    }
}
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
    web3ModalRef.current =new Web3Modal({
        network: "xinfin",
        providerOptions:{},
        disableInjectedProvider: false,
        cacheProvider: false,
      });
    getProviderOrSigner();
    getAllMessage();
    },[])
{console.log("the typr ",datablock[0])}
  return (
    <div className="content-center  bg-black h-full min-h-screen">
      <NavBarDash/>
        
      {datablock?.map((element) => (
        userAccount == element.owner?(
<div
          key={element.messageIndex}
          className=" h-36 w-3/4 bg-black text-white  border-b border-gray-100    p-4 m-4 relative"
        >
          <h3 className="font-bold text-lg"><span className="text-orange-400">From :</span> {element.owner}</h3>
          { console.log("jntjnjt",userAccount)}
          
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
             
                </div>
              
            )}
          </div>
        </div>
        ):null
        
        
      ))}
    </div>
  );
};

export default Inbox;
