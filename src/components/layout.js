import React from "react";
import { Link } from "gatsby";
import styles from "./layout.module.css";

const ListLink = props => (
  <li className={styles.linkLI}>
    <Link style={{ textDecoration: "none" }} to={props.to}>
      {props.children}
    </Link>
  </li>
);

export default ({ children }) => (
  <div>
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to="/">
          <h3 className={styles.siteTitle}>Contemplations</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/beta/">Join Beta</ListLink>
          {/* <ListLink to="/contact/">Contact</ListLink> */}
        </ul>
      </header>
      {children}
    </div>
    <footer className={styles.footer}>
      <hr />
      <p>
        <a href="http://www.pixegon.com">© Pixegon Inc 2018</a>
      </p>
    </footer>
  </div>
);
