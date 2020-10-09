<template>
  <main>
    <section>
      <div class="confirmed_title">
        <p v-if="$fetchState.pending" class="pending">Checking...</p>
        <p v-else-if="$fetchState.error" class="error">Error while checking</p>
        <p v-else>Your email is now verified. Thank you!</p>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  layout: "bottom-sticky-footer",
  head() {
    return {
      title: "Blog.twelvepics.com - Email confirmation",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Email confirmation page",
        },
      ],
    };
  },
  data() {
    return {
      confirmId: this.$route.params.confirmId,
      apiUrl: this.$config.apiBaseURL,
    };
  },

  async fetch() {
    // Called also on query changes
    console.log("fetching");
    console.log(`Base url => ${this.apiUrl}`);
    console.log(this.$route.params.confirmId);
    const res = await this.$http.$post(
      `${this.apiUrl}/subscribers/validate-email/${this.confirmId}`,
      {}
    );
  },
  fetchOnServer: false,
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
.confirmed_title {
  color: #565656;
  font-family: "Palanquin", Sans-serif;
  font-weight: 600;
  text-align: center;
  color: #216db3;
  font-size: 1.6rem;
  margin: 0;
  padding: 0;
}

footer {
  margin-top: auto;
}
.error {
  // color: $error-color;
  color: red;
}
.pending {
  // color: $pending-color;
  color: orange;
}

@media only screen and (max-width: 768px) {
  .confirmed_title {
    font-size: 1.4rem;
  }
}
</style>
