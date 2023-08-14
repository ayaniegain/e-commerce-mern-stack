import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Layout({ children,title,description,author,keywords }) {
  return (
    <div>
      <Helmet>
          <meta charSet="UTF-8" />
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "85vh" }}>
      <ToastContainer/> {children}</main>
      <Footer />
    </div>
  );
}
Layout.defaultProps={
  title:"Ecommerce app --shop now",
  description: "mern stack project",
  keywords:"mern,react,node,mongodb",
  author:"Ayan Biswas"
}

export default Layout;
