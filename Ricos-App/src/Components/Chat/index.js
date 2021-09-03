import "../../css/chat.css";
import ChatContact from "./ChatContact";
import ChatRoom from "./ChatRoom";

const Chat = () => {
  return (
    <div className="msg-container">
      <div className="msg-left-contacts">
        <ChatContact
          contactID="2"
          lastMsg="איזה מתכון נשמע הצגה"
          contactName="Nofar Levy"
        />
        <ChatContact />
        <ChatContact />
        <ChatContact />
        <ChatContact />
        <ChatContact />
        <ChatContact />
        <ChatContact />
        <ChatContact />
        <ChatContact />
        <ChatContact />
        <ChatContact />
        <ChatContact />
        <ChatContact />
        <ChatContact />
      </div>
      <div className="msg-right-chat">
        <ChatRoom />
      </div>
    </div>
  );
};

export default Chat;
