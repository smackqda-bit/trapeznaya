"use client";

import { useState } from "react";
import { contacts, nav } from "@/content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ivory/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 md:px-8">
        <a href="#top" className="font-serif text-[26px] font-medium tracking-[0.02em]">
          Трапезная Купца
        </a>

        <nav aria-label="Основное меню" className="hidden gap-8 text-xs font-medium tracking-[0.16em] uppercase lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`transition-colors hover:text-bronze ${item.href === "#news" ? "text-bronze" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={contacts.phoneHref}
          className="hidden text-sm font-medium tracking-[0.04em] transition-colors hover:text-bronze sm:block"
        >
          {contacts.phone}
        </a>

        <button
          type="button"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center border border-ink lg:hidden"
        >
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Мобильное меню" className="border-t border-line px-6 pb-6 lg:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-4 font-serif text-2xl"
            >
              {item.label}
            </a>
          ))}
          <a href={contacts.phoneHref} className="mt-6 block text-base font-medium">
            {contacts.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
