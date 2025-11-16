import './ServiceDetails.css'

function ServiceDetails() {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web solutions tailored to your business needs',
      icon: '🌐'
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces',
      icon: '🎨'
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications',
      icon: '📱'
    },
    {
      title: 'Consulting',
      description: 'Expert advice for your digital transformation',
      icon: '💼'
    }
  ]

  return (
    <section className="service-details" id="services">
      <div className="service-details-container">
        <h2 className="section-title">Service Details</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button className="service-button">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceDetails

