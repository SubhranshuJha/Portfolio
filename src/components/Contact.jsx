import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_id', 'template_id', form.current, 'user_key')
      .then(result => {
        alert('Message sent!');
        form.current.reset();
      }, error => {
        alert('Failed to send message.');
      });
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;