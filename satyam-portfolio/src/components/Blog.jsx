import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Building Production-Ready REST APIs with Node.js",
    category: "Backend",
    readTime: "8 min read",
    date: "March 15, 2025",
    excerpt: "Learn best practices for building scalable REST APIs with proper error handling, authentication, and database optimization.",
    image: "https://dummyimage.com/600x350/4F46E5/FFFFFF?text=REST+APIs",
    tags: ["Node.js", "Express", "REST API", "Backend"]
  },
  {
    id: 2,
    title: "React Performance Optimization: Tips & Tricks",
    category: "Frontend",
    readTime: "6 min read",
    date: "Feb 10, 2025",
    excerpt: "Discover techniques to optimize React applications for better performance including code splitting, memoization, and lazy loading.",
    image: "https://dummyimage.com/600x350/60A5FA/FFFFFF?text=React+Performance",
    tags: ["React", "Performance", "JavaScript", "Frontend"]
  },
  {
    id: 3,
    title: "Mastering MongoDB Queries: From Basic to Advanced",
    category: "Database",
    readTime: "10 min read",
    date: "Nov 5, 2024",
    excerpt: "Deep dive into MongoDB query optimization, aggregation pipelines, and indexing strategies for better database performance.",
    image: "https://dummyimage.com/600x350/10B981/FFFFFF?text=MongoDB",
    tags: ["MongoDB", "Database", "Queries", "Backend"]
  },
  {
    id: 4,
    title: "Real-Time Communication with Socket.io",
    category: "Backend",
    readTime: "7 min read",
    date: "Oct 28, 2024",
    excerpt: "Build real-time applications with Socket.io. Learn about events, namespaces, and handling connection issues.",
    image: "https://dummyimage.com/600x350/F59E0B/FFFFFF?text=Socket.io",
    tags: ["Socket.io", "Real-time", "WebSocket", "Node.js"]
  },
  {
    id: 5,
    title: "DSA Interview Tips: Arrays & Strings",
    category: "DSA",
    readTime: "9 min read",
    date: "Feb 20, 2025",
    excerpt: "Common DSA patterns for array and string problems. Learn sliding window, two pointers, and prefix sum techniques.",
    image: "https://dummyimage.com/600x350/8B5CF6/FFFFFF?text=DSA+Arrays",
    tags: ["DSA", "Algorithms", "Arrays", "Strings"]
  },
  {
    id: 6,
    title: "Payment Gateway Integration: Razorpay Guide",
    category: "Backend",
    readTime: "8 min read",
    date: "Sept 20, 2025",
    excerpt: "Complete guide to integrating Razorpay payment gateway in your applications with error handling and verification.",
    image: "https://dummyimage.com/600x350/EC4899/FFFFFF?text=Razorpay",
    tags: ["Razorpay", "Payments", "Backend", "Integration"]
  }
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const categories = ["All", ...new Set(blogPosts.map(post => post.category))];
  
  let filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);
  
  const displayedPosts = showAll ? filteredPosts : filteredPosts.slice(0, 3);

  return (
    <section id="blog" className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
              Blog & Insights
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Technical articles, tutorials, and insights from my learning journey
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {displayedPosts.map((post, index) => (
              <article
                key={post.id}
                onClick={() => navigate(`/blog/${post.id}`)}
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="h-32 overflow-hidden bg-gradient-to-br from-blue-400 to-purple-400">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Category & Date */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {post.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="px-2 py-1 text-xs text-gray-500 dark:text-gray-400">
                        +{post.tags.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Read Time & Button */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      <i className="fas fa-clock mr-1"></i>
                      {post.readTime}
                    </span>
                    <button
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold text-sm group-hover:gap-2 flex items-center gap-1 transition-all"
                    >
                      <span>Read</span>
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* No posts message */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">
                No posts found in this category yet. Check back soon!
              </p>
            </div>
          )}

          {/* View More/Less Button */}
          {filteredPosts.length > 3 && (
            <div className="mt-10 text-center mb-8">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>{showAll ? 'Show Less Articles' : 'View More Articles'}</span>
                <i className={`fas fa-chevron-${showAll ? 'up' : 'down'} text-sm transition-transform`}></i>
              </button>
            </div>
          )}

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Want to see more content?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I regularly share technical insights on my blog. Subscribe to get notified when new posts are published.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
              Subscribe to Updates
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
