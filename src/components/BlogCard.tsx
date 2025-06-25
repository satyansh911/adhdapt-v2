import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, User, ArrowRight, Heart, MessageCircle } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  likes?: number;
  comments?: number;
  featured?: boolean;
}

const BlogCard = ({
  title,
  excerpt,
  author,
  date,
  readTime,
  category,
  likes = 0,
  comments = 0,
  featured = false,
}: BlogCardProps) => {
  return (
    <Card
      className={`group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm overflow-hidden ${featured ? "ring-2 ring-yellow-400" : ""}`}
    >
      {/* Category badge */}
      <div className="relative">
        <div className="absolute top-4 left-4 z-10">
          <Badge
            variant="secondary"
            className="bg-yellow-100 text-yellow-800 border-yellow-200 px-3 py-1 text-xs font-medium"
          >
            {category}
          </Badge>
        </div>

        {/* Gradient overlay */}
        <div className="h-48 bg-gradient-to-br from-yellow-100 via-yellow-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(251,191,36,0.1),transparent_70%)]" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-yellow-200 rounded-full -mr-16 -mb-16 opacity-20" />
          <div className="absolute top-0 left-0 w-20 h-20 bg-yellow-300 rounded-full -ml-10 -mt-10 opacity-15" />
        </div>
      </div>

      <CardContent className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-yellow-600 transition-colors duration-300">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {excerpt}
        </p>

        {/* Author and meta info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-gray-900" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{author}</p>
              <p className="text-xs text-gray-500">{date}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Clock className="w-4 h-4" />
            <span>{readTime}</span>
          </div>
        </div>

        {/* Engagement stats */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-gray-500">
              <Heart className="w-4 h-4" />
              <span className="text-sm">{likes}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-500">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm">{comments}</span>
            </div>
          </div>

          <div className="flex items-center gap-1 text-yellow-600 group-hover:text-yellow-700 transition-colors duration-300">
            <span className="text-sm font-medium">Read more</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
