import { Publisher } from "publive-cms-sdk";
import React from "react";
import Image from "next/image";

interface HeaderProps {
  publisher: Publisher;
}

const Header = ({ publisher }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#0a0a0a]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-[1100px] items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <a href="/" className="flex items-center gap-2.5 font-bold" aria-label="Home">
            <Image 
              src="https://cdn.thepublive.com/demo/media/media_files/2026/02/10/pl-dark-logo-2026-02-10-11-13-21.svg" 
              alt="Publive" 
              width={60} 
              height={60} 
              className="h-6 w-auto object-contain invert"
            />
            Publive
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://www.notion.so/publive/Decoupled-Infra-Starter-Guide-2ff2c61c09f780b0aed2fa0f5df6274b"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg px-3 py-1.5 text-[13px] text-white/60 transition-colors hover:text-white sm:block"
          >
            Docs
          </a>
          <a
            href="https://www.thepublive.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-4 py-1.5 text-[13px] font-medium text-[#0a0a0a] transition-opacity hover:opacity-80"
          >
            Go to Publive
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
