import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: 'Shaik Md Farooq Ali',
      role: 'Founder & Managing Director',
      description: 'An accomplished technologist with expertise in embedded systems, IoT integration, and product prototyping.',
      image: '/images/image-2.jpg',
      linkedin: 'https://www.linkedin.com/in/smd-farooq-ali-34042724a/'
    },
    {
      name: 'Salar Khan Patan',
      role: 'CEO & Co-founder',
      description: 'An Electrical Engineer with hands-on experience in system optimization and innovative technology integration.',
      image: '/images/image-1.jpg',
      linkedin: 'https://www.linkedin.com/in/salarkhan-patan-75365a230/'
    },
    {
      name: 'Pandipati Sai Karthik',
      role: 'Co-founder & CTO',
      description: 'Bridging the gap between hardware architecture and scalable software implementation.',
      image: '/images/image-3.jpg',
      linkedin: 'https://www.linkedin.com/in/saikarthik-pandipati/'
    },
    {
      name: 'Pavan Kumar',
      role: 'Computer Vision & AI Lead',
      description: 'Specializing in computer vision models, machine learning, and intelligent sensor data processing.',
      image: '/images/image-8.jpg',
      linkedin: 'https://www.linkedin.com/in/a-pavan-kumar-2815b925b/'
    },
    {
      name: 'Dr. K Narasimha Raju',
      role: 'Director',
      description: 'Professor at KLEF Deemed To Be University with extensive research experience in power & control systems.',
      image: '/images/image-4.jpg',
      linkedin: 'https://www.linkedin.com/in/dr-kuthuri-narasimha-raju/'
    },
    {
      name: 'Dr. Kalyan D',
      role: 'Director',
      description: 'Professor at KLEF Deemed To Be University advising on industrial technology development.',
      image: '/images/image-7.jpg',
      linkedin: 'https://www.linkedin.com/in/dr-kalyan-dusarlapudi-05a814169/'
    },
    {
      name: 'Srikanth Annamareddy',
      role: 'Operations & Strategy Advisor',
      description: 'Operations Supervisor at Costco Wholesale Coventry, UK, advising on global operational strategy.',
      image: '/images/image-6.jpg',
      linkedin: 'https://www.linkedin.com/in/srikanth-a-14b15279/'
    },
    {
      name: 'Madhusudhan',
      role: 'Software & AI Advisor',
      description: "Senior Data Engineer at ASX Sydney, Australia, guiding OLT's software and data strategies.",
      image: '/images/image-5.jpg',
      linkedin: 'https://www.linkedin.com/in/madhusudhan-g-89331a6b/'
    }
  ];

  return (
    <section id="team" className="section team">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag">Leadership & Advisors</span>
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            A multidisciplinary team of engineers, researchers, and global advisors driving product excellence.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-card-image-wrap">
                <img src={member.image} alt={member.name} className="team-card-image" />
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="team-linkedin-float"
                  aria-label={`${member.name} LinkedIn Profile`}
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>

              <div className="team-card-body">
                <h3 className="team-member-name">{member.name}</h3>
                <span className="team-member-role">{member.role}</span>
                {member.description && (
                  <p className="team-member-description">{member.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
