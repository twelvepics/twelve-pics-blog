<template>
  <main>
    <section>
      <div>
        <img src="/images/about/band.jpg" class="top-img big-shadowed" />
      </div>
      <div class="about">
        <div class="about_title">
          A blog, a portfolio? I go free style, talking about photography, web
          programming, whatever. Just for the fun, it's not serious.
        </div>
        <div class="about_body">
          <p>
          My name is Alain Masiero. I was born in France and have been a photographer since the ‘90s. 
          After working as a photojournalist with photo agencies in Paris, I took a break from photography in 2006. 
          Since 2016 I have lived in the Philippines. This country made me want to take photographs again —&nbsp;but
          with a different approach. Now I’m more interested in long-term projects, with a focus on social and environmental issues. 
          Working as a freelance programmer and photographer, I love traveling, meeting new people, and discovering new places. 
          I am inspired by the photographic work of Shomei Tomatsu and Daido Moriyama, as well as 
          the paintings of Edgar Degas and Pierre Bonnard.
          </p>
          <p>
          Covid times, what could a photographer who doesn't want to bring home
          the ugly virus do?<br />
          A website, sharing photos and random thoughts. Opinionated, maybe,
          dogmatic or pontificating I hope never. I am mainly interested in
          documentary photography, but not only, and finding cool ways to show
          photos. So much has been done about this, hard to innovate, just
          willing to make it a nice experience for the viewer. I am not native
          English speaker, so please be indulgent if sometimes my grammar hurts
          your eyes. Do not hesitate to contact me:
          <a href="mailto:alain@twelvepics.com">alain@twelvepics.com</a>. I'll
          do my best to respond in a timely manner. I hope you will enjoy the
          site, your feedback is welcome.
          </p>
        </div>
      </div>
      <!-- -->
    </section>
  </main>
</template>
<script>
export default {
  layout: "bottom-sticky-footer",
  head() {
    return {
      title: "Blog.twelvepics.com - About",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "About page",
        },
      ],
    };
  },
  data: function () {
    return {
      // picsBaseUrl: this.$config.picsBaseURL,
    };
  },
};
</script>
<style lang="scss" scoped>
/*************************************************
 * REPLACE ALL
 *************************************************/
.wrapper {
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 100%;
}
main {
  width: 100%;
}
main section {
  width: 100%;
  max-width: 900px !important;
  /* background-color: palegoldenrod; */
  margin: 0 auto !important;
  padding-top: 4rem;
}
.top-img {
  margin-top: 2.5rem;
}
.about {
  padding: 0;
  margin: 2em auto 0 auto;
  max-width: 700px;
}
div.about_title {
  font-size: 1.6rem;
  margin: 1.5em 0 0.3em 0;
  font-family: "PalanquinDark", Serif;
  font-weight: 500;
  text-align: left;
  color: #333;
  line-height: 1.4em;
}
div.about_body {
  margin-top: 1.2em;
}

.about_body p {
  margin-bottom:1em;
}
footer {
  margin-top: auto;
}
.big-shadowed {
  box-shadow: 3px 3px 10px #999;
}
a:link {
  font-family: "PalanquinDark", Sans-serif;
  font-size: 1.1em;
  color: #777;
}
a:hover {
  color: #444;
}
@media only screen and (max-width: 768px) {
  main {
    width: auto;
    margin: 0 0.5em 3em 0.5em;
  }
  .about {
    margin-top: 0;
  }
  div.about_title {
    font-size: 1.4rem;
    line-height: 1.4rem;
    margin: 0.3em 0 0.3em 0;
    font-family: "PalanquinDark", Serif;
    font-weight: 500;
    text-align: left;
    color: #333;
    line-height: 1.4em;
  }
  main section {
    padding-top: 3.3em;;
  }
}
</style>
