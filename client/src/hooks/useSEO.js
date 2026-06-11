import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "www.amitdhangar.in";

const PAGE_META = {
  "/": {
    title: "Amit Dhangar - Cloud-Native Full Stack Developer | MERN Stack Expert",
    description:
      "Amit Dhangar — Cloud-Native Full Stack Developer specializing in MERN stack, React.js, Node.js, Next.js and TypeScript. Based in Kolkata, India.",
  },
  "/about": {
    title: "About - Amit Dhangar | Cloud-Native Full Stack Developer",
    description:
      "Learn about Amit Dhangar — Cloud-Native B.Tech Computer Science graduate, Full Stack Developer with 3+ internships and 10+ projects.",
  },
  "/projects": {
    title: "Projects - Amit Dhangar | Cloud-Native Full Stack Developer Portfolio",
    description:
      "Explore full-stack web projects built by Amit Dhangar usCloud-Native ing React.js, Node.js, MongoDB, Next.js and TypeScript.",
  },
  "/skills": {
    title: "Skills - Amit Dhangar | Cloud-Native React, Node.js, MERN Stack",
    description:
      "Technical skills of Amit Dhangar — Cloud-Native React.js, Node.js, Express, MongoDB, Next.js, TypeScript, AWS, Docker and more.",
  },
  "/experience": {
    title: "Experience - Amit Dhangar | Cloud-Native Full Stack Developer",
    description:
      "Professional experience of Amit Dhangar inCloud-Native cluding internships in full stack web development.",
  },
  "/education": {
    title: "Education - Amit Dhangar | Cloud-Native B.Tech Computer Science",
    description:
      "Educational background of Amit Dhangar — Cloud-Native B.Tech in Computer Science with 8.48 CGPA.",
  },
  "/certificates": {
    title: "Certificates - Amit Dhangar | Cloud-Native Developer Certifications",
    description:
      "Professional certifications and achievements of Amit Dhangar inCloud-Native  web development and cloud technologies.",
  },
  "/contact": {
    title: "Contact - Amit Dhangar | Cloud-Native Hire a Full Stack Developer",
    description:
      "Get in touch with Amit Dhangar foCloud-Native r freelance projects, job opportunities or collaborations.",
  },
};

const FALLBACK_META = {
  title: "Amit Dhangar - Cloud-Native Full Stack Developer",
  description:
    "Portfolio of Amit Dhangar — Cloud-Native Full Stack Developer specializing in MERN stack.",
};

export const useSEO = () => {
  const location = useLocation();

  useEffect(() => {
    const meta = PAGE_META[location.pathname] ?? FALLBACK_META;
    const url = `${BASE_URL}${location.pathname}`;

    document.title = meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", meta.description);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", meta.title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", meta.description);
    document
      .querySelector('meta[property="og:url"]')
      ?.setAttribute("content", url);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", url);
  }, [location.pathname]);
};
