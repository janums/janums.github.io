import * as React from "react";
import { Link } from "gatsby";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import TextButton from "../../components/TextButton";
import TextSection from "../../components/TextSection";
import ExternalLink from "../../components/ExternalLink";
import Katex from "../../components/Katex";

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
        This is how the game works: your opponent will first get to place the 51 ants anywhere on the square (which has side length 1),
        and they will stay perfectly still.
        Then, you will get to place the round glass (which has radius{" "}
        <Katex math={String.raw`\tfrac17`} />
        ) anywhere on the square. If you can capture <i>at least</i> 3 ants under
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
          What&apos;s the largest square that can fit entirely inside a circle? A square whose diagonal is the same as the diameter of the circle.
          <br />
          <br />
          So, a circle with radius <Katex math={String.raw`r`} /> and diameter{" "}
          <Katex math={String.raw`2r`} /> can fully cover a square with diagonal length at most{" "}
          <Katex math={String.raw`2r`} />, which means side length at most{" "}
          <Katex math={String.raw`r\sqrt{2}`} />.
        </TextSection>
      )}
      <br />
      <TextButton onClick={() => setShowHint3((prev) => !prev)}>
        {showHint3 ? 'Hide Hint 3' : 'Show Hint 3'}
      </TextButton>
      {showHint3 && (
        <TextSection>
          A circle with radius <Katex math={String.raw`\tfrac17`} /> can <i>fully</i> cover a square with side length{" "}
          <Katex math={String.raw`\tfrac15`} />.
          <br />
          <br />
          Why? With side length <Katex math={String.raw`\tfrac15`} />, the diagonal is{" "}
          <Katex math={String.raw`\tfrac{\sqrt{2}}{5}`} />
          . Our circle&apos;s diameter is <Katex math={String.raw`\tfrac27`} />. Is{" "}
          <Katex math={String.raw`\tfrac27 \geq \tfrac{\sqrt{2}}{5}`} />? Squaring both sides yields{" "}
          <Katex math={String.raw`\tfrac{4}{49} \geq \tfrac{2}{25} = \tfrac{4}{50}`} />.
          <br />
          <br />
          Can you prove you can always win the game if you had a square glass with side length{" "}
          <Katex math={String.raw`\tfrac15`} />?
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
          Assume for a moment that your glass is a square with side length{" "}
          <Katex math={String.raw`\tfrac15`} />.
          Then, divide the square board into 25 smaller squares, each with side length{" "}
          <Katex math={String.raw`\tfrac15`} /> to match your glass. By the pigeonhole principle,
          at least one of these smaller squares will contain at least 3 ants, even if your opponent placed them optimally. This means that
          your glass will always be able to capture at least 3 ants.
          <br />
          <br />
          We already proved in the hints above that your glass with radius{" "}
          <Katex math={String.raw`\tfrac17`} /> can fully cover a square with side length{" "}
          <Katex math={String.raw`\tfrac15`} />, meaning
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
