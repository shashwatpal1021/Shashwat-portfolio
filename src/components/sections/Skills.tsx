import { useScrollReveal } from '@/lib/hooks/useScrollReveal';
import { SKILLS } from '@/lib/constants';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

export function Skills() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container">
        <div ref={headerRef} className="text-center fade-in">
          <h2 className="section-title">My Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency in various technologies, tools, and methodologies.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {SKILLS.map((skillCategory, index) => (
            <SkillCategory
              key={skillCategory.category}
              category={skillCategory.category}
              skills={skillCategory.items}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface SkillCategoryProps {
  category: string;
  skills: { name: string; proficiency: number }[];
  index: number;
}

function SkillCategory({ category, skills, index }: SkillCategoryProps) {
  const categoryRef = useScrollReveal<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px',
  });
  
  return (
    <div 
      ref={categoryRef} 
      className={cn(
        'glass-effect rounded-lg p-6 shadow-md',
        index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'
      )}
    >
      <h3 className="text-2xl font-semibold mb-6">{category}</h3>
      
      <div className="space-y-5">
        {skills.map((skill, skillIndex) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">{skill.name}</span>
              <span>{skill.proficiency}%</span>
            </div>
            <Progress 
              value={skill.proficiency} 
              className="h-2"
              style={{ 
                animationDelay: `${skillIndex * 150}ms`,
                transitionDuration: '1s', 
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}