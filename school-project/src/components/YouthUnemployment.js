import React from "react";

const BulletList = ({ items }) => (
  <ul className="list-disc pl-5 space-y-2">{items.map((it, i) => <li key={i}>{it}</li>)}</ul>
);

export default function ProjectPage({ project, setPage }) {
  return (
    <section className="bg-white rounded-xl shadow p-6">
      <div className="flex items-start justify-between">
        <h2 className="text-xl font-semibold">{project.title}</h2>
        <div className="space-x-2">
          <button onClick={() => setPage("home")} className="px-3 py-1 bg-slate-100 rounded">Back</button>
          <button onClick={() => window.print()} className="px-3 py-1 bg-slate-100 rounded">Print</button>
        </div>
      </div>
      <p className="mt-4">{project.intro}</p>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-medium">Causes</h4>
          <BulletList items={project.causes} />

          <h4 className="font-medium mt-4">Examples</h4>
          <BulletList items={project.examples} />
        </div>
        <div>
          <h4 className="font-medium">Effects</h4>
          <BulletList items={project.effects} />

          <h4 className="font-medium mt-4">Solutions</h4>
          <BulletList items={project.solutions} />
        </div>
      </div>
    </section>
  );
}
