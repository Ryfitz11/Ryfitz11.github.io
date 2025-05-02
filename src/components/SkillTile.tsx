import { Skill } from '../types';

interface SkillTileProps {
  skill: Skill;
  isActive: boolean;
  setActiveSkill: (name: string | null) => void;
}

const SkillTile = ({ skill, isActive, setActiveSkill }: SkillTileProps) => {
  return (
    <div
      className={`relative overflow-hidden bg-gray-800 rounded-xl transition-all duration-300 transform ${
        isActive ? 'scale-105 shadow-lg shadow-indigo-500/20' : 'hover:scale-105'
      }`}
      onMouseEnter={() => setActiveSkill(skill.name)}
      onMouseLeave={() => setActiveSkill(null)}
    >
      <div
        className={`h-full w-full p-6 flex flex-col items-center justify-center transition-all duration-300 ${
          isActive ? 'bg-gradient-to-br from-indigo-900/80 to-purple-900/80' : ''
        }`}
      >
        <div className="mb-3 text-3xl text-indigo-400">{skill.icon}</div>
        <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
        
        <div
          className={`transition-all duration-300 overflow-hidden ${
            isActive ? 'max-h-20 opacity-100 mt-2' : 'max-h-0 opacity-0'
          }`}
        >
          <p className="text-sm text-gray-300">{skill.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillTile;