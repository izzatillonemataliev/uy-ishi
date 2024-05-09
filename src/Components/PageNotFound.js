import React from "react";
import Layout from "./Layout";

const PageNotFound = () => {
  const logo =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  return (
    <Layout>
      <div className="container">
        <img src={logo} alt="logo" />
      </div>
    </Layout>
  );
};

export default PageNotFound;
