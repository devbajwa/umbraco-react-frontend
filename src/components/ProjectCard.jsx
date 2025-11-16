import { Link } from "react-router-dom";
export default function ProjectCard({ project }) {
  return (
    <article className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      {project.image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title || project.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-3">
          {project.title || project.name}
        </h3>

        <div
          className="text-slate-600 text-sm mb-4 line-clamp-3"
          dangerouslySetInnerHTML={{
            __html: project.descriptionHtml,
          }}
        />

        {project.technologies && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.split(",").map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium"
              >
                {tech.trim()}
              </span>
            ))}
          </div>
        )}

        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
        >
          View Details →
        </Link>
      </div>
    </article>
  );
}
