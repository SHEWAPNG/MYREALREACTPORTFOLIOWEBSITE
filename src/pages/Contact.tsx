
import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  // Contact information
  const contactInfo = [
    {
      label: 'Email',
      value: 'abisolaoloyede849@gmail.com',
      icon: '✉️',
      link: 'mailto:abisolaoloyede849@gmail.com'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/Oloyede Oyeladun Adesewa',
      icon: '💼',
      link: 'https://www.linkedin.com/in/oloyede-oyeladun-adesewa-9a8033328/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      label: 'GitHub',
      value: 'github.com/SHEWAPNG',
      icon: '💻',
      link: 'https://github.com/SHEWAPNG'
    }
  ];
  
  return (
    <div className="page-transition pt-24">
      {/* Contact Hero */}
      <section className="py-16 bg-peach/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-lg text-darkText/80">
              Have a project in mind or just want to say hello? I'd love to hear from you
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Content */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <p className="text-darkText/80 mb-8">
                Feel free to reach out using any of the following contact methods.
                I typically respond within 24-48 hours.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-2xl mr-4">{item.icon}</div>
                    <div>
                      <h3 className="font-medium">{item.label}</h3>
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary-foreground hover:underline"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 bg-mint/30 rounded-xl p-6">
                <h3 className="font-semibold mb-3">Working Hours</h3>
                <p className="text-darkText/80 text-sm">
                  Monday - Friday: 9:00 AM - 6:00 PM (GMT+1)<br />
                  Weekend: Available for urgent matters
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Send Me a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section bg-muted">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3">What services do you offer?</h3>
              <p className="text-darkText/80 text-sm">
                I specialize in UI/UX design, web design, frontend development, and responsive redesigns. My goal is to create beautiful, functional digital experiences that meet your business objectives.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3">What is your typical project process?</h3>
              <p className="text-darkText/80 text-sm">
                My process typically includes discovery, planning, design, development, testing, and launch phases. I maintain clear communication throughout to ensure your vision is brought to life.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3">How do you charge for projects?</h3>
              <p className="text-darkText/80 text-sm">
                I offer both hourly rates and fixed project pricing, depending on the scope and requirements. I'll provide a detailed quote after our initial consultation.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3">How long does a typical project take?</h3>
              <p className="text-darkText/80 text-sm">
                Project timelines vary based on scope and complexity. A simple website might take 2-4 weeks, while more complex applications can take 2-3 months or more.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
