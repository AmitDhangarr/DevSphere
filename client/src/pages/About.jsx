import cvPdf from "@/assets/files/cv_pdf/Niladri_Chatterjee(CV).pdf";
import profileImg from "@/assets/profile/profile.png";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { motion } from "framer-motion";
import { Briefcase, Code2, Globe, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const achievements = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "7+ Projects",
    description: "Completed across frontend,backend and fullstack.",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "1+ Internships",
    description: "Professional work experience",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "6.74 CGPA",
    description: "Academic excellence",
  },
];

const interests = [
  "Web Development",
  "UI/UX Design",
  "Cloud Computing",
  "DevOps",
  "Open Source",
  "Artificial Intelligence",
];

const quickFacts = [
  "Based in Etawah, Uttar Pradesh, India",
  "BCA in Computer Science",
  "CGPA:6.74",
];

const About = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-4xl mx-auto pb-20">
      <ScrollAnimation>
        <motion.h2 className="text-4xl font-bold mb-8 gradient-text">
          About Me
        </motion.h2>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-8">
        <ScrollAnimation>
          <div className="aspect-square overflow-hidden rounded-2xl">
            <img
              src={profileImg}
              alt="Amit Dhangar"
              width={600}
              height={1200}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="space-y-6">
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Hi! I'm a cloud-native full-stack developer passionate about building
              scalable, production-grade web applications. My journey in tech began
              during college, where I discovered my love for solving real-world problems
              through clean, efficient code.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I'm currently pursuing my BCA, where I've been able to complement my
              academic foundation with hands-on projects and real-world experience.
              That blend of core computer science concepts and practical engineering
              continues to shape how I think about building software.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I specialize in the MERN stack with TypeScript, backed by solid experience
              deploying and managing infrastructure on AWS and GCP. Whether it's building
              RESTful APIs, designing cloud architectures, or crafting responsive
              frontends, I enjoy owning the full stack — from database to deployment.
            </p>
          </div>

          <div className="pt-4">
            <h3 className="text-2xl font-semibold mb-4 gradient-text">
              Quick Facts
            </h3>
            <ul className="list-none space-y-3">
              {quickFacts.map((fact) => (
                <motion.li
                  key={fact}
                  className="flex items-center space-x-2 text-gray-300"
                >
                  <span className="w-2 h-2 bg-white rounded-full" />
                  <span>{fact}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex justify-start space-x-4">
            <a
              href={"https://drive.google.com/file/d/1fIIF0cU9-ox3ESNrw6qjJGkK8shPGhK9/view?usp=drive_link"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Download CV
            </a>
            <Link
              to="/skills"
              className="px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors"
            >
              My Skills
            </Link>
          </div>
        </ScrollAnimation>
      </div>

      <ScrollAnimation>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 gradient-text">
            Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <div
                key={achievement.title}
                className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
              >
                <div className="text-white mb-4">{achievement.icon}</div>
                <h4 className="text-xl font-semibold mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-400">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 gradient-text">
            Areas of Interest
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {interests.map((interest) => (
              <div
                key={interest}
                className="bg-white/5 p-4 rounded-xl backdrop-blur-sm flex items-center gap-3"
              >
                <Globe className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">{interest}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default About;
