import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="hero section" id="home">
      <div className="container hero-grid">
        {/* Left: Copy */}
        <div className="hero-copy reveal">
          <p className="eyebrow">Building digital products from concept to launch</p>
          <h1>Fullstack developer blending engineering, performance, and product experience.</h1>
          <p className="hero-text">
            I help teams and businesses craft modern web applications that feel fast, reliable, and
            ready to scale. My focus is clean frontend architecture, efficient backend systems, and
            product execution grounded in measurable outcomes.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#proyek">View Projects</a>
            <a className="btn btn-secondary" href="#kontak">Contact Me</a>
          </div>
          <ul className="hero-points">
            <li>3+ years building web products</li>
            <li>Experienced with TypeScript, React, Next.js, Express.js, and PostgreSQL</li>
            <li>Used to collaborating closely with product, design, and data teams</li>
          </ul>
        </div>

        {/* Right: Panel */}
        <div className="hero-panel reveal">
          <div className="photo-card">
            <div className="photo-frame" aria-label="Photo placeholder">
              <div className="photo-placeholder">
                <Image 
                  src={'/photo-porfolio.jpeg'}
                  alt="Photo Porfolio"
                  width={320}
                  height={320}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="photo-copy">
              <strong>Personal Branding Area</strong>
              <p>
                Use a clean portrait, workspace shot, or creator-style photo to make the homepage
                feel more personal.
              </p>
            </div>
          </div>
          <div className="panel-card panel-profile">
            <div className="status-row">
              <span className="status-dot" />
              <span>Available for work and product collaboration</span>
            </div>
            <div className="terminal-window">
              <div className="terminal-head">
                <span /><span /><span />
              </div>
              <div className="terminal-body">
                <p><span>$</span> role</p>
                <p>Fullstack Developer</p>
                <p><span>$</span> focus</p>
                <p>Frontend architecture, API systems, product delivery</p>
                <p><span>$</span> current_stack</p>
                <p>TypeScript, React, Next.js, Express.js, Nest.js, PostgreSQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
