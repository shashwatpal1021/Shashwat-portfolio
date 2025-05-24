import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PROJECTS } from "@/lib/constants";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  // const [filter, setFilter] = useState<'all' | 'featured'>('all');
  const headerRef = useScrollReveal<HTMLDivElement>();

  // const filteredProjects = filter === 'all'
  //   ? PROJECTS
  //   : PROJECTS.filter(project => project.featured);

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <div ref={headerRef} className="text-center fade-in">
          <h2 className="section-title">My Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work across various domains and technologies. Each
            project represents a unique challenge solved through creative
            problem-solving and technical expertise.
          </p>

          {/* <div className="flex justify-center space-x-4 mt-8">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => setFilter('all')}
            >
              All Projects
            </Button>
            <Button
              variant={filter === 'featured' ? 'default' : 'outline'}
              onClick={() => setFilter('featured')}
            >
              Featured
            </Button>
          </div> */}
        </div>

        {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
        {/* {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))} */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: (typeof PROJECTS)[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  });

  return (
    <Card
      ref={cardRef}
      className="overflow-hidden scale-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {project.featured && (
          <div className="absolute top-2 right-2">
            {/* <Badge variant="default" className="bg-primary">
              Featured
            </Badge> */}
          </div>
        )}
      </div>

      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button asChild variant="outline" size="sm">
          <a
            href={project.sourceLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-4 w-4 mr-2" />
            Code
          </a>
        </Button>
        <Button asChild size="sm">
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-2" />
            Demo
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
