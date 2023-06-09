import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

import { PineconeClient } from "@pinecone-database/pinecone";

// const pinecone = new PineconeClient();
// await pinecone.init({
//   environment: "us-central1-gcp",
//   apiKey: "0083880d-1da6-4a0b-9245-b2bca2a222d7",
// });

// async function pinecone_call() {
//   const index = pinecone.Index("example-index");
//   const queryRequest = {
//     vector: [0.1, 0.2, 0.3, 0.4],
//     topK: 10,
//     includeValues: true,
//     includeMetadata: true,
//   };
//   const queryResponse = await index.query({ queryRequest });
//   return queryResponse;
// }

const ReadingPage = () => (
  <Layout>
    <h1>[under construction]</h1>
    <p>built with Pinecone.io</p>
    {/* <script>let response = pinecone_call(); console.log(response);</script> */}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export const Head = () => <Seo title="Reading" />;

export default ReadingPage;
