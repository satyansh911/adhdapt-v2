import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button3";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, User, Calendar, ArrowRight, Star } from "lucide-react";

const FeaturedPost = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge
            variant="secondary"
            className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200 px-4 py-2"
          >
            <Star className="w-4 h-4 mr-2" />
            Featured Article
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Editor's Pick
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our most impactful and comprehensive guide to understanding ADHD
          </p>
        </div>

        <Card className="max-w-4xl mx-auto overflow-hidden border-0 shadow-2xl bg-white">
          <div className="md:flex">
            {/* Image section */}
            <div className="md:w-1/2 relative">
              <div className="h-64 md:h-full bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3),transparent_60%)]" />
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full -mr-20 -mb-20 opacity-20" />
                <div className="absolute top-0 left-0 w-24 h-24 bg-yellow-500 rounded-full -ml-12 -mt-12 opacity-30" />

                {/* Floating elements */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                    <Star className="w-8 h-8 text-yellow-500" />
                  </div>
                </div>
              </div>

              {/* Reading time overlay */}
              <div className="absolute top-4 left-4">
                <Badge className="bg-black/80 text-white border-0 px-3 py-1">
                  <Clock className="w-3 h-3 mr-1" />
                  12 min read
                </Badge>
              </div>
            </div>

            {/* Content section */}
            <CardContent className="md:w-1/2 p-8 flex flex-col justify-center">
              <Badge
                variant="outline"
                className="w-fit mb-4 border-yellow-300 text-yellow-700"
              >
                Mental Health
              </Badge>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                The Complete Guide to Managing ADHD in Daily Life
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Discover evidence-based strategies, practical tips, and expert
                insights that can transform how you approach daily challenges
                with ADHD. This comprehensive guide covers everything from time
                management to emotional regulation.
              </p>

              {/* Author info */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-gray-900" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    Dr. Kushagra Saxena
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-3 h-3" />
                    <span>March 13, 2024</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Button className="w-fit bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Read Full Article
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default FeaturedPost;
