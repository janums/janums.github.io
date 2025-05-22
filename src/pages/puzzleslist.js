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
        <Link to="/puzzles/chalice/">The King's Chalice</Link> [May 20, 2025]
      </li>
      <li>
        <Link to="/puzzles/wolves/">One Sheep on an Island of Wolves</Link> [May 18, 2025]
      </li>
      <li>
        <Link to="/puzzles/thousandcoins/">A Thousand Coins</Link> [May 13, 2025]
      </li>
      <li>
        <Link to="/puzzles/rectangle/">Birthday Cake</Link> [May 12, 2025]
      </li>
      <li>
        <Link to="/puzzles/eggdrop/">2 glass balls, 100-story building</Link> [May 11, 2025]
      </li>
      <li>
        <Link to="/puzzles/threehats/">3 People, 5 Hats</Link> [May 10, 2025]
      </li>
    </ul>
  </Layout>
);

export const Head = () => <Seo title="Puzzles" />;

export default PuzzlesPage;
