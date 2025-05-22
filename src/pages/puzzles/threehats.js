import * as React from "react";
import { Link } from "gatsby";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import TextButton from "../../components/TextButton";
import TextSection from "../../components/TextSection";

const ThreePeopleFiveHatsPage = () => {
  const [showHint1, setShowHint1] = React.useState(false);
  const [showHint2, setShowHint2] = React.useState(false);
  const [showSection, setShowSection] = React.useState(false);
  return (
    <Layout>
      <h1>3 People, 5 Hats</h1>
      <p>There are 3 people in a room; let's call them <i>A</i>, <i>B</i>, and <i>C</i>. In the room is a box with 5 hats - exactly 3 red hats and 2 blue hats.
        Each person is randomly called to place a hat on their head. They then stand in a room facing each other such that each person can see the
        other two but cannot see his own hat. Now, we ask each of them the color of their hat. <i>A</i> goes first, and says, "I don't know."
        After hearing that <i>A</i> doesn't know, <i>B</i> also admits he doesn't know. <i>C</i> then says, with conviction: "I know the color of my hat!"
        <br />
        <br />
        Here's the catch: <i>C</i> is blind! What is the color of his hat, and how does he know? </p>
      <p>Source: unknown</p>
      <TextButton onClick={() => setShowHint1((prev) => !prev)}>
        {showHint1 ? 'Hide Hint 1' : 'Show Hint 1'}
      </TextButton>
      {showHint1 && (
        <TextSection>
          <i>C</i>'s hat is red.
        </TextSection>
      )}
      <br />
      <TextButton onClick={() => setShowHint2((prev) => !prev)}>
        {showHint2 ? 'Hide Hint 2' : 'Show Hint 2'}
      </TextButton>
      {showHint2 && (
        <TextSection>
          When <i>A</i> says "I don't know the color of my hat," what information does <i>B</i> glean from that?
        </TextSection>
      )}
      <br />
      <TextButton onClick={() => setShowSection((prev) => !prev)}>
        {showSection ? 'Hide Solution' : 'Show Solution'}
      </TextButton>
      {showSection && (
        <TextSection>
          This is a classic case analysis puzzle, but brute force alone won't solve it.
          <br />
          <br />
          Here's the key insight: <i>C</i> gains valuable information from <i>A</i> and <i>B</i> when they say they don't know
          the color of their hats.
          <br />
          <br />
          Let's reason through the problem. The <i>only</i> way <i>A</i> could have known the color of his hat is if he saw two blue hats,
          because this must mean that his own hat is red. So, the fact that <i>A</i> doesn't know the color of his hat tells <i>B</i> and <i>C</i> that <i>A</i>
          {" "}saw either two red hats, or he saw one blue and one red hat.
          <br />
          <br />
          <i>B</i> is aware of this, so he knows that if he sees <i>C</i> wearing a blue hat, then he must have a red hat on; <i>A</i> has already revealed
          that <i>at most</i> one of them can be wearing a blue hat. So when <i>B</i> says he also doesn't know, this reveals that <i>C</i> must be wearing a red hat.
          <br />
          <br />
          Notice that <i>C</i> can follow this reasoning to conclude that his own hat must be red without need to see anything.
          <br />
          <br />
        </TextSection>
      )}
      <br />
      <Link to="/puzzleslist/">Back to puzzles</Link>
    </Layout>
  );
};

export const Head = () => <Seo title="3 People 5 Hats puzzle" />;

export default ThreePeopleFiveHatsPage;
