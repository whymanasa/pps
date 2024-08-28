import React from "react";
import contactPage from "../assets/contactPage.jpeg";
import "../styles/Contact.css"

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${contactPage})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            placeholder="enter your name :)"
            type="text"
          ></input>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="enter your email"
            type="email"
          ></input>
          <label htmlFor="message">Message</label>
          <textarea
            name="name"
            placeholder="enter your message :)"
            rows={6}
            required
          ></textarea>
          <button type="submit">send message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
