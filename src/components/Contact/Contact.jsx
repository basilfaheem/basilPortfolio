import React, { useContext,useState,useEffect } from 'react';
import emailjs from 'emailjs-com';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import "./contact.css"
//import 'bootstrap/dist/css/bootstrap.css';






const Contact = () => {
 // const { contact } = useContext(PortfolioContext);
  // const { cta, btn, email } = contact;
 const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_7y0vb4n', 'template_5whffqb', e.target, 'user_6BBG4a7h5sEcofS0LDySw')
      .then((result) => {
          console.log(result.text);
          
      }, (error) => {
          console.log(error.text);
      })
      e.target.reset();
      
  };

  
return (
  
  <form className="form" onSubmit={handleSubmit}>
    <h1>Contact Me</h1>
      <div className="row pt-5 pb-5">
                        <div className="col-8 form-group mx-auto" >
                            <input type="text"  style={{ fontSize:"1.5rem" }} className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" style={{ fontSize:"1.5rem" }} className="form-control inputC" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" style={{ fontSize:"1.5rem" }} className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea id="" style={{ fontSize:"1.5rem" }} className="form-control" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className=" button col-8 pt-6 pb-6 mx-auto">
                            <input type="submit"style={{ fontSize:"1.5rem" }} className="btn btn-dark" value="Send Message"></input>
                        </div>
                    </div>
    </form>
);
};


export default Contact;
