import React, { useState } from "react";
import Chatbot from "./Chatbot.jsx";
import { SiChatbot } from "react-icons/si";
import { TbLayoutBottombarCollapseFilled } from "react-icons/tb";

const Chatbg = () => {
  const [visible, setVisible] = useState(true);
  return (
    // <div className=''>
    //     <div className=''>
    //     <Chatbot/>
    //     </div>
    // </div>
    <div className="fixed bottom-4 right-20  shadow-lg rounded-lg">
      {visible ? (
        <div>
          <button
            className="iconeOpen fixed bottom-4 text-3xl right-20  bg-transparent shadow-lg rounded-lg"
            onClick={() => setVisible(!visible)}
          >
            <SiChatbot />
          </button>
        </div>
      ) : (
        <div className="flex p-4 m-2 text-3xl shadow-lg rounded-lg">
          <button
            className="iconeClose headerbot text-white p-5 cursor-pointer  bg-transparent  flex justify-center gap-4 "
            onClick={() => setVisible(!visible)}
          >
            <TbLayoutBottombarCollapseFilled />
          </button>

          <Chatbot />
        </div>
      )}
    </div>
  );
};

export default Chatbg;
