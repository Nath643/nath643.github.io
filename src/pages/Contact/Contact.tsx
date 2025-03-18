import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <h1>Contact Form</h1>
      <form action="">
        <p>Name:</p>
        <input type="text" />

        <p>Email:</p>
        <input type="number" />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Contact;
