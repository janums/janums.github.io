/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";
import * as styles from "../components/index.module.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <div className={styles.overhead}>
        <div class="evenly-distributed-children">
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        </div>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}. Built by jps.</footer>
      </div>
    </>
  );
};

export default Layout;
