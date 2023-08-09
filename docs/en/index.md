---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

title: Quae
titleTemplate: Neumorphic-style  middle and backend template

hero:
  name: "Quae"
  text: "Neumorphic-style middle and backend template"
  tagline: Simplicity, delicacy, and agility. helping you quickly build small to medium-sized websites.
  image:
    src: /logo.png
    alt: Quae
  actions:
    - theme: brand
      text: Get Started
      link: /en/guide/
    - theme: alt
      text: View on GitHub
      link: https://github.com/MakerHu/Quae

features:
  - icon: 🎛
    title: Neumorphic-style
    details: Neumorphic-style UI brings you a more realistic and delicate interactive experience.
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 256 220.8"><path fill="#41B883" d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36Z"/><path fill="#41B883" d="m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0H0Z"/><path fill="#35495E" d="M50.56 0 128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56Z"/></svg>
    title: Vue3 & Vite4
    details: Quae is developed using Vue 3 and Vite 4, showcasing enhanced performance. It supports mixed development with TypeScript and JavaScript.
  - icon: 🧱
    title: Component library
    details: Offering commonly used components in the Neumorphic-style, helping you swiftly develop pages with a consistent design.
  - icon: 👌
    title: Easy to grasp and get started with.
    details: Quae retains only the most essential functions, featuring a concise and clear project structure that's easy to learn.
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
