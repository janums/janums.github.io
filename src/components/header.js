import * as React from "react";
import { Link } from "gatsby";

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`;

const moreLinks = [
  { text: "Home", url: "/" },
  {
    text: "Page 2",
    url: "/page-2/",
  },
  {
    text: "Starters",
    url: "/",
  },
  {
    text: "Showcase",
    url: "/",
  },
  {
    text: "Contributing",
    url: "",
  },
  { text: "Issues", url: "/" },
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
