// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).

import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import prerender from "vite-plugin-prerender";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // Additional Vite-specific configuration
  vite: {
    plugins: [
      prerender({
        staticDir: "dist",
        routes: [
          "/",
          "/about",
          "/tiers",
          "/events",
          "/blog",
          "/docs",
          "/join",
        ],
      }),
    ],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["react", "react-dom"],
            router: ["@tanstack/react-router"],
          },
        },
      },
    },
  },
});
