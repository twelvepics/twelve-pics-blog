<template>
  <div>
    <Navbar @open-subscribe-modal="openSubscribeModal" />
    <SubscribeModal
      v-if="subscribeModalActive"
      :isActive="subscribeModalActive"
      @subscribeModalClosed="closeSubscribeModal"
    ></SubscribeModal>
  </div>
</template>
<script>
import Navbar from "@/components/nav/Navbar";
import { lockBgScroll, unlockBgScroll } from "@/lib/utils";

export default {
  name: "BlogHeader",
  components: {
    Navbar,
  },
  data() {
    return {
      subscribeModalActive: false,
      showBurgerDropdown: false,
      // default to mobile? SSR initial has no idea about our window or reactivity
    };
  },
  methods: {
    openSubscribeModal() {
      console.log("openSubscribeModal called");
      // TODO
      lockBgScroll();
      this.subscribeModalActive = true;
    },
    closeSubscribeModal() {
      // TODO
      unlockBgScroll();
      this.subscribeModalActive = false;
    },
    printMe() {
      if (process.client) {
        console.log("PRINT ME");
        window.print();
      }
    },
  },
};
</script>
