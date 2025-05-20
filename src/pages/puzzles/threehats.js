import * as React from "react";
import { Link } from "gatsby";

import Layout from "../../components/layout";
import Seo from "../../components/seo";

const ThreePeopleFiveHatsPage = () => (
  <Layout>
    <h1>3 People 5 Hats puzzle</h1>
    <p>coming soon (hopefully)...</p>
    <Link to="/">Go back to the homepage</Link>
    <Link to="/puzzleslist/">Go back to the puzzles list</Link>
  </Layout>
);

export const Head = () => <Seo title="3 People 5 Hats puzzle" />;

export default ThreePeopleFiveHatsPage;
