'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Logo from './Logo'

const navLinks = [
  { href: '/about',    label: 'About' },
  { href: '/ventures', label: 'Ventures' },
  { href: '/contact',  label: 'Contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/90 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Logo />
          <span className="font-serif text-[1.05rem] font-medium tracking-[-0.01em] text-ink">
            Connectum Labs
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors duration-150 ${
                pathname?.startsWith(href)
                  ? 'text-ink font-medium'
                  : 'text-mid hover:text-ink'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary text-xs py-2 px-4">
            Get in touch
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-mid hover:text-ink transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <line x1="3" y1="8" x2="21" y2="8"/><line x1="3" y1="16" x2="21" y2="16"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-rule bg-paper px-6 pb-5 pt-4 flex flex-col gap-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-mid hover:text-ink transition-colors"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary text-xs py-2.5 w-fit" onClick={() => setOpen(false)}>
            Get in touch
          </Link>
        </div>
      )}
    </header>
  )
}
