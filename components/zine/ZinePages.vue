
<template>
  <div>
    <!--- COVER --->
    <div
      class="image is-3by2 zine-cover-div"
      :style="{ backgroundImage: `url(${parsed[current_page].pics.image})` }"
      id="cover"
      ref="cover_ref"
    >
      <div
        class="cover-title"
        :style="{
          backgroundImage: `url(${parsed[current_page].pics.text_image})`,
        }"
      ></div>
    </div>
    <!-- LAST -->
    <div
      class="image is-3by2 zine-last-div"
      :style="{ backgroundImage: `url(${parsed[current_page].pics.image})` }"
      id="backpage"
      ref="backpage_ref"
      style="display: none"
    >
      <div class="cover-last">
        {{ zine.backpage_text }}
      </div>
    </div>
    <!-- INSIDE DOUBLE PAGE -->
    <div
      class="image is-3by2 zine-page-div"
      id="viewer"
      style="display: none"
      ref="inside_ref"
    >
      <div
        class="transparent"
        v-for="(item, index) in parsed"
        :key="index"
        :id="`page_${index}`"
        ref="inside_page_ref"
      >
        <img
          v-for="pic in item.pics"
          :key="pic.image"
          :src="pic.image"
          :class="pic.class"
          alt=""
        />
      </div>
    </div>
    <!-- CONTROLS -->
    <div style="position: relative">
      <div class="zine-controls">
        <span
          class="zine-control-icon"
          v-show="is_paused"
          @click="play"
          :class="{ disabled: playDisabled }"
        >
          <font-awesome-icon :icon="['fas', 'play']"></font-awesome-icon>
        </span>
        <span class="zine-control-icon" v-show="is_playing" @click="stopPlay">
          <font-awesome-icon :icon="['fas', 'pause']"></font-awesome-icon>
        </span>
        <span
          class="zine-control-icon"
          @click="forward"
          :class="{
            disabled: forwardDisabled,
          }"
        >
          <font-awesome-icon
            :icon="['fas', 'step-forward']"
          ></font-awesome-icon>
        </span>
        <span
          class="zine-control-icon"
          :class="{ disabled: backwardDisabled }"
          @click="backward"
        >
          <font-awesome-icon
            :icon="['fas', 'step-backward']"
          ></font-awesome-icon>
        </span>
        <span
          class="zine-control-icon"
          :class="{ disabled: backwardDisabled }"
          @click="fastBackward"
        >
          <font-awesome-icon
            :icon="['fas', 'fast-backward']"
          ></font-awesome-icon>
        </span>
      </div>
      <div class="zine-dots">
        <span
          v-for="(item, index) in parsed"
          :key="index"
          class="dot"
          :class="{ selected: index === current_page }"
        ></span>
      </div>
      <!-- <div class="pages-progress-top disabled"></div> -->
      <div class="pages-progress-btm" ref="progress_bar_container">
        <div class="pages-progress-top" ref="progress_bar"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["zine"],
  data() {
    return {
      current_page: 0,
      intervalId: "",
      is_playing: true,
      is_paused: false,
      pb_timer_id: null,
    };
  },

  methods: {
    preload_images() {
      console.log("-----");
      console.log(this.parsed);
      console.log("-----");

      const images = [];
      for (const z of this.parsed) {
        console.log("---");
        if (Array.isArray(z.pics)) {
          for (const item of z.pics) {
            images.push(item.image);
          }
        } else {
          images.push(z.pics.image);
        }
      }
      for (const image of images) {
        const preloader = new Image();
        preloader.src = image;
      }
      return images;
    },
    play() {
      setTimeout(() => {
        this.pb_move();
      }, 250);
      console.log("play clicked");
      if (this.intervalId === "" && process.browser) {
        this.intervalId = setInterval(() => {
          this.current_page += 1;
          if (this.current_page >= this.parsed.length) {
            this.current_page = 0;
          }
          console.log(this.current_page);
          if (
            // inside
            this.current_page > 0 &&
            this.current_page < this.parsed.length - 1
          ) {
            this.$refs.cover_ref.style.display = "none";
            this.$refs.inside_ref.style.display = "block";
            this.$refs.backpage_ref.style.display = "none";
            setTimeout(() => {
              this.pb_move();
              this.$refs.inside_page_ref[this.current_page].classList.toggle(
                "transparent"
              );
              if (this.$refs.inside_page_ref[this.current_page - 1]) {
                this.$refs.inside_page_ref[
                  this.current_page - 1
                ].classList.toggle("transparent");
              }
            }, 300);
          } else if (this.current_page === 0) {
            // cover
            this.pb_move();
            this.$refs.cover_ref.style.display = "block";
            this.$refs.inside_ref.style.display = "none";
            this.$refs.backpage_ref.style.display = "none";
          } else {
            // last
            this.pb_reset();
            this.$refs.cover_ref.style.display = "none";
            setTimeout(() => {
              this.$refs.inside_ref.style.display = "none";
              this.$refs.backpage_ref.style.display = "block";
            }, 500);

            this.$refs.inside_page_ref[this.current_page - 1].classList.toggle(
              "transparent"
            );
            this.stopPlay();
          }
        }, 4000);
      }
      this.is_playing = true;
      this.is_paused = false;
    },
    stopPlay() {
      console.log("stop play clicked");
      console.log(this._uid);
      clearInterval(this.intervalId);
      this.intervalId = "";
      this.is_playing = false;
      this.is_paused = true;
      this.pb_stop();
    },
    forward() {
      console.log("forward");
      if (this.forwardDisabled) {
        return;
      }
      const prev_page = this.current_page;
      this.current_page += 1;
      this.refresh(prev_page);
    },
    backward() {
      console.log("backward");
      if (this.backwardDisabled) {
        return;
      }
      const prev_page = this.current_page;
      this.current_page -= 1;
      this.refresh(prev_page);
    },
    fastBackward() {
      console.log("fast forward");
      if (this.backwardDisabled) {
        return;
      }
      const prev_page = this.current_page;
      this.current_page = 0;
      this.refresh(prev_page);
    },
    refresh(prev_page) {
      console.log("refresh");
      console.log(this.current_page);
      if (
        // inside
        this.current_page > 0 &&
        this.current_page < this.parsed.length - 1
      ) {
        // YOLO
        this.$refs.cover_ref.style.display = "none";
        this.$refs.inside_ref.style.display = "block";
        this.$refs.backpage_ref.style.display = "none";
        setTimeout(() => {
          this.$refs.inside_page_ref[this.current_page].classList.toggle(
            "transparent"
          );
          if (
            // inside
            prev_page > 0 &&
            prev_page < this.parsed.length - 1
          ) {
            this.$refs.inside_page_ref[prev_page].classList.toggle(
              "transparent"
            );
          }
        }, 100);
      } else if (this.current_page === 0) {
        // YOLOLO
        this.$refs.cover_ref.style.display = "block";
        this.$refs.inside_ref.style.display = "none";
        this.$refs.backpage_ref.style.display = "none";
        if (
          // inside
          prev_page > 0 &&
          prev_page < this.parsed.length - 1
        ) {
          this.$refs.inside_page_ref[prev_page].classList.toggle("transparent");
        }
      } else {
        // BOOMIKAKO
        this.$refs.cover_ref.style.display = "none";
        this.$refs.inside_ref.style.display = "none";
        this.$refs.backpage_ref.style.display = "block";
        if (
          // inside
          prev_page > 0 &&
          prev_page < this.parsed.length - 1
        ) {
          this.$refs.inside_page_ref[prev_page].classList.toggle("transparent");
        }
      }
    },
    /* progress bar */
    pb_move() {
      const pb = this.$refs.progress_bar;
      console.log(pb);
      if (this.pb_timer_id) {
        clearInterval(this.pb_timer_id);
        this.pb_timer_id = null;
      }
      let width = 1;
      this.pb_timer_id = setInterval(() => {
        try {
          if (width >= 100) {
            clearInterval(this.pb_timer_id);
          } else {
            width++;
            pb.style.width = width + "%"; // may not be defined yet
          }
        } catch (e) {
          // do nothing
        }
      }, 30);
    },
    pb_reset() {
      const pb = this.$refs.progress_bar;
      pb.style.width = "0%";
    },
    pb_stop() {
      clearInterval(this.pb_timer_id);
      this.pb_timer_id = null;
      this.pb_reset();
    },
    pb_hide() {
      const container = this.$refs.progress_bar_container;
      if (!container.classList.contains("hidden")) {
        container.classList.add("hidden");
      }
    },
    pb_show() {
      const container = this.$refs.progress_bar_container;
      if (!container.classList.contains("hidden")) {
        container.classList.remove("hidden");
      }
    },
  },
  computed: {
    parsed() {
      return JSON.parse(this.zine.pages_json);
    },
    backwardDisabled() {
      if (this.is_playing || this.current_page == 0) {
        return true;
      }
      return false;
    },
    forwardDisabled() {
      if (this.is_playing || this.current_page == this.parsed.length - 1) {
        return true;
      }
      return false;
    },
    playDisabled() {
      if (this.is_paused && this.current_page == this.parsed.length - 1) {
        return true;
      }
      return false;
    },
    // fastBackWardEnabled() {
    //   if (this.is_playing || this.current_page == 0) {
    //     return false;
    //   }
    //   return true;
    // },
  },
  created() {
    console.log("ZINE_PAGE CREATED");
    this.play();
  },
  destroyed() {
    clearInterval(this.intervalId);
  },
  mounted() {
    // this.pb_move();
    console.log("ZINE_PAGE MOUNTED");
    console.log(this.preload_images());
  },
  beforeMounted() {
    console.log("ZINE_PAGE BEFORE MOUNTED");
  },
};
</script>

