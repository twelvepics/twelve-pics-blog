<template>
  <article class="blog-post">
    <div class="title">
      <nuxt-link :to="postLink">{{ post.title }}</nuxt-link>
    </div>

    <div class="image-wrapper">
      <nuxt-link :to="postLink">
        <img :src="post.thumbnail" />
      </nuxt-link>
    </div>

    <div class="meta">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <span class="post-icon">
              <font-awesome-icon :icon="['fas', 'camera']"></font-awesome-icon>
            </span>
          </div>
          <div class="media-content">
            <p class="tags">{{ post.tags }}</p>
            <p class="date">{{ post.createdDate | date }}</p>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: ["post"],
  computed: {
    postLink() {
      return `/blog-posts/${this.post.slug}`;
    },
  },
  data: function () {
    return {
      // picsBaseUrl: this.$config.picsBaseURL,
    };
  },
};
</script>

<style lang="scss" scoped>
.blog-post {
  margin: 0 !important;
  padding: 0;
  display: grid;
  // align title bottom
  grid-template-rows: minmax(90px, auto) 1fr auto;
  // else
  // grid-template-rows: auto 1fr auto;
  gap: 10px;
  gap: 10px;
  border-radius: 2px;
  border: 1px solid rgb(201, 203, 205);
  line-height: 0;
}
.posts .title,
.posts .image,
.posts .meta {
  margin: 0 !important;
  padding: 0;
  overflow: hidden;
  font-size: 1em;
}
.posts .meta {
  line-height: 0.9em;
}
.posts .title {
  padding: 0.8rem 0.5rem 0.5rem 0.5rem;
  font-family: "Palanquin", Serif;
  font-weight: 600;
  font-size: 1.3em;
  line-height: 1.3em;
  // align title bottom
  align-self: flex-end;
  // background: lightcoral;
}
.posts .meta {
  padding: 0.25rem 0.5rem 0.2em 0.5rem;
  margin: 0;
}
.posts .image-wrapper {
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  cursor: pointer;
}
.posts .card-content {
  margin: 0;
  padding: 0;
}

.posts .media-left {
  border: 1px solid #777;
  padding: 0 0.6rem;
  border-radius: 4px;
  margin-top: 1px;
  margin-right: 0.3rem;
}
.posts .media-content {
  margin: 0 0 0 0;
  padding: 0;
}
.posts .media-content .tags {
  color: #565656;
  font-family: "Merriweather", Sans-serif;
  font-weight: 400;
  font-style: italic;
  font-size: 0.8em;
  line-height: 1rem;
  margin: 0;
  padding: 0;
  margin-bottom: 1rem;
}
.posts .media-content .date {
  color: #565656;
  font-family: "Palanquin", Serif;
  font-weight: 600;
  font-size: 0.8em;
  margin: 0;
  padding: 0;
}
.post-icon {
  font-size: 1.3em;
  color: #333;
  padding: 6px 1px 6px 1px;
  display: inline-block;
}
@media only screen and (max-width: 750px) {
  .blog-post {
    grid-template-rows: minmax(35px, auto) 1fr auto;
  }
  .posts {
    margin: 0 0.5rem 0 0.5rem;
  }
}
.media-content {
  overflow: hidden;
}
a:link,
a:visited,
a:hover,
a:active {
  color: #000;
}
</style>
