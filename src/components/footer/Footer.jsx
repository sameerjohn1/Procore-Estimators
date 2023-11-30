import React from "react";
import "./Footer.css";
import logo from "../../assets/log.png";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <div>
        <div className="Footer">
          <div className="footerdata">
            <img
              src={logo}
              alt=""
              style={{ color: "#FDFDFD" }}
              className="footerImg"
            />
            <p className="paragra">
              <span style={{ color: "#FF7518" }}>PROCORE Estimators</span> are
              an industry leader in
              <br /> providing accurate and reliable construction cost
              <br /> estimation services. We specialize in Quantity
              <br /> and Material Takeoff, Scheduling, and Planning
              <br /> for your project management needs. Our experts
              <br /> use advanced softwares and we pay close
              <br /> attention to detail to ensure accurate estimates.
              <br /> We provide you with accurate information in a<br /> timely
              manner, enabling you to make informed
              <br /> decisions and execute projects efficiently. Rely
              <br /> on{" "}
              <span style={{ color: "#FF7518" }}>PROCORE Estimators</span> for
              precise and prompt
              <br /> cost estimation in construction.
            </p>
          </div>
          {/*  */}
          <div className="footerdata">
            <h2>Navigation</h2>
            <h2>Service</h2>
            <h2>About us</h2>
            <h2>Payment</h2>
            <h2>Sample</h2>
          </div>
          {/*  */}
          <div className="footerdata">
            <div className="contactinfo">
              <h2>Contact</h2>
            </div>

            <div className="icons">
              <IoLocationOutline className="iconsborder" />
              <p style={{ paddingLeft: "15px" }}>
                2505 Bedford Ave, Brooklyn, NY 11226, USA
              </p>
            </div>

            <div className="icons">
              <AiOutlineWhatsApp className="iconsborder" />
              <p style={{ paddingLeft: "15px" }}>+1 917 720 3892</p>
            </div>

            <div className="icons">
              <CiMail className="iconsborder" />
              <p style={{ paddingLeft: "15px" }}>Dave@procoreestimators.com</p>
            </div>
          </div>

          {/*  */}
        </div>

        <div className="lastPara">
          <p style={{ textAlign: "center" }}>
            Copyright © 2023 Procore Estimators Designed By{" "}
            <span style={{ color: "#008000" }}>MF</span>{" "}
            <span style={{ color: "#FF6400" }}>Bzone</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
