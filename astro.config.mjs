import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import react from "@astrojs/react";
import addClasses from "rehype-add-classes";
import markdownIntegration from "@astropub/md";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  site: "https://example.com",
  integrations: [mdx(), sitemap(), tailwind(), react(), markdownIntegration()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [
      [
        addClasses,
        {
          h1: "text-4xl font-bold",
          h2: "text-2xl font-bold",
          h3: "text-xl font-bold",
          h4: "text-lg font-bold",
          h5: "font-bold",
          h6: "font-bold",
        },
      ],
    ],
  },
  vite: {
    ssr: {
      // Example: Force a broken package to skip SSR processing, if needed
      noExternal: ["react-icons"],
    },
  },
});
