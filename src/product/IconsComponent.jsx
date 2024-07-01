import React from 'react';
import { FaPhone, FaFacebookMessenger, FaEnvelope, FaComments} from 'react-icons/fa';
import { IoMdChatboxes } from "react-icons/io";


const IconsComponent = () => {
  return (
    <div className="fixed right-4 top-1/3 flex flex-col items-center space-y-4 p-2 bg-gray-200 rounded-full">
      <FaPhone className="text-black" size={24} />
      <FaFacebookMessenger className="text-black" size={24} />
      <FaEnvelope className="text-black" size={24} />
      <FaFacebookMessenger className="text-black" size={24} />
    </div>
  );
}  

const ChatIcon = () => {
  return (
    <div className="fixed right-4 bottom-10 p-2 text-white rounded-full" style={{backgroundColor:'#483D73'}}>
      <IoMdChatboxes size={30} style={{backgroundColor:'#483D73'}}/>
    </div>
  );
}

export { IconsComponent, ChatIcon };
