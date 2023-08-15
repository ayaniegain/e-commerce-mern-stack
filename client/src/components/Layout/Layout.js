import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

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
      <Toaster/> {children}</main>
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
