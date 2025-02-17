import { defineConfig } from "vite";
import markdownItAnchor from "markdown-it-anchor";

export default defineConfig({
  title: "Raina Schematic",
  base: "/schematic-release",
  description: "大规模图形渲染工具",
  srcDir: "./docs",

  head: [
    [
      "script",
      {
        defer: true,
        src: "https://cloud.umami.is/script.js",
        "data-website-id": "ba17a46d-f73a-4436-b75c-3ca9559bb36a",
      },
    ],
  ],
  themeConfig: {
    footer: {
      message: "Raina Schematic.",
    },
    search: {
      provider: "local",
    },
  },
  locales: {
    root: {
      label: "简体中文",
      lang: "zh",
      link: "/zh/",
      themeConfig: {
        nav: [
          { text: "简介", link: "/zh/overview" },
          { text: "API 列表", link: "/zh/api" },
        ],
        sidebar: {
          "/zh/overview": [
            { text: "项目简介", link: "/zh/overview/index" },
            { text: "快速开始", link: "/zh/overview/quick-start" },
            { text: "核心数据类型", link: "/zh/overview/data" },
            { text: "模板文件", link: "/zh/overview/temp" },
          ],
        },
        outline: {
          label: "目录", // 自定义 TOC 标题
        },
      },
    },
    en: {
      label: "English",
      lang: "en",
      link: "/en/",
      themeConfig: {
        nav: [
          { text: "Overview", link: "/en/overview" },
          { text: "API Reference", link: "/en/api" },
        ],
        sidebar: {
          "/en/overview": [
            { text: "Overview", link: "/en/overview/index" },
            { text: "Quick Start", link: "/en/overview/quick-start" },
            { text: "Core Data Types", link: "/en/overview/data" },
            { text: "Template Files", link: "/en/overview/temp" },
          ],
        },
        outline: {
          label: "Table of Contents", // 自定义 TOC 标题
        },
      },
    },
  },
});
