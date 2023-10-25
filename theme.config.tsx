import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/anzai249/CyberGui',
  },
  docsRepositoryBase: 'https://github.com/anzai249/cybergui-docs',
  footer: {
    text: 'CyberGui Docs',
  },
  primaryHue: 271,
  logo: (
    <>
      <svg width="50" height="50" xmlns="http://www.w3.org/4000/svg" version="1.1">
        <g id="Gui">
          <rect id="svg_1" height="40" width="7.5" y="5" x="21.25" stroke="#000" fill="#000000" />
          <rect transform="rotate(120 25 25)" id="svg_3" height="40" width="7.5" y="5" x="21.25" stroke="#000" fill="#000000" />
          <rect transform="rotate(60 25 25)" id="svg_4" height="40" width="7.5" y="5" x="21.25" stroke="#000" fill="#000000" />
        </g>
      </svg>
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>CyberGui Docs</span>
    </>
  ),
  head: (
    <>
      <meta property="og:description" content="CyberGui Official Docs" />
      <link rel="icon" href="/favicon.svg"></link>
    </>
  ),
  i18n: [
    { locale: 'en-US', text: 'English' },
    { locale: 'zh-CN', text: '简体中文' },
    { locale: 'zh-TW', text: '繁體中文' }
  ],
  useNextSeoProps() {
    return {
      titleTemplate: '%s - CyberGui Docs',
    }
  }
}

export default config
