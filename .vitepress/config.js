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
    nav: [
      { text: "简介", link: "/overview" },
      { text: "使用文档", link: "/doc" },
      { text: "API 列表", link: "/api" },
    ],
    sidebar: {
      "/overview": [
        { text: "项目简介", link: "/overview/index" },
        { text: "实现原理", link: "/overview/design" },
      ],
      "/doc": [
        { text: "快速开始", link: "/doc/index" },
        { text: "核心数据类型", link: "/doc/data" },
        { text: "模板文件", link: "/doc/temp" },
      ],
    },
    outline: {
      label: "目录", // 自定义 TOC 标题
    },
    footer: {
      message: "Raina Schematic.",
    },
  },
});
