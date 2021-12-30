<template>
  <div :style="{ backgroundColor: colors.cinza }" class="ma-0 row1 row">
    <div
      v-for="item in $store.state.importedData.Plugins.projects"
      :key="item.index"
      class="cardsize ml-6 mt-6"
    >
      <v-card
        height="186"
        width="500"
        class="row"
        @click="open(item)"
        :color="item.color"
      >
        <!-- Modelo padrão com texto, chips e img -->
        <div v-if="item.type == 'normal'" class="row ma-0">
          <v-card height="186" width="310" elevation="0" :color="item.color">
            <v-card-title class="px-4" :style="{ color: colors.branco }">
              {{ item.title }}
            </v-card-title>
            <v-card-text :style="{ color: colors.branco }">
              {{ item.description }}
            </v-card-text>
            <v-btn
              small
              rounded
              outlined
              color="branco"
              v-for="tag in item.tags"
              :key="tag.index"
              class="capitalize ml-2 mb-2"
              @click="look(tag)"
            >
              {{ tag }}
            </v-btn>
          </v-card>
          <v-card
            height="170"
            width="170"
            color="branco"
            elevation="0"
            class="ma-2"
          >
            <v-img class="my-1" :src="item.img"> </v-img>
          </v-card>
        </div>

        <!-- Modelo padrão com texto, chips e img -->
        <div v-if="item.type == 'noImg'" class="row ma-0">
          <v-card height="186" width="500" elevation="0" :color="item.color">
            <v-card-title class="px-4" :style="{ color: colors.branco }">
              {{ item.title }}
            </v-card-title>
            <v-card-text :style="{ color: colors.branco }">
              {{ item.description }}
            </v-card-text>
            <v-btn
              small
              rounded
              outlined
              color="branco"
              v-for="tag in item.tags"
              :key="tag.index"
              class="capitalize ml-2 mb-2"
              @click="look(tag)"
            >
              {{ tag }}
            </v-btn>
          </v-card>
        </div>
      </v-card>
    </div>

    <v-dialog v-model="dialog" max-width="610px">
      <v-card>
        <v-card-title :style="{ color: openItem.color }">
          {{ openItem.title }}
        </v-card-title>
        <v-card-text>
          {{ openItem.details || openItem.description }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :color="openItem.color"
            outlined
            rounded
            class="capitalize"
            @click="close()"
            >Voltar</v-btn
          >
          <v-btn :color="openItem.color" rounded
            ><p :style="{ color: colors.branco }" class="my-auto capitalize">
              Abrir o Github do projeto
            </p>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import colorsImport from "../../../assets/colors";

export default {
  data: () => ({
    openItem: {},
    loading: true,
    dialog: false,
    colors: colorsImport,
  }),
  methods: {
    close() {
      this.dialog = false;
    },
    async look(item) {
      console.log(item);
      this.dialog = false;
    },
    async open(item) {
      this.openItem = item;
      this.dialog = true;
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.capitalize {
  text-transform: capitalize !important;
}
.cardsize {
  height: 186px;
  width: 500px;
}
.color2 {
  height: 620px;
}
.row1 {
  padding-left: calc((100vw - 1048px) / 2) !important;
  height: 201px !important;
}
</style>
