import './Frame3.css'

function Frame3() {
  const toolIntroduction = [
    'Comprehensive tool suite for modern development',
    'Streamlined workflow integration',
    'Real-time collaboration features',
    'Advanced analytics and reporting',
    'Scalable architecture design',
    'Cross-platform compatibility',
    'Enterprise-grade security',
    '24/7 support and maintenance'
  ]

  const keyFeatures = [
    'Intuitive user interface design',
    'High performance optimization',
    'Responsive design implementation',
    'Accessibility compliance (WCAG)',
    'SEO optimization tools',
    'API integration capabilities',
    'Cloud deployment options',
    'Customizable themes and branding'
  ]

  return (
    <section className="frame3">
      <div className="frame3-container">
        <div className="frame3-content">
          <div className="frame3-column">
            <h2 className="frame3-title">Tool Introduction</h2>
            <ul className="frame3-list">
              {toolIntroduction.map((item, index) => (
                <li key={index} className="frame3-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="frame3-column">
            <h2 className="frame3-title">Key Features</h2>
            <ul className="frame3-list">
              {keyFeatures.map((item, index) => (
                <li key={index} className="frame3-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Frame3

