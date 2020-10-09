<template>
  <main>
    <section>
      <div>
        <p class="contact-txt">
          Any question, feedback, bug, ugly typo? Do not hesitate to contact me.
        </p>
        <p class="contact-email">
          <a href="mailto:alain@twelvepics.com">alain@twelvepics.com</a>
        </p>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  layout: "bottom-sticky-footer",
  head() {
    return {
      title: "Blog.twelvepics.com - Contact",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Contact page",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  align-self: center;
  padding: 4rem 0 6rem 0;
  /* padding-bottom: 20%; */
}
main section {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto !important;
}
.contact-txt {
  color: #565656;
  font-family: "Palanquin", Serif;
  text-align: center;
  font-weight: 400;
  font-size: 1.15rem;
  margin: 0;
  padding: 0;
}
.contact-email {
  text-align: center;
  margin-top: 1rem;
}
.contact-email a {
  font-family: "Palanquin", Serif;
  font-weight: 400;
  font-size: 1.2rem;
  color: #216db3;
}

footer {
  margin-top: auto;
}

@media only screen and (max-width: 768px) {
  .contact-txt {
    font-size: 1.1rem;
    padding: 0 0.5rem;
  }
  .contact-email {
    margin-top: 0.7rem;
  }
}
</style>
