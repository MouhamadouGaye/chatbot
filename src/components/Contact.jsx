import React from "react";
import "../styles/Contact.css";

const Contact = () => (
  <section id="contact" className="contact">
    <h2>Contact Me</h2>
    <form className="form-container">
      <div className="label">
        <label> Name: </label>
        <input type="text" name="name" />
      </div>

      <div className="label">
        <label> Email: </label>
        <input type="text" name="email" />
      </div>

      <div className="label">
        <label>Message:</label>
        <textarea name="message"></textarea>
      </div>

      <button type="submit">Send</button>
    </form>
  </section>
);

export default Contact;
