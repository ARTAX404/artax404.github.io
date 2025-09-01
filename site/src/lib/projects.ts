import path from "node:path";
import { listMarkdownSlugs, readMarkdownBySlug } from "./md";

export type ProjectFrontmatter = {
  title: string;
  date: string; // ISO date
  tags?: string[];
  excerpt?: string;
  cover?: string;
};

const projectsDir = path.join(process.cwd(), "content", "projects");

export function getProjectSlugs() {
  return listMarkdownSlugs(projectsDir);
}

export async function getProjectBySlug(slug: string) {
  return readMarkdownBySlug<ProjectFrontmatter>(projectsDir, slug);
}

export async function getAllProjects() {
  const slugs = getProjectSlugs();
  const docs = await Promise.all(slugs.map((s) => getProjectBySlug(s)));
  return docs.sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
}

