import * as React from "react";
import { Link } from "gatsby";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import TextButton from "../../components/TextButton";
import TextSection from "../../components/TextSection";
import ExternalLink from "../../components/ExternalLink";
const ThreePeopleFiveHatsPage = () => {
  const [showHint1, setShowHint1] = React.useState(false);
  const [showSection, setShowSection] = React.useState(false);
  return (
    <Layout>
      <h1>2 glass balls,100-story building</h1>
      <p>You are holding two glass balls in a 100-story building. If a ball is dropped off the side of the building from floor <i>N</i> or
        any floor below <i>N</i>, it will not break. If it's dropped from any floor above <i>N</i>, it will break. What is the fewest number
        of drops, <i>k</i>, you need to guarantee that you can find <i>N</i>?
        <br />
        <br />
        Note: you want a strategy that will minimize the number of drops needed in the worst case scenario.
      </p>
      <p>Source: <ExternalLink href="https://www.amazon.com/Practical-Guide-Quantitative-Finance-Interviews/dp/1438236662">The green book</ExternalLink></p>
      <TextButton onClick={() => setShowHint1((prev) => !prev)}>
        {showHint1 ? 'Hide Hint' : 'Show Hint'}
      </TextButton>
      {showHint1 && (
        <TextSection>
          The naive approach is to drop the ball from every floor, starting at 1, until it breaks. This takes 100 drops in the worst case.
          <br />
          <br />
          We can do better by doing a coarse-grain search follow by a fine-grain search. First, we drop the ball from floor 10, then 20, then 30, etc.
          Once the first ball breaks, we can do a fine-grain search by dropping the second ball from the floors between our last drop and the current floor.
          <br />
          <br />
          In the worst case, we drop the first ball at floor 10, 20, ... 100, and then from 91 to 99. This takes 19 drops in the worst case.
          <br />
          <br />
          19 drops in the worst case is pretty good, but we can do <i>even</i> better.
        </TextSection>
      )}
      <br />
      <TextButton onClick={() => setShowSection((prev) => !prev)}>
        {showSection ? 'Hide Solution' : 'Show Solution'}
      </TextButton>
      {showSection && (
        <TextSection>
          (Read the hint first if you haven't already.)
          <br />
          <br />
          Here's the key insight to doing better than 19 drops: we want to "sacrifice" the performance of the better scenarios
          (i.e. the first ball breaks at floor 10 or 20) in order to improve the worst-case scenario. How can we do this?
          <br />
          <br />
          Let's build some intuition. We somewhat arbitrarily decided to do the coarse-grain search every 10 floors. We can play with different values here, but we have to realize that
          the hop size in our coarse-grain search has to be <i>dynamic</i>. That is, we might jump 20 floors the first time, but then jump 19, 18, etc.
          In the case that the first ball breaks early, we will have a longer search with the second ball, which is alright, since if it breaks later,
          we'll have a shorter search at the higher floors.
          <br />
          <br />
          Putting this more formally: for the first trial, we drop from the <i>k</i><sup>th</sup> floor. If it breaks, we use the second ball on floors 1 through <i>k-1</i>.
          If it doesn't break, we then "jump" <i>k-1</i> floors. Again, if it breaks, we use the second ball on floors k+1 through <i>k+k-2</i>.
          If we continue this way, we can see that we will never need more than <i>k</i> drops in the worst case, since we are always decrementing the hop size by 1,
          and then searching from the previous drop point to the next one.
          The number of drops for the first and second balls (<i>d<sub>1</sub></i>, <i>d<sub>2</sub></i>) are: (1, k-1), (2, k-2), (3, k-3), ..., (k-1, 1),
          so they <i>always</i> sum to <i>k</i>.
          <br />
          <br />
          At this point, the actual solution doesn't really matter; we would have to solve <i>k</i> + <i>k-1</i> + <i>k-2</i> + ... + 1 &ge; 100 to get the minimum.
          We can just start at 19 and keep decreasing <i>k</i> to get the minimum, which turns out to be 14.
          <br />
          <br />
          In simpler terms, for the first trial, we drop from the 14th floor. If it breaks, we use the second ball on floors 1 through 13, for a maximum of 1+13=14 drops.
          If it doesn't break, we then "jump" 13 (not 14) floors, to floor 27. Again, if it breaks, we use the second ball on floors 15 through 27, for a maximum of 2+12=14 drops.
          You continue proceeding this way, decrementing the jump size by 1 each time in the coarse-grain search.
          <br />
          <br />
          If you're mathematically inclined, you may have noticed that you can shorten the series summation: <i>k</i> + <i>k-1</i> + <i>k-2</i> + ... + 1 = <i>k(k+1)/2</i>.
          When you minimize this (keeping the sum above 100), you get <i>k</i> = 14.
        </TextSection>
      )}
      <br />
      <Link to="/puzzleslist/">Back to puzzles</Link>
    </Layout>
  );
};

export const Head = () => <Seo title="2 glass balls" />;

export default ThreePeopleFiveHatsPage;
