const contactLinks = [
  { href: "mailto:imamrafif25@gmail.com", label: "imamrafif25@gmail.com" },
  { href: "https://www.linkedin.com/in/imamradrian", label: "LinkedIn", external: true },
  { href: "https://github.com/Rafif30", label: "GitHub", external: true },
];

export default function ContactSection() {
  return (
    <section className="section contact-section" id="kontak">
      <div className="container contact-card reveal">
        <div>
          <p className="eyebrow">Let&apos;s build something</p>
          <h2>
            If you need a fullstack developer who can think about product and technical detail at
            the same time, I&apos;m ready to talk.
          </h2>
          <p>
            I&apos;m open to new projects, technical consulting, MVP development, and optimizing
            existing platforms.
          </p>
        </div>
        <div className="contact-links">
          {contactLinks.map(({ href, label, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
