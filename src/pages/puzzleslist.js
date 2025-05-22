import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const PuzzlesPage = () => (
  <Layout>
    <h1>Puzzles</h1>
    <h3>[always under construction]</h3>
    <ul>
      <li>
        <Link to="/puzzles/threehats/">3 People, 5 Hats</Link> [May 15, 2021]
      </li>
      <li>
        <Link to="/puzzles/threehats/">3 People, 5 Hats</Link> [May 15, 2021]
      </li>
    </ul>
  </Layout>
);

export const Head = () => <Seo title="Puzzles" />;

export default PuzzlesPage;
