import React from 'react';

const TextSection = ({ children }) => (
    <section style={{ margin: '1em 0', padding: '0.5em 1em 0.6em 1em', border: '1px solid #ccc', borderRadius: '6px' }}>
        {children}
    </section>
);

export default TextSection; 