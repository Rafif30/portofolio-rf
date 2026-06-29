const skillGroups = [
  {
    title: "Frontend engineering",
    chips: [
      "Semantic HTML",
      "CSS Architecture",
      "JavaScript ESNext",
      "TypeScript",
      "React",
      "Next.js",
      "State Management",
      "Accessibility",
    ],
  },
  {
    title: "Backend & data",
    chips: [
      "Node.js",
      "Express",
      "Nest.js",
      "REST API",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Auth",
    ],
  },
  {
    title: "Delivery workflow",
    chips: [
      "CI/CD",
      "Testing",
      "Performance Audit",
      "Design Handoff",
      "Product Thinking",
      "Analytics",
      "Agile Delivery",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section className="section" id="keahlian">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">Skills & technology</p>
          <h2>The stack I use to build modern digital experiences.</h2>
        </div>
        <div className="skills-layout">
          {skillGroups.map(({ title, chips }) => (
            <article key={title} className="panel-card reveal">
              <h3>{title}</h3>
              <div className="chip-wrap">
                {chips.map((chip) => (
                  <span key={chip} className="chip">{chip}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
