import * as React from "react";
import { Link } from "gatsby";

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
  <header
    style={{
      margin: `0 auto`,
      maxWidth: `var(--size-header)`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-around`,
    }}
  >
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <Link to={link.url}>{link.text}</Link>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </header>
);

export default Header;
