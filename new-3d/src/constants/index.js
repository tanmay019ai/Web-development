import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  filmora,
  cloud,
  solid,
  cj,
  c,
  java,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  sheenedge,
  technojam,
  gtc,
  gssoc,
  python,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "AI Engineer",
    icon: mobile,
  },
  {
    title: "UI/UX Designer",
    icon: backend,
  },
  {
    title: "Freelancer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "C++",
    icon: cj,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Filmora",
    icon: filmora,
  },
  {
    name: "solidworks",
    icon: solid,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "cloud",
    icon: cloud,
  },
];

const experiences = 
[
  {
    title: "Open Source Developer",
    company_name: "GirlScript Summer of Code",
    icon: gssoc,
    iconBg: "#E6DEDD",
    date: "Oct 2024 - Nov 2024",
    points: [
      "Made first contributions to open source projects via GSSoC.",
      "Explored a variety of repositories and learned diverse coding practices.",
      "Engaged with experienced developers, gaining insights into scalable project structures.",
      "Enhanced teamwork and adaptability by working on community-driven projects."
    ],
  },
  {
    title: "Technical Team Member",
    company_name: "Galgotias Tech Council",
    icon: gtc,
    iconBg: "#383E56",
    date: "Oct 2024 - Nov 2024",
    points: [
      "Worked with the AI-ML group on real-time and generative AI projects.",
      "Participated in hackathons and workshops, pushing boundaries in machine learning.",
      "Collaborated with peers to brainstorm and execute innovative ideas.",
      "Strengthened understanding of data-driven decision making and AI pipelines."
    ],
  },
  {
    title: "Technical Team Member",
    company_name: "TechnoJam",
    icon: technojam,
    iconBg: "#E6DEDD",
    date: "Nov 2024 - Apr 2025",
    points: [
      "Engaged in club activities that fostered growth through hackathons, workshops, and tech meetups.",
      "Contributed to team projects, improving collaboration and version control practices.",
      "Explored multiple tech stacks, broadening understanding of modern development.",
      "Built strong connections and improved communication through active on-site involvement."
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "SheenEdge",
    icon: sheenedge,
    iconBg: "#383E56",
    date: "Feb 2025 - Jul 2025",
    points: [
      "Built responsive HTML email templates ensuring compatibility across major clients and devices.",
      "Started learning and applying React to create interactive UI components.",
      "Enhanced frontend problem-solving skills by debugging complex CSS & JS issues.",
      "Collaborated with a hybrid team, adapting to both remote and on-site workflows."
    ],
  },
]



const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };