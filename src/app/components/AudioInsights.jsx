'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Home, User, Mic, Users, Star, Menu } from 'lucide-react';
import SentimentChart from './SentimentChart';
import DetailedAnalysis from './DetailedAnalysis';
import ActionItems from './ActionItems';

const AudioInsightsDashboard = () => {
  const router = useRouter();
  const staticYear = 2025;

  const handleHomeClick = () => router.push('/Landing');
  const handleProfileClick = () => router.push('/Profile');

  const O2Logo = () => (
    <div className="flex items-center">
      <div className="relative">
        <div className="w-12 h-12 rounded-full flex items-center justify-center">
          <Image src="/Logo.png" alt="O2" width={190} height={190} />
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-400 rounded-full opacity-70"></div>
      </div>
    </div>
  );

  const UserAvatar = () => (
    <div className="flex items-center space-x-3">
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <Image src="/UserAvatar.png" alt="User" width={48} height={48} />
      </div>
      <span className="text-gray-700 text-sm">Hi, John 😊</span>
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

      <div className="flex pt-16">
        <nav className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4 fixed h-full">
          <button className="p-2 rounded-lg hover:bg-gray-100 mb-4">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </nav>

        <br/><br/>

        <div className="flex-1 ml-16">
          <div className="bg-blue-50 px-6 py-3">
            <nav className="flex items-center space-x-2 text-sm text-blue-500">
              <div onClick={handleHomeClick} className="flex items-center cursor-pointer hover:text-blue-700">
                        <br/><br/>

                <Home className="w-4 h-4 mr-1" />
                <span>Home</span>
              </div>
              <span className="text-gray-400">/</span>
              <span>Audio File</span>
              <span className="text-gray-400">/</span>
              <span className="text-gray-700">3043903937005</span>
            </nav>
          </div>

          <main className="bg-blue-50 px-6 py-8">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-2xl font-semibold text-gray-900 mb-8">Audio Insights</h1>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-blue-500 rounded-lg p-6 text-white">
                  <div className="flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 rounded-lg mb-4">
                    <Mic className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">#3043903937005</h3>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      <span>Customer: Piter</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      <span>Agent: Madhu</span>
                    </div>
                  </div>
                </div>

                <div className="bg-cyan-400 rounded-lg p-6 text-white">
                  <div className="flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 rounded-lg mb-4">
                    <User className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Positive</h3>
                  <p className="text-sm opacity-90">Overall<br />Sentiment</p>
                </div>

                <div className="bg-purple-500 rounded-lg p-6 text-white">
                  <div className="flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 rounded-lg mb-4">
                    <div className="flex space-x-1">
                      <Star className="w-4 h-4 text-purple-500" />
                      <Star className="w-4 h-4 text-purple-500" />
                      <Star className="w-4 h-4 text-purple-500" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">7/10</h3>
                  <p className="text-sm opacity-90">Sentiment<br />Score</p>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Overall Sentiment Score</h3>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                    {[...Array(10).keys()].map(n => <span key={n}>{n + 1}</span>)}
                  </div>
                  <div className="relative mb-2">
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 via-cyan-400 to-green-400 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                    <div className="absolute right-0 top-0 transform translate-x-2 -translate-y-1">
                      <div className="bg-black text-white text-xs px-2 py-1 rounded">7/10</div>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>0: Negative</span>
                    <span>10: Very Positive</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Call Summary</h2>
                    <p className="text-gray-700 leading-relaxed">
                      Peter contacted the IP Helpdesk to troubleshoot login issues with his Outlook email account. He faced repeated password prompts and failed login attempts. Madhu guided Piter through resetting his password using a temporary one and confirmed access to both webmail and desktop.
                    </p>
                  </div>
                  <div className="w-full lg:w-60 flex-shrink-0">
                    <Image
                      src="/Sumury.png"
                      alt="Summary Illustration"
                      width={240}
                      height={180}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6">
                  <SentimentChart />
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6">
                  <DetailedAnalysis />
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6">
                  <ActionItems />
                </div>
              </div>
            </div>
          </main>

          <footer className="bg-white border-t border-gray-200 py-8">
            <div className="max-w-4xl mx-auto text-center px-4">
              <div className="text-sm text-gray-600 mb-2">
                <span className="inline-flex items-center justify-center text-yellow-500 mr-1">⚠️</span>
                <span className="font-semibold text-gray-700">Disclaimer</span>
              </div>
              <p className="text-sm text-gray-500 mb-2">
                This insights, summaries and sentiment analysis provided are AI-generated and should be interpreted with human judgment. While we strive for accuracy, please review the content for critical decisions.
              </p>
              <p className="text-xs text-gray-400">© {staticYear}. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default AudioInsightsDashboard;