// components/RegionalAnalysis.js
import React from 'react';

const RegionalAnalysis = () => {
  const regions = [
    { name: 'Nairobi', unemployment: 9.2, youthUnemployment: 25.4 },
    { name: 'Central', unemployment: 6.8, youthUnemployment: 19.2 },
    { name: 'Coast', unemployment: 12.4, youthUnemployment: 28.7 },
    { name: 'Eastern', unemployment: 8.7, youthUnemployment: 22.3 },
    { name: 'North Eastern', unemployment: 15.9, youthUnemployment: 34.6 },
    { name: 'Nyanza', unemployment: 10.3, youthUnemployment: 26.8 },
    { name: 'Rift Valley', unemployment: 7.6, youthUnemployment: 20.5 },
    { name: 'Western', unemployment: 11.2, youthUnemployment: 27.9 },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Regional Unemployment Analysis</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Region
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Overall Unemployment (%)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Youth Unemployment (%)
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {regions.map((region, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {region.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {region.unemployment}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {region.youthUnemployment}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Regional Disparities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-blue-700 mb-2">Highest Unemployment</h4>
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-lg font-semibold">North Eastern Region</p>
              <p className="text-2xl font-bold text-red-700">15.9%</p>
              <p className="text-sm">Overall unemployment rate</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-blue-700 mb-2">Lowest Unemployment</h4>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-lg font-semibold">Central Region</p>
              <p className="text-2xl font-bold text-green-700">6.8%</p>
              <p className="text-sm">Overall unemployment rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionalAnalysis;