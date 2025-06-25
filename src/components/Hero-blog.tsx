import { Button } from "@/components/ui/button3";
import { Badge } from "@/components/ui/badge";
import { Search, TrendingUp, Users, BookOpen } from "lucide-react";
import { ColourfulText } from "@/components/ui/colourful-text";

const HeroBlog = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,191,36,0.05),transparent_50%)]" />

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-pulse opacity-60" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-yellow-300 rounded-full animate-bounce opacity-40" />
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-yellow-500 rounded-full animate-pulse opacity-50" />

      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <Badge
            variant="secondary"
            className="mb-6 px-4 py-2 bg-yellow-100 text-yellow-800 border-yellow-200 text-sm font-medium"
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            ADHD Awareness & Support
          </Badge>

          {/* Main heading */}
          <h1 className="text-9xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight">
            Welcome to{" "}
            <span>
              <ColourfulText text="BlogDHD" />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Empowering individuals with ADHD through knowledge, community, and
            practical strategies for everyday success.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-yellow-100">
              <BookOpen className="w-5 h-5 text-yellow-600" />
              <span className="text-gray-700 font-medium">200+ Articles</span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-yellow-100">
              <Users className="w-5 h-5 text-yellow-600" />
              <span className="text-gray-700 font-medium">50k+ Readers</span>
            </div>
          </div>

          {/* Search bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles, tips, strategies..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-700 placeholder-gray-500 shadow-lg"
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Explore Articles
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
            >
              Join Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBlog;
