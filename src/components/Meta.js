import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, desc, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={desc}></meta>
      <meta name="keyword" content={keywords}></meta>
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to Nexus",
  desc: "Best products for the cheapest price",
  keywords: "electronics, high quality electronics, cheap electronics",
};
export default Meta;
