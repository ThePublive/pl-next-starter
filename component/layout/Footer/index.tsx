import { Publisher } from "publive-cms-sdk";
import React from "react";

interface FooterProps {
  publisher: Publisher;
}

const Footer = ({ publisher }: FooterProps) => {
  return (
    <footer className="border-t border-white/[0.08] bg-[#0a0a0a]">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-5">
        <p className="text-[13px] text-white/30">
          &copy; {new Date().getFullYear()} {publisher.name}
        </p>
        <a
          href="https://www.thepublive.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] text-white/30 transition-colors hover:text-white/60"
        >
          Powered by <span className="font-medium text-white/50">Publive</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
