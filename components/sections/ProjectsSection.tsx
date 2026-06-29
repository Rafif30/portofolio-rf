import Image from "next/image";

const projects = [
  {
    badge: "SaaS Dashboard",
    year: "2026",
    title: "Novamart Analytics",
    description:
      "A growth metrics dashboard for product and marketing teams, featuring automated insights, funnel segmentation, and experimentation modules.",
    chips: ["Next.js", "TypeScript", "Nest.js", "PostgreSQL"],
    srcImage: '/dashboard-view.png',
    linkUrl: 'https://dashboard-novamart-fe-production.up.railway.app/'
  },
];

export default function ProjectsSection() {
  return (
    <section className="section" id="proyek">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">Independent projects</p>
          <h2>Product explorations and experiments that show how I think.</h2>
        </div>
        <div className="project-grid">
          {projects.map(({ badge, year, title, description, chips, srcImage, linkUrl }) => (
            <article key={title} className="project-card reveal">
              <div className={`project-visual`}>
                <Image 
                alt="Dashboard View"
                width={480}
                height={480}
                src={srcImage}                
                loading="lazy"
                />
              </div>
              <div className="project-content">
                <div className="project-topline">
                  <span className="badge">{badge}</span>
                  <span>{year}</span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="chip-wrap">
                  {chips.map((chip) => (
                    <span key={chip} className="chip">{chip}</span>
                  ))}
                </div>
                <a className="btn btn-primary" href={linkUrl} target="_blank">Live Demo</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
