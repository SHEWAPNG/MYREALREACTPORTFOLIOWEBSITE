import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  // Project categories for filtering
  const categories = ['All', 'Web Design', 'Frontend', 'UI/UX'];
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Projects data
  const projects = [
    {
      title: 'Threat Intelligence  Dashboard',
      description: 'A Threat Intelligence Dashboard.',
      imageUrl:'/assets/threat.png',
      tags: ['Html', ' CSS', 'API'],
      liveUrl: 'https://threat-intellgence-dashboard.vercel.app/',
      category: 'Frontend'
    },














{
      title: 'A Simple Food Delivery  APP UI',
      description: 'A simple Food Delivery website UI  consisiting of the homepage,login page , email verification and confirmation page .',
      imageUrl: 'assets/FOOD DELIVERY APP UI.png',
      tags: ['Figma', ],
      liveUrl: '#',
      category: 'UI/UX'
    },









{
      title: 'FOOD DELIVERY APP UI',
      description: 'This is a food delivery app UI design with 5 interactive screens, including a complete login flow. The prototype shows how each screen connects and functions, giving a full preview of the user experience from login to navigation',
      imageUrl: 'assets/My first react.png',
      tags: ['Figma', ],
      liveUrl: 'https://my-first-react-mini-project-a-profile-card-component.vercel.app/',

      category: 'UI/UX'
    },







{
      title: 'A Simple Food Delivery UI',
      description: 'A simple Food Delivery website UI .',
      imageUrl: 'assets/A SIMPLE FOOD DELIVERY UI.png',
      tags: ['Figma', ],
      liveUrl: '#',
      category: 'UI/UX'
    },

{
      title: ' Book Ecommerce  Website',
      description: 'A book Ecommerce website where you can search for different books across the globe . This was done through a book API that fetches any book you want across the globe.',
      imageUrl: 'assets/ecommerce website.png',
      tags: [ 'Html','CSS', 'API Integration'],
      liveUrl: 'https://ecommercebook-real.vercel.app/',
      category: 'Frontend'
    },

{
      title: 'A Simple Calculator',
      description: 'A Simple Calculator .',
      imageUrl: 'assets/calculator.png',
      tags: ['Html', 'CSS', ],
      liveUrl: 'https://calculator-tau-two-83.vercel.app/',
      category: 'Frontend'
    },

{
      title: 'Complete Phantom Crypto Wallet APP UI Redesigned',
      description: 'This  is a complete Phantom Wallet Crypto app UI that was redesigned by me as a UI/UX designer.',
      imageUrl: 'assets/Complete phant.png',
      tags: ['Figma', , ],
      liveUrl: '#',
      category: 'UI/UX'
    },

    {
      title: 'FOOD RECIPE WEBSITE',
      description: 'This is a food recipe websitw where you can search for various food recipe and how to cook them.',
      imageUrl: 'assets/Food Recipe.png',
      tags: ['Html', 'CSS', ],
      liveUrl: 'https://foodrecipewebsite.vercel.app/',
      category: 'Frontend'
    },
{
      title: 'My First React Profile Card App',
      description: 'This is my first React  Profile card App .',
      imageUrl: 'assets/My first react.png',
      tags: ['React', ' Tailwind CSS', ],
      liveUrl: 'https://my-first-react-mini-project-a-profile-card-component.vercel.app/',

      category: 'Frontend'
    },


{
      title: 'A Simple Baby Naming Ceremony  Flyer ',
      description: 'This Project showscases a simple Baby Naming Ceremony Website.',
      imageUrl: 'assets/flyer.jpg',
      tags: ['Canva',  ],
      liveUrl: '#',
      category: 'UI/UX'
    },






    {
      title: 'FOOD WEBSITE FULL UI',
      description: 'This is a food Ordering website  UI where you can check for food,order and have it delivered.',
      imageUrl: 'assets/FOOD WEBSITE FULL UI- 2.png',
      tags: ['Figma',],
      liveUrl: '#',
      category: 'UI/UX'
    },





{
      title: ' A Simple Gadgets Business Flyer',
      description: 'This is a simple Flyer for .',
      imageUrl: 'assets/jay gadgets.png',
      tags: ['Canva', ],
      liveUrl: '#',
      category: 'UI/UX'
    },

{
      title: 'A Logo Design for an Auranest Wellness Center',
      description: 'This is a logo Design for an Auranest Wellness Center.',
      imageUrl: 'assets/logo.png',
      tags: ['Canva', ],
      liveUrl: '#',
      category: 'UI/UX'
    },
{
      title: ' A Crypto Phantom Wallet Redesigned',
      description: 'This is a Crypto Wallet Splash Screen  UI Redesigned This contains 3 UI .This contains my recreation of the real Phantom Splash screen ,Then another one that has the small twist of a smiey emoji on the logo . This recreation was done to improve my UI/UX design skills.',
      imageUrl: 'assets/MacBook Pro 16_ - 1.png',
      tags: ['Figma',],
      liveUrl: '#',
      category: 'UI/UX'
    },
{
      title: 'MOBILE BANKING APP UI',
      description: 'This is a Mobile banking UI app that consists of 3 main pages (The Homepage,The Account Overview page and the  transaction page).',
      imageUrl: 'assets/MOBILE BANKIN G APP UI.png',
      tags: ['Figma', ],
      liveUrl: 'https://www.figma.com/proto/wG0rBJws28ydN7aTatYFOb/MOBILE-BANKING-APP-UI?page-id=0%3A1&node-id=22-637&viewport=-230%2C18%2C0.29&t=ng6pqc7pZsttAXst-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=22%3A640',
      category: 'UI/UX'
    },
    
    {
      title: 'MY Redesigned Crypto Wallet App UI Mockup',
      description: 'This contains a phone mockup of my phantom redesigned spalsh screen.',
      imageUrl: 'assets/mockup1.png',
      tags: ['Figma', `Mockup`],
      liveUrl: '#',
      category: 'UI/UX'
    },







{
      title: 'A simple Design of a Virtual UI/UX DESIGN UI APP PHONE MOCKUP',
      description: 'I did a phone mockup of my UI/UX DESIGN CLASS UI Flyer.',
      imageUrl: 'assets/mockuuups-female-hand-holding-iphone-14-pro-mockup.png',
      tags: ['Figma', `Mockup`],
      liveUrl: '#',
      category: 'UI/UX'
    },










{
      title: '    MY UI/UX VIRTUAL CLASS FLYER',
      description: 'I made a Flyer for my UI/UX DESIGN CLASS for beginners.',
      imageUrl: 'assets/Uiux class flyer.png',
      tags: ['Figma',],
      liveUrl: '#',
      category: 'UI/UX'
    },







{
      title: 'A Clothing Product Page Design',
      description: 'I designed this clothing product page.',
      imageUrl: 'assets/Ridgeline Product Page Final UjI.png',
      tags: ['React', 'CSS', 'API Integration'],
      liveUrl: '#',
      category: 'UI/UX'
    },









{
      title: ' A simple Flyer for a skincare promotional ad',
      description: 'i designed this simple skincare promotional ad.',
      imageUrl: 'assets/Simple flyer.png',
      tags: ['Canva', ],
      liveUrl: '#',
      category: 'UI/UX'
    },





{
      title: 'A  navy blue table mockup of my logo design',
      description: 'This is a  navy blue table mockup of my logo design.',
      imageUrl: 'assets/Table.png',
      tags: ['Canva', ],
      liveUrl: '#',
      category: 'UI/UX'
    },




    {
      title: 'An Office Wall  mockup of my logo design',
      description: 'This is an office wall mockup of my logo design.',
      imageUrl: 'assets/Wall Mockup.png',
      tags: ['Canva', ],
      liveUrl: '#',
      category: 'UI/UX'
    },
    
    
    {
      title: 'A cloth mockup of my logo design',
      description: 'This is a Cloth mockup of my logo design',
      
      imageUrl: 'assets/Cloth Mockup .png',
      tags: ['Canva', ],
       liveUrl: '#',
      category: 'UI/UX'
    },


{
      title: 'FOOD RECIPE WEBSITE LOGIN UI',
      description: 'This is a Food Recipe Website login UI.',
      imageUrl: 'assets/FOOD RECIPE WEBSITE LOGIN UI.png',
      tags: ['Figma', ],
      liveUrl: '#',
      category: 'UI/UX'
    },
{
      title: ' A silver table pen mockup of my logo design',
      description: 'This is a Silver table pen mockup of my logo design.',
      imageUrl: 'assets/White table.png',
      tags: ['Canva', ],
      liveUrl: '#',
      category: 'UI/UX'
    },












{
      title: 'A simple Music Website',
      description: 'This is a simple music website that consists of the music, a link to the music video, and the song Lyrics.',
      imageUrl: 'assets/We will.png',
      tags: ['Html', 'CSS',`Js`],
      liveUrl: 'https://we-will-be-many-song.vercel.app/',
      category: 'Frontend'
    },



    {
      title: 'A simple clothing business flyer',
      description: 'I designed this simple  clothing  business flyer .',
      imageUrl: 'assets/simple flyer (2).png',
      tags: ['Figma', ],
      liveUrl: '#',
      category: 'UI/UX'
    },
    {
      title: 'Phantom Wallet Cypto App Redesigned',
      description: 'I redesigned phantom crypto wallet splash screen as a means of improving my UI/UX design skills  . i even added a small twist of a smiley emoji face .',
      imageUrl: 'assets/phan landing.png',
       tags: ['Figma', ],
      liveUrl: 'https://www.figma.com/proto/JUX9o4llo6n4bx8mklyL0B/PHANTOM-SPLASH-SCREEN?page-id=0%3A1&node-id=10-9&viewport=939%2C274%2C0.14&t=vczznHufRNfSkFRu-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=10%3A3',
      category: 'UI/UX'
    },
    {
      title: 'A woman holding the iphone mockup of  my virtual  UI/UX design class flyer',
      description: 'This shows the image of a A woman holding the iphone mockup of  my virtual  UI/UX design class flyer.',
      imageUrl: 'assets/mockuuups-woman-holding-iphone-14-pro-mockup.png',
      tags: ['Figma', 'UI Design', 'Mockup'],
      liveUrl: '#',
      category: 'Web Design'
    },
    {
      title: 'Real Estate Website',
      description: 'Responsive website for a real estate agency with property listings and search.',
      imageUrl: 'photo-1486718448742-163732cd1544',
      tags: ['React', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      category: 'Frontend'
    }
  ];
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <div className="page-transition pt-24">
      {/* Projects Hero */}
      <section className="py-16 bg-softBlue/20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
            <p className="text-lg text-darkText/80">
              Explore my recent work and see how I've helped clients achieve their goals through thoughtful design and robust development.
            </p>
          </div>
        </div>
      </section>
      
      {/* Projects Gallery */}
      <section className="section">
        <div className="container-custom">
          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  activeCategory === category
                    ? 'bg-primary-foreground text-white'
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          
          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">No projects found</h3>
              <p className="text-darkText/70">
                No projects matching the selected category. Try selecting a different category.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-peach/30">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Work Together?</h2>
          <p className="text-darkText/80 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
          <a href="/contact" className="btn btn-primary">
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
