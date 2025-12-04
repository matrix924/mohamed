import React from 'react';
import { BookOpen, Scale } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="border-b border-journal-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-journal-900 text-white p-2 rounded-sm">
              <Scale size={24} />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-journal-900 leading-tight">
                The British Journal of
              </span>
              <span className="font-serif text-journal-accent text-sm font-medium tracking-wide">
                COMPUTATIONAL SCIENCES & INFORMATICS
              </span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
            <a href="#abstract" className="hover:text-journal-accent transition-colors">Abstract</a>
            <a href="#findings" className="hover:text-journal-accent transition-colors">Key Findings</a>
            <button className="bg-journal-900 text-white px-4 py-2 rounded-sm hover:bg-journal-800 transition-colors flex items-center gap-2">
              <BookOpen size={16} />
              <span>Read Full Paper</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};