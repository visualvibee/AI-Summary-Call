'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const CallSummaryLoading = () => {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

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

  const O2Logo = () => (
    <div className="flex items-center">
      <div className="relative">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">O2</span>
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full opacity-70"></div>
      </div>
    </div>
  );

  const MenuIcon = () => (
    <div className="flex flex-col space-y-1">
      <div className="w-5 h-0.5 bg-gray-600"></div>
      <div className="w-5 h-0.5 bg-gray-600"></div>
      <div className="w-5 h-0.5 bg-gray-600"></div>
    </div>
  );

  const UserAvatar = () => (
  <div className="flex items-center space-x-2">
    <img
      src="/profilephoto.png"
      alt="User Avatar"
      className="w-8 h-8 rounded-full object-cover"
    />
    <span className="text-gray-700 text-sm">Hi, John</span>
  </div>
);


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <MenuIcon />
            <O2Logo />
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="flex items-center space-x-8">
              <div className="text-blue-600 font-medium text-lg border-b-2 border-blue-600 pb-2">
                Call Summary
              </div>
            </div>
          </div>
          
          <UserAvatar />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-md w-full text-center">
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
          <div className="text-gray-600 leading-relaxed">
            <p className="text-base">
              Convert Call Audio to Summary in Text Format with<br />
              Sentiment Analysis and AI-Based Positive/Negative Insights
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallSummaryLoading;