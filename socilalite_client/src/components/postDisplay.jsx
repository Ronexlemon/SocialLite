import React, { useState } from "react";
import {FaComment} from "react-icons/fa"
import {MdSend} from "react-icons/md"

const PostDisplay = () => {
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

  return (
    <div className="content-center ">
      {data?.map((element) => (
        <div
          key={element.id}
          className="rounded-xl h-36 w-3/4 bg-green-200 p-4 m-4 relative"
        >
          <h3 className="font-bold text-lg">{element.name}</h3>
          <p>Salary: {element.salary}</p>
          <p>Description: {element.description}</p>
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
              <button onClick={() => handleCardClick(element.id)}>
                <FaComment/>
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostDisplay;
