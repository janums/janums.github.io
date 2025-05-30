import * as React from "react";
import { Link } from "gatsby";
import rectangleImg from "../../images/rectangle.png";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import TextButton from "../../components/TextButton";
import TextSection from "../../components/TextSection";

const RectangleCakePage = () => {
  const [showHint1, setShowHint1] = React.useState(false);
  const [showHint2, setShowHint2] = React.useState(false);
  const [showSection, setShowSection] = React.useState(false);
  return (
    <Layout>
      <h1>Birthday Cake</h1>
      <p>You baked an awesome, perfectly rectangular cake for your friend's birthday party.
        But before you serve it, someone cuts a smaller, rectangular piece out of the cake.
        With a single, straight cut, can you always divide the remaining cake into two equal halves (equal areas)?
        Devise a strategy to draw the line and cut along it.
        <br />
        <br />
        Note: your adversary may have cut out the piece in any way - could be a random orientation and/or along the edge, but the cut
        will be still be a rectangle. In the image below, the colored rectangles are some different examples of what the inner cutout
        could look like. Your strategy for cutting a single straight line should work for all of these cases.
      </p>
      <div style={{ textAlign: 'left' }}>
        <img src={rectangleImg} alt="Rectangular birthday cake" style={{ maxWidth: '75%' }} />
      </div>
      <p>Source: unknown</p>
      <TextButton onClick={() => setShowHint1((prev) => !prev)}>
        {showHint1 ? 'Hide Hint 1' : 'Show Hint 1'}
      </TextButton>
      {showHint1 && (
        <TextSection>
          Just consider the full rectangle (no cutout). How many ways can you cut the full rectangle in half with a single line? (Solution in next hint)
        </TextSection>
      )}
      <br />
      <TextButton onClick={() => setShowHint2((prev) => !prev)}>
        {showHint2 ? 'Hide Hint 2' : 'Show Hint 2'}
      </TextButton>
      {showHint2 && (
        <TextSection>
          There are infinitely many ways to cut a rectangle in half with a striaght line. What's common about all of them?
        </TextSection>
      )}
      <br />
      <TextButton onClick={() => setShowSection((prev) => !prev)}>
        {showSection ? 'Hide Solution' : 'Show Solution'}
      </TextButton>
      {showSection && (
        <TextSection>
          If you're a really out-of-the-box thinker, you might have landed on cutting the cake <i>horizontally</i> (along the width of the cake).
          That does technically work for a 3-d rectangular prism, but what if the inner cutout doesn't go all the way through the cake? Our strategy should handle this too.
          <br />
          <br />
          Any line that cuts a regular rectangle in half will always pass through the center point of the rectangle.
          We want to cut both the outer and inner rectangles in exactly half. There exists a single line that passes through the center of both rectangles.
          <br />
          <br />
          We can use this line to cut the remaining cake in equal halves.
        </TextSection>
      )}
      <br />
      <Link to="/puzzleslist/">Back to puzzles</Link>
    </Layout>
  );
};

export const Head = () => <Seo title="Birthday Cake" />;

export default RectangleCakePage;
