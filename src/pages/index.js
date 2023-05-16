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
        I'm building this website from scratch to learn some web development and
        play with some cool APIs.
      </p>
      <p className={styles.intro}>
        I like music and cinema. Check out my favorite movies{" "}
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
