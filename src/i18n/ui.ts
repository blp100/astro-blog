export const languages = {
  en: "English",
  "zh-tw": "中文",
};

export const defaultLang = "zh-tw";

export const ui = {
  en: {
    "nav.home": "Home".toUpperCase(),
    "nav.about": "About".toUpperCase(),
    "nav.categories": "Categories".toUpperCase(),
    "nav.categoriesURL": "/en/categories",
    "nav.source": "Source".toUpperCase(),
    "nav.language": "中",
    "nav.lang": "zh-tw",
    "contentful.locale": "en",
    "date.published": "Published",
    "date.updated": "Updated",
    "index.readMore": ">> Read More",
    "categories.list": "Total categories",
  },
  "zh-tw": {
    "nav.home": "首頁",
    "nav.about": "關於我",
    "nav.categories": "目錄",
    "nav.categoriesURL": "/zh-tw/categories",
    "nav.source": "猿始碼",
    "nav.language": "En".toUpperCase(),
    "nav.lang": "en",
    "contentful.locale": "zh-Hant-TW",
    "date.published": "發行：",
    "date.updated": "更新：",
    "index.readMore": "＞　閱讀更多",
    "categories.list": "總計 個分類",
  },
} as const;
