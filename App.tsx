import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Charts } from './components/Charts';
import { ChatInterface } from './components/ChatInterface';
import { Download } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-journal-900">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Abstract Section */}
        <section id="abstract" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12 shadow-sm border-t-4 border-journal-900">
            <h2 className="font-serif text-2xl font-bold mb-6 text-journal-900">Abstract</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              In the rapidly evolving landscape of software engineering, the discipline of statistics is often relegated to the domain of data science. However, this paper argues that statistical literacy is fundamental to robust software development. 
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              <strong>Mohamed Talaat Kamar</strong> demonstrates that understanding probability distributions, hypothesis testing, and regression analysis significantly improves a developer's ability to optimize algorithms, debug complex non-deterministic systems, and build reliable machine learning integrations. Through a study of 500 senior engineers, this research correlates statistical proficiency with a 40% reduction in production logic errors.
            </p>
            <div className="flex flex-wrap gap-2 mt-8">
              {['Statistical Analysis', 'Software Engineering', 'Algorithm Optimization', 'Machine Learning', 'Data Driven Development'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-journal-50 text-journal-800 text-xs font-semibold uppercase tracking-wide border border-journal-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Visual Findings Section */}
        <section id="findings" className="py-16 bg-journal-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-journal-900">Key Research Findings</h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Quantitative analysis revealing the tangible impact of statistical methodologies on code quality and developer performance.
              </p>
            </div>
            <Charts />
          </div>
        </section>

        {/* Detailed Content Grid */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Text Content */}
            <div className="lg:col-span-7 space-y-12 text-gray-700 leading-7">
              <div>
                <h3 className="font-serif text-2xl font-bold text-journal-900 mb-4">The Mathematical Foundation of AI</h3>
                <p className="mb-4">
                  Artificial Intelligence is not magic; it is statistics at scale. Kamar's research highlights that developers attempting to implement neural networks without grasping the underlying stochastic gradient descent or probability density functions often create brittle models.
                </p>
                <blockquote className="border-l-4 border-journal-accent pl-6 py-2 my-6 italic text-journal-900 font-serif text-lg bg-gray-50 pr-4">
                  "To code is to instruct a machine. To use statistics is to understand the world the machine operates within. Without the latter, the former is blind."
                  <footer className="text-sm font-sans not-italic text-gray-500 mt-2">— M. T. Kamar, Introduction, p. 3</footer>
                </blockquote>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-journal-900 mb-4">Performance & Complexity</h3>
                <p>
                  The paper draws a direct line between statistical moments and algorithm performance analysis. Beyond simple Big-O notation, understanding the distribution of input data allows for average-case optimizations that drastically outperform generic worst-case protections in real-world scenarios.
                </p>
              </div>
            </div>

            {/* Chat Sidebar */}
            <div className="lg:col-span-5">
              <div className="sticky top-24">
                <ChatInterface />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="flex flex-col mb-4 md:mb-0">
            <span className="font-serif font-bold text-journal-900 text-lg">BJCSI</span>
            <span>British Journal of Computational Sciences & Informatics</span>
            <span>London, United Kingdom</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-journal-900">Privacy Policy</a>
            <a href="#" className="hover:text-journal-900">Terms of Use</a>
            <button className="flex items-center gap-2 text-journal-accent font-medium hover:text-amber-700">
              <Download size={16} />
              Download PDF
            </button>
          </div>
        </div>
        <div className="text-center mt-8 text-xs text-gray-400">
          © 2025 The British Journal of Computational Sciences. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;