import React from "react";
import "./Hero.css";
// import Ellipse from "../../assets/Ellipse 13.png";
import logo from "../../assets/logo (5) 3.svg";
import mission from "../../assets/Untitled-11 1.jpg";
import vision from "../../assets/Untitled-1 2.jpg";
import googles from "../../assets/goggles.png";
import alpha from "../../assets/alpha.png";
import source from "../../assets/source.png";
import email from "../../assets/email.png";
import glasses from "../../assets/glasses.png";

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <h1>
          About{" "}
          <span className="spanh1">
            PROCORE <br />
            Estimators
          </span>
        </h1>

        <div className="paragraph">
          <p>
            <span className="para">Procore Estimators</span> offers Cost
            Estimating, Quantities & Material
            <br /> Takeoff, and Scheduling services to Contractors,
            subcontractors,
            <br /> material suppliers, and manufacturers . As we understand each
            <br />
            client's unique requirements, our experts generate accurate and
            <br />
            reliable estimates, eliminating alternatives. We have successfully
            <br />
            served various developments, architectural firms, and contracting
            <br />
            companies across America.
          </p>
        </div>

        {/* rightside */}
        <div className="right">
          <div className="backgroundImage">
            <img src={logo} alt="" />
          </div>
        </div>

        <div className="paragr">
          <p>
            Over 10 years in the AEC industry, we have developed a deep
            <br />
            understanding of the rapidly changing construction landscape
            <br /> and guide our clients accordingly. We combine industry
            <br />
            expertise, cutting-edge technology, and an unwavering
            <br /> commitment to improving construction estimating,
            <br /> scheduling, and cost management procedures to conserve
            <br /> your resources and time. We can assist you with an expert if
            you need one.
            <span style={{ color: "#FF7518" }}>
              Reach us at +1 917 720 3892 .
            </span>
          </p>
        </div>
      </div>

      <div className="ourmissions">
        <div className="black">
          <div className="img1">
            <img src={mission} alt="" />
            <h3>Our Missions</h3>
            <p>
              Our vision is to build and maintain a successful business
              <br />
              relationship which includes providing uncompromising quality,
              <br />
              reliable accuracy, and fast turnaround time to General
              Contractors,
              <br /> Home Builders, Subcontractors, Architects, Developers, and
              Home
              <br /> Owners
            </p>
          </div>
        </div>
      </div>
      <div className="ourvision">
        <div className="black1">
          <div className="img2">
            <img src={glasses} alt="" />
            <h3>Our Videos</h3>
            <p>
              We are driven by the goal of establishing and nurturing enduring,
              <br />
              fruitful business connections with our clients. We achieve this by
              <br />
              ensuring their complete contentment in terms of Turnaround time,
              <br />
              Price, and above all, consistent Accuracy. If you're interested in
              <br />
              discovering more about our services, industry background, and
              <br />
              examples of our work, please don't hesitate to inquire.
            </p>
          </div>
        </div>
      </div>

      <div className="imageSection">
        <img src={email} alt="" />
        <div className="datas">
          <button className="upload">UPLOAD YOUR PLANS</button>
          <img src={source} alt="" className="source" />
          <img src={alpha} alt="" className="alpha" />
        </div>

        <div className="paragraphfoot">
          <p>
            For a quick quote based on your project scope, call us at
            <br /> +1 917 300 1079 or email us at Dave@procoreestimators.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
