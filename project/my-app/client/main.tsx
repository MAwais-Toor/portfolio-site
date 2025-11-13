import "./global.css";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
if (!container) throw new Error("Root container #root not found");

// Reuse a single root across HMR updates
// Store the root instance on import.meta.hot.data
const hot = (import.meta as any).hot as { data: Record<string, any>; accept: () => void } | undefined;
const prevRoot = hot?.data?.root as ReturnType<typeof createRoot> | undefined;
const root = prevRoot ?? createRoot(container);
if (hot) {
  hot.data.root = root;
  hot.accept();
}

root.render(<App />);
