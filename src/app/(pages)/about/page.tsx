export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-white space-y-10 bg-transparent">
      <div>
        <h1 className="text-3xl font-bold mb-2 text-white">0xLabs-Org</h1>
      </div>

      <section>
        <p className="text-gray-300">
          0xLabs is an independent innovation lab and micro-startup studio
          founded to create powerful, user-centric SaaS solutions that leverage
          the cutting-edge capabilities of Blockchain and Artificial
          Intelligence.
        </p>
        <p className="mt-4 text-gray-300">
          We are a team of builders, designers, and dreamers on a mission to
          build smart, secure, and scalable digital tools — from decentralized
          finance (DeFi) and secure data infrastructures to AI-powered
          assistants and productivity SaaS tools.
        </p>
        <p className="mt-4 text-gray-300">
          Whether it&apos;s simplifying Web3 onboarding or enhancing user
          experiences through AI, we are here to make meaningful products that
          people love.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3 text-white">
          🛠️ Focus Areas
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>🧠 AI-Powered SaaS Applications</li>
          <li>🔐 Decentralized Applications (dApps)</li>
          <li>🧬 Blockchain Infrastructure & Wallet Tools</li>
          <li>📊 Analytics Platforms using AI & Big Data</li>
          <li>⚙️ Developer Tools for Web3 & AI builders</li>
        </ul>
      </section>
    </div>
  );
}
