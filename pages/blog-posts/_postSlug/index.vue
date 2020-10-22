<template>
  <main class="blog-post">
    <section>
      <div v-html="loadedPost.html_main"></div>
      <div class="columns is-mobile end">
        <div class="column is-narrow end-left">
          <p class="media">
            <span class="post-icon">
              <img src="/images/blog/icons/camera.png" />
            </span>
          </p>
        </div>
        <div class="column end-right">
          Thank you for reading -
          <nuxt-link to="/">More articles here</nuxt-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { getDb } from "@/lib/db.js";
const arango = require("arangojs");
const aql = arango.aql;

export default {
  // scrollToTop: false,
  middleware({ store, params, error }) {
    // If the user is not authenticated
    const post = store.getters.posts.find(
      (post) => post.slug === params.postSlug
    );
    if (!post) {
      error({ statusCode: 404, message: "Post not found" });
    }
  },
  head() {
    return {
      title: `Blog.twelvepics.com - ${this.loadedPost.title}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `${this.loadedPost.description}`,
        },
      ],
    };
  },
  computed: {
    loadedPost() {
      const postSlug = this.$route.params.postSlug;
      const post = this.$store.getters.posts.find(
        (post) => post.slug === postSlug
      );
      return post;
    },
  },
  // asyncData(context) {
  //   console.log("ASYNCDATA I AM EXECUTED");
  //   const postSlug = context.params.postSlug;
  //   const dbHandle = getDb();
  //   return dbHandle()
  //     .query(aql`FOR d IN posts FILTER d.slug == ${postSlug} RETURN d`)
  //     .then(cursor => cursor.next())
  //     .then(
  //       data => {
  //         return {
  //           loadedPost: { ...data }
  //         };
  //       },
  //       err => console.error("Failed to fetch document:", err)
  //     );
  // }
};
</script>

<style lang="scss">
/* --------------------------------------------------------
 * this page
 * ------------------------------------------------------*/
.blog-post {
  margin-top: 25px;
  width: 100%;
  display: flex;
  justify-content: center;
  /* background-color: #eee; */
}

.blog-post section {
  width: 100%;
  max-width: 920px;
  /* background-color: palegoldenrod; */
  margin: 0 !important;
  padding: 4rem 10px 1rem 10px !important;
}

.blog-post h2.rubric {
  color: white !important;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.8rem;
  margin-bottom: 1.5rem;
}
.blog-post h2.rubric span {
  background-color: black;
  padding: 0.2rem 0.5rem;
}

.blog-post h1.title {
  font-size: 1.8em;
  max-width: 700px;
  margin: auto;
  margin-bottom: 0.8em;
  line-height: 2.1rem;
}
@media only screen and (max-width: 600px) {
  .blog-post h1.title {
    font-size: 1.7em;
    line-height: 2rem;
  }

.blog-post h2.rubric {
  margin-bottom: 1.1rem;
}
}
.blog-post .subtitle {
  font-family: "Merriweather", Serif;
  font-style: italic;
  text-align: center;
  font-size: 1.2em;
  max-width: 700px;
  margin: auto;
  margin-top: 0.8rem !important;
  margin-bottom: 1.8rem !important;
  line-height: 1.8rem;
}
.blog-post .sigdate {
  font-family: "PalanquinDark", Sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
  margin: auto;
  margin-top: 1.8rem !important;
  margin-bottom: 1.5rem !important;
  max-width: 700px;
  background: #555;
  height: 1px;
}
.blog-post .sig {
  margin-top: 0 !important;
  background-color: white;
  padding: 10px 0.3rem 0 1rem;
  position: relative;
  top: -12px;
}
.blog-post .date {
  padding: 10px 1rem 0 0.3rem;
  color: lightseagreen;
  background-color: white;
  position: relative;
  top: -12px;
}
.blog-post .reg {
  margin: auto;
  margin-bottom: 0.5rem;
  max-width: 700px;
}
.blog-post .reg .txt-start {
  font-family: "PalanquinDark", Serif;
  font-size: 1.1em;
  font-weight: 600;
}
.blog-post p.exrg {
  width: 100%;
  /* background-color: pink; */
  font-family: "PalanquinDark", Serif;
  font-style: italic;
  color: #000;
  /* margin: auto; */
  margin-bottom: 1.1rem;
  margin-top: 1.1rem;
  max-width: 900px;
  text-align: center;
  font-size: 1.2em;
  line-height: 1.4em;
  position: relative;
  /* display: inline-block; */
}

.blog-post p.exrg::before {
  content: "-";
  background-color: lightseagreen;
  opacity: 0.3;
  display: block;
  color: lightseagreen;
  height: 18px;
  line-height: 0px;
  /* margin-bottom: -18px; */
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.blog-post .caption {
  font-family: "PalanquinDark", Sans-serif;
  color: #777;
  font-size: 0.95em;
  line-height: 1.3em;
  margin:-.3rem 0 0 0;
  padding:0;
}
.blog-post .top-img {
  width: 100%;
  margin-bottom: 2rem;
  max-width: 900px;
}
.blog-post .in-img {
  width: 100%;
  margin-top: 1.2rem;
  margin-bottom: 1rem;
  max-width: 900px;
}
.fa-quote-left {
  opacity: 0.4;
  padding-right: 6px;
}

.fa-quote-right {
  opacity: 0.4;
  padding-left: 6px;
}

.end {
  border-top: 1px solid #999;
  margin-top: 3em;
  /* margin: 0 .5em !important; */
}

@media only screen and (max-width: 768px) {
  .end {
    margin: 3em 0 0 0 !important;
  }
}

.end-left {
  padding: 0.5em 0 0 0;
}

.end-left .media {
  margin-top: -4px;
}

.end-left .media i {
  color: #999;
}

.end-right {
  text-align: right;
  padding: 0.1em 0 0 0;
  font-family: "PalanquinDark", Sans-serif;
  font-size: 1em;
  font-weight: 600;
  color: #999;
}

.end-right a {
  color: #666;
  cursor: pointer;
  text-decoration: underline;
}

.end-right a:hover {
  color: #333;
}

.mb {
  margin-bottom: 1em;
}

.linkz .txt-link,
.reg .txt-link,
.reg .plqnsb {
  font-family: "Palanquin", Sans-serif;
  font-size: 1.1em;
  font-weight: 500;
}

.linkz .txt-link a,
.reg .txt-link a {
  text-decoration: underline;
}

.linkz .txt-link a:hover {
  color: #2a5cae;
}

.reg .txt-link.black {
  font-family: "PalanquinDark", Sans-serif;
  font-weight: 600;
}

.reg .txt-link.black.blue {
  color: #3273dc;
}

.reg .txt-link.black.blue.bigger,
.reg .txt-link.black.bigger {
  font-size: 1.3em;
  line-height: 1.7em;
}

.linkz {
  font-family: "Palanquin", Sans-serif;
  font-size: 1.1em;
  font-weight: 500;
  margin-top: 1.5em;
  background: #eee;
  padding: 0.5em 1em;
  border: 1px solid #aaa;
}

.linkz .txt-link {
  font-size: 1em;
}

.enum-title {
  font-family: "PalanquinDark", Sans-serif;
  font-size: 1.1em;
  font-weight: 600;
  color: #777;
}

.enum-list {
  font-style: italic;
  font-size: 0.85rem;
}

.linkbox {
  margin: 0.8em 0 2em 0;
  background: #eee;
  padding: 0.7em;
  border: 1px solid #aaa;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.linkbox::-webkit-scrollbar {
  display: none;
}

.linkbox_item {
  width: 145px;
  display: inline-block;
  margin-right: 10px;
  vertical-align: top;
}

.linkbox_thumb {
  margin: 0;
  padding: 0;
  line-height: 0.7rem;
}

.linkbox_link {
  margin: 0;
  padding: 0;
  line-height: 1.2rem;
}

.linkbox_link a {
  font-family: "Palanquin", Sans-serif;
  font-weight: bold;
  text-decoration: underline;
}

p.regtitle,
div.regtitle {
  margin: auto;
  padding: 0;
  font-size: 1.2em;
  /* line-height: 1.65em; */
  margin-bottom: 0.3em;
  margin-top: 2em;
  /* border-bottom: 1px solid #ccc; */
  max-width: 700px;
}

.inv-title {
  color: white;
  background: #3273dc;
  padding: 0 0.7rem 0 0.7em;
  font-family: "PalanquinDark", Sans-serif;
  font-weight: 600;
  display: inline-block;
}

.big-shadowed {
  box-shadow: 5px 5px 20px #bbb;
}

.site-items {
  margin-top: 0.4em;
}
.site-scr-copy {
  height: 120px;
  border: 1px solid #ccc;
  margin-right: 5px;
}
.site-bench {
  height: 90px;
}
.site-tech-stack {
  margin: -0.2rem 0 0 0;
  padding: 0;
  line-height: 1.2rem;
}
div.reg.mb12 {
  margin-bottom: 1.2em;
}
.lh18 {
  line-height: 1.8rem;
}
.blog-post  .caption-top {
  margin: 0;
  margin-top:.5em;
  color: #555 !important;
}
.blog-post .in-img.narrow {
  max-width: 750px;
  margin: 1rem auto;
  margin-bottom: 1rem;
}
 .blog-post .in-img.narrow-vert {
  max-width: 450px;
  margin: 1rem auto;
  margin-bottom: 1rem;
}
</style>
