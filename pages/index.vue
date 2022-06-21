<template>
  <main>
    <section>
      <h2>Image from <code>static folder</code></h2>
      <p>all is well!</p>
      <nuxt-img src="/oui.jpg" />
    </section>
    <section>
      <h2>Image from mock localhost api (express middleware)</h2>
      <p>getting <code>403 IPX: Forbidden host</code></p>
      <nuxt-img src="http://localhost:3003/oui-express.jpg" />
    </section>
  </main>
</template>

<script>
export default {

}
</script>

<style>
:where(img, svg, video, canvas, audio, iframe, embed, object) {
  display: block;
}
:where(img, svg, video) {
  block-size: auto;
  max-inline-size: 100%;
}
code {
  padding: 2px 4px;
  background-color: lightgrey;
}
</style>