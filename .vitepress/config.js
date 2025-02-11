import { defineConfig } from 'vite';

export default defineConfig({
  title: 'Raina Schematic',  
  base: '/raina-schematic',
  description: '大规模图形渲染工具', 
  srcDir: './docs',
  themeConfig: {
    nav: [
        // { text: 'Overview', link: '/index' },
        // { text: 'Quick Start', link: '/quick-start' },
        // { text: 'API Reference', link: '/api' },
    ],
    sidebar: {
        '/': [
            { text: 'Overview', link: '/index' },
            { text: 'Quick Start', link: '/quick-start' },
            { text: 'API Reference', link: '/api' },
        ]
    },
    footer: {
      message: 'Raina Schematic.',
    },
  },

});