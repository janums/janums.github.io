import * as React from "react";

const baseStyle = {
  color: 'var(--color-primary)',
  cursor: 'pointer',
  textDecoration: 'none',
  fontWeight: 500,
  marginBottom: '1em',
  display: 'inline-block',
  padding: '0.25em 0.75em',
  border: '1px solid var(--color-primary)',
  borderRadius: '6px',
  background: 'transparent',
  transition: 'background 0.2s, color 0.2s',
};

export default function TextButton({ children, onClick, style = {}, ...props }) {
  const [hover, setHover] = React.useState(false);

  return (
    <span
      onClick={onClick}
      style={{
        ...baseStyle,
        ...(hover ? { background: 'var(--color-primary)', color: '#fff' } : {}),
        ...style,
      }}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      {...props}
    >
      {children}
    </span>
  );
} 