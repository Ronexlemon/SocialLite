import React, { useState } from "react";
import {FaComment} from "react-icons/fa"
import {MdSend} from "react-icons/md"
import {BiShowAlt} from "react-icons/bi"

const SinglePostComment = () => {
  const data = [
    { comments: "ronex the graate person ever", owner: "0x546475673842782462t6174614",id: 0 },
    { comments: "The economic recession",owner: "0x546475673842782462t6174614",id: 1 },
    { comments: "one of the best comment keep it up",owner: "0x546475673842782462t6174614",id: 2 },
    { comments: "all is bad i don't know whats keep happenning but its bad",owner: "0x546475673842782462t6174614",id: 3 },
  ];

  

  return (
    <div className="content-center ">
      {data?.map((element) => (
        <div
          key={element.id}
          className="rounded-xl h-20 w-3/4 bg-green-200 p-4 m-4 relative"
        >
            <h3 className="font-bold text-lg">From: {element.owner}</h3>
          
          <h3 className="font-bold text-lg">{element.comments}</h3>
          
         
         
        </div>
      ))}
    </div>
  );
};

export default SinglePostComment;
