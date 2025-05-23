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
        A prison guard gives two prisoners a chance at freedom. He gives them the choice to play in the following game:
        <br />
        <br />
        The two prisoners (let's call them <i>A</i> and <i>B</i>) will be imprisoned in separate cells, each with a fair coin.
        <br />
        <br />
        In each round of the game, a guard will come to each prisoner's cell.
        The guard will have the prisoner flip his coin, tell him the result, and then ask him what the other prisoner flipped.
        <br />
        <br />
        <ul>
          <li>
            If they both guess correctly, they will be instantly released.
          </li>
          <li>
            If neither of them guesses correctly, they will both be executed immediately.
          </li>
          <li>
            If one of the two prisoners correctly guesses what the other flipped, they have passed that round.
          </li>
          <li>
            If they are able to pass 1000 rounds in a row, they will be released.
          </li>
        </ul>
        <br />
        If they choose to play, they will be given a brief moment to come up with a strategy together.
        They are tired of living in prison, but they definitely don't want to be executed.
        Should they choose to play?
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
          Here's the simple yet effective strategy to guarantee their release after the 1000th round:
          <br />
          <br />
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
          <br />
          <br />
          There's no way for them to be released before the 1000th round. This strategy guarantees that <i>exactly</i> one of the two prisoners
          will guess correctly, meaning there's no chance of them being released because they were both correct.
          If they wanted to take a chance at being released earlier, they would take on an equal risk of being executed.
        </TextSection >
      )}
      <br />
      <Link to="/puzzleslist/">Back to puzzles</Link>
    </Layout >
  );
};

export const Head = () => <Seo title="Two Coins" />;

export default TwoCoinsPage;
