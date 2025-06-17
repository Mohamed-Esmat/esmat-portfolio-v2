import { Briefcase } from "lucide-react";

const WorkExperience = () => {
  return (
    <div className="mt-16">
      <h3 className="text-3xl font-bold text-center text-white mb-12 flex items-center justify-center gap-3">
        <Briefcase className="w-8 h-8 text-blue-400" />
        Work Experience
      </h3>
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20 hover:border-purple-500/30 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h4 className="text-xl font-bold text-white">
                Frontend Developer
              </h4>
              <p className="text-blue-400 font-semibold">BytePixel Labs</p>
            </div>
            <span className="text-emerald-400 font-medium italic">
              Oct 2022 - Jan 2024
            </span>
          </div>
          <ul className="text-white/80 space-y-2">
            <li className="flex items-start gap-2">
              •
              <span>
                Developed responsive web applications using React.js and
                TypeScript
              </span>
            </li>
            <li className="flex items-start gap-2">
              •
              <span>
                Collaborated with design team to implement pixel-perfect UI
                components
              </span>
            </li>
            <li className="flex items-start gap-2">
              •
              <span>
                Optimized application performance resulting in 40% faster load
                times
              </span>
            </li>
            <li className="flex items-start gap-2">
              •
              <span>
                Integrated RESTful APIs and managed state using Redux Toolkit
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-pink-500/30 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h4 className="text-xl font-bold text-white">Frontend Mentor</h4>
              <p className="text-purple-400 font-semibold">
                Upskilling Academy (Bootcamp)
              </p>
            </div>
            <span className="text-emerald-400 font-medium italic">
              Sep 2023 - Apr 2024
            </span>
          </div>
          <ul className="text-white/80 space-y-2">
            <li className="flex items-start gap-2">
              {/* <Dot className="mt-1 text-white/80 w-7 h-7" /> */}•
              <span>
                Mentored junior developers in real-world frontend scenarios,
                including project planning and debugging.
              </span>
            </li>
            <li className="flex items-start gap-2">
              {/* <Dot className="mt-1 text-white/80 w-7 h-7" /> */}•
              <span>
                Facilitated collaboration and code reviews among junior
                developers.
              </span>
            </li>
            <li className="flex items-start gap-2">
              {/* <Dot className="mt-1 text-white/80 w-7 h-7" /> */}•
              <span>
                Update curriculum with latest frontend practices and frameworks
                for a dynamic learning environment.
              </span>
            </li>
            <li className="flex items-start gap-2">
              {/* <Dot className="mt-1 text-white/80 w-7 h-7" /> */}•
              <span>
                Facilitated team communication and helped participants follow
                agile practices during bootcamp sprints.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
