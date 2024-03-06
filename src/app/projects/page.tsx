import type { Metadata } from "next";
import Link from "next/link";
import { RightArrowIcon } from "~/components/icons";
import { Project } from "~/components/project";
import { projects } from "~/utils/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "A list of projects I've worked on",
  alternates: {
    canonical: "https://jacobbolden.com/projects",
  },
};

export default function Page(): React.ReactNode {
  const in_progress = projects
    .filter((p) => p.status === "in_progress")
    .sort((a, b) => +b.year - +a.year);

  const hiatus = projects
    .filter((p) => p.status === "hiatus")
    .sort((a, b) => +b.year - +a.year);

  const complete = projects
    .filter((p) => p.status !== "in_progress" && p.status !== "hiatus")
    .sort((a, b) => +b.year - +a.year);

  return (
    <main className="my-24">
      <div className="flex flex-wrap items-center gap-2 p-6 text-sm font-medium uppercase tracking-wide text-foreground/75">
        <Link
          href="/"
          className="hover:text-foreground focus-visible:text-foreground"
        >
          Jacob Bolden
        </Link>
        <RightArrowIcon className="size-4" />
        <h1 className="text-foreground">Projects</h1>
      </div>
      <section className="my-12 flex flex-col gap-4">
        <h2 className="sticky top-0 z-50 p-6 text-sm font-medium uppercase tracking-wider text-foreground backdrop-blur-sm">
          In progress
        </h2>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
          {in_progress.map((project) => {
            return <Project key={project.name} project={project} />;
          })}
        </ul>
      </section>
      <section className="my-12 flex flex-col gap-4">
        <h2 className="sticky top-0 z-50 p-6 text-sm font-medium uppercase tracking-wider text-foreground backdrop-blur-sm">
          Completed
        </h2>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
          {complete.map((project) => {
            return <Project key={project.name} project={project} />;
          })}
        </ul>
      </section>
      <section className="my-12 flex flex-col gap-4">
        <h2 className="sticky top-0 z-50 p-6 text-sm font-medium uppercase tracking-wider text-foreground backdrop-blur-sm">
          Hiatus
        </h2>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
          {hiatus.map((project) => {
            return <Project key={project.name} project={project} />;
          })}
        </ul>
      </section>
    </main>
  );
}
