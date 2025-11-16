import { useEffect, useState } from "react";
import { getHome, getProjects } from "../api";
import ProjectCard from "../components/ProjectCard";

function Home() {
  const [home, setHome] = useState(null);
  const [projects, setProjects] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    Promise.all([getHome(), getProjects()])
      .then(([h, p]) => {
        setHome(h);
        setProjects(p);
      })
      .catch((e) => {
        setErr(String(e));
      });
  }, []);

  if (err) return <div className="p-6 text-red-600">{err}</div>;

  if (!home) return <div className="text-green">Home page loading....</div>;

  const { heroImage, title, subTitle, name, bodyText } = home;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {heroImage && (
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt={title || "Hero"}
              className="w-full h-full object-cover opacity-20"
            />
          </div>
        )}

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 drop-shadow-lg">
            {title || name}
          </h1>
          {subTitle && (
            <p className="text-xl md:text-2xl text-slate-600">{subTitle}</p>
          )}
        </div>
      </section>
      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {bodyText && (
            <div
              className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-700"
              dangerouslySetInnerHTML={{ __html: bodyText }}
            />
          )}

          {/* Tech Stack */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Next.js 15
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                React Server Components
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Umbraco CMS
              </span>
              <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                TypeScript
              </span>
              <span className="px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium">
                Tailwind CSS
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
          Featured Projects
        </h2>
        {projects.length === 0 ? (
          <p>No projects yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Home;
