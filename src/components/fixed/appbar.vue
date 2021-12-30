<template>
  <div>
    <v-card color="preto" dark class="Appbarcontainer" rounded="0">
      <v-row class="Appbar">
        <v-btn class="my-auto" text>
          <span :style="{ color: colors.branco }" class="color capitalize">
            {{ $store.state.importedData.name }}
          </span>
        </v-btn>

        <v-spacer />
        <v-tabs
          v-model="tab"
          class="tabs"
          background-color="preto"
          color="branco"
          @change="routing(tab)"
        >
          <v-tab
            v-for="item in this.$store.state.fixedData.LanguagesObjs[
              this.$store.state.language
            ].Tabs"
            :key="item"
            class="capitalize"
          >
            {{ item }}
          </v-tab>
        </v-tabs>
        <v-spacer />
        <v-btn
          outlined
          color="branco"
          @click="language()"
          class="my-auto mr-3 px-0"
        >
          <country-flag
            :country="$store.state.language"
            class="flag mt-2 ml-2"
          />
        </v-btn>
        <v-expand-transition>
          <div v-show="languageSelect" class="languageSelect">
            <v-card color="branco" rounded="0" class="pb-1">
              <v-card
                elevation="0"
                color="branco"
                v-for="item in availableLanguages"
                :key="item.idex"
                height="40"
                width="64"
                class="mt-1"
                @click="changeLanguage(item)"
              >
                <v-divider light />
                <country-flag :country="item" class="innerFlag" />
              </v-card>
            </v-card>
          </div>
        </v-expand-transition>
        <v-btn
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
          text
          class="my-auto mr-4"
        >
          <span :style="{ color: colors.branco }" class="capitalize">{{
            this.$store.state.fixedData.LanguagesObjs.Us.contact || "a"
          }}</span>
        </v-btn>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import router from "../../router";
import colorsImport from "../../assets/colors";
import CountryFlag from "vue-country-flag";

export default {
  components: {
    CountryFlag,
  },
  data: () => ({
    languageSelect: false,
    colors: colorsImport,
    tab: 0,
  }),
  watch: {
    async $route(to) {
      console.log(this.tab);
      let i = 0;
      await this.$store.state.fixedData.LanguagesObjs.Us.Tabs.forEach(
        (element) => {
          if (element === to.name) {
            if (this.tab !== i) {
              console.log("a");
              this.tab = i;
            }
          }
          i++;
          console.log(this.tab);
        }
      );
    },
  },
  computed: {
    availableLanguages() {
      const array = JSON.parse(
        JSON.stringify(Object.keys(this.$store.state.fixedData.LanguagesObjs))
      );
      const index = array.indexOf(this.$store.state.language);
      array.splice(index, 1);
      return array;
    },
  },
  methods: {
    language() {
      this.languageSelect = !this.languageSelect;
    },
    routing(item) {
      console.log(this.$store.state.fixedData.LanguagesObjs.Us.Tabs[item]);
      router.push(
        "/" + this.$store.state.fixedData.LanguagesObjs.Us.Tabs[item]
      );
    },
    changeLanguage(item) {
      this.$store.commit("changeLanguage", item);
      this.languageSelect = false;
    },
  },
};
</script>

<style scoped>
.languageSelect {
  position: absolute;
  top: 42px;
  right: 159px;
  z-index: 999;
}
.Appbar {
  height: 56px;
  padding: 0px;
  width: 100vw;
  margin: 0;
}
.AppbarContainer {
  position: relative;
}
.capitalize {
  text-transform: capitalize !important;
}
.tabs {
  height: 56px;
  position: relative;
  width: 230px;
}
.color {
  color: #faf8eb;
}
.select {
  position: relative;
  right: 16px;
}
.flag {
  position: relative;
  bottom: 4.5px;
  right: 5.5px;
}
.innerFlag {
  margin-top: 5px;
  margin-left: 10px;
}
.border {
  border-width: 100px;
  border-color: white;
}
</style>
