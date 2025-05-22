import * as React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import TextButton from "../../components/TextButton";
import TextSection from "../../components/TextSection";
import ExternalLink from "../../components/ExternalLink";

const ThreePeopleFiveHatsPage = () => {
  const [showHint1, setShowHint1] = React.useState(false);
  const [showHint2, setShowHint2] = React.useState(false);
  const [showSection, setShowSection] = React.useState(false);
  return (
    <Layout>
      <h1>A Thousand Coins</h1>
      <p>
        I've laid out 1000 coins on a table, with exactly 20 coins heads up and the remaining 980 tails up.
        You can't see the coins because you've been blindfolded, but I ask you to split the coins into exactly two groups
        such that each group has an equal number of heads up coins. You can't know if a coin is heads or tails by touching it,
        but you can flip as many coins as you want. Is this possible? If so, what's your strategy?
      </p>
      <p>Source: <ExternalLink href="https://www.amazon.com/Practical-Guide-Quantitative-Finance-Interviews/dp/1438236662">The green book</ExternalLink></p>
      <TextButton onClick={() => setShowHint1((prev) => !prev)}>
        {showHint1 ? 'Hide Hint 1' : 'Show Hint 1'}
      </TextButton>
      {showHint1 && (
        <TextSection>
          It is possible!
          <br />
          <br />
          Remember: it doesn't matter how many heads are in each group; you don't need to know this. You only need to split the coins into two groups and say,
          with certainty, that each group has an equal number of heads up coins. You can flip as many coins as you want, whenever you want.
        </TextSection>
      )}
      <br />
      <TextButton onClick={() => setShowHint2((prev) => !prev)}>
        {showHint2 ? 'Hide Hint 2' : 'Show Hint 2'}
      </TextButton>
      {showHint2 && (
        <TextSection>
          A good strategy for this type of problem is to consider a smaller number of coins.
          Try to solve the case for 3 coins with 1 heads up, then 4 with 1, then 5 with 1, etc.
        </TextSection>
      )}
      <br />
      <TextButton onClick={() => setShowSection((prev) => !prev)}>
        {showSection ? 'Hide Solution' : 'Show Solution'}
      </TextButton>
      {showSection && (
        <TextSection>
          Here's the solution: pick 20 coins at random and flip them all over. This is the second group.
          <br />
          <br />
          Why does this work? Let's do some casework.
          <br />
          <br />
          Case 1: the 20 coins selected are all 20 heads up coins. Great! Once you flip them, they all become tails.
          The other 980 coins are still tails, so now your two groups have an equal number of heads up coins (0 in each).
          <br />
          <br />
          Case 2: the 20 coins have 0 heads up coins. Once you flip them, they all become heads.
          The other 980 coins still have the 20 heads in them, so now your two groups have an equal number of heads up coins (20 in each).
          <br />
          <br />
          Case 3: the 20 coins have <i>x</i> heads up coins, such that <i>x</i> is between 1 and 19.
          Since you selected 20 coins with <i>x</i> heads for the second group, the first group of 980 coins has 20-<i>x</i> heads remaining.
          In your group of 20 coins, <i>x</i> of which are heads, once you flip them, exactly 20-<i>x</i> heads up coins remain.
          <br />
          <br />
          Cases 1 and 2 can actually be collapsed into case 3, since case 3 works when <i>x</i> is between 0 and 20, but I found it
          a bit easier to reason through the first two cases before generalizing.
        </TextSection>
      )}
      <br />
      <Link to="/puzzleslist/">Back to puzzles</Link>
    </Layout>
  );
};

export const Head = () => <Seo title="Birthday Cake" />;

export default ThreePeopleFiveHatsPage;
