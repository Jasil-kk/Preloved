import React, { useState } from "react";
import ScrollableFeed from "react-scrollable-feed";
import Avatar from "@mui/material/Avatar";
import InputEmoji from "react-input-emoji";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import { useParams } from "react-router-dom";

const ChatPage = () => {
  const [text, setText] = useState("");
 

  function handleOnEnter(text) {
    console.log("enter", text);
  }
  function handleSendMessage() {
    console.log("Send message:", text);
    setText("");
  }
  return (
    <div className="w-full min-h-screen grid place-items-center bg-slate-100 font-outfit">
        {/* {productData.map((seller,index)=>{ */}
      <div className="w-full h-screen sm:w-[700px] sm:h-[750px]  flex flex-col bg-slate-50 border sm:border-[#3131FF] sm:rounded overflow-hidden">
        <div className="w-full h-14 px-2 sm:h-16 sm:px-5 bg-blue-600 flex items-center">
          <Avatar alt="Remy Sharp" src="" />
          <h2 className="text-xl sm:text-2xl text-slate-50 ml-3 sm:ml-5 capitalize">
            jasil
          </h2>
        </div>
        <ScrollableFeed className="w-full h-full flex flex-col p-2 sm:pt-4">
          <div className="mr-auto w-auto h-auto rounded-xl rounded-tl-none py-1 px-2 text-base text-slate-900 bg-blue-200">
            hello
          </div>
          <div className="ml-auto w-auto h-auto rounded-xl rounded-tr-none py-1 px-2 text-base text-slate-900 bg-green-200">
            hello
          </div>
        </ScrollableFeed>
        <div className="mt-auto w-full flex pr-1 bg-blue-200">
          <InputEmoji
            value={text}
            onChange={setText}
            cleanOnEnter
            onEnter={handleOnEnter}
            placeholder="Type a message"
          />
          <IconButton onClick={handleSendMessage} color="primary">
            <SendIcon />
          </IconButton>
        </div>
      </div>
      {/* })} */}
    </div>
  );
};

export default ChatPage;
