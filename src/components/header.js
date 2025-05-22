import * as React from "react";
import { Link } from "gatsby";
import "./layout.css";

const moreLinks = [
  { text: "Home", url: "/" },
  {
    text: "What makes a puzzle?",
    url: "/whatmakesapuzzle/",
  },
  {
    text: "Puzzles",
    url: "/puzzleslist/",
  },
];

const Header = ({ siteTitle }) => (
  <header className="header-nav">
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <Link className="header-link" to={link.url}>{link.text}</Link>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </header>
);

export default Header;
