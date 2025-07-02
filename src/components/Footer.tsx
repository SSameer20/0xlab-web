// Footer.jsx
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full px-6 flex flex-col mt-10 justify-center items-center py-10 gap-6">
      {/* Top border line */}
      <div className="w-full border-t border-gray-800" />

      {/* Row with brand and social links */}
      <div className="w-full max-w-7xl flex justify-between items-center">
        <span className="text-md font-semibold">0xLabs-Org</span>

        <div className="flex space-x-4">
          <a
            href="https://github.com/0xLabs-Org"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="hover:text-gray-600" size={20} />
          </a>
          <a
            href="https://twitter.com/0xLabsOrg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className="hover:text-gray-600" size={20} />
          </a>
          <a
            href="https://linkedin.com/company/0xLabs-Org"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="hover:text-gray-600" size={20} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-gray-500 text-sm text-center mt-2">
        © 2025 0xLabs-Org. All rights reserved.
      </p>
    </footer>
  );
}
