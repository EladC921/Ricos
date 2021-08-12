import '../css/messagesContact.css'
import ProfilePicture from "./ProfilePicture"

const MessagesContact = (props) =>{

    //need to be change
    const contactName = props.contactName;
    const lastMsg = props.lastMsg;
    const contactID= props.contactID;

    return(
<div className="msg-contact">
                <div className="contact-left">
                    <div className="contact-profile-picture">
                        <ProfilePicture  size="sm" isLink={false} />
                    </div>
                </div>

                <div className="contact-right">
                    <div className="contact-name">
                        {contactName}
                    </div>
                    <div className="contact-last-msg">
                            {lastMsg}
                    </div>
                </div>
</div>


    )
}

export default MessagesContact