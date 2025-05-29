import * as React from "react";
import { Link } from "gatsby";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import TextButton from "../../components/TextButton";
import TextSection from "../../components/TextSection";
import ExternalLink from "../../components/ExternalLink";

const AntsPage = () => {
  const [showHint1, setShowHint1] = React.useState(false);
  const [showHint2, setShowHint2] = React.useState(false);
  const [showHint3, setShowHint3] = React.useState(false);
  const [showSection, setShowSection] = React.useState(false);
  return (
    <Layout>
      <h1>Ants on a Board</h1>
      <p>
        Your friend challenges you to a game with a square board, a round glass, and 51 ants.
        <br />
        <br />
        This the how the game works: your opponent will first get to place the 51 ants anywhere on the square (which has side length 1),
        and they will stay perfectly still.
        Then, you will get to place the round glass (which has radius 1/7) anywhere on the square. If you can capture <i>at least</i> 3 ants under
        your glass, you win. If not, your friend wins.
        <br />
        <br />
        After thinking about it for a bit, you agree to play. Your friend laughs! He says that he can always win this game. Is he right?
      </p>
      <p>Source: <ExternalLink href="https://www.amazon.com/Practical-Guide-Quantitative-Finance-Interviews/dp/1438236662">The green book</ExternalLink></p>
      <TextButton onClick={() => setShowHint1((prev) => !prev)}>
        {showHint1 ? 'Hide Hint 1' : 'Show Hint 1'}
      </TextButton>
      {showHint1 && (
        <TextSection>
          Your friend is mistaken - in fact, <i>you</i> are the one who can always win the game!
        </TextSection>
      )}
      <br />
      <TextButton onClick={() => setShowHint2((prev) => !prev)}>
        {showHint2 ? 'Hide Hint 2' : 'Show Hint 2'}
      </TextButton>
      {showHint2 && (
        <TextSection>
          What's the largest square that can fit entirely inside a circle? A square whose diagonal is the same as the diameter of the circle.
          <br />
          <br />
          So, a circle with radius <i>r</i> and diameter 2<i>r</i> can fully cover a square with up to diagonal length 2<i>r</i>, which would
          have side length &radic;2&sdot;<i>r</i>.
          <br />
          <br />
          &radic;2&sdot;1/7 ≈ 0.202, so a circle with radius 1/7 can fully cover a square with side length up to 0.202.
        </TextSection>
      )}
      <br />
      <TextButton onClick={() => setShowHint3((prev) => !prev)}>
        {showHint3 ? 'Hide Hint 3' : 'Show Hint 3'}
      </TextButton>
      {showHint3 && (
        <TextSection>
          A circle with radius 1/7 can fully cover a square with side length 1/5.
          Can you prove you can always win the game if you had a square glass with side length 1/5 instead?
        </TextSection>
      )}
      <br />
      <TextButton onClick={() => setShowSection((prev) => !prev)}>
        {showSection ? 'Hide Solution' : 'Show Solution'}
      </TextButton>
      {showSection && (
        <TextSection>
          (Read the last two hints if you haven't already.)
          <br />
          <br />
          Your adversary is going to spread the ants out as much as possible, hoping to avoid any 3 of them being too close.
          <br />
          <br />
          So why can you always win? You can prove that it's <i>impossible</i> to place the ants in such a way that no 3 of them can be captured by your glass.
          <br />
          <br />
          Assume for a moment that your glass is a square with side length 1/5.
          Then, divide the square board into 25 smaller squares, each with side length 1/5 to match your glass. By the Pigeonhole principle,
          at least one of these smaller squares will contain at least 3 ants, even if your opponent placed them optimally. This means that
          your glass will always be able to capture at least 3 ants.
          <br />
          <br />
          We already proved in the hints above that your glass with radius 1/7 can fully cover a square with side length 1/5, meaning
          any of these 25 smaller squares can be fully covered by your glass.
          <br />
          <br />
          So, no matter how your opponent places the ants, you can always capture at least 3 of them.
        </TextSection>
      )}
      <br />
      <Link to="/puzzleslist/">Back to puzzles</Link>
    </Layout>
  );
};

export const Head = () => <Seo title="Ants on a Log" />;

export default AntsPage;
