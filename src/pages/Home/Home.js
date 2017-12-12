import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./Home.css";

class Home extends Component {
  state = {};

  render() {
    return (
      <div className="page-wrapper">
        <Navbar />
        <div className="content-wrapper">
          <section className="top">
            <p>Septa Corp</p>
          </section>
          <section className="phantoms services">
            <p id="bar" />
            <p className="bar-title service-titles">Bar Phantoms</p>
            <p className="description">
              We design and manufacture linearity and bar phantoms for most
              nuclear medicine cameras. We make all our products in house. If
              you require a special phantom design, please contact us and we can
              quote your project.{" "}
            </p>
          </section>
          <section className="pinholes services">
            <p id="pin" className="service-titles">
              Pinhole Collimators
            </p>
            <p className="description">
              We make pinhole collimators for most cameras. Please contact us
              for the current price and delivery.{" "}
            </p>
          </section>
          <section className="lead services">
            <p id="lead" className="service-titles">
              Lead Casting
            </p>
            <p className="description">
              For our nuclear medicine products, we usually require lead casting
              for shielding so we currently have lead casting ability. We can
              manufacture molds to your design and cast lead for any design
              need, including radiation shielding and counterweights. Please
              contact us for your casting needs.{" "}
            </p>
          </section>
          <section className="design services">
            <p id="mech" className="service-titles">
              Mechanical Design
            </p>
            <p className="description">
              We design all our own products and can provide mechanical design
              suit your design needs. We also have a complete machine shop and
              can manufacture your prototypes as desired and produce products
              for small run quantities. Please contact us if you have any
              mechanical design needs.{" "}
            </p>
          </section>
          <section className="printing services">
            <p id="print" className="service-titles">
              3D Printing
            </p>
            <p className="description">
              We manufacture 3d printed parts using nylon. These parts are
              durable and are for current use, not just for modeling. Carbon
              fiber, kevlar fiber and glass fiber reinforcing are available to
              make stronger parts. Send in your CAD drawing for price and
              delivery quote. Most parts can be finished in a short time. Small
              quantities only. Our size limit is any part within a 7" x 7" x 15"
              volume. For the nuclear medicine industry, we can manufacture
              obsolete plastic parts can otherwise would not be obtainable. Send
              in the broken part and we can remake it.{" "}
            </p>
          </section>
          <section className="contact services">
            <p id="con" className="service-titles">
              Contact
            </p>
            <p className="description con-des">Email:jcleask@msn.com</p>
            <p className="description con-des">Phone:603-878-1100</p>
          </section>
        </div>
      </div>
    );
  }
}
export default Home;