<style scoped>
.zine-page-div {
  border: 1px solid #bbb;
  background-image: url("~assets/images/zine-page-middle.jpg");
  background-position: center;
  background-repeat: repeat-y;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.15);
}
.zine-cover-div {
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.15);
  margin: 0.25% 24% 0 24%;
  background-color: black;
  background-repeat: no-repeat;
  background-size: 92%;
  background-position: 50% 35%;
}
.cover-title {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 92%;
  background-position: 50% 95%;
}
.zine-last-div {
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.15);
  margin: 0.25% 24% 0 24%;
  background-color: black;
  background-repeat: no-repeat;
  background-size: 27%;
  background-position: 50% 10%;
}

.cover-last {
  color: white;
  font-family: "Palanquin", Sans-serif;
  position: absolute;
  bottom: 5%;
  padding: 0.7rem 2rem;
  border-top: 1px solid white;
  font-size: 0.9em;
}

/****************************************************
* modal images
*****************************************************/
.image.is-3by2 {
  padding-top: 65.1%;
}
.image.is-3by2 img {
  width: auto;
  bottom: 0;
  position: absolute;
  top: 0;
}
.image.is-3by2 img.cover {
  /* left:27.5%;
  padding: 12% 0 23% 0; */
  /* padding:0; */
}
.image.is-3by2 img.v-right-o {
  left: 57%;
  padding: 2% 0 2% 0;
}
.image.is-3by2 img.v-left-o {
  left: 2.53%;
  padding: 2% 0 2% 0;
}
.image.is-3by2 img.v-right-i {
  left: 53.25%;
  padding: 2% 0 2% 0;
}
.image.is-3by2 img.v-left-i {
  left: 6.4%;
  padding: 2% 0 2% 0;
}
.image.is-3by2 img.h-left-top {
  left: 2.75%;
  /* width:50%; */
  padding: 2% 0 33.5% 0;
}
.image.is-3by2 img.h-left-bottom {
  left: 2.75%;
  /* width:50%; */
  padding: 33.5% 0 2% 0;
}
.image.is-3by2 img.h-right-top {
  left: 52.75%;
  /* width:50%; */
  padding: 2% 0 33.5% 0;
}
.image.is-3by2 img.h-right-bottom {
  left: 52.75%;
  /* width:50%; */
  padding: 33.5% 0 2% 0;
}
.image.is-3by2 img.v-full-left {
  left: 0;
  padding: 0;
}
.image.is-3by2 img.v-full-right {
  left: 50%;
  padding: 0;
}
.image.is-3by2 img.h-big-left {
  padding: 3% 0 3% 0;
}
.image.is-3by2 img.h-big-right {
  padding: 3% 0 3% 11.2%;
}
.image.is-3by2 img.h-big-centered {
  padding: 3% 0 3% 5.5%;
}
.image.is-3by2 img.double {
}

.image img {
  display: inline;
}
/* transitions */
#viewer div {
  transition: opacity 0.7s ease-in-out;
  opacity: 1;
}
#viewer div.transparent {
  opacity: 0;
}

/******************************************************
* controls
*******************************************************/

.zine-controls {
  font-size: 1.2em;
  margin: 0.5rem 0 0 0rem;
  position: absolute;
}
.zine-control-icon {
  margin-right: 8px;
  cursor: pointer;
}
.zine-control-icon.disabled {
  cursor: default;
  color: #ccc;
}
.zine-dots {
  font-size: 1.2em;
  margin: 0;
  text-align: center;
  padding-top: 0.3em;
}
.dot {
  height: 8px;
  width: 8px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  margin-right: 10px;
}
.dot.selected {
  background-color: #599efb;
}
.pages-progress-btm {
  position: absolute;
  background-color: #bbb;
  right: 0;
  top: 15px;
  width: 120px;
  height: 10px;
}
.pages-progress-top {
  background-color: #599efb;
  width: 0%;
  height: 100%;
}
.pages-progress-btm.hidden {
  visibility: hidden;
}
</style>