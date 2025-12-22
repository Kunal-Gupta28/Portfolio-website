import { education } from "../../data/qualificationsData";

export default function Qualifications() {
  return (
    <section className="h-screen px-6 md:px-20 pb-24 max-w-4xl ml-auto relative">
      <h2 className="text-3xl font-bold mb-8 text-[#fa5a29]">
        Qualifications
      </h2>

      <div className="space-y-8 text-white/70">
        {education.map((edu, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/10 p-6
                       bg-gradient-to-br from-white/5 to-transparent"
          >
            <h3 className="text-xl font-semibold text-white">
              {edu.degree}
            </h3>

            <p className="text-sm mt-1 text-white/50">
              {edu.institution} • {edu.duration}
            </p>

            {edu.gpa && (
              <p className="text-sm mt-2 text-[#fa5a29]">
                GPA: {edu.gpa}
              </p>
            )}

            <p className="mt-4 leading-relaxed">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
