import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import img1 from '../src/images/img2.png';

function Intro() {
    return(
    <div className=" section1">
        <div className="intro"> 
            <div className="logo">PEACHY PUP<br></br> BACKERY</div>
            <div className="text">
                <h1>TASTY PASTRIES</h1>
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, beatae nihil iste voluptatibus
                 adipisci mollitia quasi hic architecto fuga assumenda corrupti 
                suscipit deserunt cum debitis tempora, nemo modi a voluptatem
                </p>
                <button>SEE MORE</button>
            </div>
            <div>
            <div className="social-icons">
                <div className="icons">
                 <ul>
                    <li><FaFacebookSquare /></li>
                    <li><FaInstagram /></li>
                    <li><FaTwitter /></li>
                 </ul>
                </div> 
                <p>Telephone: + 700 000 00 00</p>   
            </div>      
            </div>
        </div>
        <div className="image"><img src={img1} alt="" ></img></div>
    </div>
    )
}
export default Intro