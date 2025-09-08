import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectPage from "./components/ProjectPage";
import { projects } from "./data/projects";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      <Header setPage={setPage} page={page} />
      <main className="max-w-5xl mx-auto p-6">
        {page === "home" && (
          <section className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-3">Welcome</h2>
            <p>
              This site presents two projects: <strong>Insecurity</strong> and <strong>Unemployment</strong> in Kenya. 
              Use the navigation above to view each project.
            </p>
          </section>
        )}
        {page === "insecurity" && <ProjectPage project={projects.insecurity} setPage={setPage} />}
        {page === "unemployment" && <ProjectPage project={projects.unemployment} setPage={setPage} />}
      </main>
      <Footer />
    </div>
  );
}
