<template>
  <div>
    <BlogHeader></BlogHeader>
    <div class="wrapper">
      <Nuxt />
      <BlogFooter></BlogFooter>
    </div>
  </div>
</template>

<script>
import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
export default {
  components: {
    BlogHeader,
    BlogHeader
  }
};
</script>

<style>
.wrapper {
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 100%;
}
</style>>
