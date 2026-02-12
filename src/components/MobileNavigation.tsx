'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react'

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CloseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      />
    </svg>
  )
}

function SunIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
      <path
        d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
        fill="none"
      />
    </svg>
  )
}

function MoonIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink({
  href,
  children,
  indent = false,
}: {
  href: string
  children: React.ReactNode
  indent?: boolean
}) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <PopoverButton
      as={Link}
      href={href}
      className={`block rounded-lg px-3 py-1.5 text-sm font-medium transition ${
        indent ? 'ml-4' : ''
      } ${
        isActive
          ? 'bg-teal-50 text-teal-600 dark:bg-teal-500/10 dark:text-teal-400'
          : 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800'
      }`}
    >
      {children}
    </PopoverButton>
  )
}

export function MobileNavigation() {
  return (
    <Popover className="pointer-events-auto md:hidden">
      <PopoverButton
        aria-label="Open menu"
        data-testid="mobile-menu-btn"
        className="group flex items-center justify-center rounded-full bg-white/90 p-2 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm min-h-[44px] min-w-[44px] dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      >
        <MenuIcon className="h-6 w-6 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
      </PopoverButton>

      <PopoverBackdrop
        transition
        className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-xs duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in dark:bg-black/80"
      />

      {/*
        Condensed mobile menu changes (vs. original):
        - Panel padding: p-8 -> p-4 (32px -> 16px)
        - Panel top: top-8 -> top-4 (32px -> 16px)
        - Nav link padding: py-2.5 -> py-1.5 (10px -> 6px)
        - Nav link text: text-base -> text-sm (16px -> 14px)
        - Section dividers: pt-4 -> pt-2 (16px -> 8px)
        - Nav list spacing: space-y-1 kept (already tight)
        - Max height: calc(100dvh-3rem) -> calc(100dvh-2rem)
      */}
      <PopoverPanel
        focus
        transition
        className="fixed inset-x-4 top-4 z-50 max-h-[calc(100dvh-2rem)] origin-top overflow-y-auto rounded-3xl bg-white p-4 ring-1 ring-zinc-900/5 duration-150 data-closed:scale-95 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in dark:bg-zinc-900 dark:ring-zinc-800"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Navigation
          </h2>
          <PopoverButton aria-label="Close menu" className="rounded-lg p-1 text-zinc-500 transition hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800">
            <CloseIcon className="h-5 w-5" />
          </PopoverButton>
        </div>

        <nav className="mt-2">
          <ul className="space-y-0.5">
            <li>
              <MobileNavLink href="/">Home</MobileNavLink>
            </li>

            {/* Data section */}
            <li>
              <span className="block rounded-lg px-3 py-1.5 text-sm font-medium text-zinc-400 dark:text-zinc-500">
                Data
              </span>
              <ul className="space-y-0.5">
                <li>
                  <MobileNavLink href="/journals" indent>
                    Journals
                  </MobileNavLink>
                </li>
                <li>
                  <MobileNavLink href="/contribute" indent>
                    Contribute
                  </MobileNavLink>
                </li>
              </ul>
            </li>

            {/* Rankings section */}
            <li>
              <span className="block rounded-lg px-3 py-1.5 text-sm font-medium text-zinc-400 dark:text-zinc-500">
                Rankings
              </span>
              <ul className="space-y-0.5">
                <li>
                  <MobileNavLink href="/rankings/universities" indent>
                    Universities
                  </MobileNavLink>
                </li>
                <li>
                  <MobileNavLink href="/rankings/bschools" indent>
                    Business Schools
                  </MobileNavLink>
                </li>
                <li>
                  <MobileNavLink href="/rankings/authors" indent>
                    Authors
                  </MobileNavLink>
                </li>
                <li>
                  <MobileNavLink href="/rankings/methodology" indent>
                    Methodology
                  </MobileNavLink>
                </li>
              </ul>
            </li>

            <li>
              <MobileNavLink href="/about">About</MobileNavLink>
            </li>
          </ul>
        </nav>

        {/* Theme toggle - condensed divider */}
        <div className="mt-2 border-t border-zinc-100 pt-2 dark:border-zinc-100/5">
          <button
            type="button"
            aria-label="Toggle theme"
            className="flex w-full items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            <SunIcon className="h-5 w-5 fill-zinc-100 stroke-zinc-500 dark:hidden" />
            <MoonIcon className="hidden h-5 w-5 fill-zinc-700 stroke-zinc-500 dark:block" />
            Toggle theme
          </button>
        </div>
      </PopoverPanel>
    </Popover>
  )
}
