import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogPage = () => (
  <Layout>
    <h1>[under construction]</h1>
    <p>primarly for travel</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export const Head = () => <Seo title="Blog" />;

export default BlogPage;
