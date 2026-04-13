'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: 'home', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'skills', path: '/skills' },
    { name: 'projects', path: '/projects' },
    { name: 'experience', path: '/experience' },
    { name: 'contact', path: '/contact' },
  ];

  return (
    <nav>
      <Link href="/" className="nav-logo">
        MS<span>.</span>
      </Link>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.path}
              className={pathname === link.path ? 'active' : ''}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      
    </nav>
  );
}