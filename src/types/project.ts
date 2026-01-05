import { Color } from "./decor";

export type Project = {
  title: string;
  subtitle?: string;
  body: string;
  imageSrc: string;
  imageAlt?: string;
  tech: readonly string[];
  color: Color;
  href?: string;
  horizontal: boolean;
  reversed: boolean; // note to self: this only applies if horizontal is true
  xl: boolean; // note to self: this only applies if horizontal is true
};

export type ProjectMiniView = {
      title: string;
      imageSrc: string;
  imageAlt?: string;
}

export function getMiniView(project: Project) : ProjectMiniView {
    return {
        imageSrc: project.imageSrc,
        imageAlt: project.imageAlt,
        title: project.title
    }
}