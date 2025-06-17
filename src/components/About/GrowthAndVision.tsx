import { BookOpen, Target, TrendingUp } from "lucide-react";

const GrowthAndVision = () => {
  return (
    <div className="mt-16">
      <h3 className="text-3xl font-bold text-center text-white mb-12 flex items-center justify-center gap-3">
        <TrendingUp className="w-8 h-8 text-emerald-400" />
        Growth & Vision
      </h3>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Currently Learning */}
        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/20 hover:border-purple-500/30 transition-all duration-300 hover:scale-105">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-bold text-white">Currently Learning</h4>
          </div>
          <ul className="space-y-2 text-white/80">
            <li>• Advanced React Patterns & Architecture</li>
            <li>• Node.js & Express for Full-Stack Development</li>
            <li>• Database Design with PostgreSQL</li>
            <li>• Testing with Jest & React Testing Library</li>
            <li>• DevOps basics with Docker & CI/CD</li>
          </ul>
        </div>

        {/* 2025 Goals */}
        <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-lg rounded-2xl p-6 border border-emerald-500/20 hover:border-teal-500/30 transition-all duration-300 hover:scale-105">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-bold text-white">2025 Goals</h4>
          </div>
          <ul className="space-y-2 text-white/80">
            <li>• Land a Frontend Developer role at a tech company</li>
            <li>• Contribute to open-source React projects</li>
            <li>• Build a SaaS product from scratch</li>
            <li>• Master TypeScript advanced patterns</li>
            <li>• Mentor junior developers in the community</li>
          </ul>
        </div>

        {/* What Drives Me */}
        <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-lg rounded-2xl p-6 border border-orange-500/20 hover:border-red-500/30 transition-all duration-300 hover:scale-105">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            <h4 className="text-xl font-bold text-white">What Drives Me</h4>
          </div>
          <ul className="space-y-2 text-white/80">
            <li>• Creating delightful user experiences</li>
            <li>• Solving complex problems with clean code</li>
            <li>• Learning new technologies and patterns</li>
            <li>• Collaborating with talented teams</li>
            <li>• Building products that make a difference</li>
          </ul>
        </div>
      </div>

      {/* Vision Statement */}
      <div className="mt-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 text-center">
        <h4 className="text-2xl font-bold text-white mb-4">My Vision</h4>
        <p className="text-white/90 text-lg leading-relaxed max-w-3xl mx-auto">
          To become a well-rounded full-stack developer who creates impactful,
          user-centered applications. I believe in continuous learning, clean
          code practices, and building technology that solves real-world
          problems.
        </p>
      </div>
    </div>
  );
};

export default GrowthAndVision;
