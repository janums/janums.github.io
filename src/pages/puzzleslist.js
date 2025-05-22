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
        <Link to="/puzzles/wolves/">One Sheep on an Island of Wolves</Link> [June 3, 2023]
      </li>
      <li>
        <Link to="/puzzles/thousandcoins/">A Thousand Coins</Link> [May 29, 2023]
      </li>
      <li>
        <Link to="/puzzles/rectangle/">Birthday Cake</Link> [May 26, 2023]
      </li>
      <li>
        <Link to="/puzzles/eggdrop/">2 glass balls, 100-story building</Link> [May 22, 2023]
      </li>
      <li>
        <Link to="/puzzles/threehats/">3 People, 5 Hats</Link> [May 15, 2023]
      </li>
    </ul>
  </Layout>
);

export const Head = () => <Seo title="Puzzles" />;

export default PuzzlesPage;
