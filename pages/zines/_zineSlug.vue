<template>
  <div>
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ zine.title }}</p>
        <button class="delete" aria-label="close" @click="closeMe"></button>
      </header>
      <section class="modal-card-body">
        <ZinePages :zine="zine" />
      </section>
    </div>
  </div>
</template>

<script>
import { lockBgScroll, unlockBgScroll } from "@/lib/utils";
import ZinePages from "@/components/zine/ZinePages";

export default {
  components: { ZinePages },
  head() {
    return {
      title: `Blog.twelvepics.com - ${this.zine.title}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `Digital photo zine -  ${this.zine.title}`,
        },
      ],
    };
  },
  data() {
    return {
      project: "default",
    };
  },
  computed: {
    zine() {
      return this.$store.getters.zines.find((zine) => zine.slug === this.slug);
    },
    slug() {
      return this.$route.params.zineSlug;
    },
  },
  methods: {
    closeMe() {
      this.$router.push("/zines");
      // unlockBgScroll();
    },
  },
  async asyncData({ store, params }) {
    console.log("ASYNC DATA I WAS CALLED");
    // const slug = params.zineSlug;
    // const zine = store.getters.zines.find((zine) => zine.slug === slug);
    // console.log(slug);
    // console.log(zine);
    // console.log(params);
    // console.log(store.getters.zines);
    // console.log(app.context.store);
    // return { slug, zine };
    // return { slug };
  },
  created() {
    console.log("ZineSlug Created");
    // lockBgScroll();
  },
  destroyed() {
    console.log("ZineSlug Destroyed");
    // unlockBgScroll();
  },
  beforeDestroy() {
    console.log("ZineSlug Before Destroy");
    unlockBgScroll();
  },
};
</script>

<style scoped>
/*****************************************************
* modal
******************************************************/
.modal-card,
.modal-content {
  margin: 0 auto;
  max-height: calc(100vh - 40px);
  max-width: 1000px;
  width: 100%;
}
/****************************************************
* modal head
*****************************************************/
.modal-card-head {
  border-bottom: none;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background-color: #555;
  padding: 0.4em 1em;
}

.modal-card-title {
  font-family: "Palanquin", Serif;
  font-weight: 500;
  font-size: 1.1em;
  color: white;
}

/****************************************************
* modal body content layout
*****************************************************/
.modal-card-body {
  /* padding: .9em 0 .5em 0; */
  padding: 1em;
  overflow: hidden;
}
</style>