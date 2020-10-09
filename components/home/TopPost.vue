<template>
  <article class="recent-blog-post">
    <div class="title">
      <nuxt-link :to="postLink">{{ post.title }}</nuxt-link>
    </div>
    <div class="image-wrapper">
      <nuxt-link :to="postLink">
        <img :src="post.thumbnail" />
      </nuxt-link>
    </div>
    <div class="meta">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <span class="top-icon">
                <font-awesome-icon
                  :icon="['fas', 'camera']"
                ></font-awesome-icon>
              </span>
            </div>
            <div class="media-content">
              <p class="tags">{{ post.tags }}</p>
              <p class="date">{{ post.createdDate | date }}</p>
            </div>
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
.recent-blog-post {
  padding: 0;
  display: grid;
  // grid-template-rows: minmax(60px, auto) 1fr auto;
  // align title bottom
  grid-template-rows: minmax(120px, auto) 1fr auto;
  // else
  // grid-template-rows: auto 1fr auto;
}

.recent-blog-post:first-child {
  border-right: 1px solid #565656;
}
.recent-blog-post:last-child {
  border-left: 1px solid #565656;
}
.top .title {
  margin: 0 !important;
  font-family: "Palanquin", Serif;
  font-weight: 600;
  font-size: 1.5em;
  line-height: 1.6em;
  color: #ddd;
  padding: 1.5rem 0.75rem 1.5rem 0.75rem;
  align-self: flex-end;
  letter-spacing: 0.05em;
}

.top .image-wrapper {
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  // cursor: pointer;
}

.top .card-content {
  background: #252526;
  padding: 0.7em 0.5em 1em 1em;
}

.top .media-left {
  border: 1px solid white;
  padding: 0 0.6rem;
  border-radius: 4px;
  margin-right: 0.5rem;
}

.top .media-content .tags {
  color: #bbb;
  font-style: italic;
  font-size: 1em;
  line-height: 1em;
  margin: 0;
  padding: 0.2em 0 0 0;
}
.top .media-content .date {
  color: #787878;
  font-family: "Palanquin", Serif;
  font-weight: 600;
  font-size: 1em;
  margin: 0;
  padding: 0;
}
.top-icon {
  font-size: 2em;
  color: #eee;
  padding: 5px 1px 3px 1px;
  display: inline-block;
}
@media only screen and (max-width: 600px) {
  .recent-blog-post:first-child {
    border: none;
    border-bottom: 1px solid #565656;
  }
  .recent-blog-post:last-child {
    border: none;
    border-top: 1px solid #565656;
  }
  .recent-blog-post {
    grid-template-rows: minmax(30px, auto) 1fr auto;
  }
}
.media-content {
  overflow: hidden;
}
a:link,
a:visited,
a:hover,
a:active {
  color: #ddd;
}
</style>
