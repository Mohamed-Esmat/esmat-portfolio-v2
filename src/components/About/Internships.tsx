import { GraduationCap } from "lucide-react";

const Internships = () => {
  return (
    <div className="mt-16">
      <h3 className="text-3xl font-bold text-center text-white mb-12 flex items-center justify-center gap-3">
        <GraduationCap className="w-8 h-8 text-emerald-400" />
        Internships
      </h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-lg rounded-2xl p-6 border border-emerald-500/20 hover:border-teal-500/30 transition-all duration-300">
          <div className="mb-4">
            <h4 className="text-lg font-bold text-white">
              Full Stack Development Intern
            </h4>
            <p className="text-emerald-400 font-semibold">Route</p>
            <span className="text-white/60 text-sm italic">
              Feb 2021 - Oct 2021
            </span>
          </div>
          <ul className="text-white/80 space-y-1 text-sm">
            <li className="flex items-start gap-2">
              • <span>Built RESTful APIs with Node.js and Express.</span>
            </li>
            <li className="flex items-start gap-2">
              •
              <span>
                Integrated MongoDB with Mongoose and used JWT for
                authentication.
              </span>
            </li>
            <li className="flex items-start gap-2">
              •
              <span>
                Assisted in building the frontend with React during
                cross-functional projects.
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-lg rounded-2xl p-6 border border-orange-500/20 hover:border-red-500/30 transition-all duration-300">
          <div className="mb-4">
            <h4 className="text-lg font-bold text-white">
              Frontend Development Trainee
            </h4>
            <p className="text-orange-400 font-semibold">Reload</p>
            <span className="text-white/60 text-sm italic">
              Oct 2020 - Feb 2021
            </span>
          </div>
          <ul className="text-white/80 space-y-1 text-sm">
            <li className="flex items-start gap-2">
              •
              <span>
                Completed intensive training in modern web technologies
              </span>
            </li>
            <li className="flex items-start gap-2">
              •
              <span>
                Built multiple projects using HTML, CSS, and JavaScript
              </span>
            </li>
            <li className="flex items-start gap-2">
              •
              <span>Gained hands-on experience with React.js fundamentals</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Internships;
