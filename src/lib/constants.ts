export const SITE_CONFIG = {
  name: "Shashwat Pal",
  description: "Full-Stack Developer & UI/UX Designer",
  socialLinks: {
    github: "https://github.com/shashwatpal1021",
    linkedin: "https://www.linkedin.com/in/shashwatpal1021/",
  },
};

export const SECTIONS = {
  home: {
    id: "home",
    title: "Home",
  },
  about: {
    id: "about",
    title: "About",
  },
  skills: {
    id: "skills",
    title: "Skills",
  },
  projects: {
    id: "projects",
    title: "Projects",
  },
  experience: {
    id: "experience",
    title: "Experience",
  },
  contact: {
    id: "contact",
    title: "Contact",
  },
};

export const SKILLS = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", proficiency: 90 },
      { name: "Next.js", proficiency: 85 },
      { name: "TypeScript", proficiency: 80 },
      { name: "Tailwind CSS", proficiency: 95 },
      { name: "Redux", proficiency: 75 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", proficiency: 85 },
      { name: "Express.js", proficiency: 90 },
      { name: "MongoDB", proficiency: 75 },
      { name: "PostgreSQL", proficiency: 85 },
      { name: "Firebase", proficiency: 85 },
      { name: "Supabase", proficiency: 80 },
    ],
  },
  {
    category: "Design",
    items: [
      { name: "Figma", proficiency: 80 },
      { name: "UI/UX", proficiency: 85 },
      { name: "Animation", proficiency: 75 },
      { name: "Design Systems", proficiency: 80 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", proficiency: 90 },
      { name: "Docker", proficiency: 70 },
      { name: "AWS", proficiency: 75 },
      { name: "CI/CD", proficiency: 65 },
    ],
  },
];

export const PROJECTS = [
  {
    id: "1",
    title: "Rentify - Rentall App",
    description: `Rentify is a fully functional rentall app designed to simplify the rental process for both landlord and tenants.`,
    image: "src/assests/images/project-1.png",
    tags: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "NexAuth",
    ],
    demoLink: "https://rentify-app-ten.vercel.app/",
    sourceLink: "https://github.com/shashwatpal1021/rentify_app",
    featured: true,
  },
  {
    id: "2",
    title: "Issue Tracker App",
    description:
      "An Issue Tracker App is a tool designed to help teams to manage and track issues, bugs, or task within a project.",
    image: "src/assests/images/issue-tracker-2.png",
    tags: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Postgresql",
      "Shadcn",
      "Tailwind CSS",
      "NexAuth",
    ],
    demoLink: "https://issue-tracker-umber-delta.vercel.app/",
    sourceLink: "https://github.com/shashwatpal1021/issue-tracker",
    featured: true,
  },
];

export const EXPERIENCES = [
  {
    id: "1",
    position: "Senior Frontend Developer",
    company: "Concentrix",
    duration: "Jan 2025 - Present",
    description:
      "Led the frontend development team in creating responsive, user-friendly web applications. Implemented modern React architecture and design systems.",
    achievements: [
      "Reduced load time by 40% through code optimization",
      "Implemented CI/CD pipeline for frontend deployments",
      "Mentored junior developers and conducted code reviews",
    ],
  },
  {
    id: "2",
    position: "Full Stack Developer",
    company: "HTS Ltd.",
    duration: "2023 - 2025",
    description:
      "Developed full-stack web applications using React, Node.js, and Supabase. Collaborated with design and product teams to deliver feature-rich applications.",
    achievements: [
      "Created a real-time dashboard used by over 10,000 users",
      "Integrated docusign systems and improved conversion rates by 25%",
      "Implemented responsive designs for cross-platform compatibility",
    ],
  },
  {
    id: "3",
    position: "Full Stack Developer",
    company: "Johnson Controls",
    duration: "2022 - 2023",
    description:
      "Combined design and development skills to create visually appealing and functional web experiences. Specialized in interactive prototypes and animations.",
    achievements: [
      "Redesigned main product interface resulting in 30% increase in user engagement",
      "Created company design system and component library",
    ],
  },
];
