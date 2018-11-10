import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styles from "./index.module.css";
import stylesBlock from "./blockquote.module.css";

const Index = ({ data }) => (
  <Layout>
    <div className={styles.titleWrapper}>
      <Img
        fixed={data.appIcon.childImageSharp.fixed}
        alt={"Contemplations App Icon"}
        className={styles.appIcon}
      />
      <h2 className={styles.title}>Bible Journal App</h2>
      <h3 className={styles.tag}>
        Get into the Word, until the Word gets into you.
      </h3>
    </div>
    <div>
      <p>
        A simple journal app that lets you write down what you're learning as
        you read the Bible. Saving your notes for later reflections. As well as
        share you're thoughts with friends or the entire Contemplations
        community.
      </p>
      <p>
        <Img
          fluid={data.image1.childImageSharp.fluid}
          alt={"Contemplations Bibly Study"}
        />
      </p>
      <blockquote className={stylesBlock.blockquote}>
        <p>
          There’s nothing like the written Word of God for showing you the way
          to salvation through faith in Christ Jesus. Every part of Scripture is
          God-breathed and useful one way or another—showing us truth, exposing
          our rebellion, correcting our mistakes, training us to live God’s way.
          Through the Word we are put together and shaped up for the tasks God
          has for us.
        </p>
        <p style={{ textAlign: "right" }}>
          <em>2 Timothy 3:16-17 (MSG)</em>
        </p>
      </blockquote>
    </div>
  </Layout>
);
export default Index;

export const pageQuery = graphql`
  query {
    appIcon: file(relativePath: { eq: "AppIcon.jpg" }) {
      childImageSharp {
        fixed(width: 125, height: 125, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    image1: file(relativePath: { eq: "bibleOpen.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 550, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
