import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSkills = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center pt-20 pb-10 px-4 relative"
    >
      <div className="container mx-auto text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Web3 & Blockchain
          </span>
          <br />
          Developer
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Building the decentralized future, one block at a time
        </p>

        <div className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700 max-w-2xl mx-auto mb-10">
          <p className="text-gray-300 leading-relaxed">
            Motivated and detail-oriented professional seeking an entry-level opportunity in software development,
            eager to apply a strong technical background and problem-solving skills.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={scrollToSkills}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            Explore My Skills
            <ArrowDown className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-indigo-400" />
      </div>
    </section>
  );
};

export default Hero;