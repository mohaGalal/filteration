import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { IoMailSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import axios from "axios";



function Contact () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    

    async function handleSubmit(e) {
        let flag = true;
        e.preventDefault();
        if(name === ""&& phone==="" && email === "") {
            flag = false;
        } else {flag = true}
        try {
        if(flag) {
            let res = await axios.post("http://upskilling-egypt.com:3001/contact", {
                email: email,
                phone : phone,
                name : name,
                headers: {
                    
                    'Content-Type': 'application/json',
                    "authorization": "Bearer ",
                  }
                
            }).then((res) => console.log(res))
        };
    } catch(err) {
        console.log(err)
    }
    }


    
    return (
        <div className="section5">
            <h1> CONTACT US</h1>
            <div className="contact container">
                <div>
                <Form  method="post" >
                   <Form.Group className="mb-3" controlId="formGroupEmail">
                     <Form.Control type="text" placeholder="Full Name"  value={name} onChange={(e) => setName(e.target.value)} />
                     
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                     <Form.Control type="email" placeholder="Email"  value={email} onChange={(e) => setEmail(e.target.value)} />
                    
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                     <Form.Control type="number" placeholder="Phone Nunber"  value={phone} onChange={(e) => setPhone(e.target.value)} />
                     
                  </Form.Group>
                  
                  <Button className="btn" type="submit" onClick={handleSubmit}>
                    SEND
                  </Button>
                 
                  
                </Form>
                </div>
                <div className="phone">
                    <div >
                    <IoMailSharp />
                    <span>upskilling.eg@gmail.com</span>
                    </div>
                    <div>
                    <FaPhoneAlt/>
                    <span>+201154932137</span>
                    </div>
                </div>
            
            </div>
        </div>
    )
}
export default Contact