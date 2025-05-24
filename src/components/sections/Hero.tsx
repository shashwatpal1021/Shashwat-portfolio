import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Hero() {
  const [typedText, setTypedText] = useState("");
  const roles = ["Full-Stack Developer", "UI/UX Designer", "Problem Solver"];

  // Use refs to avoid closure issues in setTimeout
  const roleIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);

  useEffect(() => {
    let typingSpeed = 100;
    const pauseDuration = 1500;

    const typeText = () => {
      const currentRole = roles[roleIndex.current];

      if (isDeleting.current) {
        setTypedText(currentRole.substring(0, charIndex.current - 1));
        charIndex.current--;
        typingSpeed = 50;

        if (charIndex.current === 0) {
          isDeleting.current = false;
          roleIndex.current = (roleIndex.current + 1) % roles.length;
          typingSpeed = 300;
        }
      } else {
        setTypedText(currentRole.substring(0, charIndex.current + 1));
        charIndex.current++;
        typingSpeed = 100;

        if (charIndex.current === currentRole.length) {
          isDeleting.current = true;
          typingSpeed = pauseDuration;
        }
      }

      setTimeout(typeText, typingSpeed);
    };

    const timerId = setTimeout(typeText, 500);

    return () => clearTimeout(timerId);
    // eslint-disable-next-line
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden"
    >
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Shashwat Pal
            </span>
          </h1>

          <div className="h-12 md:h-16">
            <h2 className="text-2xl md:text-4xl font-medium text-foreground/80">
              I'm a <span className="text-accent">{typedText}</span>
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          <p className="text-lg md:text-xl mt-6 text-muted-foreground max-w-2xl">
            Crafting elegant digital solutions through clean code and thoughtful
            design. Passionate about creating user-centered experiences that
            solve real problems.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <Button asChild size="lg">
              <a href="#contact">Get in Touch</a>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>

            <Button variant="secondary" size="lg" asChild>
              <a
                href="https://drive.google.com/file/d/1g2UphPtnmbg3jJl4h2540mOKBc-tTFg4/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </Button>

            <div className="flex items-center space-x-4 ml-2">
              <a
                href={SITE_CONFIG.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-full hover:bg-primary/10 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={SITE_CONFIG.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-full hover:bg-primary/10 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-1/3 h-1/3 bg-primary/20 rounded-full blur-[100px] opacity-60" />
      <div className="absolute bottom-[20%] left-[5%] w-1/4 h-1/4 bg-secondary/20 rounded-full blur-[100px] opacity-60" />

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer p-2 rounded-full transition-colors hover:bg-primary/20 group"
        onClick={() => {
          const section = document.getElementById("about");
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }}
        aria-label="Scroll Down"
        tabIndex={0}
        role="button"
      >
        <ArrowDown className="h-6 w-6 text-primary group-hover:text-secondary transition-colors" />
      </div>
    </section>
  );
}
