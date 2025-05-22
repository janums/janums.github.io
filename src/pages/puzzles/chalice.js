import * as React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import TextButton from "../../components/TextButton";
import TextSection from "../../components/TextSection";
import ExternalLink from "../../components/ExternalLink";

const KingsChalicePage = () => {
  const [showHint1, setShowHint1] = React.useState(false);
  const [showSection, setShowSection] = React.useState(false);
  return (
    <Layout>
      <h1>The King's Chalice</h1>
      <p>
        A king has captured 100 prisoners, but he's bored and wants to entertain himself. He's going to give the prisoners a chance to be released,
        so he poses the following challenge:
        <br />
        <br />
        The king will call prisoners, one by one, into a meeting room. In the meeting room, there's a table with a chalice on it. Each prisoner has
        the choice to flip the chalice upside down, or, if it's already upside down, flip it right-side up. The king will not interfere with the chalice between
        prisoners. They don't have to flip the chalice if they don't want to.
        The king will use a random number generator to determine which prisoner will be called into the room, and he will continue to call prisoners in forever.
        <br />
        <br />
        If the prisoners can announce to the king that they have each been called into the room <i>at least</i> once, then they will all be released.
        However, if they're wrong, they will all be executed.
        <br />
        <br />
        The king gives the prisoners one night to discuss a strategy beforehand. What should they do?
      </p>
      <p>Source: <ExternalLink href="https://www.amazon.com/Practical-Guide-Quantitative-Finance-Interviews/dp/1438236662">The green book</ExternalLink></p>
      <TextButton onClick={() => setShowHint1((prev) => !prev)}>
        {showHint1 ? 'Hide Hint' : 'Show Hint'}
      </TextButton>
      {showHint1 && (
        <TextSection>
          They should designate one prisoner as the spokesman, who will be responsible for announcing to the king that they have each been called into the room.
        </TextSection>
      )}
      <br />
      <TextButton onClick={() => setShowSection((prev) => !prev)}>
        {showSection ? 'Hide Solution' : 'Show Solution'}
      </TextButton>
      {showSection && (
        <TextSection>
          This solution might seem impossible at first, but there does exist a strategy to get them out.
          <br />
          <br />
          Let's number the prisoners 1 through 100, and designate prisoner 1 as the spokesman for the group.
          <br />
          <br />
          Here's the policy for prisoner 1:
          <br />
          <br />
          <ul>
            <li>Keep a running count, <i>c</i>, of the number of times the chalice has been seen upside down.</li>
            <li>When called into the room for the first time, increment <i>c</i> by 1.</li>
            <li>Each time you're called into the room, if the chalice is upside down, increment <i>c</i> by 1 and flip it right-side up.</li>
            <li>Each time you're called into the room, if the chalice is right-side up, do nothing.</li>
            <li>Once <i>c</i> reaches 100, announce that they have all been called into the room.</li>
          </ul>

          Every other prisoner can follow this policy:
          <br />
          <br />
          <ul>
            <li>If the prisoner is called into the room and the chalice is upside down, do nothing.</li>
            <li>If the prisoner is called into the room and the chalice is right-side up AND the prisoner has never flipped the chalice before, flip it.</li>
            <li>If the prisoner is called into the room and the chalice is right-side up AND the prisoner has already flipped the chalice, do nothing.</li>
          </ul>
          Why does this work? The general idea is that each prisoner somehow needs to send a signal to prisoner 1 that he's been called into the room.
          By flipping the chalice upside down, each prisoner is sending this message, since only prisoner 1 will flip the chalice back right-side up.
          And because each prisoner will only flip the chalice once, prisoner 1 knows that every time he sees the chalice upside down, it's a new prisoner
          that's sending him a message. It may take a prisoner multiple visits before he has the chance to send a signal (because the chalice must be right-side up,
          and it's likely that another prisoner will have already flipped it), but, eventually, every prisoner will get a chance to send a signal.
          <br />
          <br />
          This solution relies on randomness to work. Because the king uses a RNG to call the prisoners in order, prisoner 1 will eventually
          see 99 signals from the other prisoners and be able to announce, with certainty, that they have all been called into the room.
          The prisoners will likely not be released at the first moment that they have all been seen because this strategy relies on the RNG to eventually
          have each prisoner send the signal to prisoner 1. This will eventually happen (because it's an RNG), but it may take a while.
        </TextSection>
      )}
      <br />
      <Link to="/puzzleslist/">Back to puzzles</Link>
    </Layout>
  );
};

export const Head = () => <Seo title="King's Chalice" />;

export default KingsChalicePage;
