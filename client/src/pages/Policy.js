import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privecy Policy"}>
      <div className="row contactus ">
        <div className="col-md-4 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-6 m-4">
        <h1>Website Privacy Policy</h1>



<h2>Information We Collect</h2>
<p>When you visit our website, we may collect certain information automatically, including your IP address, browser
    type, operating system, and browsing patterns. We may also collect data through cookies and similar technologies.</p>
<p>If you choose to provide us with personal information through forms or sign-ups, we will collect and store that
    information, such as your name and email address.</p>

<h2>Data Security</h2>
<p>We take reasonable measures to protect your information from unauthorized access or disclosure. However, no online
    data transmission is entirely secure, and we cannot guarantee absolute data security.</p>

<h2>Third-Party Links</h2>
<p>Our website may contain links to external sites. We are not responsible for their privacy practices. Please review
    their policies before providing any personal information.</p>

<h2>Changes to This Policy</h2>
<p>We may update our privacy policy occasionally. Any revisions will be posted on this page with the new effective
    date.</p>

<h2>Contact Us</h2>
<p>If you have questions or concerns about our privacy practices, please contact us at <a
        href="mailto:contact@yourwebsite.com">contact@yourwebsite.com</a>.</p>


        </div>
      </div>
    </Layout>
  );
};

export default Policy;