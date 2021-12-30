<template>
  <v-card color="preto" dark class="Footercontainer" rounded="0">
    <v-row class="Footer">
      <v-col class="main">
        <div class="nodec">
          <a
            class="nodec"
            :style="{ color: colors.branco }"
            v-for="item in this.$store.state.fixedData.LanguagesObjs[
              this.$store.state.language
            ].Tabs"
            :key="item.text"
            @click="routing(item)"
          >
            {{ item }}
          </a>
        </div>

        <div class="nodec">
          <a
            class="nodec"
            :style="{ color: colors.branco }"
            v-for="item in $store.state.importedData.Footer.SecondLineLinks"
            :key="item.text"
            href:item.link
          >
            {{ item.text }}
          </a>
        </div>
      </v-col>

      <v-spacer></v-spacer>
      <v-col class="contact">
        <div
          class="contact"
          v-for="item in $store.state.importedData.Footer.contatcIcons"
          :key="item.icon"
        >
          <v-btn
            color="branco"
            fab
            width="44"
            height="44"
            class="ma-1 pa-0"
            :href="item.link"
          >
            <v-icon class="icon" color="preto"> {{ item.icon }} </v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <p :style="{ color: colors.primaria }" class="cr">
      {{
        this.$store.state.fixedData.LanguagesObjs[this.$store.state.language]
          .copyright[0]
      }}
      <a
        :style="{ color: colors.primaria }"
        class="cr ml-0"
        href="https://github.com/PedroThiagoCL"
      >
        {{
          this.$store.state.fixedData.LanguagesObjs[this.$store.state.language]
            .copyright[1]
        }}
      </a>
    </p>
  </v-card>
</template>

<script>
import router from "../../router";
import colorImport from "../../assets/colors";

export default {
  methods: {
    routing(item) {
      const index =
        this.$store.state.fixedData.LanguagesObjs[
          this.$store.state.language
        ].Tabs.indexOf(item);
      router.push(
        "/" + this.$store.state.fixedData.LanguagesObjs.Us.Tabs[index]
      );
    },
  },
  data: () => ({
    colors: colorImport,
  }),
};
</script>

<style scoped>
.main {
  min-width: 480px !important;
}
.icon {
  font-size: 26;
}
.Footer {
  height: 130px;
  padding-top: 32px;
  padding-left: 32px;
  width: 100vw;
  padding-bottom: 0;
  margin: 0;
}
.FooterContainer {
  height: 160px;
  width: 100vw !important;
  position: relative;
  padding-left: 32px;
  padding-bottom: 0;
}
.capitalize {
  text-transform: capitalize !important;
}
.nodec {
  text-decoration: none;
  margin-right: 24px;
  margin-bottom: 12px;
}
.cr {
  font-size: 12px;
  margin-left: 42px;
  margin-bottom: 0;
  padding-bottom: 12px;
}
.contact {
  max-width: 44px !important;
  padding: 0px;
  margin-right: calc(32px + 12px);
}
</style>
