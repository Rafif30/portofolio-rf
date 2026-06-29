const cards = [
  {
    title: "Product mindset",
    body: "I do more than write code. I map user needs, define data flows, and make sure the solution supports real business goals.",
  },
  {
    title: "Technical execution",
    body: "From responsive interfaces to secure APIs, I am comfortable working across the full application stack. I prioritize maintainability, observability, and performance.",
  },
  {
    title: "The value I bring",
    body: "Clear communication, fast iteration, practical documentation, and technical decisions that balance today's needs with tomorrow's scale.",
  },
];

export default function AboutSection() {
  return (
    <section className="section" id="tentang">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">About me</p>
          <h2>Turning business needs into systems that are useful, measurable, and dependable.</h2>
        </div>
        <div className="about-grid">
          {cards.map(({ title, body }) => (
            <article key={title} className="panel-card reveal">
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
