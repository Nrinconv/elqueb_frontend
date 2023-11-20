import React from 'react';
import './AboutUs.css';
import { Divider } from '@nextui-org/react';
import Partners from "../../components/Partners/Partners";

export default function AboutUs() {
  return (

    <div>


    <div className="about-us">
      <h1>About Us</h1>
      <p className="intro">
        We are a dedicated team committed to providing the best service to our customers.
      </p>
      <section>
        <h2>Our Mission</h2>
        <p>
          Our mission is to deliver high-quality products that meet our customers' needs.
        </p>
      </section>
      <section>
        <h2>Our Team</h2>
        <p>
          Our team is composed of experienced professionals who are passionate about what they do.
        </p>
      </section>
      <section>
        <h2>Our History</h2>
        <p>
          We have been in the industry for over a decade, consistently improving our services and products.
        </p>
      </section>
    </div>
      <Divider />
      <Partners />
    </div>
    
  );
}