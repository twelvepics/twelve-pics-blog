<template>
  <nav
    class="navbar is-dark is-fixed-top box-shadow"
    role="navigation"
    aria-label="main navigation"
    v-click-outside="onClickOutside"
  >
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item">
        <img
          src="~assets/images/logo_v2.png"
          width="134"
          height="35"
          @click="hideDropdown"
        />
      </nuxt-link>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click="toggleDropdown"
        :class="{ 'is-active': showDropdown }"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': showDropdown }">
      <div class="navbar-end">
        <div class="navbar-item">
          <span class="navbar-icon">
            <a href="https://twitter.com/twelvepics/">
              <font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon>
            </a>
          </span>

          <span class="navbar-icon">
            <nuxt-link to="/contact" @click.native="hideDropdown">
              <font-awesome-icon
                :icon="['fas', 'envelope']"
              ></font-awesome-icon>
            </nuxt-link>
          </span>
        </div>

        <nuxt-link
          to="/"
          class="navbar-item blog-link"
          @click.native="hideDropdown"
          >Blog</nuxt-link
        >
        <nuxt-link to="/zines" class="navbar-item" @click.native="hideDropdown"
          >Digital zines</nuxt-link
        >

        <nuxt-link to="/about" class="navbar-item" @click.native="hideDropdown"
          >About</nuxt-link
        >

        <a class="navbar-item" @click.prevent="$emit('open-subscribe-modal')"
          >Subscribe</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: function () {
    return {
      showDropdown: false,
    };
  },
  methods: {
    onClickOutside() {
      this.hideDropdown();
    },
    // dropdown
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    hideDropdown() {
      if (this.showDropdown === true) {
        this.showDropdown = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
nav .navbar-end {
  font-family: "PalanquinDark", Sans-serif;
  font-size: 1.2em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding-right: 1em;
  margin-top: -0.2em;
}

// --------------------- from front navbar mobile -------------------------------

.box-shadow {
  box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.5);
  width: 100%;
}
.navbar-item img {
  max-height: 2.25rem;
}

.navbar-menu.is-active,
.navbar-menu,
.navbar-menu.is-active,
.navbar-menu {
  background-color: #363636;
}
.navbar-item,
.navbar-link {
  background-color: #363636;
  // color: #ddd;
}
.navbar-burger:hover {
  background-color: #363636;
}
.navbar-icon {
  font-size: 1.3em;
  padding-right: 0;
  padding-left: 1.3em;
}
.navbar.is-dark .navbar-brand > a.navbar-item:hover,
.navbar.is-dark .navbar-brand > a.navbar-item:focus,
.navbar.is-dark .navbar-end > a.navbar-item:hover {
  background-color: #363636;
}
.navbar.is-dark .navbar-end > a.navbar-item:hover,
// .navbar-icon:hover,
.navbar-icon a:hover,
nav a:link:hover {
  color: #fff;
}
.navbar.is-dark .navbar-end > .navbar-item,
// .navbar-icon,
.navbar-icon a,
nav a:link,
nav a:visited {
  color: #bbb;
}
nav a.nuxt-link-exact-active {
  // https://router.vuejs.org/api/#active-class
  color: yellow !important;
}

// -------------------- from front navbar full -------------------------------

@media only screen and (max-width: 800px) {
  .navbar.is-dark .navbar-end > .navbar-item {
    border-top: 1px solid #565656;
  }
  .navbar.is-dark .navbar-end > .navbar-item:last-child {
    border-bottom: 1px solid #565656;
  }
  .navbar-icon {
    padding-right: 0.8em;
    padding-left: 0;
  }
  .navbar.is-dark .navbar-end > a.navbar-item:hover {
    background-color: #464646 !important;
    color: #ddd;
  }
}
</style>
