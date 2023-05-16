import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "../components/index.module.css";

const IndexPage = () => (
  <Layout>
    <div className={styles.textLeft}>
      <h1>
        Hi. <br />
        <b>I'm Janum.</b>
      </h1>
      <p className={styles.intro}>
        I just graduated from Princeton (May '23) and am a software engineer at{" "}
        <a
          href="https://www.pinecone.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pinecone.io
        </a>
        . <br /> I play spikeball and dance, and I like cinema and music. <br />
        Check out my favorite movies{" "}
        <a
          href="https://letterboxd.com/js101/films/by/entry-rating/"
          target="_blank"
          rel="noopener noreferrer"
        >
          on Letterboxd
        </a>{" "}
        and my favorite music{" "}
        <a
          href="https://open.spotify.com/user/elephant56482-us/playlists"
          target="_blank"
          rel="noopener noreferrer"
        >
          on Spotify
        </a>
        .
      </p>
      <p className={styles.intro}>
        note: I'm building this website from scratch mainly to try out cool APIs
        and new tech. I'm also hoping to learn some web development along the
        way.
      </p>
    </div>
  </Layout>
);

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />;

export default IndexPage;
