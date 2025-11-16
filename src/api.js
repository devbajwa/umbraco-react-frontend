const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000";

export async function getHome() {
  const res = await fetch(`${API_BASE}/api/home`);
  if (!res.ok) throw new Error("Failed to load home");
  return res.json();
}

export async function getProjects() {
  const res = await fetch(`${API_BASE}/api/projects`);
  if (!res.ok) throw new Error("Failed to load projects");
  return res.json();
}

export async function getProject(slug) {
  const res = await fetch(`${API_BASE}/api/projects/${slug}`);
  if (!res.ok) throw new Error("Failed to load project");
  return res.json();
}
