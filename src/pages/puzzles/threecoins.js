import * as React from "react";
import { Link } from "gatsby";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import TextButton from "../../components/TextButton";
import TextSection from "../../components/TextSection";
import ExternalLink from "../../components/ExternalLink";
import Katex from "../../components/Katex";

const ThreeCoinsPage = () => {
  const [showSection, setShowSection] = React.useState(false);
  return (
    <Layout>
      <h1>Three Coins</h1>
      <p>
        I've put three coins in a bag: one two-headed coin, one two-tailed coin, and one fair coin.
        You draw one of the coins from the bag, flip it, and it lands heads.
        What is the probability that the coin you drew is two-headed?
      </p>
      <p>Source: <ExternalLink href="https://math.dartmouth.edu/news-resources/electronic/puzzlebook/book/book.pdf">Peter Winkler</ExternalLink></p>
      <TextButton onClick={() => setShowSection((prev) => !prev)}>
        {showSection ? 'Hide Solution' : 'Show Solution'}
      </TextButton>
      {showSection && (
        <TextSection>
          The answer is not <Katex math={String.raw`\tfrac12`} />. If you quickly landed there, stop reading now and think about it some more.
          <br />
          <br />
          I promised that all the puzzles on this page will not require any math. That said, if you know Bayes' rule, you may have
          solved this correctly almost immediately. I will first try to reason through the solution (without Bayes' rule),
          and then use Bayes' rule to solve it after.
          <br />
          <br />
          <b>No math solution:</b>
          <br />
          <br />
          Let's reason through the problem. 
          This is somewhat similar to the famous <ExternalLink href="https://en.wikipedia.org/wiki/Monty_Hall_problem">Monty Hall problem</ExternalLink>.
          <br />
          <br />
          One way to approach this would be to think in <i>sides</i> (4 surfaces).
          Let's say the two-headed coin has Side A and Side B, and the fair coin has Side C (heads) and Side D (tails). 
          You have flipped one of Sides A, B, or C. Of those three sides, two belong to the two-headed coin, so the probability that
          you're looking at the two-headed coin is <Katex math={String.raw`\tfrac23`} />.
          <br />
          <br />
          If that's not intuitive, here's a more empirical way to think about it: remove the two-tailed coin from the bag, and conduct the experiment again 100 times.
          You will pick the fair coin ~50 times and the two-headed coin ~50 times. Of the 50 times you pick the two-headed coin, you flip heads 50 times.
          But, of the 50 times you draw the fair coin, you flip heads only ~25 times. So you see heads ~75 times total, but the two-headed coin is responsible for 
          ~50 of them. <Katex math={String.raw`50/75`} /> = <Katex math={String.raw`\tfrac23`} />.
          <br />
          <br />
          <b>Bayes' rule solution:</b>
          <br />
          <br />
          <p>
            Let <Katex math={String.raw`A`} /> be the event that the drawn coin is two-headed, and{" "}
            <Katex math={String.raw`B`} /> the event that the flip comes up heads. We want{" "}
            <Katex math={String.raw`P(A\mid B)`} />.
          </p>
          <p>Bayes&apos; rule:</p>
          <p style={{ marginLeft: "0.5em" }}>
            <Katex
              display
              math={String.raw`P(A\mid B) = \frac{P(B\mid A)\,P(A)}{P(B)}`}
            />
          </p>
          <p>
            Each coin is equally likely to be drawn, so <Katex math={String.raw`P(A)=\frac13`} />. If the coin is two-headed, the flip is always heads, so{" "}
            <Katex math={String.raw`P(B\mid A)=1`} />.
          </p>
          <p>
            For <Katex math={String.raw`P(B)`} />, condition on which coin was drawn (two-headed, two-tailed, or fair):
          </p>
          <p style={{ marginLeft: "0.5em" }}>
            <Katex
              display
              math={String.raw`P(B) = \tfrac13\cdot 1 + \tfrac13\cdot 0 + \tfrac13\cdot \tfrac12 = \tfrac13 + \tfrac16 = \tfrac12`}
            />
          </p>
          <p>Substitute into Bayes&apos; rule:</p>
          <p style={{ marginLeft: "0.5em" }}>
            <Katex
              display
              math={String.raw`P(A\mid B) = \frac{1\cdot \frac13}{\frac12} = \frac23 `}
            />
          </p>
          <br />
          <br />
        </TextSection>
      )}
      <br />
      <Link to="/puzzleslist/">Back to puzzles</Link>
    </Layout>
  );
};

export const Head = () => <Seo title="Three Coins" />;

export default ThreeCoinsPage;
