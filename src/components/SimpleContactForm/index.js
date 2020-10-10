import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./style.css";

export default function SimpleContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [modal, setModal] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name && !email) {
      setModal("The fields cannot be blank!");
    } else if (name && email) {
      if (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          email
        )
      ) {
        emailjs
          .sendForm(
            "service_us9hkka",
            "template_45cnunm",
            event.target,
            "user_aoSDneBYjn25nZipmAnsy"
          )
          .then(
            (result) => {
              setModal("Email has been sent!");
              console.log(result.text);
            },
            (error) => {
              setModal("Sorry an error has occured, please try again later!");
              console.log(error.text);
            }
          );
        setName("");
        setEmail("");
        setMessage("");
      }
      setModal("The email you entered is not valid.");
    }
  };

  return (
    <div className="SimpleContactForm">
      <form type="submit" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          className="form-control"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          className="form-control"
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="message">Message</label>
        <textarea
          className="form-control"
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
          data-toggle="modal"
          data-target="#emailModal"
        />
      </form>
      <div
        className="modal fade"
        id="emailModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="emailModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="emailModalLabel">
                Contact
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <p className="modal-body">{modal}</p>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
