import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const WhatMakesAPuzzlePage = () => (
  <Layout>
    <h1>What makes a good puzzle?</h1>
    <p>coming soon (hopefully)...</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export const Head = () => <Seo title="What makes a good puzzle?" />;

export default WhatMakesAPuzzlePage;
