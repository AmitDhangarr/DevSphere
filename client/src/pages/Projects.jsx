import project from "../assets/projects_img/project.webp"
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "CodeBuddy",
    description:
      "A developer-focused platform that connects people based on skills, goals, and collaboration style. Built a matching algorithm that goes beyond keyword filtering surfacing genuinely relevant profiles through weighted skill comparison.",
    image: project,
    github: "https://github.com/AmitDhangarr/CodeBuddy",
    live: "project/live",
    tags: [
      "Next.js",
      "Supabase",
      "Postgres",
      "OAuth",
      "Gemini API",
      "Zustand",
      "JWT",
    ],
  },
  {
    id: 2,
    title: "ShadiSync",
    description:
      "A RESTful API for event management platform that handles everything from creating events and managing invites to tracking expenses and logging gifts all in one place.",
    image: project,
    github: "https://github.com/AmitDhangarr/ShadiSync",
    live: "project/live",
    tags: [
      "MongoDB",
      "Express",
      "Node",
      "JWT",
      "Bcrypt",
      "REST API",
      "Multer",
      "OOPS"
    ],
  },
  {
    id: 3,
    title: "GitScope",
    description:
      "An analytics platform that lets you deep-dive into any GitHub profile — explore contribution graphs, repository metrics, and language trends, then compare profiles head-to-head for actionable insights.",
    image: project,
    github: "https://github.com/niladri-1/GitScope",
    live: "",
    tags: ["Next.js", "FastAPI", "OAuth", "JWT", "GSAP", "Python"],
  },
  {
    id: 4,
    title: "ShopCo",
    description:
      "Shopco is a modern fashion store application for browsing and shopping the latest clothing and accessories.",
    image: project,
    github: "https://github.com/AmitDhangarr/ShopCo",
    live: "https://shop-co-iota.vercel.app/",
    tags: ["React.js", "Tailwind CSS", "ReduxToolkit", "E-Commerce", "Responsive"],
  },
  {
    id: 5,
    title: "Flipkart",
    description:
      "A Flipkart clone developed using React to simulate an e-commerce shopping experience.",
    image: project,
    github: "https://github.com/niladri-1/Flipkart-Clone",
    live: "project/live",
    tags: ["React.js", "Tailwind CSS", "UI/UX", "ProtoTyping", "ReduxToolkit"],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-12 gradient-text">
          Featured Projects
        </h2>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ScrollAnimation key={project.id}>
            <div className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm h-full flex flex-col">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                width={600}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-sm bg-purple-500/20 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Projects;
