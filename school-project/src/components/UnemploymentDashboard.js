// components/UnemploymentDashboard.js
import React, { useEffect, useRef } from 'react';

const UnemploymentDashboard = () => {
  const unemploymentChartRef = useRef(null);
  const educationChartRef = useRef(null);
  
  useEffect(() => {
    // Create charts after component mounts
    if (unemploymentChartRef.current && educationChartRef.current) {
      // Unemployment Trends Chart
      new Chart(unemploymentChartRef.current, {
        type: 'bar',
        data: {
          labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
          datasets: [{
            label: 'Overall Unemployment Rate (%)',
            data: [5.7, 6.2, 10.4, 9.8, 8.6, 7.9],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Unemployment Trends in Kenya'
            }
          }
        }
      });

      // Education Chart
      new Chart(educationChartRef.current, {
        type: 'pie',
        data: {
          labels: ['Primary', 'Secondary', 'University', 'Technical Training'],
          datasets: [{
            label: 'Unemployment Rate by Education (%)',
            data: [8.2, 12.5, 16.8, 11.3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Unemployment by Education Level'
            }
          }
        }
      });
    }
  }, []);

  return (
    <div className="space-y-8 fade-in">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <i className="fas fa-chart-pie mr-2 text-blue-600"></i>
          Unemployment Overview
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-blue-50 p-4 rounded-lg stat-card">
            <h3 className="text-lg font-semibold text-blue-800 mb-2 flex items-center">
              <i className="fas fa-percentage mr-2"></i>
              Total Unemployment
            </h3>
            <p className="text-3xl font-bold">7.9%</p>
            <p className="text-sm text-gray-600">2023 Estimate</p>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg stat-card">
            <h3 className="text-lg font-semibold text-red-800 mb-2 flex items-center">
              <i className="fas fa-user-graduate mr-2"></i>
              Youth Unemployment
            </h3>
            <p className="text-3xl font-bold">22.6%</p>
            <p className="text-sm text-gray-600">Ages 18-35</p>
          </div>
        </div>

        <div className="mb-8">
          <div className="chart-container">
            <canvas ref={unemploymentChartRef}></canvas>
          </div>
        </div>

        <div className="max-w-md mx-auto">
          <div className="chart-container">
            <canvas ref={educationChartRef}></canvas>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <i className="fas fa-lightbulb mr-2 text-yellow-500"></i>
          Key Insights
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Youth unemployment is nearly 3 times the national average</li>
          <li>University graduates face the highest unemployment rates</li>
          <li>The COVID-19 pandemic significantly increased unemployment in 2020</li>
          <li>Unemployment rates have been gradually decreasing since 2021</li>
        </ul>
      </div>
    </div>
  );
};

export default UnemploymentDashboard;