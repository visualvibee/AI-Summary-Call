'use client';
import React from 'react';
import { Check, Mail, User, RotateCcw } from 'lucide-react';

const ActionItemsScoring = () => {
  const sentimentScore = 7;
  const maxScore = 10;

  const getScoreColor = (score) => {
    const colors = [
      'bg-red-400', 'bg-red-300', 'bg-orange-400', 'bg-yellow-400',
      'bg-yellow-300', 'bg-lime-300', 'bg-green-400', 'bg-green-500',
      'bg-green-300', 'bg-cyan-300'
    ];
    return colors[score - 1] || 'bg-gray-300';
  };

  const actionItems = [
    {
      id: 1,
      title: 'Password Reset',
      description: 'Successfully reset Peter password to a temporary one and ensured he updated it to a personal custom password.',
      completed: true,
      icon: RotateCcw
    },
    {
      id: 2,
      title: 'Verification',
      description: 'Verified Peter details (employee code: RR197, email: peter@r4solutions.com, year of birth: 1984) to manage the account.',
      completed: true,
      icon: Check
    },
    {
      id: 3,
      title: 'Access Confirmation',
      description: "Confirmed Jitin's ability to access both weblink and the Outlook desktop application after updating credentials.",
      completed: true,
      icon: Check
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 max-w-6xl mx-auto space-y-6">
      {/* Sentiment Score */}
      <div className="border border-gray-200 rounded-lg p-6">
        <div className="mb-4 bg-gray-50">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Overall Sentiment Score</h2>
          <p className="text-sm text-gray-600">Measures customer and agent interaction quality on a scale of 1 to 10</p>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-1 mb-2">
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className={`h-8 flex-1 rounded-sm ${
                  index < sentimentScore ? getScoreColor(index + 1) : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            {[...Array(10)].map((_, index) => (
              <span key={index} className="flex-1 text-center">{index + 1}</span>
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-400">
            <span>© Negative</span>
            <span>10</span>
          </div>
        </div>

        <div className="text-center bg-gray-50">
          <span className="text-3xl font-bold text-gray-900">{sentimentScore}/10</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Action Items */}
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Action Items</h3>
          <div className="space-y-4">
            {actionItems.map((item) => (
              <div key={item.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 mt-1">
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                    item.completed ? 'bg-blue-500 border-blue-500' : 'border-gray-300'
                  }`}>
                    {item.completed && <Check className="w-3 h-3 text-white" />}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emails Sent Card with Flow */}
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="mb-4 flex items-start gap-3">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex-1 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Emails Sent</h3>
              <p className="text-sm text-gray-600 pb-2 mb-2 ">Received follow-up email after call.</p>
            </div>
          </div>
          <br/> <br/> 

          <div className="ml-6 border-l-2 border-gray-300 pl-6 space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-500" />
              <p className="text-sm text-blue-600 font-large">Manager</p>
            </div>
             <br/>

            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-bold">!</span>
              </div>
              <p className="text-sm text-orange-600 font-large">Agent (Action Required)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionItemsScoring;
