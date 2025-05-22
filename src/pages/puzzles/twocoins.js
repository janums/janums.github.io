import * as React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import TextButton from "../../components/TextButton";
import TextSection from "../../components/TextSection";
import ExternalLink from "../../components/ExternalLink";

const TwoCoinsPage = () => {
  const [showHint1, setShowHint1] = React.useState(false);
  const [showSection, setShowSection] = React.useState(false);
  return (
    <Layout>
      <h1>Two Prisoners, Two Coins</h1>
      <p>
        Two prisoners (let's call them <i>A</i> and <i>B</i>) are imprisoned in separate cells, each with a fair coin. They are given the following challenge:
        <br />
        <br />
        In each round, a guard will come to each prisoner's cell.
        Each guard will have the prisoner flip his coin, tell him the result, and then ask him what the other prisoner flipped.
        <br />
        <br />
        <ul>
          <li>
            If they both guess correctly, they will be instantly released.
          </li>
          <li>
            If neither of them guess correctly, they will both be executed immediately.
          </li>
          <li>
            If at least one of the two prisoners correctly guesses what the other flipped, they have passed that round.
          </li>
          <li>
            If they are able to pass 1000 rounds in a row, they will be released.
          </li>
        </ul>
        <br />
        They are given a brief moment to come up with a strategy together.
        They are tired of living in prison, but they most definitely do not want to be executed.
        What can they do? Can they maximize their chances of survival and try to be released?
      </p>
      <p>Source: unknown</p>
      <TextButton onClick={() => setShowHint1((prev) => !prev)}>
        {showHint1 ? 'Hide Hint' : 'Show Hint'}
      </TextButton>
      {showHint1 && (
        <TextSection>
          There exists a strategy that guarantees their release after the 1000th round.
        </TextSection>
      )}
      <br />
      <TextButton onClick={() => setShowSection((prev) => !prev)}>
        {showSection ? 'Hide Solution' : 'Show Solution'}
      </TextButton>
      {showSection && (
        <TextSection>
          Here's the simple yet effective strategy:<br />
          <i>A</i> should always guess whatever he himself flipped, and <i>B</i> should always guess the opposite of his own flip.
          <br />
          <br />
          Why does this work? Let's do the casework (there are only two cases).
          <br />
          <br />
          Case 1: <i>A</i> and <i>B</i> flipped their coins the same way (both heads or both tails).{" "}
          <i>A</i> will always guess <i>B</i>'s coin correctly because his guess is the same as what he himself flipped.
          <br />
          <br />
          Case 2: <i>A</i> and <i>B</i> flipped their coins differently (one heads, one tails).
          Since <i>B</i> is always guessing the opposite of what he himself flipped, and the two prisoners flipped their coins
          differently, <i>B</i> will guess <i>A</i>'s coin correctly.
        </TextSection >
      )}
      <br />
      <Link to="/puzzleslist/">Back to puzzles</Link>
    </Layout >
  );
};

export const Head = () => <Seo title="Two Coins" />;

export default TwoCoinsPage;
