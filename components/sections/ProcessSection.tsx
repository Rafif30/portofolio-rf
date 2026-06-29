const steps = [
  {
    index: "01",
    title: "Architecture design",
    body: "Defining UI structure, data flow, and clear responsibilities between frontend and backend.",
  },
  {
    index: "02",
    title: "Iterative build",
    body: "Shipping features step by step with an emphasis on clarity, quality, and tight feedback loops.",
  },
  {
    index: "03",
    title: "Measure & optimize",
    body: "Using performance data and user behavior insights to guide the next iteration.",
  },
];

export default function ProcessSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">How I work</p>
          <h2>A process that helps products look strong and work even better.</h2>
        </div>
        <div className="process-grid ">
          {steps.map(({ index, title, body }) => (
            <article key={index} className="panel-card reveal">
              <span className="process-index">{index}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
