import React from "react";
import "./AboutUs.css";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const AboutUs = () => {
  return (
    <>
      <div className="aboutus">
        <div className="header">
          <h4 className="heading1">TURNAROUND TIME 2-3 DAYS!</h4>
          <h5 className="heading2">Affordable Estimate (30% off)</h5>

          <div>
            <AiOutlineWhatsApp className="whatsapp" />
          </div>

          <div className="phone">
            <h4>+1 917 720 3892</h4>
          </div>

          <div>
            <CiMail className="mail" />
          </div>

          <div className="email">
            <h4>Dave@procoreestimators.com</h4>
          </div>

          <div>
            <FaFacebook className="facebook" />
          </div>

          <div>
            <FaLinkedin className="linkdin" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
