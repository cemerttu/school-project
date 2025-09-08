import React from "react";

export default function Header({ setPage, page }) {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 shadow-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">Kenya School Projects</h1>
        <nav className="space-x-3">
          <button onClick={() => setPage("home")} className={`px-3 py-2 rounded-md ${page==="home"?"bg-white/20":"hover:bg-white/10"}`}>Home</button>
          <button onClick={() => setPage("insecurity")} className={`px-3 py-2 rounded-md ${page==="insecurity"?"bg-white/20":"hover:bg-white/10"}`}>Insecurity</button>
          <button onClick={() => setPage("unemployment")} className={`px-3 py-2 rounded-md ${page==="unemployment"?"bg-white/20":"hover:bg-white/10"}`}>Unemployment</button>
          <button onClick={() => window.print()} className="ml-2 px-3 py-2 bg-white/20 rounded-md hover:bg-white/30">Print</button>
        </nav>
      </div>
    </header>
  );
}
