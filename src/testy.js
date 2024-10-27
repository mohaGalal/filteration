import React from "react";
import Card from 'react-bootstrap/Card';
import { FaStar } from "react-icons/fa";

function Tasty () {
    return (
        <div className=" section4">
            <h1> TESTYMONIALS</h1>
            <div className="tasty container">
                <div>
                <Card style={{ width: '18rem' }}>
                 <Card.Body>
                  <Card.Title className="tasty-title">Card Title</Card.Title>     
                <Card.Text>
               Some quick example text to build on the card title and make up the
               bulk of the card's content.
               
                  </Card.Text>
                  <div className="stars">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                  </div>
                 </Card.Body>
                   </Card>
                </div>
                <div>
                <Card style={{ width: '18rem' }} >
                 <Card.Body>
                  <Card.Title className="tasty-title">Card Title</Card.Title>  
                <Card.Text>
               Some quick example text to build on the card title and make up the
               bulk of the card's content.
                  </Card.Text>
                  <div className="stars">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                  </div>
                 </Card.Body>
                   </Card>
                </div>
                <div>
                <Card style={{ width: '18rem' }}>
                 <Card.Body>
                  <Card.Title className="tasty-title">Card Title</Card.Title>
                  
                <Card.Text>
               Some quick example text to build on the card title and make up the
               bulk of the card's content.
                  </Card.Text>
                  <div className="stars">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                  </div>
                 </Card.Body>
                   </Card>
                </div>
                <div>
                <Card style={{ width: '18rem' }}>
                 <Card.Body>
                  <Card.Title className="tasty-title">Card Title</Card.Title>
                <Card.Text>
               Some quick example text to build on the card title and make up the
               bulk of the card's content.
                  </Card.Text>
                  <div className="stars">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                  </div>
                 </Card.Body>
                   </Card>
                </div>
                
            </div>
            <div className="btn"><button>CONTACT US</button></div>
        </div>
    )
}
export default Tasty 