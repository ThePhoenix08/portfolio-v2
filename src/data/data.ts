const socialLinks = {
  linkedin: "https://www.linkedin.com/in/vighneshbrahme/",
  github: "https://github.com/ThePhoenix08",
  mailme: "mailto:vighneshbrahme.workonly@gmail.com",
  portfolio: "",
  resume:
    "https://drive.google.com/file/d/1BD1TEDYe13PrFBar2FWeGF0HCZvLVCBq/view?usp=drive_link",
};

type SkillsObj = {
  [key: string]: {
    name: string;
    level: "Basic" | "Intermediate" | "Experienced";
  }[];
};

const skills: SkillsObj = {
  "Frontend Web Development": [
    { name: "HTML", level: "Experienced" },
    { name: "CSS", level: "Experienced" },
    { name: "SASS", level: "Basic" },
    { name: "Javascript", level: "Experienced" },
    { name: "ReactJS", level: "Intermediate" },
    { name: "TailwindCSS", level: "Intermediate" },
    { name: "MaterialUI", level: "Basic" },
  ],
  "Backend Web Development": [
    { name: "NodeJS", level: "Basic" },
    { name: "ExpressJS", level: "Basic" },
    { name: "GraphQL", level: "Basic" },
    { name: "MongoDB", level: "Basic" },
    { name: "Mongoose", level: "Basic" },
  ],
  "Tools and Others": [
    { name: "C++", level: "Intermediate" },
    { name: "Python", level: "Intermediate" },
    { name: "Typescript", level: "Basic" },
    { name: "Git", level: "Basic" },
  ],
};

const projects = [
  {
    title: "Expense Tracker",
    description: "A web service to track personal expenses.",
    link: "http://expense-tracker-3upo.onrender.com/",
    repo: socialLinks.github + "/expense-tracker",
    chips: [
      "ReactJS",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "Mongoose",
      "GraphQL",
      "TailwindCSS",
    ],
  },
  {
    title: "My New Portfolio",
    description: "A portfolio website for showcasing my skills and projects.",
    link: socialLinks.portfolio,
    repo: socialLinks.github + "/portfolio-v2",
    chips: ["ReactJS", "MaterialUI", "TailwindCSS"],
  },
  {
    title: "Movix",
    description: "A responsive movies and tv shows exploring website.",
    link: "https://movix-website-mgi46c5vd-vighnesh-brahmes-projects.vercel.app/",
    repo: socialLinks.github + "/movix-website",
    chips: ["ReactJS", "SASS"],
  },
  {
    title: "Task Tracker",
    description: "A simple task tracker application.",
    link: "https://thephoenix08.github.io/Codsoft-task-tracker-app/",
    repo: socialLinks.github + "/Codsoft-task-tracker-app",
    chips: ["ReactJS", "TailwindCSS", "MaterialUI"],
  },
  /*   {
    title: "My Old Portfolio",
    description:
      "My first portfolio website for showcasing my skills and projects.",
    link: "https://thephoenix08.github.io/portfolio/",
    repo: socialLinks.github + "/portfolio",
  },
  {
    title: "",
    description: "",
    link: "",
    repo: "",
    chips: ["", ""],
  }, */
];

export { socialLinks, skills, projects };






































