import * as React from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

/**
 * Renders a KaTeX expression. Pass LaTeX in String.raw`...` so backslashes survive.
 * @param {{ math: string, display?: boolean }} props
 */
const Katex = ({ math, display = false }) => {
  const html = React.useMemo(
    () =>
      katex.renderToString(math, {
        displayMode: display,
        throwOnError: false,
      }),
    [math, display]
  );
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
};

export default Katex;
