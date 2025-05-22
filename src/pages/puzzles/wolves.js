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
      <h1>One Sheep on an Island of Wolves</h1>
      <p>
        There is a pack of exactly 99 wolves on an island living alongside exactly 1 sheep.
        Usually, the island herder protects the sheep, but he's leaving for a few days.
        Before he leaves, he casts the following spell on all the wolves, in an effort to protect the sheep:
        <br />
        <br />
        <i>If any wolf kills and eats the sheep, it will turn into a sheep.</i>
        <br />
        <br />
        Each wolf has a few different options: it can either continue eating the grass on the island, or it can eat the sheep (only one wolf can eat the sheep).
        Assume each wolf is perfectly rational. That is, all of them definitely don't want to turn into a sheep and then get eaten by another wolf,
        but each one would prefer to eat the sheep over the grass on the island, if it knew somehow that it wouldn't get eaten once it turned into a sheep
        - it could live forever as a sheep on the island.
        <br />
        <br />
        The herder leaves the island and expects all 99 wolves and 1 sheep to be remaining when he's back. Has he made a mistake? Does the sheep get eaten?
      </p>
      <p>Source: <ExternalLink href="https://www.amazon.com/Practical-Guide-Quantitative-Finance-Interviews/dp/1438236662">The green book</ExternalLink></p>
      <TextButton onClick={() => setShowHint1((prev) => !prev)}>
        {showHint1 ? 'Hide Hint 1' : 'Show Hint 1'}
      </TextButton>
      {showHint1 && (
        <TextSection>
          The herder made a dire mistake - the sheep will get eaten! Why?
        </TextSection>
      )}
      <br />
      <TextButton onClick={() => setShowHint2((prev) => !prev)}>
        {showHint2 ? 'Hide Hint 2' : 'Show Hint 2'}
      </TextButton>
      {showHint2 && (
        <TextSection>
          Consider a smaller number of wolves and work up to 99.
        </TextSection>
      )}
      <br />
      <TextButton onClick={() => setShowSection((prev) => !prev)}>
        {showSection ? 'Hide Solution' : 'Show Solution'}
      </TextButton>
      {showSection && (
        <TextSection>
          What happens when there's only 1 wolf and 1 sheep on the island? Well, the wolf can eat the sheep and know, with certainty,
          that it will not be eaten (because there are no other wolves left).
          <br />
          <br />
          So what happens when there are 2 wolves and 1 sheep? Recall that the wolves are perfectly rational, so they know what happens in the 1 wolf case.
          They know that, if either of them is the first to eat the sheep, they will subsequently get eaten by the other wolf.
          They have reached a stalemate (technically a Nash equilibrium), and both choose to live forever without eating the sheep.
          <br />
          <br />
          When there are 3 wolves and 1 sheep, the wolves will rush to be the first to eat the sheep, since they know that the other two wolves will reach
          an impasse in the 2 wolf case. As a result, another equilibrium exists at the 4 wolf case, meaning that the wolves will again rush to eat the sheep in
          the 5 wolf case.
          <br />
          <br />
          Notice that a pattern emerges. An equilibrium exists when there are an even number of wolves. When there are an odd number of wolves,
          the wolves will race to be the first to eat the sheep.
          <br />
          <br />
          In the 99 wolf case, the wolves will race to be the first to eat the sheep, since they know that the other 98 wolves will have reached an impasse
          when there are 98 wolves remaining. The sheep gets eaten, and the herder comes back to find 98 wolves and 1 sheep!
        </TextSection>
      )}
      <br />
      <Link to="/puzzleslist/">Back to puzzles</Link>
    </Layout>
  );
};

export const Head = () => <Seo title="Birthday Cake" />;

export default ThreePeopleFiveHatsPage;
