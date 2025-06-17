import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
        <GraduationCap className="w-6 h-6 text-blue-400" />
        Education
      </h3>
      <div className="text-white/80">
        <p className="font-semibold">Bachelor of Computer Science</p>
        <p>Faculty of Science, Cairo University — Graduated 2023</p>
        <p className="text-emerald-400 mt-2">Grade: Excellent</p>
      </div>
    </div>
  );
};

export default Education;
