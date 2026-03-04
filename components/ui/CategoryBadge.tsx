import {
  Terminal,
  Cpu,
  Network,
  ShieldCheck,
  MonitorSmartphone,
  Lightbulb,
} from "lucide-react";
import { type ServiceCategory, categoryMeta } from "@/lib/services";
import { cn } from "@/lib/utils";

const iconMap = {
  Terminal,
  Cpu,
  Network,
  ShieldCheck,
  MonitorSmartphone,
  Lightbulb,
};

interface CategoryBadgeProps {
  category: ServiceCategory;
  size?: "sm" | "md";
}

export function CategoryBadge({ category, size = "sm" }: CategoryBadgeProps) {
  const meta = categoryMeta[category];
  const Icon = iconMap[meta.icon as keyof typeof iconMap];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-mono tracking-widest uppercase",
        meta.color,
        size === "sm" ? "text-[10px] px-2 py-1" : "text-xs px-3 py-1.5"
      )}
      style={{
        background: meta.glowColor,
        border: `1px solid ${meta.glowColor.replace("0.2", "0.4")}`,
      }}
    >
      <Icon size={size === "sm" ? 10 : 12} />
      {meta.label}
    </span>
  );
}
