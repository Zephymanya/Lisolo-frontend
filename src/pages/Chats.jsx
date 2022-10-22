import React from "react";
import "../Css/chat.css";
import userH from "../images/userH.jpeg";
import { BsCamera } from "react-icons/bs";
import { BsCursor } from "react-icons/bs";


export default function Chats() {
    return (
        <div
            className="shadow containtChat"
        >
            <div className="UserConnecter">
              
               <div className="image_content">
                <img src={userH} alt="" />
               </div>

               <div className="content_titre">
                 <h1 className="nom_user">Hulde </h1>
                <p>en ligne</p>
               </div>
            
            </div>

<div className="content_body">
    <div>
        <div className="messageEnvoyer">
         <p className="para_message">Bonjour yaya moral eza bien, sinon nga vraiment ezo simba</p>
        </div>
        <p className="dateInfo">date</p>
    </div>
   
    <div>
        <div className="messagerecu">
         <p className="para_message">Bonjour yaya moral eza bien, sinon nga vraiment ezo simba</p>
        </div>
        <p className="dateInfoL">date</p>
     </div>

     <div>
        <div className="messageEnvoyer">
         <p className="para_message">Bonjour yaya moral eza bien, sinon nga vraiment ezo simba</p>
        </div>
        <p className="dateInfo">date</p>
    </div>
   
    <div>
        <div className="messagerecu">
         <p className="para_message">Bonjour yaya moral eza bien, sinon nga vraiment ezo simba</p>
        </div>
        <p className="dateInfoL">date</p>
     </div>

     <div>
        <div className="messageEnvoyer">
         <p className="para_message">Bonjour yaya moral eza bien, sinon nga vraiment ezo simba</p>
        </div>
        <p className="dateInfo">date</p>
    </div>
   
    <div>
        <div className="messagerecu">
         <p className="para_message">Bonjour yaya moral eza bien, sinon nga vraiment ezo simba</p>
        </div>
        <p className="dateInfoL">date</p>
     </div>
    
</div>

<div className=" total_footer">
<div className="footerCont">
    <div className="content_footer">
<input type="text"  className="inputEcrirMessage"/>
<h1 className="uplodImage"><BsCamera/></h1>
</div>

<div className="sender">
    <h1 className="sender_image"><BsCursor/></h1>
</div>
</div>


</div>


        </div>
    );
}
