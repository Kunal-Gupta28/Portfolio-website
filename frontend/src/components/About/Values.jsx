export default function Values() {
  return (
    <section className="h-screen px-6 md:px-20 pb-24 max-w-4xl ml-auto relative">
      <h2 className="text-3xl font-bold mb-6 text-[#fa5a29]">
        How I Work & What I’m Exploring
      </h2>

      <div className="space-y-6 text-white/70">
        <div>
          <h3 className="font-semibold text-white mb-2">
            Core Focus
          </h3>
          <ul className="space-y-1">
            <li>• Full-Stack Web Development (MERN)</li>
            <li>• Real-time systems & APIs</li>
            <li>• Clean, maintainable architecture</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-2">
            Currently Exploring
          </h3>
          <ul className="space-y-1">
            <li>• Docker & containerization</li>
            <li>• Kubernetes fundamentals</li>
            <li>• Mobile app development</li>
            <li>• Machine learning basics</li>
            <li>• Cybersecurity & ethical hacking</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
