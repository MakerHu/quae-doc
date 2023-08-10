---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

title: Quae-魁
titleTemplate: 新拟物风中后台模板

hero:
  name: "Quae-魁"
  text: "新拟物风中后台模板"
  tagline: 简约、细腻、灵动，帮助你快速构建中小型网站。
  image:
    src: /logo.png
    alt: Quae
  actions:
    - theme: brand
      text: 快速上手
      link: /guide/
    - theme: alt
      text: 源代码
      link: https://github.com/MakerHu/Quae

features:
  - icon: 🎛
    title: 新拟物风
    details: 新拟物风格 UI 带给你更加真实细腻的交互体验。
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 256 220.8"><path fill="#41B883" d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36Z"/><path fill="#41B883" d="m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0H0Z"/><path fill="#35495E" d="M50.56 0 128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56Z"/></svg>
    title: Vue3 & Vite4
    details: 使用 Vue3 与 Vite4 开发，具有更好的性能表现，同时支持 TypeScript 与 JavaScript 混合开发。
  - icon: 🧱
    title: QuaeUI 组件库
    details: 提供新拟物风格的常用组件，帮助你快速开发风格一致的页面。
  - icon: 👌
    title: 简单易上手
    details: Quae 只保留了最核心的功能，项目结构简洁清晰，容易学习。
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
  /* --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #2b87ff 30%, #79d9ff); */

  /* --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%); */
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #2b87ff 50%, #79d9ff 50%);
  --vp-home-hero-image-filter: blur(40px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}
</style>