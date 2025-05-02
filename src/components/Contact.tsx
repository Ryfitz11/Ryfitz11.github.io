import { useState } from 'react';
import { Linkedin, Github, Youtube } from 'lucide-react';

const Contact = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  
  const socialLinks = [
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ryan-fitzgerald-728579215/',
      icon: <Linkedin />,
      color: 'bg-[#0077B5]',
      hoverText: 'Connect on LinkedIn',
    },
    {
      name: 'github',
      url: 'https://github.com/Ryfitz11',
      icon: <Github />,
      color: 'bg-[#333]',
      hoverText: 'View GitHub Profile',
    },
    {
      name: 'youtube',
      url: 'https://www.youtube.com/@ryanfitzgerald3948',
      icon: <Youtube />,
      color: 'bg-[#FF0000]',
      hoverText: 'Watch on YouTube',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Interested in blockchain development or want to discuss web3 technologies? Let's connect through any of these platforms.
          </p>
        </div>

        <div className="flex justify-center space-x-6 md:space-x-10 mb-12">
          {socialLinks.map((link) => (
            <div key={link.name} className="relative group">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-800 hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:rotate-3"
                onMouseEnter={() => setHoveredIcon(link.name)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <div className={`text-white transform transition-transform duration-300 ${
                  hoveredIcon === link.name ? 'scale-110' : ''
                }`}>
                  {link.icon}
                </div>
              </a>
              <div
                className={`absolute -bottom-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-sm py-1 px-3 rounded-md transition-all duration-200 pointer-events-none ${
                  hoveredIcon === link.name ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
              >
                {link.hoverText}
              </div>
              <div className={`absolute -bottom-1 left-1/2 h-8 w-8 rounded-full transform -translate-x-1/2 scale-0 opacity-0 transition-all duration-300 ${link.color} ${
                hoveredIcon === link.name ? 'scale-50 opacity-20' : ''
              }`}></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-400">
            Open to freelance opportunities, consulting, and full-time positions in blockchain development.
          </p>
          <a
            href="mailto:ryfitz2011@gmail.com"
            className="mt-4 inline-block text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            RyFitz2011@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;