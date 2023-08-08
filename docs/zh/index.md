---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Quae-魁"
  text: "一个新拟物风的中后台模板"
  tagline: 基于 Vue3 的中后台轻量化模板
  image:
    src: /logo.png
    alt: Quae
  actions:
    - theme: brand
      text: 快速上手
      link: /zh/guide/
    - theme: alt
      text: 源代码
      link: https://github.com/MakerHu/Quae

features:
  - title: 新拟物风
    details: 以新拟物风为基础 UI 风格，简约而细腻
  - title: Vue3 驱动
    details: 使用 Vue3 开发，性能更高
  - title: 易上手
    details: Quae 的目的是帮助大家快速构建一个小型轻量化的网站
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
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