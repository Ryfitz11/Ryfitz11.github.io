import { useState } from 'react';
import { skills } from '../data/skillsData';
import SkillTile from './SkillTile';

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My expertise spans across multiple technologies in the blockchain and web development ecosystem.
            Hover over each skill to learn more.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <SkillTile
              key={skill.name}
              skill={skill}
              isActive={activeSkill === skill.name}
              setActiveSkill={setActiveSkill}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;