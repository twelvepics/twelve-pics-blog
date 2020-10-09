<template>
  <footer class="has-background-dark">
    <p>
      Contact:
      <a href="mailto:info@twelvepics.com"
        >info@twelvepics.com</a> - Website built with
        <a href="https://nuxtjs.org/" target="_blank">NuxtJS</a>, <a href="https://nodejs.org/">Node</a> and
        <a href="https://www.arangodb.com/">ArangoDB</a> - Support independent publishing. You are not the product!
      </a>
    </p>
  </footer>
</template>
<script>
export default {
  name: "BlogFooter",
};
</script>
<style lang="scss" scoped>
footer {
  margin-top: 50px;
  font-family: "Palanquin", Sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0.5em 1.5rem 0.5em;
  min-height: 100px;
  font-size: 1em;
  color: #9a9a9a !important;
  line-height: 1.7em;
  text-align: center;
}
a {
  color: #bbb !important;
}
a:hover {
  color: #bbbbbb !important;
}
</style>
