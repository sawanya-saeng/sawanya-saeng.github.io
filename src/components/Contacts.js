import React, { useState } from "react";
import "../styles/Contacts.css";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import Phone from "../images/phone.png";
import Email from "../images/email.png";

const txtContacts = "CONTACT ME";

const Contacts = () => {
  const [sucessMessage, setSucessMessage] = useState("");
  const {
    register,
    handleSubmit,
  } = useForm();
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
      <div className="col container">
        <div class="row">
          <div class="col boxLeft">
            <div className="row">
              <div className="col boXL1">
                <img src={Phone} className="picContacts" alt="Phone..." />
              </div>
              <div className="col-6 boXL2">
                <div className="txtMe">Phone</div>
                <div className="marginTop">(+66) 61 679 3436</div>
              </div>
            </div>
          </div>
          <div class="col boxRight">
            <div className="row">
              <div className="col boXL1">
                <img src={Email} className="picContacts" alt="Phone..." />
              </div>
              <div className="col-6 boXL2">
                <div className="txtMe">E-mail</div>
                <div className="marginTop">sawanya.saeng@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row rowContacts">
              <div className="areaForm">
                <div className="col-md-12 col-xs-12">
                  {/* NAME INPUT */}
                  <div className="text-left boxName">
                    <div className="txtInput">Name</div>
                    <input
                      type="text"
                      className="form-control"
                      // placeholder="   Your Name ..."
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
                    <div className="line"></div>
                  </div>

                  {/* EMAIL INPUT */}
                  <div className="text-left boxEmail">
                    <div className="txtInput">Email Address</div>
                    <input
                      type="email"
                      className="form-control"
                      // placeholder="   Your Email Address..."
                      name="email"
                      ref={register({
                        required: "*Please provide you email*",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "**invalid Email**",
                        },
                      })}
                    />
                    <div className="line"></div>
                  </div>
                </div>
              </div>
              <div className="areaForm">
                <div className="col-md-12 col-xs-12">
                  {/* DESCRIPTION */}
                  <div className="boxMeassge">
                    <div className="text-left">
                      <div className="txtInput">Message</div>
                      <textarea
                        type="text"
                        className="form-control"
                        // placeholder="   Your Message..."
                        name="description"
                        ref={register({
                          required:
                            "*Please describe shortly your project needs...*",
                        })}
                      ></textarea>
                      <div className="line"></div>
                    </div>
                  </div>
                  <button className="btn-main-offer contact-btn" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;


