<template>
  <v-app>
    <Appbar />
    <vue-custom-scrollbar
      id="scrollbar"
      class="scroll-area"
      :settings="settings"
    >
      <div class="content">
        <transition name="slide-fade" mode="out-in">
          <router-view class="content" />
        </transition>
      </div>
      <Footer class="footer" />
    </vue-custom-scrollbar>
  </v-app>
</template>

<script>
import Appbar from "./components/fixed/appbar.vue";
import Footer from "./components/fixed/footer.vue";
import vueCustomScrollbar from "vue-custom-scrollbar";
import "vue-custom-scrollbar/dist/vueScrollbar.css";

export default {
  watch: {
    $route() {
      this.updated();
    },
  },
  name: "App",
  components: {
    vueCustomScrollbar,
    Appbar,
    Footer,
  },
  data: () => ({
    settings: {
      suppressScrollY: false,
      suppressScrollX: true,
      wheelPropagation: true,
    },
  }),
  methods: {
    updated: function () {
      setTimeout(() => {
        var elementScroll = document.getElementById("scrollbar");
        elementScroll.scrollTop = 0;
      }, 0);
    },
  },
  created() {},
};
</script>

<style>
.content {
  min-height: calc(100vh - 56px - 160px) !important;
}
.scroll-area {
  position: relative;
  margin: auto;
  width: 100vw;
  height: calc(100vh - 56px);
}
.footer {
  bottom: 0px;
}
</style>
