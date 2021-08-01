import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../img/Logo.png';
import { far } from '@fortawesome/free-regular-svg-icons'



const Post = () =>{
    return(
        <div class="post-container">
            <div class="post-name">
             <h1>Name</h1>
            </div>
            <div class="post-location">
             <h1>Location</h1>
            </div>
            <div>
             <img class="post-img" src={logo}/>
            </div>
            <div class="post-socials">
                
            </div>
        </div>
    )
}

export default Post;