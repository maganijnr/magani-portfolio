import React, { useRef } from 'react'
import './index.css'
import { FiPhoneCall, FiMap, FiMail } from 'react-icons/fi'
import emailjs from 'emailjs-com';


const Contact = () => {
  const form  = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vbbp33n', 'template_arzz6ge', form.current, 'user_vTjWaDQyQNMVbsQy4BQMo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='conatct_container'>
      <h2 className='contact_header'>Let's Discuss Your Project</h2>
      <div className='contact_wrapper'>
        <div className='contact_info'>
          <div className='contact_detail_wrap'>
            <span className='contact_detail'><FiPhoneCall className='icon'/> +234 8189709386</span>
          </div>
          <div className='contact_detail_wrap'>
            <span className='contact_detail'><FiMail className='icon'/> enochjoshua09@gamil.com</span>
            <span className='contact_detail'><FiMail className='icon'/> maganijoshua25@gmail.com</span>
          </div>
          <div className='contact_detail_wrap'>
            <span className='contact_detail'><FiMap className='icon'/> No 18, New Legislative Quarters, Jos, Nigeria</span>
            <span className='contact_detail'><FiMap className='icon'/> No 3, Ayinde Sanni Close, Oregun, Ikeja, Nigeria</span>
          </div>
        </div>
        <div className='contact_form'>
          <h3>Conatact Me</h3>
          <form ref={form} onSubmit={sendEmail}>
            <div className='input_wrapper'>
              <label htmlFor='name'>Name</label>
              <input type="text" name="user_name" id="name"/>
            </div>
            <div className='input_wrapper'>
              <label htmlFor='subject'>Subject</label>
              <input type="text" name="user_subject" id="subject"/>
            </div>
            <div className='input_wrapper'>
              <label htmlFor='email'>Email</label>
              <input type="email" name="user_email" id="email"/>
            </div>
            <div className='input_wrapper'>
              <label htmlFor='message'>Message</label>
              <textarea type="text" name="message" id="message">
              </textarea>
            </div>
            <button className='submit_btn' type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
