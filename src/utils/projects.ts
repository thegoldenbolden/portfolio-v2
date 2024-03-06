export type Tag =
  | "Next.js"
  | "Node.js"
  | "React"
  | "Typescript"
  | "Javascript"
  | "Side Project"
  | "HTML5"
  | "CSS3";

export type Project = {
  name: string;
  site?: string;
  repo?: string;
  tags: Tag[];
  description: string;
  featured?: boolean;
  year: string;
  status: "in_progress" | "completed" | "hiatus";
};

export const projects: Project[] = [
  {
    name: "Wouldry",
    repo: "https://github.com/thegoldenbolden/wouldry",
    tags: ["Next.js", "React", "Typescript", "Side Project"],
    description:
      "Discover more about yourself with thought-provoking questions",
    year: "2023",
    status: "completed",
  },
  {
    featured: true,
    name: "Pokefolder",
    repo: "https://github.com/thegoldenbolden/pokefolder",
    site: "https://www.pokefolder.com",
    tags: ["Next.js", "React", "Typescript", "Side Project"],
    description:
      "Explore an extensive pokemon card database and find prices about any card",
    year: "2022",
    status: "hiatus",
  },
  {
    name: "Portfolio V1",
    repo: "https://github.com/thegoldenbolden/portfolio-v1",
    tags: ["Next.js", "React", "Typescript", "Side Project"],
    description: "The first version of this site",
    year: "2022",
    status: "completed",
  },
  {
    featured: true,
    name: "Portfolio V2",
    site: "https://www.jacobbolden.com",
    repo: "https://github.com/thegoldenbolden/portfolio-v2",
    tags: ["Next.js", "React", "Typescript", "Side Project"],
    description: "This site that you're currently viewing",
    year: "2023",
    status: "in_progress",
  },
  {
    name: "Noodle",
    repo: "https://github.com/thegoldenbolden/noodle",
    tags: ["Node.js", "Typescript", "Side Project"],
    description: "A discord bot",
    year: "2020",
    status: "completed",
  },
  {
    name: "Trivia Buddy",
    featured: true,
    repo: "https://github.com/thegoldenbolden/trivia-buddy",
    site: "https://thegoldenbolden.github.io/trivia/",
    tags: ["HTML5", "CSS3", "Side Project"],
    description: "A trivia app",
    year: "2021",
    status: "completed",
  },
];

export const socials = {
  x: "https://x.com/thagoldenbolden",
  github: "https://github.com/thegoldenbolden",
  spotify: "https://open.spotify.com/user/thegoldenbolden",
  linkedin: "https://linkedin.com/in/jbolden9",
};

export const skills = [
  "Next.js",
  "React",
  "Typescript",
  "Javascript",
  "Python",
  "Node.js",
  "PostgreSQL",
  "C#",
];
