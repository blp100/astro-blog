import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { IoMenu, IoLogoGithub } from "react-icons/io5";
import DropdownMenuItem from "./DropDownMenuItem";
import { useTranslations } from "../i18n/utils";
import type { ui } from "../i18n/ui";
import { HOMEPAGE_URL } from "../consts";

interface Props {
  lang: keyof typeof ui;
}

const DropdownMenu = ({ lang }: Props) => {
  const t = useTranslations(lang);

  return (
    <Menu as="div" className="relative inline-block text-left md:hidden">
      <div>
        <Menu.Button
          className="inline-flex justify-center rounded-full border border-neutral-300 dark:border-zinc-700 px-2 py-2 text-sm font-medium shadow-sm hover:bg-orange-200 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 transition-all"
          aria-label="menu"
        >
          <IoMenu className="h-5 w-5" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md border border-neutral-200 dark:border-neutral-700 bg-ivory dark:bg-neutral-800 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none divide-neutral-200 dark:divide-neutral-700">
          <div className="py-1">
            <DropdownMenuItem href={t("nav.categoriesURL")}>
              {t("nav.categories")}
            </DropdownMenuItem>
            <DropdownMenuItem href={t("nav.tagsURL")}>
              {t("nav.tags")}
            </DropdownMenuItem>
            <DropdownMenuItem href={HOMEPAGE_URL}>
              {t("nav.about")}
            </DropdownMenuItem>
            <DropdownMenuItem href="https://github.com/blp100/astro-blog">
              <IoLogoGithub size={24} className="mb-0.5" />
              {t("nav.source")}
            </DropdownMenuItem>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropdownMenu;
