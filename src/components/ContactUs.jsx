import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./ContactUs.css";


const notify = () => {
    toast('Message Sent Thank You!');
}
export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    //emailjs.sendForm('service_34u54md', 'template_x4u169o', form.current, 'OrGGIygZKaLVjpwFL')
    emailjs.sendForm('service_7cv2l8g', 'template_5glnib7', form.current, 'MJrmYgAVI4c3zqyoi')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          notify();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='Container'>
    <div className='header'>
        <h1>CONTACT US</h1>
    </div>
        <form ref={form} onSubmit={sendEmail}>
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <label className='label'>First Name</label>
                    <input class="form-control" placeholder="Peter" type="text" name="user_name_first" required/>
                </div>
            </div>
            <div class="col">
                <div class="form-group">
                    <label className='label'>Name</label>
                    <input class="form-control" placeholder="Parker" type="text" name="user_name_last" required/>
                </div>
            </div>
        </div>
            <div class="form-group">
                <label className='label'>Phone (optional)</label>
                <input class="form-control" placeholder="111-111-1111" type="text" name="user_phone" />
            </div>
            <div class="form-group">
                <label className='label'>Email</label>
                <input class="form-control" placeholder="example@email.com" type="email" name="user_email" required/>
            </div>
            <div class="form-group">
                <label className='label'>Message</label>
                <textarea  class="form-control" placeholder="Please leave a short message describing your service request." name="message" rows="3" required/>
            </div>
                <input class="btn" type="submit" value="Send" />
        </form>
        <div className='contactDetail'>
            <h3 className='detailHeader'>Or Contact Us Directly</h3>
            <p>Phone: <a className="contactLink" href="tel:7192870745">719-287-0745</a></p>
            <p>Email: <a className="contactLink" href="mailto:RizzazzleRepairs@gmail.com">RizzazzleRepairs@gmail.com</a></p>

            {/* <h4 className='detailContent'> Phone: 719-287-0745 </h4>
            <h4 className='detailContent'> Email: RizzazzleRepairs@gmail.com</h4> */}
        </div>
        <ToastContainer/>
    </div>
  );
};

export default ContactUs;