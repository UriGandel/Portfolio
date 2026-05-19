export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "9.0", label: "GPA" },
  { value: "AI + Systems", label: "Main technical focus" },
  { value: "5", label: "flagship technical projects" },
];

export const skillGroups = [
  {
    title: "Programming Languages",
    accent: "green",
    skills: ["C++", "Python", "Java", "C#", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "AI & Machine Learning",
    accent: "blue",
    skills: [
      "Applied LLM Engineering",
      "LLM API Integration",
      "Autonomous Agentic Workflows",
      "System Automation",
      "Predictive Modeling",
      "Financial Sentiment Analysis",
      "Prompt Engineering",
      "AI Application Architecture",
    ],
  },
  {
    title: "Frameworks & Tools",
    accent: "gold",
    skills: [
      "React",
      "Next.js",
      "Astro",
      "Tailwind CSS",
      "Bootstrap",
      "React Native",
      "Expo",
      "Docker",
      "Microservices Architecture",
      "Git",
    ],
  },
  {
    title: "Leadership & Soft Skills",
    accent: "rose",
    skills: [
      "Graduate of a 2-year leadership training program",
      "Active Youth Group Leader (Madrij)",
      "STEM communication",
    ],
  },
];

export const projects = [
  {
    name: "NegocIA",
    tag: "AI Agents",
    image: "/projects/negocia.jpg",
    alt: "NegocIA marketplace landing page with AI negotiation product cards",
    description:
      "I built this during Platanus Hack: an autonomous AI agent platform for automating complex buying and selling workflows end to end.",
    stack: ["LLM workflows", "Automation", "Platform design"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/platanus-hack/platanus-hack-26-ar-team-19",
      },
    ],
  },
  {
    name: "Platanus Hack Arcade Challenge Winner",
    tag: "Competition",
    image: "/projects/gravity-duel.jpg",
    alt: "Gravity Duel arcade challenge gameplay screen",
    description:
      "My winning arcade challenge entry, which secured my spot at Platanus Hack 2026.",
    stack: ["Algorithms", "Challenge engineering", "Rapid iteration"],
    links: [
      {
        label: "Play",
        href: "https://hack.platan.us/26/arcade/gravity-duel-final-ten",
      },
    ],
  },
  {
    name: "HydroEngine",
    tag: "Systems",
    image: "/projects/hydroengine.jpg",
    alt: "HydroEngine editor showing a 3D demo scene with performance UI",
    description:
      "A custom game engine where I explored low-level programming, memory management, and system design.",
    stack: ["C++", "Memory management", "Architecture"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Alezito2008/HydroEngine/tree/Presentacion",
      },
    ],
  },
  {
    name: "Traidx",
    tag: "AI Finance",
    status: "In development",
    description:
      "An AI-driven investment platform combining market sentiment, prediction models, Docker, and a microservices architecture.",
    stack: ["Sentiment analysis", "Prediction models", "Docker", "Microservices"],
  },
  {
    name: "StepByStories",
    tag: "EdTech",
    image: "/projects/stepbystories.jpg",
    alt: "StepByStory mobile app interface with book discovery and categories",
    description:
      "An AI-powered app that adapts literature into different CEFR language levels, built with React Native and Expo.",
    stack: ["React Native", "Expo", "LLM integration"],
    links: [
      {
        label: "Visit site",
        href: "https://www.stepbystories.com/",
      },
    ],
  },
];

export const awards = [
  {
    title: "UdeSA AI Hackathon Winner & Merit Scholarship",
    image: "/credentials/udesa-merit-scholarship.jpg",
    original: "/credentials/originals/udesa-merit-scholarship.jpeg",
    alt: "Universidad de San Andres merit scholarship certificate for Uriel Gandelman",
    text: "I won first place at the Universidad de San Andrés Artificial Intelligence Hackathon and received a merit scholarship (Beca al Mérito) for my performance during the Cátedra ORT-UdeSA 2025.",
  },
  {
    title: "Platanus Hack 2026 Selection",
    image: "/credentials/platanus-hack-26-UriGandel.jpg",
    original: "/credentials/originals/platanus-hack-26-UriGandel.png",
    alt: "Platanus Hack 2026 hacker badge for Uriel Gandelman",
    text: "I was chosen as one of only 100 developers out of 400+ applicants to participate in one of the most competitive hackathons in the region.",
  },
  {
    title: "Beca Instituto Balseiro 2025",
    image: "/credentials/balseiro-phase-certificate.jpg",
    original: "/credentials/originals/diploma2025-85.pdf",
    alt: "Instituto Balseiro 2025 certificate preview",
    text: "I passed to the first phase among 591 submissions nationwide with an extensive essay analyzing the impact of AI on the programming profession.",
  },
  {
    title: "World ORT STEM Communication Award 2025",
    image: "/credentials/world-ort-stem-communication-award.jpg",
    original: "/credentials/originals/world-ort-stem-communication-award.jpeg",
    alt: "World ORT STEM Communication Award 2025 certificate of commendation",
    text: 'I received a Certificate of Commendation for explaining the A* pathfinding algorithm in a clear STEM communication video.',
  },
  {
    title: "Escuela de Madrijim Hacoaj",
    image: "/credentials/hacoaj-madrijim-certificate.jpg",
    original: "/credentials/originals/hacoaj-madrijim-certificate.jpeg",
    alt: "Escuela de Madrijim Hacoaj certificate for Uriel Gandelman",
    text: "I was officially certified as a Youth Group Leader (Madrij) after completing the comprehensive leadership training program (Camada N°56).",
  },
];

export const contactLinks = [
  { label: "GitHub", href: "http://github.com/UriGandel" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/uriel-gandelman-341a60398" },
  { label: "Email", href: "mailto:urigandelman@gmail.com" },
];
