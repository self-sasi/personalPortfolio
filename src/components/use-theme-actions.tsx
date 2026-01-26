"use client";

import {
  useState,
  useRef,
  useEffect,
  useMemo,
} from "react";
import { useTheme } from "next-themes";

export type ThemeMode = "light" | "dark" | "system";

function getEffectiveTheme(
  theme: string | undefined,
  resolvedTheme: string | undefined,
  systemTheme: "light" | "dark" | undefined
) {
  return theme === "system" ? systemTheme : resolvedTheme;
}

export function useThemeActions() {
  const { theme, resolvedTheme, systemTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const prevSystemThemeRef = useRef<"light" | "dark" | undefined>(undefined);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    if (!systemTheme) return;

    const prev = prevSystemThemeRef.current;
    prevSystemThemeRef.current = systemTheme;

    if (!prev) return; // first run

    if (prev !== systemTheme) {
      setTheme("system");
    }
  }, [systemTheme, mounted, setTheme]);

  const effectiveTheme = getEffectiveTheme(theme, resolvedTheme, systemTheme);
  const isDark = mounted && effectiveTheme === "dark";

  const actions = useMemo(
    () => ({
      mounted,
      theme,
      resolvedTheme,
      systemTheme,
      effectiveTheme,
      isDark,

      set: (t: ThemeMode) => setTheme(t),
      setLight: () => setTheme("light"),
      setDark: () => setTheme("dark"),
      setSystem: () => setTheme("system"),
      toggleLightDark: () => setTheme(isDark ? "light" : "dark"),
    }),
    [mounted, theme, resolvedTheme, systemTheme, effectiveTheme, isDark, setTheme]
  );

  return actions;
}
