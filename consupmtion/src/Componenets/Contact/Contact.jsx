import  React, {useRef, useState,useEffect } from "react";
import "./Contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import emailjs from "emailjs-com";

function Contact() {
 
  React.useEffect(()=>{
      navigator.geolocation.getCurrentPosition((position)=>{
console.log(position)
      })
  },[])
        
  
    const form = useRef();

    const sendEmail = (e) => {
      // e.preventDefault();
      emailjs
        .sendForm(
          "service_h9wwcrm",
          "template_cg7bf4a",
          form.current,
          "9STnmLjPMZWNG_pKl"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
  
    const errorNotification = () => toast.error("Please fill all the fields");
    const errorEmail = () => toast.error("Email or phone not valid !!");
    const successNotification = () => toast.success("Thanks for your message");
  
    const init = () => {
      document.getElementById('name').value=""
      document.getElementById('email').value=""
      document.getElementById('phone').value=""
      document.getElementById('message').value=""
    };
    const cheCkEmail = (email) => {
      const reg =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return reg.test(email);
    };
  const checkPhone=(phone)=>{
    const regexPhoneNumber =/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
  return regexPhoneNumber.test(phone);
  }
    const checkInput = (e) => {
      e.preventDefault();
  
      if (name === "" || email === "" || phone === "") {
        errorNotification();
      } else if (!cheCkEmail(email)||!checkPhone(phone)) {
        errorEmail();
      } else {
        sendEmail();
        successNotification();
  
        init();
      }
    };
  
  return (
    <div className='contact' id="contact">
      <div className='title'>Contact</div>
      <div className="contact1">
        <div className='contact-part1'>
        <small>Contact us</small>
        <h1>Your small help matter</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsa quas rerum obcaecati, nostrum deserunt, esse consectetur sint iste blanditiis architecto, consequatur sapiente dolorem possimus excepturi! Eaque dolorum harum distinctio?</p>
        </div>
        <div className='contact-part2'>
        <form ref={form} onSubmit={checkInput} className="contact-form">
            <input
              className="name1"
              placeholder="Name*"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              className="email"
              placeholder="Email*"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              className="phone"
              placeholder="Phone*"
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            ></input>
            <textarea
              className="message"
              placeholder="Message"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button type="submit" className="sendMessage">
              send <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
</svg>
            </button>
          </form>
        </div>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
    </div>

    </div>
  )
}

export default Contact