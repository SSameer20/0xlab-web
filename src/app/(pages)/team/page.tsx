import { team } from "@/utils/team";

export default function Page() {
  return (
    <section className="min-h-screen px-6 py-12 bg-transparent flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-10 text-white">Team</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-md text-white transition hover:scale-[1.02] hover:shadow-lg cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
            <p className="text-sm text-gray-400 mb-1">{member.role}</p>
            <p className="text-gray-300 text-sm">{member.skills}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
