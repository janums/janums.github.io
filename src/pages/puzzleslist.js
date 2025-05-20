import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const PuzzlesPage = () => (
  <Layout>
    <h1>[under construction]</h1>
    <p>coming soon (hopefully)...</p>
    <ul>
      <li>
        <Link to="/puzzles/threehats/">3 People 5 Hats puzzle</Link>
      </li>
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export const Head = () => <Seo title="List of Puzzles" />;

export default PuzzlesPage;
