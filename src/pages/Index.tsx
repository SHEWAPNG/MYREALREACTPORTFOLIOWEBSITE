
import React from 'react';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  // Featured projects data
  const featuredProjects = [
    {
      title: 'Threat Intelligence  Dashboard',
      description: 'A Threat Intelligence Dashboard.',
      imageUrl:'/assets/threat.png',
      tags: ['Html', ' CSS', 'API'],
      liveUrl: 'https://threat-intellgence-dashboard.vercel.app/',
      category: 'Frontend'
    },
   {
  title: 'Savira & ChopNow Food Website UIs',
  description: 'Two fictional food brand interfaces built to explore UI storytelling and responsive design. Savira is a clean, wellness-inspired grilled fish brand. ChopNow celebrates Nigerian culture through bold visuals and local dishes like Amala & Ewedu. Both UIs are fully responsive across desktop, tablet, and mobile. Attached are the Mockups below.',


  imageUrl: '/assets/food detail ui.png',
  tags: ['Figma',],
  liveUrl: '#', // Add live link or leave blank if it's not deployed
  category: 'UI/UX Design '
},

    {
   title: 'Complete Phantom Crypto Wallet APP UI Redesigned',
      description: 'This  is a complete Phantom Wallet Crypto app UI that was redesigned by me as a UI/UX designer.',
      imageUrl: 'assets/Complete phant.png',
      tags: ['Figma', , ],
      liveUrl: '#',
      category: 'UI/UX' 
    }
  ];
  
  // Skills data
  const skills = [
  { name: 'HTML', level: '90%' },
  { name: 'CSS', level: '85%' },
  { name: 'JavaScript', level: '75%' },
  { name: 'React', level: '70%' },
  { name: 'Figma', level: '88%' },
];

  
  // Testimonials data
  const testimonials = [
    {
      text: "Working with Oyeladun was a game-changer for our company. She delivered a beautiful website that perfectly captured our brand identity.",
      name: "Sarah Johnson",
      position: "CEO, TechStart"
    },
    {
      text: "Oyeladun's attention to detail and user-focused approach resulted in a product that exceeded our expectations. Highly recommended!",
      name: "Michael Chen",
      position: "Product Manager, DesignHub"
    }
  ];
  
  return (
    <div className="page-transition pt-16">
      <Hero />
      
      {/* About Section */}
      <section className="section bg-mint/20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-darkText/80">
              I'm a passionate UI/UX Designer and Frontend Developer with a keen eye for detail and a love for creating intuitive, user-friendly digital experiences. With expertise in both design and development, I bring a unique perspective to every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {skills.map((skill, index) => (
              <div key={index} className="card p-6 text-center">
                <h3 className="text-xl font-medium mb-2">{skill.name}</h3>
                <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-primary-foreground h-full rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="mt-2 text-sm text-darkText/70">{skill.level}%</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/about" className="btn btn-outline">
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-darkText/80">
              Check out some of my recent work that showcases my skills and expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/projects" className="btn btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section bg-softBlue/20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-darkText/80">
              What clients have to say about working with me.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-8">
                <svg className="h-8 w-8 text-primary-foreground/60 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-darkText/80 mb-6">{testimonial.text}</p>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-darkText/60">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="section">
        <div className="container-custom">
          <div className="bg-peach/40 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-darkText/80 mb-8 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it and see how we can collaborate to bring your vision to life.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
