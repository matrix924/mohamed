import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="bg-white py-16 lg:py-24 border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-block border-b-2 border-journal-accent mb-6 pb-1">
          <span className="text-journal-accent font-bold tracking-widest text-xs uppercase">
            Original Research Article • Vol. 42, Issue 8
          </span>
        </div>
        
        <h1 className="font-serif text-4xl lg:text-6xl font-bold text-journal-900 mb-8 leading-tight">
          The Pivotal Role of Statistical Methodologies in Modern Software Engineering
        </h1>
        
        <div className="flex flex-col items-center justify-center space-y-2">
          <h2 className="text-xl font-medium text-gray-800">
            Mohamed Talaat Kamar
          </h2>
          <p className="text-gray-500 italic font-serif">
            Department of Advanced Computing, London
          </p>
        </div>

        <div className="mt-10 flex justify-center gap-4 text-sm text-gray-500">
          <span>Published: October 2025</span>
          <span>•</span>
          <span>DOI: 10.1093/bjcsi.2025.08.012</span>
          <span>•</span>
          <span>Cited by 142</span>
        </div>
      </div>
    </section>
  );
};