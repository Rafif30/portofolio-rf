const metrics = [
  { value: "12+", label: "products and platforms shipped" },
  { value: "35%", label: "average homepage performance improvement" },
  { value: "99.9%", label: "reliability target for critical workflows" },
  { value: "3 teams", label: "cross-functional teams I have led technically" },
];

export default function MetricsStrip() {
  return (
    <section className="metrics-strip reveal" aria-label="Key highlights">
      <div className="metrics-grid">
        {metrics.map(({ value, label }) => (
          <article key={value}>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
