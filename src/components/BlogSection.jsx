import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User, Newspaper } from "lucide-react";
import { BLOG_POSTS } from "../data/tradeData";

export default function BlogSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#f8fafc] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest">
            <span>◆</span>
            <span>Our News From Blog</span>
            <span>◆</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            The Latest News & Best Blog
          </h2>

          <p className="text-slate-600 text-base max-w-2xl mx-auto">
            Stay updated with international freight market trends, export tariffs, and cross-border trade intelligence.
          </p>
        </div>

        {/* 3 Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-slate-200 flex flex-col group"
            >
              {/* Image Placeholder with Aspect Ratio */}
              <div className="relative aspect-[16/10] bg-slate-800 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#0c2f3b] to-[#174d5e] flex flex-col items-center justify-center p-4 text-center group-hover:scale-105 transition-transform duration-500">
                  <Newspaper className="w-10 h-10 text-white/40 mb-2" />
                  <span className="text-white text-xs font-semibold px-3 py-1 rounded bg-black/40 border border-white/10">
                    Article Visual (Placeholder)
                  </span>
                  <span className="text-slate-400 text-[10px] mt-1">
                    [ Image Placeholder: 500 × 320 ]
                  </span>
                </div>

                {/* Orange Category / Date Tag */}
                <div className="absolute top-4 left-4 bg-orange-500 text-white text-[11px] font-bold px-3 py-1 rounded-md shadow-md">
                  {post.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Meta: Author & Date */}
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                    <div className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-orange-500" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-orange-500" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-3 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href="#booking"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0c2f3b] group-hover:text-orange-600 transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
