import React, { useState } from "react";
import "./style.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name && !email) {
      console.log("Name nad email are required!");
    } else if (name && email) {
      console.log(
        `Contact name is ${name}, email is ${email}, and his/her message is ${message}`
      );
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="dropdown-menu ContactForm" aria-labelledby="dropdown">
      <form type="submit" onSubmit={handleSubmit}>
        <label className="ContactFormLabel">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label className="ContactFormLabel">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <textarea
          className="ContactFormTextArea"
          rows="4"
          cols="50"
          name="message"
          placeholder="Leave me a message!"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <input className="ContactFormSubmit" type="submit" value="Submit" />
      </form>
    </div>
  );
}
