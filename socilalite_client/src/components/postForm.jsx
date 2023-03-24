import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContexts";
import { SocialAbi } from "../abi/socilaliteabi";
import { SocialLiteContractAddress } from "../contractAddress/socialContractAddress";

const PostForm = () => {
  const [message, setMessage] = useState("");
  const {
    getProviderOrSigner,
        Contract,
} = useContext(AppContext)
//post message
const postMessage = async(_message)=>{
    try{
        const signer = await getProviderOrSigner(true);
        const contract = new Contract(SocialLiteContractAddress,SocialAbi,signer);
      const tx =  await contract.getMessage(_message);
      await tx.wait();

    }catch(error){
        console.log("sende message",error);
    }
}

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(message); // or save the message to your database or do something else with it
    postMessage(message);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
            Message
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            type="text"
            placeholder="Enter your message here"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
