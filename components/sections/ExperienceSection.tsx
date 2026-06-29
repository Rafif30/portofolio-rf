const experiences = [
  {
    period: "Nov 2022 — Present",
    title: "Front End Developer · Nawa Data Solutions",
    summary:
      "Delivering 20+ enterprise projects, developing new web applications, implementing feature enhancements, and collaborating with cross-functional teams",
    highlights: [
      "Streamlined development processes at CIS&T (Corporate Information System and Technology) at PT Astra International",
      "Collaborated with project managers, business analysts, and back-end developers to successfully develop, resulting in delivery ahead of schedule",
      "Translating designs and wireframes into high-quality, reliable user-facing features and functionality",
    ],
  },
  {
    period: "Apr 2022 — Nov 2022",
    title: "Front End Developer Intern · FXMedia/FXMWeb",
    summary:
      "Worked on various interactive web projects, including responsive websites, 3D web applications with Three.js, virtual tours using 3DVista, and browser-based games developed with Construct 3.",
    highlights: [
      "Developed a 3D website using ThreeJS, delivering an interactive user experience",
      "Developed games using Construct 3, demonstrating proficiency in game design and contributing to project milestones.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section className="section" id="pengalaman">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">Work experience</p>
          <h2>Roles that shaped the way I build products.</h2>
        </div>
        <div className="timeline">
          {experiences.map(({ period, title, summary, highlights }) => (
            <article key={title} className="timeline-item panel-card reveal">
              <div className="timeline-meta">
                <span>{period}</span>
                <strong>{title}</strong>
              </div>
              <p>{summary}</p>
              <ul>
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
