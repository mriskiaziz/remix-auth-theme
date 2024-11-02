import { useState, useEffect } from "react";
import type { MetaFunction } from "@remix-run/node";
import { useTheme } from "next-themes";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <div>
          The current theme is: {theme}
          <br />
          <button onClick={() => setTheme("light")}>Light Mode</button>
          <br />
          <button onClick={() => setTheme("dark")}>Dark Mode</button>
        </div>
      </div>
    </div>
  );
}
