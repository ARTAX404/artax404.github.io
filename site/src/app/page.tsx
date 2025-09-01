import Image from "next/image";
import Link from "next/link";
import { getAllProjects } from "@/lib/projects";

const roles = [
  "créateur de sites & apps",
  "PWA",
  "monteur vidéo",
  "créateur de jeux",
  "community manager",
];

export default async function HomePage() {
  const projects = await getAllProjects();
  return (
    <main>
      <section className="container py-12 md:py-20">
        <div className="flex flex-col items-center text-center gap-6">
          <Image
            className="rounded-full ring-2 ring-accent/30"
            src="/logo.png"
            alt="Logo ARTAX404"
            width={120}
            height={120}
            priority
          />
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            ARTAX404
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl">
            {roles.join(" / ")}
          </p>
          <div className="flex gap-3">
            <Link href="#projets" className="px-4 py-2 bg-accent text-white rounded-md">
              Voir mes projets
            </Link>
            <Link href="/contact" className="px-4 py-2 border border-accent/50 rounded-md">
              Me contacter
            </Link>
          </div>
        </div>
      </section>

      <section className="container grid md:grid-cols-2 gap-10 md:gap-14 py-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">À propos</h2>
          <p className="text-muted">
            Passionné par le web, j&apos;aide à concevoir des expériences rapides, accessibles et
            maintenables. Mon focus: Next.js, TypeScript, PWA, et un design minimaliste.
          </p>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">Compétences</h2>
          <ul className="flex flex-wrap gap-2">
            {["Next.js", "TypeScript", "Tailwind", "PWA", "Node.js", "CI/CD"].map((s) => (
              <li key={s} className="px-3 py-1 rounded-full border border-accent/40 text-sm">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="projets" className="container py-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Projets</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.slug} className="rounded-lg border border-white/10 p-4 hover:border-accent/40">
              <h3 className="text-lg font-semibold">{p.frontmatter.title}</h3>
              {p.frontmatter.excerpt && (
                <p className="text-sm text-muted">{p.frontmatter.excerpt}</p>
              )}
              <Link href={`/projets/${p.slug}`} className="inline-block mt-2">
                Voir le détail →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="container py-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">Expériences</h2>
        <ul className="space-y-3">
          {["2023 — Présent: Freelance", "2021 — 2023: Studio"].map((e) => (
            <li key={e} className="text-muted">{e}</li>
          ))}
        </ul>
      </section>

      <section className="container py-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">Contact</h2>
        <p className="text-muted mb-4">
          Une idée de projet? Contactez-moi via le formulaire ou par e-mail.
        </p>
        <div className="flex gap-4">
          <Link href="mailto:contact@artax404.fr.nf" className="px-4 py-2 bg-accent text-white rounded-md">
            contact@artax404.fr.nf
          </Link>
          <Link href="https://youtube.com/c/ARTAX404" target="_blank" className="px-4 py-2 border rounded-md">
            YouTube
          </Link>
          <Link href="https://github.com/ARTAX404" target="_blank" className="px-4 py-2 border rounded-md">
            GitHub
          </Link>
        </div>
      </section>

      <footer className="container py-12 text-center text-sm text-muted">
        © {new Date().getFullYear()} ARTAX404. Tous droits réservés.
      </footer>
    </main>
  );
}

