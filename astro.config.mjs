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
          h1: "text-4xl font-bold scroll-mt-16 my-2",
          h2: "text-2xl font-bold scroll-mt-16 text-boston-blue-700 dark:text-boston-blue-200 my-2",
          h3: "text-xl font-bold scroll-mt-16 text-boston-blue-500 dark:text-boston-blue-300 my-2",
          h4: "text-lg font-bold my-2",
          h5: "font-bold my-2",
          h6: "font-bold my-2",
          hr: "border-t-[1rem] w-52 mx-auto my-4 border-orange-200 dark:border-zinc-400 border-double",
          p: "text-lg my-2",
          blockquote:
            "p-4 bg-amber-100 dark:bg-neutral-800 border-l-4 border-orange-200 dark:border-neutral-700 my-2",
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
