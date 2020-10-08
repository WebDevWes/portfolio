import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./style.css";

export default function SimpleContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name && !email) {
      alert("Name nad email are required!");
    } else if (name && email) {
      emailjs
        .sendForm(
          "service_us9hkka",
          "template_45cnunm",
          event.target,
          "user_aoSDneBYjn25nZipmAnsy"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Email has been sent to Wesley");
          },
          (error) => {
            console.log(error.text);
          }
        );
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="SimpleContactForm">
      <form type="submit" onSubmit={handleSubmit}>
        <input
          className="SimpleContactFormInput"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          className="SimpleContactFormInput"
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <textarea
          className="SimpleContactFormTextArea"
          rows="4"
          cols="50"
          name="message"
          placeholder="Leave me a message!"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <input
          className="SimpleContactFormSubmit"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}
