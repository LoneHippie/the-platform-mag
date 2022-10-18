import React, { useState } from "react";

import * as classes from "./ContactForm.module.scss";

const ContactForm = ({ formName }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const successMessageToUser = `Thank you ${name}, your message has been sent. Expect to hear from us soon!`;

  const formHandlers = {
    changeName: (e) => {
      setName(e.target.value);
    },
    changeEmail: (e) => {
      setEmail(e.target.value);
    },
    changeSubject: (e) => {
      setSubject(e.target.value);
    },
    changeMessage: (e) => {
      setMessage(e.target.value);
    },
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  function handleSubmit(e) {
    e.preventDefault();

    const formBody = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": formName, ...formBody }),
    })
      .then(() => {
        alert(successMessageToUser);
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <form
      className={classes.form_container}
      name={formName}
      method="POST"
      onSubmit={(e) => handleSubmit(e)}
      data-netlify={true}
      data-netlify-honeypot="bot-field"
    >
      {/* <input type="hidden" name="bot-field" /> */}
      <input type="hidden" name="form-name" value={formName} />

      <div className={classes.form_group}>
        <input
          className={classes.form_input}
          name="name"
          type="text"
          value={name}
          onChange={(e) => formHandlers.changeName(e)}
          required={true}
          placeholder="Name"
        />
        <label htmlFor="name">Name</label>
      </div>

      <div className={classes.form_group}>
        <input
          className={classes.form_input}
          name="email"
          type="email"
          value={email}
          onChange={(e) => formHandlers.changeEmail(e)}
          required={true}
          placeholder="Your Email"
        />
        <label htmlFor="email">Email</label>
      </div>

      <div className={classes.form_group}>
        <input
          className={classes.form_input}
          name="subject"
          type="text"
          value={subject}
          onChange={(e) => formHandlers.changeSubject(e)}
          required={true}
          placeholder="Subject"
        />
        <label htmlFor="subject">Subject</label>
      </div>

      <div className={classes.form_group}>
        <textarea
          className={classes.form_input}
          name="message"
          required={true}
          value={message}
          onChange={(e) => formHandlers.changeMessage(e)}
          placeholder="Message"
          rows="4"
        />
        <label htmlFor="message">Message</label>
      </div>

      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
