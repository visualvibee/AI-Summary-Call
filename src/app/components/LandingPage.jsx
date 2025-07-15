'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown, Menu } from 'lucide-react';
import Image from 'next/image';

const LandingPage = () => {
  const [selectedFile, setSelectedFile] = useState('3043903937005.mp3');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();
  const staticYear = 2025;

  const audioFiles = [
    '3043903937005.mp3',
    '2043903937001.mp3',
    '1043903937002.mp3',
    '4043903937003.mp3',
    '5043903937004.mp3',
    '6043903937005.mp3',
    '7043903937006.mp3',
    '8043903937007.mp3',
    '9043903937008.mp3'
  ];

  const handleProfileClick = () => router.push('/Profile');

  const O2Logo = () => (
    <div className="flex items-center">
      <Image 
        src="/Logo.png" 
        alt="O2 Logo"
        width={48}
        height={48}
        className="object-contain"
      />
    </div>
  );

  const UserAvatar = () => (
    <div className="flex items-center space-x-2">
      <img
        src="/UserAvatar.png"
        alt="User Avatar"
        className="w-8 h-8 rounded-full object-cover"
      />
      <span className="text-gray-700 text-lg">Hi, John</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col">
      <header className="bg-white border-b border-gray-200 px-6 py-4 fixed w-full z-10">
        <div className="flex items-center justify-between">
          <O2Logo />
          <div className="flex-1 flex justify-center">
            <div className="bg-blue-50 border-b-2 border-blue-500 px-4 py-1 rounded-t">
              <span className="text-blue-700 font-medium text-sm">Call Summary</span>
            </div>
          </div>
          <div className="cursor-pointer" onClick={handleProfileClick}>
            <UserAvatar />
          </div>
        </div>
      </header>

      <div className="flex flex-1 pt-14">
        <div className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4 fixed h-full">
          <button className="p-2 rounded-lg hover:bg-gray-100 mb-4">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <br/><br/><br/>

        <main className="ml-16 p-6 w-full flex flex-col">
          <div className="max-w-5xl mx-auto flex-1">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <Image 
                  src="/Land.png" 
                  alt="Audio visualization"
                  width={500}
                  height={350}
                  className="object-contain rounded-lg"
                  priority
                />
              </div>
              
              <div className="space-y-6">
                <div className="flex justify-center lg:justify-start">
                  <div className="relative w-20 h-20 mb-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">AI</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 animate-spin-slow">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2.5 h-2.5 bg-blue-400 rounded-full"
                          style={{
                            top: '50%',
                            left: '50%',
                            transform: `
                              translate(-50%, -50%)
                              rotate(${i * 45}deg)
                              translate(0, -30px)
                            `,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Hi John
                  </h1>
                  <h2 className="text-2xl font-bold">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      AI-Powered Call Summaries
                    </span>
                  </h2>
                  <h2 className="text-2xl font-bold">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      with Sentiment Intelligence
                    </span>
                  </h2>
                  <p className="text-gray-600">
                    Instantly convert conversations into clear, actionable summaries.
                    Understand emotions behind every word with intelligent sentiment analysis.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Call Audio</h3>
                    <span className="text-sm text-gray-500">9 audio</span>
                  </div>
                  <div className="relative">
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 flex items-center justify-between hover:border-blue-500 transition-colors"
                    >
                      <span className="text-gray-700 truncate">{selectedFile}</span>
                      <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                        {audioFiles.map((file) => (
                          <button
                            key={file}
                            onClick={() => {
                              setSelectedFile(file);
                              setIsDropdownOpen(false);
                            }}
                            className="w-full px-4 py-2 text-left hover:bg-blue-50 text-gray-700 transition-colors truncate"
                          >
                            {file}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => router.push('/LoadingPage')}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow hover:shadow-md"
                  >
                    Generate Report
                  </button>
                </div>
              </div>
            </div>
          </div>
          <br/><br/><br/><br/>
          <footer className="ml-[-1.5rem] w-[calc(100%+3rem)] bg-white border-t border-gray-200 py-6 mt-8">
            <div className="max-w-5xl mx-auto px-4">
              <div className="text-sm text-gray-600 mb-2 text-center">
                <span className="inline-flex items-center justify-center text-yellow-500 mr-1">⚠️</span>
                <span className="font-semibold text-gray-700">Disclaimer</span>
              </div>
              <p className="text-sm text-gray-500 mb-2 text-center">
                This insights, summaries and sentiment analysis provided are AI-generated and should be interpreted with human judgment. While we strive for accuracy, please review the content for critical decisions.
              </p>
              <p className="text-xs text-gray-400 text-center">© {staticYear}. All rights reserved.</p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default LandingPage;