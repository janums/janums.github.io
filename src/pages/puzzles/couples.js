import * as React from "react";
import { Link } from "gatsby";
import rectangleImg from "../../images/rectangle.png";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import TextButton from "../../components/TextButton";
import TextSection from "../../components/TextSection";

const CouplesPage = () => {
  const [showHint1, setShowHint1] = React.useState(false);
  const [showHint2, setShowHint2] = React.useState(false);
  const [showSection, setShowSection] = React.useState(false);
  return (
    <Layout>
      <h1>Couples Party</h1>
      <p>You and your partner are hosting a party for couples. You have 8 guests (4 couples) over for dinner,
        for a total of 10 people at the party (including yourselves).
        <br />
        <br />
        Not everyone knows each other at the party, and you and your partner don't necessarily know everyone either. At some point during the party,
        you notice that the 9 other people there (including your partner) know a <i>unique</i> number of people at the party.
        <br />
        <br />
        Each person knows at least their partner, and knowing someone goes both ways (i.e. if <i>A</i> knows <i>B</i>, then <i>B</i> knows <i>A</i>).
        How many people do <i>you</i> know at the party?
      </p>
      <p>Source: unknown</p>
      <TextButton onClick={() => setShowHint1((prev) => !prev)}>
        {showHint1 ? 'Hide Hint 1' : 'Show Hint 1'}
      </TextButton>
      {showHint1 && (
        <TextSection>
          Each of the other 9 people know 1, 2, 3, ..., 9 people at the party.
          This <i>must</i> mean that you know the same number of people as someone else at the party.
        </TextSection>
      )}
      <br />
      <TextButton onClick={() => setShowHint2((prev) => !prev)}>
        {showHint2 ? 'Hide Hint 2' : 'Show Hint 2'}
      </TextButton>
      {showHint2 && (
        <TextSection>
          Consider the person that only knows 1 person (their partner). How many people does their partner <i>have to</i> know?
        </TextSection>
      )}
      <br />
      <TextButton onClick={() => setShowSection((prev) => !prev)}>
        {showSection ? 'Hide Solution' : 'Show Solution'}
      </TextButton>
      {showSection && (
        <TextSection>
          Let's call the person that knows <i>N</i> people p<i>N</i>. So, p1 knows 1 person, p2 knows 2 people, etc.
          So, the other 9 people at the party are p1, p2, ..., p9.
          <br />
          <br />
          There is a person that only knows 1 person (their partner), p1. Here's the key insight:
          Their partner <i>has</i> to be p9. Why?
          Assume for a moment that their partner knew 8 people. Well, then p9 is
          someone else - but p9 knowns everyone else at the party, including p1.
          This is a contradiction, so p1 and p9 must be partners.
          <br />
          <br />
          Now consider p8. p8 must know everyone except p1. p2 can only know p9 and one other person, so p2 must know p8. p2 and p8 are partners.
          <br />
          <br />
          We can continue following this logic to conclude that (p3, p7) and (p4, p6) are partners.
          <br />
          <br />
          Now we've landed on p5. p9 cannot know p1, p2, p3, or p4, and must know p9, p8, p7, and p6.
          The other couples are already paired off, so p5's couple must <i>also</i> know 5 people.
          <br />
          <br />
          Since 5 is the only duplicate, your partner is p5, and you must know 5 people at the party.
        </TextSection>
      )}
      <br />
      <Link to="/puzzleslist/">Back to puzzles</Link>
    </Layout>
  );
};

export const Head = () => <Seo title="Couples Party" />;

export default CouplesPage;
