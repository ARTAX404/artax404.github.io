import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type MarkdownDocument<TFrontmatter extends Record<string, unknown>> = {
  slug: string;
  frontmatter: TFrontmatter;
  contentHtml: string;
};

export async function readMarkdownBySlug<TFrontmatter extends Record<string, unknown>>(
  directory: string,
  slug: string
): Promise<MarkdownDocument<TFrontmatter>> {
  const filePath = path.join(directory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContents);
  const processed = await remark().use(html).process(content);
  return {
    slug,
    frontmatter: data as TFrontmatter,
    contentHtml: processed.toString(),
  };
}

export function listMarkdownSlugs(directory: string): string[] {
  if (!fs.existsSync(directory)) return [];
  return fs
    .readdirSync(directory)
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.replace(/\.md$/, ""));
}

