// components/YouthUnemployment.js
import React, { useEffect, useRef } from 'react';

const YouthUnemployment = () => {
  const youthChartRef = useRef(null);
  
  useEffect(() => {
    // Create chart after component mounts
    if (youthChartRef.current) {
      new Chart(youthChartRef.current, {
        type: 'bar',
        data: {
          labels: ['18-20', '21-25', '26-30', '31-35'],
          datasets: [{
            label: 'Youth Unemployment Rate (%)',
            data: [19.3, 24.7, 23.2, 20.1],
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderColor: 'rgba(255, 99, 132, 1)',
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
              text: 'Youth Unemployment by Age Group'
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
          <i className="fas fa-user-graduate mr-2 text-red-600"></i>
          Youth Unemployment Crisis
        </h2>
        
        <div className="mb-8">
          <div className="chart-container">
            <canvas ref={youthChartRef}></canvas>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-red-50 p-4 rounded-lg stat-card">
            <h3 className="text-lg font-semibold text-red-800 mb-2 flex items-center">
              <i className="fas fa-exclamation-triangle mr-2"></i>
              Highest Affected Group
            </h3>
            <p className="text-2xl font-bold">21-25 year olds</p>
            <p className="text-sm text-gray-600">24.7% unemployment rate</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg stat-card">
            <h3 className="text-lg font-semibold text-purple-800 mb-2 flex items-center">
              <i className="fas fa-graduation-cap mr-2"></i>
              Recent Graduates
            </h3>
            <p className="text-2xl font-bold">38%</p>
            <p className="text-sm text-gray-600">take over 1 year to find first job</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <i className="fas fa-exclamation-circle mr-2 text-red-500"></i>
          Consequences of Youth Unemployment
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-red-700 mb-2 flex items-center">
              <i className="fas fa-chart-line mr-2"></i>
              Economic Impact
            </h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Reduced consumer spending</li>
              <li>Lower tax revenues</li>
              <li>Increased dependency ratio</li>
              <li>Loss of potential economic growth</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-red-700 mb-2 flex items-center">
              <i className="fas fa-users mr-2"></i>
              Social Impact
            </h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Increased poverty rates</li>
              <li>Rise in crime and substance abuse</li>
              <li>Delayed family formation</li>
              <li>Mental health issues</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouthUnemployment;