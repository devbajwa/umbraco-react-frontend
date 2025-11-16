import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getProject } from "../api";

function ProjectDetail() {
  const { slug } = useParams();
  const [project, setProject] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    getProject(slug)
      .then((p) => setProject(p))
      .catch((e) => setError(e));
  }, [slug]);

  if (error) return <div className="p-6 text-red-600">{error}</div>;

  if (!project) return <div>Project is Loading....</div>;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link
          to={"/"}
          className="inline-flex items-center text-slate-600 hover:text-slate-900 font-medium"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Hero Image */}
      {project.image && (
        <section className="max-w-4xl mx-auto px-6 pt-8">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={project.image}
              alt={project.title || page.name}
              className="w-full h-[400px] object-cover"
            />
          </div>
        </section>
      )}

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {project.title || project.name}
          </h1>

          <div
            className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 mb-8"
            dangerouslySetInnerHTML={{ __html: project.descriptionHtml }}
          />

          {/* Technologies */}
          {project.technologies && (
            <div className="pt-8 border-t border-slate-200">
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.split(",").map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Project Link */}
          {project.projectLink && (
            <div className="mt-8">
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                View Live Project →
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Metadata */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="bg-slate-100 rounded-2xl p-6 text-sm text-slate-600">
          <p>
            <strong>Content Type:</strong> {project.type}
          </p>
          <p>
            <strong>Last Updated:</strong>{" "}
            {new Date(project.updatedAt).toLocaleDateString()}
          </p>
          <p>
            <strong>Fetched from:</strong> Umbraco Content Delivery API
          </p>
        </div>
      </section>
    </main>
  );
}

export default ProjectDetail;
