import { useScrollReveal } from "@/lib/hooks/useScrollReveal";

export function About() {
  const contentRef = useScrollReveal<HTMLDivElement>();
  const imageRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-20">
      <div className="container">
        <h2 className="section-title text-center">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          <div
            ref={imageRef}
            className="slide-in-left rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src="https://drive.google.com/file/d/1sRPE5QpGCWjFw4dsoVR9amLv0xPU0Nfy/view?usp=sharing"
              alt="Shashwat Pal"
              className="w-full h-auto object-cover aspect-[4/5]"
            />
          </div>

          <div ref={contentRef} className="slide-in-right">
            <h3 className="text-2xl font-semibold mb-4">
              A passionate developer and designer creating impactful digital
              experiences
            </h3>

            <div className="space-y-4 text-lg text-foreground/80">
              <p>
                With over 3 years of experience in web development and design,
                I've cultivated a unique blend of technical expertise and
                creative problem-solving abilities.
              </p>

              <p>
                My journey began with a fascination for how design and
                technology intersect to create meaningful user experiences. This
                passion has guided my career, leading me to work on diverse
                projects across various industries.
              </p>

              <p>
                I specialize in building responsive, accessible, and performant
                web applications using modern technologies like React, Node.js,
                and TypeScript. My approach combines clean code principles with
                thoughtful design to deliver solutions that are both beautiful
                and functional.
              </p>

              <p>
                When I'm not coding, you'll find me exploring new design trends,
                contributing to open-source projects, or mentoring aspiring
                developers. I believe in continuous learning and strive to stay
                at the forefront of web development best practices.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Education</h4>
                <p className="text-foreground/70">
                  B.Tech in Information Technology
                </p>
                <p className="text-foreground/70">
                  REC (Rajkiya Engineering College), Azamgarh, Uttar Pradesh,
                  India
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-2">Location</h4>
                <p className="text-foreground/70">Gurgram, India</p>
                <p className="text-foreground/70">Open to Work</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
