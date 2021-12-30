<template>
  <v-row :style="{ backgroundColor: colors.cinza }">
    <v-col :style="{ color: colors.preto }" class="ml-8 mt-6">
      <div
        :style="{ color: colors.preto, backgroundColor: colors.branco }"
        class="title"
      >
        <p class="p1">{{ this.$store.state.importedData.name }}</p>
        <div :style="{ backgroundColor: colors.preto }" class="divider" />
        <p class="p2">
          {{ this.$store.state.importedData.Title[this.$store.state.language] }}
        </p>
      </div>
      <div
        :style="{ color: colors.preto, backgroundColor: colors.branco }"
        class="exp"
      >
        <p class="my-1 p2">
          {{
            this.$store.state.fixedData.LanguagesObjs[
              this.$store.state.language
            ].Curriculum.experience
          }}
        </p>
      </div>

      <div
        v-for="item in $store.state.importedData.Plugins.Curriculum.jobs"
        :key="item.index"
        class="diva"
      >
        <v-row>
          <p class="company">{{ item.name }}</p>
          <v-spacer />
          <p class="date">{{ item.date }}</p>
        </v-row>
        <p class="function mb-1">{{ item.function }}</p>
        <li v-for="i in item.details" :key="i" class="list">{{ i }}</li>
      </div>
    </v-col>
    <v-col class="mr-8 mt-9 col2" :style="{ backgroundColor: colors.primaria }">
      <v-avatar size="200" class="mx-10 mt-8">
        <v-img src="./assets/avatar.jpg"> </v-img>
      </v-avatar>

      <div :style="{ backgroundColor: colors.cinza }" class="sep">
        <p class="my-1">
          {{
            this.$store.state.fixedData.LanguagesObjs[
              this.$store.state.language
            ].Curriculum.contact
          }}
        </p>
      </div>
      <p class="infon mt-8">
        <v-row
          class="mx-1 mb-2"
          v-for="i in $store.state.importedData.Plugins.Curriculum.details
            .contact"
          :key="i.icon"
        >
          <v-icon color="branco" class="mr-2 mb-2"> {{ i.icon }} </v-icon>
          <a :href="i.link" class="nodec"> {{ i.text }} </a><br />
        </v-row>

        <v-row class="mx-1 mb-2"> </v-row>
      </p>
      <div :style="{ backgroundColor: colors.cinza }" class="sep">
        <p class="my-1">
          {{
            this.$store.state.fixedData.LanguagesObjs[
              this.$store.state.language
            ].Curriculum.education
          }}
        </p>
      </div>
      <p class="infon mt-8">
        2019 - 2023 <br />
        UTFPR - Curitiba <br />
        Engenharia Mecânica
      </p>

      <p></p>
      <div :style="{ backgroundColor: colors.cinza }" class="sep mb-6">
        <p class="my-1">
          {{
            this.$store.state.fixedData.LanguagesObjs[
              this.$store.state.language
            ].Curriculum.skillset
          }}
        </p>
      </div>
      <li
        v-for="i in $store.state.importedData.Plugins.Curriculum.details
          .skillset"
        :key="i"
        class="infon"
      >
        {{ i }}
      </li>
    </v-col>
  </v-row>
</template>

<script>
import colorsImport from "../../../assets/colors";

export default {
  data: () => ({
    colors: colorsImport,
  }),
};
</script>

<style scoped>
.infon {
  color: #f2e9e4;
  margin-left: 32px;
  margin-right: 32px;
}
.diva {
  margin-left: 12px;
  margin-right: 12px;
  margin-top: 48px;
  margin-bottom: 16px;
}
.p1 {
  font-size: 42px;
  margin-bottom: 32px;
  font-weight: 300;
}
.p2 {
  font-size: 16px;
  letter-spacing: 3px;
  font-weight: 400;
}
.divider {
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 8px;
  width: 90%;
  min-height: 5px;
}
.title {
  padding-top: 68px;
  text-align: center;
  height: 250px;
  width: 100%;
  background-color: #f2e9e4;
}
.exp {
  margin-top: 16px;
  padding-top: 16px;
  text-align: center;
  height: 64px;
  width: 100%;
}
.col2 {
  padding: 0;
  max-width: 280px !important;
  margin-bottom: 32px;
}
.company {
  font-size: 18px;
  font-weight: 500;
}
.date {
  font-size: 18px;
  font-weight: 300;
}
.function {
  font-size: 16px;
  font-weight: 300;
  margin-left: -10px;
}
.list {
  width: 80%;
  font-size: 18px;
  font-weight: 400;
}
.sep {
  margin-left: 32px;
  margin-right: 32px;
  margin-top: 33px;
  padding-top: 16px;
  width: calc(100% - 64px);
  height: 64px;
  text-align: center;
  font-weight: 300;
  letter-spacing: 4px;
}
.nodec {
  color: #f2e9e4 !important;
}
</style>
