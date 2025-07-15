'use client';
import React from 'react';

const CustomerInsightsPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <img src="/customer.png" alt="Customer" className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Customer Call Insights</h2>
                <p className="text-sm text-gray-600">Customer: Peter</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 p-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <div className="mb-8">
            <div className="text-gray-700 text-sm leading-relaxed space-y-4">
              <p>
                The customer maintains a firm and effective tone, showcasing a sense of urgency and focus on details such as communication and technical skills. There was mild impatience reflected in repetitive prompts, but overall the caller was professional. The customer maintained a firm and effective tone, showcasing a sense of urgency and focus on details such as communication and technical skills. There was mild impatience reflected in repetitive prompts, but overall the caller was professional. The customer maintained a firm and effective tone, showcasing a sense of urgency and focus on details such as communication and technical skills. There was mild impatience reflected in repetitive prompts, but overall the caller was professional.
              </p>
              <p>
                The customer maintained a firm and effective tone, showcasing a sense of urgency and focus on details such as communication and technical skills. There was mild impatience reflected in repetitive prompts, but overall the caller was professional. The customer maintained a firm and effective tone, showcasing a sense of urgency and focus on details such as communication and technical skills. There was mild impatience reflected in repetitive prompts, but overall the caller was professional.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">AI Call Analysis</h3>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Login Issue Reported</span>
              </div>
              <div className="flex-1 mx-4">
                <div className="h-0.5 bg-gray-200 relative">
                  <div className="absolute left-0 top-0 h-full w-1/3 bg-blue-500"></div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Password Reset</span>
              </div>
              <div className="flex-1 mx-4">
                <div className="h-0.5 bg-gray-200 relative">
                  <div className="absolute left-0 top-0 h-full w-2/3 bg-blue-500"></div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Login Successful</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerInsightsPopup;