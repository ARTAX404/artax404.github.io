import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";

type Params = { params: { slug: string } };

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params) {
  const doc = await getProjectBySlug(params.slug).catch(() => null);
  if (!doc) return {};
  const { title, excerpt, cover } = doc.frontmatter;
  return {
    title,
    description: excerpt,
    openGraph: {
      title,
      description: excerpt,
      images: cover ? [{ url: cover }] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = params;
  const doc = await getProjectBySlug(slug).catch(() => null);
  if (!doc) return notFound();
  const { title } = doc.frontmatter;

  return (
    <main className="container py-12">
      <Link href="/" className="inline-block mb-6">← Retour</Link>
      <h1 className="text-3xl font-semibold mb-2">{title}</h1>
      <article
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: doc.contentHtml }}
      />
    </main>
  );
}