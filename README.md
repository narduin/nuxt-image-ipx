# nuxt-image ipx forbidden localhost

This is a basic reproduction of the bug described [here](https://github.com/nuxt/image/issues/486).

I don't really know if it's relevant but it's the best I came up with without having to start a headless CMS 😬

## What happens

I created a simple nuxt page with two `nuxt-image` elements.  
The first one calls an image from the `static` folder. The second one calls an image from the express middleware serving a file on port `3003`.

We can see in the dev console that the second one can't be displayed because the source `localhost` is forbidden, despite allowing it in the `domains` property of `nuxt.config.js`

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```