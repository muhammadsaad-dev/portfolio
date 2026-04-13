import React from 'react';

export default function Footer() {
  return (
    <footer>
      <p>
        Built by Muhammad Saad · Lahore, Pakistan ·{' '}
        <a 
          href="mailto:saadcs.dev@gmail.com" 
          style={{ color: 'var(--accent2)', textDecoration: 'none' }}
        >
          saadcs.dev@gmail.com
        </a>
      </p>
    </footer>
  );
}