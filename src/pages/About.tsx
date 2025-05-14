
import React from 'react';

const About: React.FC = () => {
  // Services data
  const services = [
    {
      title: 'Web Design',
      description: 'Creating beautiful, responsive websites that provide an excellent user experience across all devices.',
      icon: '💻'
    },
    

{
      title: 'UI/UX ',
      description: 'Designing intuitive and user-centered interfaces that enhance engagement and improve the overall user experience.',
      icon: '🔍'
    },


{
      title: 'UI/UX Audit ',
      description: 'Analyzing your existing digital products to identify usability issues and recommend improvements.',
      icon: '🔍'
    },


  {
      title: 'Frontend Development',
      description: 'Building performant and accessible web applications using modern technologies and best practices.',
      icon: '⚙️'
    },
    {
      title: 'Responsive Redesigns',
      description: 'Transforming outdated websites into modern, mobile-friendly experiences that convert visitors.',
      icon: '📱'
    }
  ];

  // Tools and technologies
  const tools = [
    { name: 'Figma', category: 'Design' },
    { name: 'Adobe XD', category: 'Design' },
    { name: 'VS Code', category: 'Development' },
    { name: 'GitHub', category: 'Development' },
    { name: 'React', category: 'Development' },
    { name: 'JavaScript', category: 'Development' },
    { name: 'Tailwind CSS', category: 'Development' },
    { name: 'Canva', category: 'Design' },
    { name: 'Bootstrap', category: 'Development' },
    { name: 'Vercel', category: 'Development' },
  ];
  
  return (
    <div className="page-transition pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-mint/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-lg text-darkText/80">
              I'm passionate about creating digital experiences that are both beautiful and functional.
            </p>
          </div>
        </div>
      </section>
      
      {/* My Journey Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">My Journey</h2>
              <p className="text-darkText/80 mb-4">
                With over 6 years of experience in the digital design and development field, I've worked on a diverse range of projects from e-commerce websites to complex web applications.
              </p>
              <p className="text-darkText/80 mb-4">
                I started my career as a graphic designer and gradually transitioned into UI/UX design and frontend development, allowing me to understand both the visual and technical aspects of creating digital products.
              </p>
              <p className="text-darkText/80">
                My approach combines design thinking with technical expertise, allowing me to create solutions that not only look great but also deliver exceptional user experiences and business results.
              </p>
            </div>
            
            <div className="bg-muted rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">My Design Philosophy</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-3 text-primary-foreground">✓</span>
                  <p>User-centered design that puts people first</p>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary-foreground">✓</span>
                  <p>Clean, minimalist aesthetics that enhance usability</p>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary-foreground">✓</span>
                  <p>Responsive layouts that work seamlessly on all devices</p>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary-foreground">✓</span>
                  <p>Accessible design that reaches the widest audience</p>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary-foreground">✓</span>
                  <p>Data-driven decisions that achieve business goals</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section bg-softBlue/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Services I Offer</h2>
            <p className="text-darkText/80 max-w-2xl mx-auto">
              I provide a range of design and development services to help businesses and individuals create exceptional digital experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card p-8 flex flex-col h-full">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-darkText/70 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Tools Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tools & Technologies</h2>
            <p className="text-darkText/80 max-w-2xl mx-auto">
              Here are some of the tools and technologies I use in my design and development workflow.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  tool.category === 'Design' ? 'bg-peach/40' : 'bg-mint/40'
                }`}
              >
                {tool.name}
                <span className="ml-2 text-xs opacity-70">({tool.category})</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-muted">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-darkText/80 mb-8 max-w-2xl mx-auto">
            If you're looking for a designer and developer who can bring your vision to life, I'd love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="btn btn-primary">
              Get In Touch
            </a>
            <a href="/projects" className="btn btn-outline">
              View My Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
