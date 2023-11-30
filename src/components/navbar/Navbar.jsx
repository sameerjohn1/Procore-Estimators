import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo (5) 3.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" />

      {/* <h3 className="head1">Home</h3>
      <h3 className="head2">Service</h3>
      <h3 className="head3">About us</h3>
      <h3 className="head4">Payment</h3>
      <h3 className="head5">Testimonials</h3>
      <h3 className="head6">Samples</h3>
      <h3 className="head7">Estimation fee</h3>
      <h3 className="head8">Contact us</h3> */}

      <ul className="ul">
        <li>Home</li>
        <li>Service</li>
        <li className="head3">About us</li>
        <li>Payment</li>
        <li>Testimonials</li>
        <li>Samples</li>
        <li>Estimation fee</li>
        <li>Contact us</li>
      </ul>

      <button className="button">
        <h5 className="getestimate">Get Estimate</h5>
      </button>
    </div>
  );
};

export default Navbar;
