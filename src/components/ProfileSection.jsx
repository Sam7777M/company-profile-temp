import './ProfileSection.css'

function ProfileSection() {
  const profiles = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      description: 'Leading the company with vision and innovation',
      image: '👤'
    },
    {
      name: 'Jane Smith',
      role: 'Lead Designer',
      description: 'Creating beautiful and functional designs',
      image: '👩'
    },
    {
      name: 'Mike Johnson',
      role: 'Senior Developer',
      description: 'Building robust and scalable solutions',
      image: '👨'
    }
  ]

  return (
    <section className="profile-section" id="about">
      <div className="profile-container">
        <h2 className="section-title">Our Team</h2>
        <div className="profiles-grid">
          {profiles.map((profile, index) => (
            <div key={index} className="profile-card">
              <div className="profile-image">{profile.image}</div>
              <h3 className="profile-name">{profile.name}</h3>
              <p className="profile-role">{profile.role}</p>
              <p className="profile-description">{profile.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProfileSection

