import * as React from "react";
import { Link } from "gatsby";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import TextButton from "../../components/TextButton";
import TextSection from "../../components/TextSection";
import ExternalLink from "../../components/ExternalLink";
import Katex from "../../components/Katex";

const BentCoinPage = () => {
  const [showHint1, setShowHint1] = React.useState(false);
  const [showSection, setShowSection] = React.useState(false);
  return (
    <Layout>
      <h1>One Bent Coin</h1>
      <p>
        We are waiting in line at the water park and begin arguing about who can go down the slide first.
        I pull out a penny and suggest we flip for it.
        What I don't admit is that the penny is slightly bent, making it just a bit more likely to land on heads than tails.
        <br />
        <br />
        I claim heads, but right before I flip, you notice the bent coin — "Hey! You're cheating!"
        <br />
        <br />
        I admit to the bias in the coin, but we still can't decide who goes first. Can we still use the coin to decide in a fair way?
      </p>
      <p>Source: <ExternalLink href="https://math.dartmouth.edu/news-resources/electronic/puzzlebook/book/book.pdf">Peter Winkler</ExternalLink></p>
      <TextButton onClick={() => setShowHint1((prev) => !prev)}>
        {showHint1 ? 'Hide Hint' : 'Show Hint'}
      </TextButton>
      {showHint1 && (
        <TextSection>
          We can flip the coin more than once.
        </TextSection>
      )}
      <br />
      <TextButton onClick={() => setShowSection((prev) => !prev)}>
        {showSection ? 'Hide Solution' : 'Show Solution'}
      </TextButton>
      {showSection && (
        <TextSection>
          The key is to flip the coin multiple times until we end on one of two equiprobable outcomes.
          What are those two outcomes?
          <br />
          <br />
          We can agree on the following procedure: we flip the coin twice. If the first flip is heads and the second is tails, you win.
          If the first flip is tails and the second is heads, I win. If both flips are the same (both heads or both tails), we restart.
          <br />
          <br />
          Why does this work? It doesn't matter that heads is more likely than tails overall. We continue the procedure until we get two alternate 
          flips in a row — heads then tails, or tails then heads, are both equally likely.
          <br />
          <br />
          More formally, Let <Katex math={String.raw`p`}/> be the probability the coin lands heads, 
          so <Katex math={String.raw`1-p`}/> is the probability the coin lands tails.
          It's clear that <Katex math={String.raw`p*(1-p) = (1-p)*p`}/>, regardless of the value of <Katex math={String.raw`p`}/>.
        </TextSection>
      )}
      <br />
      <Link to="/puzzleslist/">Back to puzzles</Link>
    </Layout>
  );
};

export const Head = () => <Seo title="One Bent Coin" />;

export default BentCoinPage;
