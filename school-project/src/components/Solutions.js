// components/Solutions.js
import React from 'react';

const Solutions = () => {
  const solutions = [
    {
      title: "Education Reform",
      description: "Align curriculum with market needs and emphasize practical skills",
      steps: [
        "Expand technical and vocational training",
        "Introduce entrepreneurship education",
        "Strengthen STEM programs"
      ]
    },
    {
      title: "Youth Entrepreneurship",
      description: "Support young entrepreneurs through funding and mentorship",
      steps: [
        "Provide startup grants and low-interest loans",
        "Create business incubation centers",
        "Simplify business registration processes"
      ]
    },
    {
      title: "Public-Private Partnerships",
      description: "Collaborate with industry to create job opportunities",
      steps: [
        "Establish apprenticeship programs",
        "Create tax incentives for hiring youth",
        "Develop industry-specific training programs"
      ]
    },
    {
      title: "Digital Skills Development",
      description: "Prepare youth for the digital economy",
      steps: [
        "Expand digital literacy programs",
        "Support coding bootcamps and tech hubs",
        "Promote remote work opportunities"
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Solutions to Youth Unemployment</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{solution.title}</h3>
              <p className="text-gray-700 mb-4">{solution.description}</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {solution.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Success Stories</h3>
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-medium text-green-800">Digital Skills Program</h4>
            <p className="text-gray-700">A government initiative trained 5,000 youth in digital marketing, resulting in 68% employment within 6 months.</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-medium text-purple-800">Youth Enterprise Fund</h4>
            <p className="text-gray-700">Provided seed capital to 2,500 young entrepreneurs, creating over 8,000 new jobs in the past two years.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
