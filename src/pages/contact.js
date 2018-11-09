import React from "react";
import Layout from "../components/layout";
import styles from "./contact.module.css";

export default () => (
  <Layout>
    <div className={styles.formWrapper}>
      <h3>We would love to talk! Email us at the address below</h3>

      <form name="contact">
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" />
          </label>
        </p>
        <p>
          <button className={styles.button} type="submit">
            Send
          </button>
        </p>
      </form>
    </div>
  </Layout>
);
