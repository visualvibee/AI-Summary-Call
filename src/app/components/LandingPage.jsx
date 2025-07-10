'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown, Mic } from 'lucide-react';
import Image from 'next/image';

const LandingPage = () => {
  const [selectedFile, setSelectedFile] = useState('3043903937005.mp3');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <nav className="w-full py-6 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="text-xl font-semibold text-gray-800">Analytics</span>
          </div>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="w-full h-full">
              <Image 
                src="/Land.png" 
                alt="Audio visualization"
                width={600}
                height={400}
                className="object-contain rounded-lg"
              />
            </div>
          </div>
          <div className="space-y-8">
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-24 h-24 mb-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">AI</span>
                  </div>
                </div>
                <div className="absolute inset-0 animate-spin-slow">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-3 h-3 bg-blue-400 rounded-full"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `
                          translate(-50%, -50%)
                          rotate(${i * 45}deg)
                          translate(0, -36px)
                        `,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                Hi John
              </h1>
              <h2 className="text-4xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI-Powered Call Summaries with
                </span>{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Sentiment Intelligence
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Instantly convert conversations into clear, actionable summaries.
                <br />
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
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 flex items-center justify-between hover:border-blue-500 transition-colors"
                >
                  <span className="text-gray-700">{selectedFile}</span>
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
                        className="w-full px-4 py-3 text-left hover:bg-blue-50 text-gray-700 transition-colors"
                      >
                        {file}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => router.push('/LoadingPage')}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Generate Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;