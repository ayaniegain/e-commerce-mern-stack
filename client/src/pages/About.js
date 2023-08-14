import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"about-page"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to ABC Company! Your premier destination for high-quality
            Indian garments that embrace every season. Established in 2022,
            we're dedicated to providing you with a diverse range of clothing
            that captures the essence of each season, ensuring you're stylish
            and comfortable year-round. Our commitment to delivering value is
            woven into every garment we offer. From cozy winter wear to breezy
            summer styles, our collection encompasses all seasonal needs,
            reflecting the vibrant tapestry of Indian fashion. At ABC Company,
            we're driven by the belief that quality shouldn't come at a premium.
            Our mission is to make enduring, top-notch clothing accessible to
            all, so you can look your best while embracing the changing seasons
            without straining your budget. As we look forward, we envision a
            world where seasonal style knows no bounds. Join us in this journey
            towards affordable and enduring fashion. Thank you for choosing ABC
            Company as your trusted source for high-quality, season-inspired
            Indian clothing.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
