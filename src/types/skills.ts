import { ReactNode } from "react";

export type Skill = {
  text: string;
  logo?: ReactNode;
  bgClassName?: string;
  textClassName?: string;
  className?: string;
  onClick?: () => void;
  title?: string;
}

export type SkillGroup = {
  name: string;
  skills: Skill[]
}