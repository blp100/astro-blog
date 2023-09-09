import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import react from "@astrojs/react";
import addClasses from "rehype-add-classes";
import markdownIntegration from "@astropub/md";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap(), tailwind(), react(), markdownIntegration()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [
      [
        addClasses,
        {
          h1: "text-4xl font-bold scroll-mt-16",
          h2: "text-2xl font-bold scroll-mt-16",
          h3: "text-xl font-bold scroll-mt-16",
          h4: "text-lg font-bold",
          h5: "font-bold",
          h6: "font-bold",
          hr: "border-t-[6px] w-52 mx-auto my-4 border-orange-200 dark:border-zinc-400 border-double",
          p: "text-lg my-2",
          blockquote:
            "p-4 bg-amber-100 dark:bg-neutral-800 border-l-4 border-orange-200 dark:border-neutral-700",
          a: "text-amber-600 dark:text-amber-200",
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
