import * as React from "react";
import { Link } from "gatsby";
import rectangleImg from "../../images/rectangle.png";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import TextButton from "../../components/TextButton";
import TextSection from "../../components/TextSection";

const AntsPage = () => {
  const [showHint1, setShowHint1] = React.useState(false);
  const [showSection, setShowSection] = React.useState(false);
  return (
    <Layout>
      <h1>Ants on a Log</h1>
      <p>
        You're standing in front of a log that's 100 inches long.
        You're also holding 4 ants, each of which can walk at a speed of 1 inch per second.
        You can place the ants anywhere along the log, in either direction, and they will all start walking at the same time.
        If two ants collide, they will both turn around and walk in the opposite direction.
        <br />
        <br />
        You want to <i>maximize</i> the amount of time that any ant is on the log.
        That is, you start a timer when the ants start walking, and you stop the timer when the last ant falls off the log.
        How should you place the ants on the log to do this?
      </p>
      <p>Source: unknown</p>
      <TextButton onClick={() => setShowHint1((prev) => !prev)}>
        {showHint1 ? 'Hide Hint' : 'Show Hint'}
      </TextButton>
      {showHint1 && (
        <TextSection>
          The maximum amount of time is the same for 4 ants as it is for 3 ants.
        </TextSection>
      )}
      <br />
      <TextButton onClick={() => setShowSection((prev) => !prev)}>
        {showSection ? 'Hide Solution' : 'Show Solution'}
      </TextButton>
      {showSection && (
        <TextSection>
          The specific number of ants (4) is somewhat of a red herring. It doesn't matter how many ants you have -
          for any number of ants &ge; 1, they can only be on the log for at most 100 seconds,
          which is the time is takes for a single ant to walk the length of the log.
          <br />
          <br />
          Why is that the case? Here's the key insight: two ants colliding with each other is equivalent to them just walking past each other.
          You may now be able to visualize this a bit better: a single ant, no matter what it runs into, will just continue to walk by it, meaning that
          it can only take 100 seconds at most to walk the length of the log.
          <br />
          <br />
          So, the best strategy is to just place any one ant at an end of the log facing inwards.
          It doesn't matter how the other ants are placed.
        </TextSection>
      )}
      <br />
      <Link to="/puzzleslist/">Back to puzzles</Link>
    </Layout>
  );
};

export const Head = () => <Seo title="Ants on a Log" />;

export default AntsPage;
