import '../css/messages.css'
import MessagesContact from './MessagesContact'



const Messages = () =>{

    return(
<div className="msg-container">
    <div className="msg-left-contacts">
        <MessagesContact contactID="2" lastMsg="איזה מתכון נשמע הצגה" contactName="Nofar Levy"/>
        <MessagesContact/>
        <MessagesContact/>
        <MessagesContact/>
        <MessagesContact/>
        <MessagesContact/>
        <MessagesContact/>
        <MessagesContact/>
        <MessagesContact/>
        <MessagesContact/>
        <MessagesContact/>
        <MessagesContact/>
        <MessagesContact/>
        <MessagesContact/>
        <MessagesContact/>
    </div>
    <div className="msg-right-chat">
        chat
    </div>
</div>
    )
}

export default Messages