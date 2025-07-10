'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, RotateCcw, RotateCw } from 'lucide-react';

const CallAnalysisComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(26);
  const [totalDuration] = useState(125); 
  const audioRef = useRef(null);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleRewind = () => {
    setCurrentTime(Math.max(0, currentTime - 10));
  };

  const handleForward = () => {
    setCurrentTime(Math.min(totalDuration, currentTime + 10));
  };

  const generateWaveform = () => {
    const bars = [];
    const totalBars = 120;
    
    for (let i = 0; i < totalBars; i++) {
      const isActive = i < (currentTime / totalDuration) * totalBars;
      const height = Math.random() * 20 + 8; 
      
      bars.push(
        <div
          key={i}
          className={`w-1 rounded-sm transition-colors duration-150 ${
            isActive ? 'bg-blue-500' : 'bg-gray-300'
          }`}
          style={{ height: `${height}px` }}
        />
      );
    }
    return bars;
  };

  const events = [
    { time: 0, label: 'Start Recording', type: 'start' },
    { time: 28, label: 'Login Issue Reported', type: 'issue', color: 'bg-green-100 text-green-800' },
    { time: 42, label: 'Customer Verification', type: 'verification', color: 'bg-blue-100 text-blue-800' },
    { time: 78, label: 'Testing New Login', type: 'testing', color: 'bg-blue-100 text-blue-800' },
    { time: 125, label: 'End Recording', type: 'end' }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Customer Call Insights</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            The customer maintained a firm and directive tone, showcasing a sense of urgency and focus on details such as communication and technical skills. There was mild impatience reflected in repetitive prompts, but...
          </p>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors">
            View Details
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Agent Call Insights</h3>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-600 mr-2">Agent Rating :</span>
              <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-bold">9</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Madhu demonstrated attentiveness and professionalism, remained calm throughout the call, and confirmed her understanding multiple times. Her responses conveyed agreement and readiness to execute...
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
            View Details
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
              <div className="w-4 h-4 bg-blue-500 rounded"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">AI Analysis Call</h3>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <span className="text-sm text-gray-600 mr-2">Password Reset</span>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-600 mr-2">Login Successful</span>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={togglePlayPause}
              className="w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-colors"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            
            <div className="flex-1 flex items-center space-x-2">
              <div className="flex items-center space-x-px flex-1 h-8">
                {generateWaveform()}
              </div>
              
              <span className="text-sm font-medium text-gray-900 min-w-[40px]">
                {formatTime(totalDuration)}
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleRewind}
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-800"
                >
                  <RotateCcw size={14} />
                  <span className="text-sm">10s</span>
                </button>
                <span className="text-sm font-medium text-gray-900">
                  {formatTime(currentTime)}
                </span>
                <button
                  onClick={handleForward}
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-800"
                >
                  <RotateCw size={14} />
                  <span className="text-sm">10s</span>
                </button>
              </div>
            </div>

            <div className="relative h-16 bg-gray-50 rounded-lg px-4 py-2">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="absolute flex flex-col items-center transform -translate-x-1/2"
                  style={{ 
                    left: `${Math.max(10, Math.min(90, (event.time / totalDuration) * 100))}%`,
                    top: '0px'
                  }}
                >
                  <div className="w-0.5 h-3 bg-gray-400"></div>
                  <div className={`mt-1 px-2 py-1 rounded text-xs font-medium text-center whitespace-nowrap ${
                    event.color || 'bg-gray-200 text-gray-800'
                  }`}>
                    {event.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallAnalysisComponent;