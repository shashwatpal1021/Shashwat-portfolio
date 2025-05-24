import { EXPERIENCES } from "@/lib/constants";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";
import { CheckCircle } from "lucide-react";

export function Experience() {
  const headerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container">
        <div ref={headerRef} className="text-center fade-in mb-16">
          <h2 className="section-title text-3xl font-bold mb-4">Work Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A timeline of my professional journey, highlighting key roles and
            achievements that have shaped my career.
          </p>
        </div>

        <div className="relative flex flex-col gap-16">
          {/* Vertical timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-primary/20 rounded-full hidden md:block" />

          {EXPERIENCES.map((experience, index) => (
            <div
              key={experience.id ?? index}
              className="relative flex items-start gap-6 md:gap-10 bg-white/80 dark:bg-muted/60 rounded-xl shadow-lg p-8 md:pl-16"
            >
              {/* Timeline dot */}
              <div className="absolute left-2 md:left-4 top-8 md:top-10">
                <div className="w-5 h-5 bg-primary rounded-full border-4 border-background shadow-md" />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-primary mb-1">{experience.position}</h3>
                <p className="text-lg font-medium text-muted-foreground mb-2">{experience.company}</p>
                <p className="text-base text-muted-foreground mb-2">{experience.duration}</p>
                <p className="mb-4 text-muted-foreground">{experience.description}</p>
                <ul className="list-none space-y-2">
                  {experience.achievements.map((responsibility, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle size={18} className="text-primary" />
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
