import React from "react";
import img3 from '../src/images/img3.jfif';
import img4 from '../src/images/img4.jfif';
import img5 from '../src/images/img5.jfif';
import img6 from '../src/images/img6.jfif';
function Ourwork () {
    return(
        <div className="section2">
          <div className="text">
            <div className="par">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, beatae nihil iste voluptatibus
                 adipisci mollitia quasi hic architecto fuga assumenda corrupti 
                suscipit deserunt cum debitis tempora, nemo modi a voluptatem
                </p>
                
            </div>
            <div className="adr">
                <h1>HOW WE<br></br> WORK</h1>
                <button>CONTACT US</button>
            </div>
            <div className="images">
              <div><img src={img3} alt=""></img></div>
              <div><img src={img4} alt=""></img></div>
              <div><img src={img5} alt=""></img></div>
              <div><img src={img6} alt=""></img></div>  
            </div> 
          </div>
          
        </div>
    )
}
export default Ourwork