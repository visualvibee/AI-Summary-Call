'use client';
import React, { useState, useEffect, useRef } from 'react';

const SentimentTimelineChart = () => {
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const canvasRef = useRef(null);

  const sentimentData = [
    { time: 1, sentiment: 0.1 },
    { time: 8, sentiment: -0.3 },
    { time: 17, sentiment: 0.2 },
    { time: 25, sentiment: 0.8 },
    { time: 33, sentiment: 0.4 },
    { time: 42, sentiment: -0.1 },
    { time: 50, sentiment: -0.5 },
    { time: 58, sentiment: 0.3 },
    { time: 67, sentiment: 0.4 },
    { time: 75, sentiment: 0.5 },
    { time: 83, sentiment: 0.3 },
    { time: 92, sentiment: 0.6 },
    { time: 100, sentiment: 0.8 },
    { time: 108, sentiment: 0.4 },
    { time: 117, sentiment: 0.6 },
    { time: 125, sentiment: 0.7 }
  ];

  const maxTime = 125; 
  const chartWidth = 900;
  const chartHeight = 200;
  const padding = { top: 20, right: 40, bottom: 40, left: 80 };

  const getSentimentColor = (sentiment, position) => {
    const normalizedPosition = position; 
    
    if (sentiment > 0.3) {
      const intensity = Math.min(sentiment, 1);
      const r = Math.floor(70 + (255 - 70) * (1 - intensity));
      const g = Math.floor(130 + (255 - 130) * (1 - intensity));
      const b = 255;
      return `rgb(${r}, ${g}, ${b})`;
    } else if (sentiment < -0.2) {
      const intensity = Math.min(Math.abs(sentiment), 1);
      const r = 255;
      const g = Math.floor(100 * (1 - intensity));
      const b = Math.floor(100 * (1 - intensity));
      return `rgb(${r}, ${g}, ${b})`;
    } else {
     return `rgb(150, 100, 200)`;
    }
  };

  const getCanvasCoords = (time, sentiment) => {
    const x = padding.left + (time / maxTime) * (chartWidth - padding.left - padding.right);
    const y = padding.top + (1 - (sentiment + 1) / 2) * (chartHeight - padding.top - padding.bottom);
    return { x, y };
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const drawChart = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, chartWidth, chartHeight);

    ctx.fillStyle = '#f8f9fa';
    ctx.fillRect(0, 0, chartWidth, chartHeight);

    ctx.strokeStyle = '#e9ecef';
    ctx.lineWidth = 1;
    
    const positiveY = padding.top + (1 - (0.5 + 1) / 2) * (chartHeight - padding.top - padding.bottom);
    ctx.beginPath();
    ctx.moveTo(padding.left, positiveY);
    ctx.lineTo(chartWidth - padding.right, positiveY);
    ctx.stroke();

    const neutralY = padding.top + (1 - (0 + 1) / 2) * (chartHeight - padding.top - padding.bottom);
    ctx.beginPath();
    ctx.moveTo(padding.left, neutralY);
    ctx.lineTo(chartWidth - padding.right, neutralY);
    ctx.stroke();

    const negativeY = padding.top + (1 - (-0.5 + 1) / 2) * (chartHeight - padding.top - padding.bottom);
    ctx.beginPath();
    ctx.moveTo(padding.left, negativeY);
    ctx.lineTo(chartWidth - padding.right, negativeY);
    ctx.stroke();

    ctx.fillStyle = '#6c757d';
    ctx.font = '12px system-ui, -apple-system, sans-serif';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    
    ctx.fillText('Positive', padding.left - 10, positiveY);
    ctx.fillText('Neutral', padding.left - 10, neutralY);
    ctx.fillText('Negative', padding.left - 10, negativeY);

    const gradient = ctx.createLinearGradient(padding.left, 0, chartWidth - padding.right, 0);
    
    sentimentData.forEach((point, index) => {
      const position = point.time / maxTime;
      const color = getSentimentColor(point.sentiment, position);
      gradient.addColorStop(position, color);
    });

    ctx.beginPath();
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    sentimentData.forEach((point, index) => {
      const { x, y } = getCanvasCoords(point.time, point.sentiment);
      
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        const prevPoint = sentimentData[index - 1];
        const prevCoords = getCanvasCoords(prevPoint.time, prevPoint.sentiment);
        const cpX = (prevCoords.x + x) / 2;
        ctx.quadraticCurveTo(prevCoords.x + (cpX - prevCoords.x) * 0.5, prevCoords.y, x, y);
      }
    });

    ctx.stroke();

    ctx.fillStyle = '#6c757d';
    ctx.font = '11px system-ui, -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';

    const timeIntervals = [1, 8, 17, 25, 33, 42, 50, 58, 67, 75, 83, 92, 100, 108, 117, 125];
    timeIntervals.forEach(time => {
      const x = padding.left + (time / maxTime) * (chartWidth - padding.left - padding.right);
      ctx.fillText(formatTime(time), x, chartHeight - padding.bottom + 5);
    });
  };

  const handleCanvasMouseMove = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    let foundPoint = null;
    sentimentData.forEach((point, index) => {
      const coords = getCanvasCoords(point.time, point.sentiment);
      const distance = Math.sqrt(Math.pow(x - coords.x, 2) + Math.pow(y - coords.y, 2));
      
      if (distance <= 15) {
        foundPoint = index;
      }
    });

    setHoveredPoint(foundPoint);
  };

  useEffect(() => {
    drawChart();
  }, [hoveredPoint]);

  return (
    <div className="w-full bg-white">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">Sentiment Over Time</h3>
        <p className="text-sm text-gray-600">This chart shows the sentiment score over time based on the audio file selected.</p>
      </div>

      <div className="relative">
        <canvas
          ref={canvasRef}
          width={chartWidth}
          height={chartHeight}
          onMouseMove={handleCanvasMouseMove}
          onMouseLeave={() => setHoveredPoint(null)}
          className="w-full cursor-crosshair"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        
        {hoveredPoint !== null && (
          <div className="absolute bg-gray-800 text-white text-xs py-1 px-2 rounded shadow-lg pointer-events-none z-10"
               style={{
                 left: `${(sentimentData[hoveredPoint].time / maxTime) * 100}%`,
                 top: '10px',
                 transform: 'translateX(-50%)'
               }}>
            <div>Time: {formatTime(sentimentData[hoveredPoint].time)}</div>
            <div>Sentiment: {sentimentData[hoveredPoint].sentiment.toFixed(2)}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SentimentTimelineChart;