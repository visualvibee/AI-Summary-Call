export const mockAudioFiles = [
  {
    id: 1,
    name: "3043903937005.mp3",
    duration: "4:32",
    size: "2.1 MB",
    date: "2024-01-15",
    type: "Customer Support",
    status: "processed"
  },
  {
    id: 2,
    name: "3043903937006.mp3",
    duration: "6:45",
    size: "3.2 MB",
    date: "2024-01-15",
    type: "Sales Call",
    status: "processed"
  },
  {
    id: 3,
    name: "3043903937007.mp3",
    duration: "3:21",
    size: "1.8 MB",
    date: "2024-01-14",
    type: "Customer Support",
    status: "pending"
  },
  {
    id: 4,
    name: "3043903937008.mp3",
    duration: "8:12",
    size: "4.5 MB",
    date: "2024-01-14",
    type: "Technical Support",
    status: "processed"
  },
  {
    id: 5,
    name: "3043903937009.mp3",
    duration: "5:33",
    size: "2.9 MB",
    date: "2024-01-13",
    type: "Sales Call",
    status: "processed"
  },
  {
    id: 6,
    name: "3043903937010.mp3",
    duration: "7:24",
    size: "3.8 MB",
    date: "2024-01-13",
    type: "Customer Support",
    status: "processing"
  },
  {
    id: 7,
    name: "3043903937011.mp3",
    duration: "4:18",
    size: "2.3 MB",
    date: "2024-01-12",
    type: "Technical Support",
    status: "processed"
  },
  {
    id: 8,
    name: "3043903937012.mp3",
    duration: "9:45",
    size: "5.2 MB",
    date: "2024-01-12",
    type: "Sales Call",
    status: "processed"
  },
  {
    id: 9,
    name: "3043903937013.mp3",
    duration: "6:07",
    size: "3.1 MB",
    date: "2024-01-11",
    type: "Customer Support",
    status: "processed"
  }
];

export const mockInsightData = {
  summary: {
    callType: "Customer Support",
    duration: "4:32",
    participants: ["Customer", "Agent Sarah"],
    overallSentiment: "Positive",
    resolutionStatus: "Resolved",
    keyTopics: ["Product Issue", "Account Access", "Technical Support"]
  },
  sentimentAnalysis: {
    overall: {
      positive: 65,
      neutral: 25,
      negative: 10
    },
    timeline: [
      { time: "0:00", sentiment: "neutral", score: 0.1 },
      { time: "0:30", sentiment: "negative", score: -0.3 },
      { time: "1:00", sentiment: "negative", score: -0.5 },
      { time: "1:30", sentiment: "neutral", score: 0.0 },
      { time: "2:00", sentiment: "positive", score: 0.4 },
      { time: "2:30", sentiment: "positive", score: 0.6 },
      { time: "3:00", sentiment: "positive", score: 0.8 },
      { time: "3:30", sentiment: "positive", score: 0.7 },
      { time: "4:00", sentiment: "positive", score: 0.9 },
      { time: "4:32", sentiment: "positive", score: 0.8 }
    ],
    customerSentiment: {
      positive: 70,
      neutral: 20,
      negative: 10
    },
    agentSentiment: {
      positive: 85,
      neutral: 15,
      negative: 0
    }
  },
  keyMoments: [
    {
      time: "0:45",
      speaker: "Customer",
      type: "Issue Identified",
      content: "Having trouble accessing my account after the recent update",
      sentiment: "negative"
    },
    {
      time: "1:30",
      speaker: "Agent Sarah",
      type: "Solution Proposed",
      content: "I can help you reset your credentials and walk you through the new login process",
      sentiment: "positive"
    },
    {
      time: "3:15",
      speaker: "Customer",
      type: "Issue Resolved",
      content: "Perfect! That worked great. Thank you so much for your help",
      sentiment: "positive"
    }
  ],
  actionItems: [
    {
      id: 1,
      task: "Follow up with customer in 24 hours to ensure continued access",
      assignee: "Agent Sarah",
      priority: "Medium",
      status: "Pending"
    },
    {
      id: 2,
      task: "Update knowledge base with new login troubleshooting steps",
      assignee: "Technical Team",
      priority: "Low",
      status: "Pending"
    }
  ],
  transcript: [
    {
      speaker: "Agent Sarah",
      time: "0:00",
      content: "Hello! Thank you for calling customer support. My name is Sarah. How can I help you today?"
    },
    {
      speaker: "Customer",
      time: "0:05",
      content: "Hi Sarah, I'm having trouble logging into my account. Ever since the update last week, I keep getting error messages."
    },
    {
      speaker: "Agent Sarah",
      time: "0:15",
      content: "I'm sorry to hear you're experiencing difficulties. Let me help you with that. Can you tell me what specific error message you're seeing?"
    },
    {
      speaker: "Customer",
      time: "0:25",
      content: "It says 'Invalid credentials' but I'm sure I'm using the right password. I've tried multiple times."
    },
    {
      speaker: "Agent Sarah",
      time: "0:35",
      content: "I understand how frustrating that must be. This is actually a known issue with the recent update. Let me walk you through a quick fix."
    }
  ]
};