import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";

export default () => (
  <div style={{ color: `teal` }}>
    <Link to="/contact/">Contact</Link>
    <Header headerText="About Gatsby" />
    <Header headerText="It's Prety Cool" />
    <p>Such wow. Very React.</p>
  </div>
);
