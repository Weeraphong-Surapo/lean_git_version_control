import { version } from "../../package.json";

export default async function Footer() {
  "use cache";

  return (
    <footer className="shrink-0 border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 text-sm text-zinc-500 sm:px-6">
        <p>© {new Date().getFullYear()} Lean Git</p>
        <p>v{version}</p>
      </div>
    </footer>
  );
}
