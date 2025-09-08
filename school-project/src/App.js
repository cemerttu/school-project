// App.js
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/UnemploymentDashboard";
import UnemploymentDashboard from "./components/UnemploymentDashboard";
import YouthUnemployment from "./components/YouthUnemployment";
import RegionalAnalysis from "./components/RegionalAnalysis";
import Solutions from "./components/Solutions";

export default function App() {
  const [currentView, setCurrentView] = useState("dashboard");

  const renderContent = () => {
    switch(currentView) {
      case "youth":
        return <YouthUnemployment />;
      case "regional":
        return <RegionalAnalysis />;
      case "solutions":
        return <Solutions />;
      default:
        return <UnemploymentDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800 antialiased">
      <Header currentView={currentView} setCurrentView={setCurrentView} />
      <main className="max-w-6xl mx-auto px-4 py-8">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}