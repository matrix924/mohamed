import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

export const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: "Hello. I am the AI research assistant for Mohamed Talaat Kamar's paper. Ask me how statistics influences algorithm design or machine learning reliability.",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(messages, input);

    const botMsg: ChatMessage = {
      role: 'model',
      text: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border border-journal-200 overflow-hidden flex flex-col h-[600px]">
      <div className="bg-journal-900 p-4 text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Sparkles size={18} className="text-journal-accent" />
          <h3 className="font-serif font-medium">Ask the Research Paper</h3>
        </div>
        <span className="text-xs text-gray-400 bg-journal-800 px-2 py-1 rounded">Powered by Gemini</span>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} gap-3`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-journal-accent' : 'bg-journal-900'}`}>
                {msg.role === 'user' ? <User size={14} className="text-white" /> : <Bot size={14} className="text-white" />}
              </div>
              <div className={`p-3 rounded-lg text-sm leading-relaxed shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-white text-gray-800 border border-gray-100 rounded-tr-none' 
                  : 'bg-journal-900 text-gray-100 rounded-tl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
             <div className="flex max-w-[80%] flex-row gap-3">
               <div className="w-8 h-8 rounded-full bg-journal-900 flex items-center justify-center flex-shrink-0">
                 <Bot size={14} className="text-white" />
               </div>
               <div className="bg-journal-900 p-3 rounded-lg rounded-tl-none">
                 <div className="flex space-x-2">
                   <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                   <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                   <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                 </div>
               </div>
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-white border-t border-gray-100">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="e.g., How does probability help in algorithm analysis?"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-journal-900 focus:border-transparent text-sm"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="bg-journal-accent text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};