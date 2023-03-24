import { useState,useRef,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandPage from './Pages/LandingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Web3Modal from "web3modal"
import {providers,Contract} from "ethers"
import Main from './Pages/Main'
import SinglePostComment from './Pages/SinglePostComment'
import Post from './Pages/Post'
import TrendingPosts from './Pages/Trending'
import { AppContext } from '../contexts/AppContexts';
import Inbox from './Pages/Inbox'
//import { providerOptions } from "xdcpay-connect";

function App() {
  
  const web3ModalRef = useRef();
  const getProviderOrSigner = async (needSigner = false)=>{
    try{
        const provider = await web3ModalRef.current.connect();
        const web3Provider = new providers.Web3Provider(provider);
        const {chainId}  = await web3Provider.getNetwork();
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
useEffect(()=>{
web3ModalRef.current =new Web3Modal({
    network: "xinfin",
    providerOptions:{},
    disableInjectedProvider: false,
    cacheProvider: false,
  });
getProviderOrSigner();
},[])

  return (
    <AppContext.Provider value={{
      getProviderOrSigner,
      
      Contract,
      
    }}>
    <Router>
      <Routes>
        <Route path="/" element={<LandPage/>} />
        <Route path="/home" element={<LandPage/>} />
        <Route path="/main" element={<Main/>} />
        <Route path="/comment" element={<SinglePostComment/>} />
        <Route path="/post" element={<Post/>} />
        <Route path="/trending" element={<TrendingPosts/>} />
        <Route path="/inbox" element={<Inbox/>} />
        
      </Routes>
    </Router>
    </AppContext.Provider>
  )
}

export default App
