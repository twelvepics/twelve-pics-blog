<template>
  <div>
    <BlogHeader></BlogHeader>
    <Nuxt />
    <BlogFooter></BlogFooter>
  </div>
</template>

<script>
import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
export default {
  components: {
    BlogHeader,
    BlogHeader,
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  font-size: 0.925em;
  line-height: 1.9em;
  font-family: "Merriweather", Serif;
}
</style>
