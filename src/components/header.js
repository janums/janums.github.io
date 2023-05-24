import * as React from "react";
import { Link } from "gatsby";
import "./layout.css";

const moreLinks = [
  { text: "Home", url: "/" },
  {
    text: "Resume",
    url: "/resume/",
  },
  { text: "Blog", url: "/blog/" },
  { text: "Reading", url: "/reading/" },
];

const Header = ({ siteTitle }) => (
  <header>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <Link to={link.url}>{link.text}</Link>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </header>
);

export default Header;
