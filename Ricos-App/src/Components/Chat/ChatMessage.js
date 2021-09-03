import "../../css/chatroom.css";

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  //need to change uid according to the user online
  const messageClass = uid === 1 ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        {/* <ProfilePicture/> */}
        <img
          className="avatar"
          src={
            photoURL ||
            "https://www.seekpng.com/png/full/114-1149972_avatar-free-png-image-avatar-png.png"
          }
        />
        <p className="chat-txt">{text}</p>
      </div>
    </>
  );
}

export default ChatMessage;
