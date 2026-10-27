import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const base = env.VITE_BASE_PATH || "/";
  const siteUrl = (env.VITE_SITE_URL || "").replace(/\/$/, "");

  return {
    base,
    plugins: [
      react(),
      {
        name: "portfolio-social-metadata",
        transformIndexHtml(html) {
          return html
            .replace(
              "<!-- canonical-url -->",
              siteUrl ? '<link rel="canonical" href="' + siteUrl + base + '" />' : "",
            )
            .replace("__SITE_URL__", siteUrl ? siteUrl + base : "")
            .replace("__OG_IMAGE_URL__", siteUrl ? siteUrl + base + "og-image.png" : base + "og-image.png");
        },
      },
    ],
  };
});
