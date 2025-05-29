import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const EasyLabel = () => <span style={{ color: '#4caf50' }}>[E]</span>;
const ModerateLabel = () => <span >[S]</span>;
const HardLabel = () => <span style={{ color: '#ff5252' }}>[H]</span>;

const rowStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 60px 160px',
  alignItems: 'center',
  gap: '0.5rem',
  marginBottom: '0.5rem',
  maxWidth: '600px',
};

const PuzzlesPage = () => (
  <Layout>
    <h1>Puzzles</h1>
    <h3>[always under construction]</h3>
    Almost all the puzzles are about the same level of difficulty <ModerateLabel />.
    Slightly easier <EasyLabel /> or harder <HardLabel /> puzzles are marked accordingly.
    <br />
    <br />
    <div>
      <div style={rowStyle}>
        <Link to="/puzzles/antsboard/">Ants on a Board</Link>
        <HardLabel />
        <span>May 28, 2025</span>
      </div>
      <div style={rowStyle}>
        <Link to="/puzzles/antslog/">Ants on a Log</Link>
        <EasyLabel />
        <span>May 27, 2025</span>
      </div>
      <div style={rowStyle}>
        <Link to="/puzzles/couples/">Couples Party</Link>
        <ModerateLabel />
        <span>May 22, 2025</span>
      </div>
      <div style={rowStyle}>
        <Link to="/puzzles/twocoins/">Two Prisoners, Two Coins</Link>
        <ModerateLabel />
        <span>May 21, 2025</span>
      </div>
      <div style={rowStyle}>
        <Link to="/puzzles/chalice/">The King's Chalice</Link>
        <HardLabel />
        <span>May 20, 2025</span>
      </div>
      <div style={rowStyle}>
        <Link to="/puzzles/wolves/">One Sheep on an Island of Wolves</Link>
        <ModerateLabel />
        <span>May 18, 2025</span>
      </div>
      <div style={rowStyle}>
        <Link to="/puzzles/thousandcoins/">A Thousand Coins</Link>
        <ModerateLabel />
        <span>May 13, 2025</span>
      </div>
      <div style={rowStyle}>
        <Link to="/puzzles/rectangle/">Birthday Cake</Link>
        <ModerateLabel />
        <span>May 12, 2025</span>
      </div>
      <div style={rowStyle}>
        <Link to="/puzzles/eggdrop/">2 glass balls, 100-story building</Link>
        <ModerateLabel />
        <span>May 11, 2025</span>
      </div>
      <div style={rowStyle}>
        <Link to="/puzzles/threehats/">3 People, 5 Hats</Link>
        <EasyLabel />
        <span>May 10, 2025</span>
      </div>
    </div>
  </Layout>
);

export const Head = () => <Seo title="Puzzles" />;

export default PuzzlesPage;
