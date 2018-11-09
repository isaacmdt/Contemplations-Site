import React from "react";
import Layout from "../components/layout";
import styles from "./blockquote.module.css";
export default () => (
  <Layout>
    <h1>About</h1>
    <p>
      Contemplations, is Bible journal app that was originally called S.O.A.P
      Journal. Created when Brandon the CEO of Pixegon wanted to create a simple
      note app for the S.O.A.P Bible study method. Which stands for Scripture,
      Observe, Apply, Pray. A simple study method to help you read the Bible,
      reflect on what you had just read and apply it to your life.
    </p>
    <p>
      Contemplations is the continuation of that effort. The goals was to update
      the app to be ready for newer iOS software and set the foundations for new
      future features.
    </p>
    <p>
      To make contemplations beautiful and simple to use. Brandon, worked with
      his Lead UI/UX designer, Isaac. Who is also a pastor at a local church in
      Albuquerque, NM.
    </p>
    <p>
      We hope that this app will allow you to have more memorable and meaningful
      bible studies. To not only be readers and hearers of the Gods Word, but
      doers.
    </p>
    <blockquote className={styles.blockquote}>
      <p>
        ...Those who hear and don’t act are like those who glance in the mirror,
        walk away, and two minutes later have no idea who they are, what they
        look like. But whoever catches a glimpse of the revealed counsel of
        God—the free life!—even out of the corner of his eye, and sticks with
        it, is no distracted scatterbrain but a man or woman of action. That
        person will find delight and affirmation in the action.
      </p>
      <p style={{ textAlign: "right" }}>
        <em>James 1:22-25 The Message (MSG)</em>
      </p>
    </blockquote>
  </Layout>
);
