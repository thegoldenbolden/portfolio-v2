import { Fragment } from "react";
import { GithubIcon, LinkIcon as LinkSVG } from "~/components/icons";
import type { Project as TProject } from "~/utils/projects";

type Props = {
  as?: "li" | "div";
  project: TProject;
};

export function Project({
  project,
  as: Component = "li",
}: Props): React.ReactNode {
  const site = project.site || project.repo;

  return (
    <Component className="group relative flex w-full grow flex-col gap-2 rounded-xl px-6 py-3 transition-all md:py-6">
      <Link site={site} name={project.name} />
      <span className="text-xs font-semibold text-foreground/50">
        {project.year}
      </span>
      <div className="flex items-center gap-4 group-hover:text-primary group-has-[a:focus-visible]:text-primary">
        <h3 id={project.name} className="text-lg font-medium">
          {project.name}
        </h3>
        <LinkIcon site={site} />
      </div>
      <p className="text-sm leading-6">{project.description}</p>
      <ul className="pointer-events-none mt-auto flex flex-wrap items-center gap-2 text-sm">
        {project.tags.map((tag, i) => (
          <Fragment key={`${project.name}-${tag}`}>
            <li className="rounded-sm text-sm text-primary">{tag}</li>
            {i < project.tags.length - 1 && (
              <span className="h-px w-px bg-primary" />
            )}
          </Fragment>
        ))}
      </ul>
    </Component>
  );
}

function Link({
  site,
  name,
}: {
  site?: string;
  name: string;
}): React.ReactNode {
  if (!site) return null;
  return (
    <a
      target="_blank"
      rel="noreferrer noopener"
      href={site}
      aria-labelledby={name}
      className="absolute left-0 top-0 h-full w-full rounded-inherit md:hover:bg-primary/10 md:focus-visible:bg-primary/10"
    >
      <span className="sr-only">{site}</span>
    </a>
  );
}

function LinkIcon({ site }: { site?: string }): React.ReactNode {
  if (!site) return null;

  const Icon = site.startsWith("https://github.com") ? GithubIcon : LinkSVG;

  return (
    <span className="-z-[1] ml-auto rounded-full p-2 transition-all group-hover:scale-125 group-has-[a:focus-visible]:scale-125">
      <Icon className="size-5" />
    </span>
  );
}
