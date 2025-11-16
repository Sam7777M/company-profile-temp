import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-image-container">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to Our Services</h1>
            <p className="hero-subtitle">Professional solutions for your business needs</p>
            <button className="hero-cta">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

