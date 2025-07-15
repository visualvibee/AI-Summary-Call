'use client';
import React from 'react';

const AgentInsightsPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <img src="/agentcall.png" alt="Agent Call" className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Agent Call Insights</h2>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-xl font-light"
            >
              ×
            </button>
          </div>

          {/* Agent Safety Section */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-600 mb-3">Agent Safety</h3>
            <div className="text-sm text-gray-700 leading-relaxed">
              <p className="mb-2">
                Mobile demarcated advertisement and predators options navigated client throughout the call, and commemorated understanding multiple times. The agent ensured all operations were correctly informed and recorded. The client was efficiently digitally acknowledged and provided additional information as requested throughout the call, and commemorated understanding multiple times.
              </p>
              <p className="mb-2">
                The agent ensured all operations were correctly informed and recorded. The client was efficiently digitally acknowledged and provided additional information as requested throughout the call, and commemorated understanding multiple times. The
              </p>
              <p className="mb-2">
                Registered component aggregated and marketed to advocate the tasks efficiently throughout the call, and commemorated understanding multiple times. The agent ensured all operations were correctly informed and recorded. The client was efficiently digitally acknowledged and provided additional information as requested throughout the call, and commemorated understanding multiple times.
              </p>
              <p>
                Registered component aggregated and marketed to advocate the tasks efficiently throughout the call, and commemorated understanding multiple times. The agent ensured all operations were correctly informed and recorded. The client was efficiently digitally acknowledged and provided additional information as requested throughout the call, and commemorated understanding multiple times.
              </p>
            </div>
          </div>

          {/* Agent Rating */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-600 mb-3">Agent Rating</h3>
            <div className="flex items-center gap-1 mb-2">
              <div className="w-6 h-6 bg-red-500 rounded"></div>
              <div className="w-6 h-6 bg-orange-500 rounded"></div>
              <div className="w-6 h-6 bg-yellow-500 rounded"></div>
              <div className="w-6 h-6 bg-yellow-400 rounded"></div>
              <div className="w-6 h-6 bg-lime-400 rounded"></div>
              <div className="w-6 h-6 bg-green-400 rounded"></div>
              <div className="w-6 h-6 bg-green-500 rounded"></div>
              <div className="w-6 h-6 bg-green-600 rounded"></div>
              <div className="w-6 h-6 bg-green-700 rounded"></div>
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>0 - Needs Improvement</span>
              <span>10 - Excellent</span>
            </div>
          </div>

          {/* AI Call Analysis */}
          <div className="border-t border-gray-200 pt-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-4 h-4 bg-blue-500 rounded-sm flex items-center justify-center">
                <span className="text-white text-xs font-bold">AI</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900">AI Call Analysis</h3>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium text-gray-800 mb-2 text-sm">Customer Verification</h4>
                <div className="text-blue-600 text-sm">
                  <div className="mb-1">Testing</div>
                  <div>New Login</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 mb-2 text-sm">Login</h4>
                <div className="text-blue-600 text-sm">
                  <div>SupportAI</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 mb-2 text-sm">{/* Empty column */}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentInsightsPopup;