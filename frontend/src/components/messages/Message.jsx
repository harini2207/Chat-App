import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";
const Message = ({message}) => {
  const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser._id;
  const formattedTime =  extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-violet-400" : "";
  return (
    <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
            <img src={profilePic} alt="" /> 
            </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}>{message.message}</div>
        <div className={`chat-footer opacity-50 text-xs text-white flex gap-1 items-center`}>{formattedTime}</div>
    </div>

  )
}

export default Message









// const Message = () => {
//     return (
//       <div className="chat chat-end">
//           <div className="chat-image avatar">
//               <div className="w-10 rounded-full">
//               <img src={"https://cdn-icons-png.flaticon.com/512/147/147144.png"} alt="" /> 
//               </div>
//           </div>
//           <div className={`chat-bubble text-white bg-blue-500`}>Hi! What's Up?</div>
//           <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center`}>12:42</div>
//       </div>
  
//     )
//   }
  
//   export default Message