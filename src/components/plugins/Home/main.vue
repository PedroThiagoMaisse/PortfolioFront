<template>
  <div :style="{ backgroundColor: colors.cinza }">
    <div :style="{ color: colors.preto }" class="mx-16 pt-6">
      <v-card class="pa-1 rounded" color="branco">
        <v-carousel
          cycle
          class="rounded"
          hide-delimiter-background
          :show-arrows="false"
          delimiter-icon="mdi-checkbox-blank-circle-outline"
        >
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>
      </v-card>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum
      arcu lacus, eu porttitor ipsum elementum id. Etiam feugiat condimentum
      malesuada. Nam vitae pretium nulla, ut porttitor purus. Aenean eu orci non
      ligula interdum tincidunt et a risus. Nullam at elit ut tortor vestibulum
      blandit ac ut diam. Quisque nunc lectus, hendrerit lacinia dignissim sit
      amet, ullamcorper vel mi. Quisque mollis placerat mi, at vestibulum metus
      elementum in. Donec lacinia lacinia metus, et finibus urna ullamcorper id.
      Pellentesque a iaculis odio. Morbi id justo arcu. Nam ac lorem et lorem
      lacinia vestibulum. Integer facilisis pellentesque mauris, non sagittis
      justo laoreet et. Pellentesque lacinia nisl vitae varius facilisis.
      Quisque molestie quam in libero elementum, et tempor est consequat.
      Integer dapibus nisl dolor, ac tristique velit pellentesque in. Sed
      lobortis facilisis arcu quis rhoncus. Pellentesque in diam velit. Aliquam
      consequat nisl in blandit vulputate. Aliquam erat volutpat. Donec pharetra
      nulla sodales erat lacinia egestas. Aliquam pellentesque laoreet mauris,
      eget blandit nibh finibus eu. Praesent eget auctor neque, vel posuere
      nunc. Sed tincidunt vulputate neque ut porttitor. Curabitur eleifend
      luctus lectus, a porta nisi sollicitudin nec. Suspendisse mollis tellus
      vitae est tincidunt, vel eleifend felis ullamcorper.
    </div>
  </div>
</template>

<script>
import colorImport from "../../../assets/colors";

export default {
  data: () => ({
    colors: colorImport,
    items: [
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
      },
    ],
  }),
};
</script>

<style scoped></style>
