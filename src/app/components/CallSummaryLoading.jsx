'use client';
import React, { useState, useEffect } from 'react';
import { Home, User, Mic, Users, Star, Menu } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const CallSummaryLoading = () => {
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  const staticYear = 2025;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          router.push('/AudioInsights'); 
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [router]); 

  const handleProfileClick = () => router.push('/Profile');

  const O2Logo = () => (
    <div className="flex items-center">
      <Image
        src="/Logo.png"
        alt="O2 Logo"
        width={48}
        height={48}
        className="w-12 h-12"
      />
    </div>
  );

  const UserAvatar = () => (
    <div className="flex items-center space-x-2">
      <img
        src="/UserAvatar.png"
        alt="User Avatar"
        className="w-12 h-12 rounded-full object-cover"
      />
      <span className="text-gray-700 text-lg">Hi, John</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-200 px-6 py-4 fixed w-full z-10">
        <div className="flex items-center justify-between">
          <O2Logo />
          <div className="flex-1 flex justify-center">
            <div className="bg-blue-50 border-b-2 border-blue-500 px-6 py-2 rounded-t">
              <span className="text-blue-700 font-medium">Call Summary</span>
            </div>
          </div>
          <div className="cursor-pointer" onClick={handleProfileClick}>
            <UserAvatar />
          </div>
        </div>
      </header>

      <div className="flex flex-1 pt-16">
        <nav className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4 fixed h-[calc(100vh-64px)]">
          <button className="p-2 rounded-lg hover:bg-gray-100 mb-4">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </nav>

        <main className="flex-1 ml-16 bg-blue-50">
          <div className="flex items-center justify-center px-6 py-12 h-full">
            <div className="max-w-md w-full text-center">
              <h1 className="text-2xl font-semibold text-gray-800 mb-4">Call Summary</h1>
              
              <div className="mb-12 flex justify-center">
                <div className="relative">
                  <Image
                    src="/Loading.png"
                    alt="Loading illustration"
                    width={300}
                    height={200}
                    className="animate-pulse"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="text-2xl font-semibold text-gray-800 mb-8">
                {progress}%
              </div>
              
              <div className="text-gray-600 leading-relaxed mb-8">
                <p className="text-base">
                  Convert Call Audio to Summary in Text Format with<br />
                  Sentiment Analysis and AI-Based Positive/Negative Insights
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>

      <footer className="bg-white border-t border-gray-200 py-4 mt-auto w-full">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-sm font-semibold text-gray-700 mb-1">Disclaimer</h2>
          <p className="text-sm text-gray-500 mb-1">
            This insights, summaries and sentiment analysis provided are AI-generated and should be interpreted with human judgment.
          </p>
          <p className="text-xs text-gray-400">© {staticYear}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CallSummaryLoading;