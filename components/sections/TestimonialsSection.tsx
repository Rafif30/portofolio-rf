const testimonials = [
  {
    quote:
      "Raka bridges business needs and technical decisions without making the process feel complicated.",
    author: "Product Manager · Platform B2B",
  },
  {
    quote:
      "His implementation detail is strong, especially in performance, accessibility, and keeping components consistent as the product scales.",
    author: "Lead Designer · SaaS Growth Team",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">Collaboration highlights</p>
          <h2>Feedback I often hear from the teams I work with.</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map(({ quote, author }) => (
            <blockquote key={author} className="panel-card reveal">
              <p>{`"${quote}"`}</p>
              <footer>{author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
