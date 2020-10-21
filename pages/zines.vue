
<template>
  <section>
    <div class="zines">
      <!-- <div class="zines" @click.prevent.stop> -->
      <div class="rubric-wrapper">
        <h2 class="rubric"><span>Digital zines</span></h2>
      </div>
      <h1 class="title">What... digital photo zine? Is that even a thing?</h1>
      <div class="zines_body">
        <p class="intro-border-btm">
          <span class="txt-exerg">I love photo zines,</span> who doesn't! 
          They tell a story, they are unique and precious objects. 
          But we are at the digital age they are commonly low runs, have a limited reach, and a cost. 
          So I am curious to experiment with what could be a digital photo zine too.
          <span class="txt-exerg">You can download these zines as pdf too.</span> <br />
          As a photographer, I like to tell stories, and share my work, these
          mini digital books seems to be a nice way to do so, keeping the DIY
          ethic which is a crucial part of zine making.<br />
        </p>
      </div>
    </div>
    <!-- -->
    <div class="cover-container" v-for="zine in loadedZines" :key="zine._key">
      <!-- <div @click="clicked(zine._key, zine.slug)">---</div> -->
      <figure
        class="image is-4by5 zineLnk"
        @click="clicked(zine._key, zine.slug)"
      >
        <img :src="zine.thumbnail" />
      </figure>
      <div class="zine-info columns is-mobile">
        <div class="zine-info-text column">
          {{ zine.num_photos }} photos - {{ zine.createdDate | date }}
        </div>
        <div
          class="zine-info-icons column is-narrow"
          style="line-height: 1.3em"
        >
          <a :href="zine.zip_filename" class="download-file">
            <font-awesome-icon
              :icon="['fas', 'file-download']"
            ></font-awesome-icon>
          </a>
          <a :href="zine.pdf_filename" target="_blank" class="download-pdf">
            <font-awesome-icon :icon="['fas', 'file-pdf']"></font-awesome-icon>
          </a>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="modal is-active">
      <NuxtChild :key="$route.params.zineSlug" />
    </div>
  </section>
</template>

<script>
import { lockBgScroll, unlockBgScroll } from "@/lib/utils";

export default {
  scrollToTop: false,
  head() {
    return {
      title: `Blog.twelvepics.com - Digital zines`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "What, digital photo zine? Is that even a thing?",
        },
      ],
    };
  },
  data() {
    return {
      // isActive: false,
    };
  },
  computed: {
    loadedZines() {
      return this.$store.getters.zines;
    },
    showModal() {
      return this.$route.params.zineSlug !== undefined;
    },
  },
  methods: {
    clicked(id, slug) {
      // console.log("XOXO", this.$route);
      console.log(`clicked ${id}/${slug}`);
      /////////////////////////////////////
      lockBgScroll();
      /////////////////////////////////////
      // console.log("XOXO", this.$route.matched.length);
      console.log(`slug => ${slug}`);
      this.$router.push(`/zines/${slug}`);
      // console.log("XIXI", this.$route);
      // this.isActive = true;
      // console.log("XOXO", this.$route.matched.length);
    },
  },
  created() {
    console.log("zines created");
    // unlockBgScroll();
    // console.log("XOXO", this.$route.path);
    // console.log(this.$store.state.posts);
    // console.log(this.loadedPosts);
  },
};
</script>

<style scoped>
.modal {
  align-items: unset;
}
/********************************************/

h1.title {
    font-size:2em;
  }
h2.rubric {
  color: white !important;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.8rem;
  margin-bottom: 1rem;
}
h2.rubric span {
  background-color: black;
  padding: 0.2rem 0.5rem;
}
.rubric-wrapper {
  /* border-bottom: 1px solid #666; */
  margin-bottom: 1.5rem;
}
.top-img {
  margin-top: 2.5rem;
}
.zines {
  padding: 4em .75em 0 .75em;
  margin: 2em auto 0 auto;
  max-width: 700px;
  padding-top: 4em;
}
div.zines_body {
  margin-top: 1.2em;
}

.big-shadowed {
  box-shadow: 3px 3px 10px #999;
}

.cover-container {
  max-width: 320px;
  margin: 2.3rem auto;
}
.zine-info {
  /* margin-top: 0.5em; */
  border-top: 1px solid #aaa;
}
.zine-info.columns {
  margin: .5em -.5em 0 -.5em;
}
.zine-info .column {
  padding: 0 .5em;
}
.zine-info-text {
  font-family: "PalanquinDark", Serif;
  color: #999;
}
.zine-info-icons {
  font-size: 1.6em;
}
.zineLnk {
  cursor: pointer;
}
a:link {
  font-family: "PalanquinDark", Sans-serif;
  font-size: 1.1em;
  /* color: #777; */
}
.intro-border-btm {
  border-bottom: 1px solid #9989;
  padding-bottom: 0.75rem;
}
.this-work {
  font-style: italic;
  color: #777;
}
.cc4 {
  height: 22px !important;
  margin-left: 3px;
  vertical-align: text-bottom;
}
a.download-file:link {
  color: #999;
}
a.download-file:hover {
  color: #777;
}
a.download-pdf {
  color: red;
}
a.download-pdf:hover {
  color: rgb(189, 9, 9);
}
.zines .txt-exerg {
  font-family: "PalanquinDark", Serif;
  font-size: 1.1em;
  font-weight: 600;
}

@media only screen and (max-width: 768px) {
  main {
    width: auto;
    margin: 0 0.5em 3em 0.5em;
    padding-top: 2em;
    margin-top: 2.5em;
  }
  h1.title {
    font-size:1.8em;
  }
  .intro-border-btm {
    border-bottom: 1px solid #9989;
    padding-bottom: 0.75rem;
  }
  .license-text.brdr {
  }
  .zine-info.columns {
    margin: .5em -.5em 0 -.5em;
  }
  .zine-info .column {
    padding: 0 .5em;
  }
}
</style>