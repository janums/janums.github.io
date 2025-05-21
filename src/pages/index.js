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
        <b>I'm jps.</b>
      </h1>
      <p className={styles.intro}>
        I graduated from Princeton  in May 2023 and am a software engineer at{" "}
        <a
          href="https://www.pinecone.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pinecone.io
        </a>
        . <br /> Check out my favorite{" "}
        <a
          href="https://letterboxd.com/js101/films/by/entry-rating/"
          target="_blank"
          rel="noopener noreferrer"
        >
          movies
        </a>{" "}
        and my favorite {" "}
        <a
          href="https://open.spotify.com/playlist/5NthvRKYYMlQEkqVyfkgAr?trackId=33pXpH7VVUVGET3ui4CI4T"
          target="_blank"
          rel="noopener noreferrer"
        >
          music
        </a>
        .
      </p>
      <p className={styles.intro}>
        I'm compiling my favorite puzzles on this website. These come from various places; some of them from books or websites,
        some from friends, and some from my own brain. When possible, I've tried to give credit to the original source.
        <br />
        <br />
        See my thoughts on{" "}<Link to="/whatmakesapuzzle/">what makes a <i>good</i> puzzle</Link>,
        and <Link to="/puzzleslist/">browse my favorite puzzles</Link>.
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
