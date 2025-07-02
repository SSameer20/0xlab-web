import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function Page() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-transparent px-6 py-12">
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 w-full max-w-xl shadow-md text-white">
        <h2 className="text-2xl font-bold mb-4 text-white">
          📣 Connect With Us
        </h2>

        <ul className="space-y-2 mb-4">
          <li className="flex items-center gap-2">
            <FaGithub />
            <a
              href="https://github.com/0xLabs-org"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li className="flex items-center gap-2">
            <FaLinkedin />
            <a href="/contact" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>

        <p className="text-gray-300">
          For collaboration, ideas, or networking feel free to reach out!
        </p>
      </div>
    </section>
  );
}
