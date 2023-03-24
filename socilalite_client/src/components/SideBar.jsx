import React from "react";
import { useNavigate } from "react-router-dom";
import {MdCreate} from "react-icons/md"
import {MdOutlinePostAdd} from "react-icons/md"
import {MdDashboardCustomize} from "react-icons/md"
import {FiTrendingUp} from "react-icons/fi"
import {HiOutlineInboxIn} from "react-icons/hi"
import {TfiCommentsSmiley} from "react-icons/tfi"
import {FcSupport} from "react-icons/fc"








const SideBar =() =>{
  const navigate = useNavigate();
    return(
        
<div   className="bg-slate-200 hs-overlay  hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64  border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700">
  <div className="px-6">
    
  </div>
  <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" >
    <ul className="space-y-1.5">
      <li>
        <a className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-900 dark:text-white" href="javascript:;">
        <MdDashboardCustomize/>
         <span onClick={()=>{navigate("/main")}}>Dashboard</span> 
        </a>
      </li>

      <li className="hs-accordion" id="users-accordion">
        <a className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white" href="javascript:;">
          <MdOutlinePostAdd/>
          <span onClick={()=>{navigate("/post")}}> Post</span> 
         

         
        </a>

        
      </li>

      <li className="hs-accordion" >
        <a className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white" href="javascript:;">
        <FiTrendingUp/>
          Trend

         
        </a>

       
      </li>

      <li className="hs-accordion" id="projects-accordion">
        <a className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white" href="javascript:;">
        <HiOutlineInboxIn/>
          Inbox

          
        </a>

       
      </li>

      <li><a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300" href="javascript:;">
      <TfiCommentsSmiley/>
        Comments
      </a></li>
      <li><a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300" href="javascript:;">
      <FcSupport/>
        Setting
      </a></li>
    </ul>
  </nav>
</div>
    )
}

export default SideBar;