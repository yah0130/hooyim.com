<p align="center">
  <a href="https://github.com/nuxt/nuxt.js" target="blank">
    <img src="https://nuxtjs.org/meta_400.png" height="90" alt="nuxt logo" />
  </a>
</p>

# Hooyim.com

![vue](https://img.shields.io/badge/MADE%20WITH-VUE-42a97a?style=for-the-badge&labelColor=35495d)

**My personal website and blog, powered by [Nuxt.js](https://github.com/nuxt/nuxt.js).** 

**使用 [Nuxt.js](https://github.com/nuxt/nuxt.js) 构建的个人网站。**

**Online site:** https://www.hooyim.com

## Development Setup

```bash
# install nodemon
$ npm i nodemon -g

# install dependencies
$ yarn # or npm install

# serve with hot reload at localhost:3000
$ yarn dev # or npm run dev

# build for production and launch server
$ yarn build # or npm run build
$ yarn start # or npm start

# lint test
$ yarn lint
```

## Actions setup

**Rule:**
- `any PR open` -> `CI:Build test`
- `master PR closed & merged` -> `CI:Deploy to server`

**Example:**
- `local:develop -> remote:develop` -> `CI:Build test`
- `remote:develop/other -> remote:master -> merged` -> `CI:Deploy to server`
