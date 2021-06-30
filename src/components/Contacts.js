import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

import "../styles/Contacts.css";
import Phone from "../images/phone.png"
import Email from "../images/email.png"

const txtContacts = "CONTACT ME";

const Contacts = () => {
  const [sucessMessage, setSucessMessage] = useState("");
  const { register, handleSubmit } = useForm();
  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_K4kp6fa8xDyDX5jWc0U87";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        email: data.email,
        description: data.description,
      },
      userID
    );
    r.target.reset();
  };

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSucessMessage(
          "Form sent Sucessfully ! I'll contact you as soon as possible."
        );
      })
      .catch((err) => console.log(`Something went wrong ${err}`));
  };

  return (
    <div id="contact" className="contacts">
      <div className="text-center">
        <h1>{txtContacts}</h1>
        <p>PLEASE COMPLETE THE FORM BELOW TO SEND AN EMAIL DIRECTLY.</p>
        <span className="success-message">{sucessMessage}</span>
      </div>
      <div className="container BoxDetail">
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <div className="row contactDetails">
              <div>
                <img src={Phone} className="picContacts" alt="Phone..." />
              </div>
              <div className="boxLR">
                <div className="txtMe">Phone</div>
                <div className="txtTelEmail">(+66) 61 679 3436</div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xs-12">
            <div className="row contactDetails">
              <div>
                <img src={Email} className="picContacts" alt="Email..." />
              </div>
              <div className="boxLR">
                <div className="txtMe">E-mail</div>
                <div className="txtTelEmail">sawanya.saeng@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container BoxInput">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* NAME INPUT */}
              <div className="text-center boxNameInput">
                <div className="txtInput">Name</div>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  ref={register({
                    required: "*Please enter your name*",
                    maxLength: {
                      value: 20,
                      message:
                        "**Please enter a name with fewer than 20 characters**",
                    },
                  })}
                />
              </div>

              {/* EMAIL INPUT */}
              <div className="text-center boxEmailInput">
                <div className="txtInput">Email Address</div>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  ref={register({
                    required: "*Please provide you email*",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "**invalid Email**",
                    },
                  })}
                />
              </div>
            </div>
            <div className="col-md-6 col-xs-12">
              {/* DESCRIPTION */}
              <div className="text-center boxDescriptionInput">
                <div className="txtInput">Message</div>
                <textarea
                  type="text"
                  className="form-control"
                  name="description"
                  ref={register({
                    required: "*Please describe shortly your project needs...*",
                  })}
                ></textarea>
              </div>
              <div className="areaBtn">
                <button className="btn-main-offer contact-btn" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;


