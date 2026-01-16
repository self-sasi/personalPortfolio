import { cn } from "@/lib/utils";
import { Skill } from "@/types/skills";

export function SkillBadge({
  text,
  logo,
  bgClassName,
  textClassName,
  className,
  title,
}: Skill) {
  return (
    <div
      title={title}
      className={cn(
        "inline-flex items-center gap-2",
        "px-2 py-1",
        "text-base leading-none",
        "select-none whitespace-nowrap",
        "rounded",
        "border border-current/30",
        "bg-opacity-90",
        bgClassName ?? "bg-muted",
        textClassName ?? "text-foreground",
        className
      )}
    >
      {logo ? (
        <span
          aria-hidden
          className={cn(
            "inline-flex items-center justify-center",
            "h-5 w-5 shrink-0",

            "[&>svg]:h-5 [&>svg]:w-5",
            "[&>img]:h-5 [&>img]:w-5 [&>img]:object-contain"
          )}
        >
          {logo}
        </span>
      ) : null}

      <span className="leading-none">{text}</span>
    </div>
  );
}
