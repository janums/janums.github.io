import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import ExternalLink from "../components/ExternalLink";

const WhatMakesAPuzzlePage = () => (
  <Layout>
    <h1>What makes a puzzle "good"?</h1>
    <p>
      The criteria for a good puzzle (or "riddle", "brainteaser", etc.) are very subjective. It's hard to exactly pinpoint what makes a puzzle fun to solve and interesting to think about, but I've
      certainly noticed similarities in the puzzles I like most. These are the things I look for in a puzzle:
      <br />
      <br />
      <ol>
        <li>
          <b>Is easy to understand.</b> A good puzzle is easy to understand in a few seconds. It shouldn't require
          a lot of background knowledge or technical skill to grasp the setup.
        </li>
        <li>
          <b>Is easy to reason about <i>in your head</i>.</b> The "in your head" bit is important to me. I do also enjoy puzzles that require complicated
          diagrams or calculations (think puzzles that present you with a 12x12 grid and ask you to do something complex with it), but, for me, the most <i>fun</i> puzzles
          are those that you can ask your friends on a hike or think about in the shower. For some of the puzzles on this site, it might be helpful to
          have a pen and paper handy, but that's not required for any of them.
        </li>
        <li>
          <b>Doesn't break the rules.</b> While good puzzles do require out-of-the-box thinking, they don't bend the rules of the problem. Solutions are not
          tricky "gotchas" that find a loophole in the constraints or wording of the problem. Assume no loopholes or tricks for any of the puzzles.
        </li>
        <li>
          <b>Has a simple solution.</b> This criterion is more nuanced. Good puzzles, in my opinion, not only have a simple setup,
          but also have a simple solution. This means that getting to the solution shouldn't require advanced derivatives or a complex fourier transform;
          rather, almost anyone should be able to fully grok the solution by reasoning through it.
        </li>
        <li>
          <b>Is elegant.</b> This is hard to pin down, but puzzles can be elegant much like algorithms or programs can be elegant.
          In this sense, a good puzzle is one that gets simpler and cleaner as you approach the solution. Brute forcing will not usually unlock the solution;
          rather, the solution will require a clever insight that, once realized, drastically simplifies the problem instead of complicating it.
          <br />
          <br />
          "The key to performance is elegance, not battalions of special cases" -- Jon Bentley and Doug McIlroy
        </li>
      </ol>
    </p>
    <h2>Disclaimers</h2>
    <p>
      <ol>
        <li>
          I'm not a professional puzzle designer, so I don't know if these criteria are actually used by professional puzzle designers.
          I also don't know if these criteria are the best way to judge a puzzle.
        </li>
        <li>
          I've included some hints for all the puzzles. Sometimes the hints are gentle nudges, and sometimes they're very revealing. In general, when there are
          multiple hints, the first one is subtle and following ones are more revealing. If there is only one hint, it's probably quite telling,
          so make sure you definitely want it before looking at it.
        </li>
        <li>
          I mentioned in my first criterion that a good puzzle doesn't require background knowledge or technical skill to understand. I also
          think it shouldn't require these things to solve. That said, there are several introductory concepts in discrete math, probability, and computer science
          that could be helpful in solving some of these puzzles. I've compiled a list of these concepts below.
        </li>
      </ol>
    </p>
    <h2>Helpful concepts</h2>
    <p>
      <ul>
        <li>
          <ExternalLink href="https://en.wikipedia.org/wiki/Mathematical_induction">Induction</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://en.wikipedia.org/wiki/Nash_equilibrium">Nash equilibrium</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://en.wikipedia.org/wiki/Proof_by_exhaustion">Case analysis</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://en.wikipedia.org/wiki/Pigeonhole_principle">Pigeonhole principle</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://simple.wikipedia.org/wiki/Binary_search">Binary search</ExternalLink>
        </li>
      </ul>
    </p>
    <Link to="/puzzleslist/">View puzzles</Link>
  </Layout>
);

export const Head = () => <Seo title="What makes a puzzle?" />;

export default WhatMakesAPuzzlePage;
