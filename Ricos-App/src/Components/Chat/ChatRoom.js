import React, { useRef, useState } from "react";
import ChatMessage from "./ChatMessage";
import "../../css/chatroom.css";
import { firestore, auth } from "../../firebase";
import firebase from "firebase/compat/app";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt"); //.limit(X);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    //need to add a GET request from the server
    const uid = 1;
    const photoURL = "";

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main className="mainchat">
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <form className="chat-txtbox" onSubmit={sendMessage}>
        <input
          className="txtbox"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />

        <button type="submit" className="sendbtn" disabled={!formValue}>
          Send
        </button>
      </form>
    </>
  );
}

export default ChatRoom;
