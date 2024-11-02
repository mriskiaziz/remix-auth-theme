// provider.tsx
import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Render null di SSR

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};
