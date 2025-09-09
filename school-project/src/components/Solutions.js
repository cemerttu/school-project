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
      ],
      icon: "fas fa-graduation-cap",
      color: "blue"
    },
    {
      title: "Youth Entrepreneurship",
      description: "Support young entrepreneurs through funding and mentorship",
      steps: [
        "Provide startup grants and low-interest loans",
        "Create business incubation centers",
        "Simplify business registration processes"
      ],
      icon: "fas fa-business-time",
      color: "green"
    },
    {
      title: "Public-Private Partnerships",
      description: "Collaborate with industry to create job opportunities",
      steps: [
        "Establish apprenticeship programs",
        "Create tax incentives for hiring youth",
        "Develop industry-specific training programs"
      ],
      icon: "fas fa-handshake",
      color: "purple"
    },
    {
      title: "Digital Skills Development",
      description: "Prepare youth for the digital economy",
      steps: [
        "Expand digital literacy programs",
        "Support coding bootcamps and tech hubs",
        "Promote remote work opportunities"
      ],
      icon: "fas fa-laptop-code",
      color: "indigo"
    }
  ];

  const getColorClass = (color) => {
    const colorMap = {
      blue: 'bg-blue-50 text-blue-800',
      green: 'bg-green-50 text-green-800',
      purple: 'bg-purple-50 text-purple-800',
      indigo: 'bg-indigo-50 text-indigo-800'
    };
    return colorMap[color] || 'bg-blue-50 text-blue-800';
  };

  return (
    <div className="space-y-8 fade-in">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <i className="fas fa-lightbulb mr-2 text-yellow-500"></i>
          Solutions to Youth Unemployment
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <div key={index} className={`p-6 rounded-lg stat-card ${getColorClass(solution.color)}`}>
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <i className={`${solution.icon} mr-2`}></i>
                {solution.title}
              </h3>
              <p className="mb-4">{solution.description}</p>
              <ul className="list-disc list-inside space-y-1">
                {solution.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <i className="fas fa-trophy mr-2 text-yellow-500"></i>
          Success Stories
        </h3>
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-medium text-green-800 flex items-center">
              <i className="fas fa-desktop mr-2"></i>
              Digital Skills Program
            </h4>
            <p className="text-gray-700">A government initiative trained 5,000 youth in digital marketing, resulting in 68% employment within 6 months.</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-medium text-purple-800 flex items-center">
              <i className="fas fa-hand-holding-usd mr-2"></i>
              Youth Enterprise Fund
            </h4>
            <p className="text-gray-700">Provided seed capital to 2,500 young entrepreneurs, creating over 8,000 new jobs in the past two years.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;