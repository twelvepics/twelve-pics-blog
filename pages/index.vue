<template>
  <main>
    <section class="top-section box-shadow">
      <div class="top">
        <TopPost
          v-for="post in posts.slice(0, 3)"
          :key="post._key"
          :post="post"
        />
      </div>
    </section>
    <section class="posts-section">
      <div class="posts">
        <Post
          v-for="post in posts.slice(3, posts.length)"
          :key="post._key"
          :post="post"
        />
      </div>
    </section>
  </main>
</template>
<script>
import TopPost from "@/components/home/TopPost";
import Post from "@/components/home/Post";
export default {
  components: { TopPost, Post },
  data() {
    return {
      posts: this.$store.getters.posts,
    };
  },
  created() {
    console.log(this.$config.apiBaseURL);
  },
};
</script>
<style lang="scss" scoped>
/* --------------------------------------------------------
 * this page
 * ------------------------------------------------------*/
main {
  margin-top: 48px;
  width: 100%;
}
/******************* top *************************/
top-section {
  background: #252526;
  width: 100%;
}
.top {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: #252526;
  padding: 0 !important;
}

/******************* posts *************************/
.posts-section {
  max-width: 1024px;
  margin: 30px auto;
}
.posts {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
}
@media only screen and (max-width: 600px) {
  .top {
    display: grid;
    grid-template-columns: 1fr;
    background: #252526;
    padding: 0 !important;
  }
}
</style>
