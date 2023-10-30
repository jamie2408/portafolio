<template>
  <v-navigation-drawer disable-resize-watcher v-model="sidebar" app>
    <v-list>
      <v-list-item
        ><v-img class="mx-auto" max-width="60" src="logo.png"></v-img
      ></v-list-item>
      <v-list-item
        ><v-btn
          block
          rounded="lg"
          class="px-16"
          color="indigo-darken-1"
          text
          @click="scroll('inicio')"
          >Inicio</v-btn
        ></v-list-item
      >
      <v-list-item
        ><v-btn
          block
          rounded="lg"
          class="px-16"
          color="indigo-darken-1"
          text
          @click="scroll('sobremi')"
          >Sobre mi</v-btn
        ></v-list-item
      >
      <v-list-item
        ><v-btn
          block
          rounded="lg"
          class="px-16"
          color="indigo-darken-1"
          text
          @click="scroll('exp')"
          >Experiencia y Estudios</v-btn
        ></v-list-item
      >
      <v-list-item
        ><v-btn
          block
          rounded="lg"
          class="px-16"
          color="indigo-darken-1"
          text
          @click="scroll('proyectos')"
        >
          Proyectos</v-btn
        ></v-list-item
      >
      <v-list-item
        ><v-btn
          block
          rounded="lg"
          class="px-16"
          color="indigo-darken-1"
          text
          @click="scroll('contacto')"
        >
          Contacto</v-btn
        ></v-list-item
      >
    </v-list>
  </v-navigation-drawer>

  <v-app-bar app color="black" dark flat class="px-4">
    <span class="d-flex d-sm-flex d-md-none">
      <v-app-bar-nav-icon @click="sidebar = !sidebar"> </v-app-bar-nav-icon>
    </span>
    <v-img max-width="40" class="foto" src="logo.png"></v-img>
    <v-spacer></v-spacer>
    <div class="d-none d-sm-none d-md-flex">
      <v-btn text @click="scroll('inicio')">Inicio</v-btn>
      <v-btn text @click="scroll('sobremi')">Sobre mi</v-btn>
      <v-btn text @click="scroll('exp')">Experiencia y Estudios</v-btn>
      <v-btn text @click="scroll('proyectos')"> Proyectos</v-btn>
      <v-btn text @click="scroll('contacto')"> Contacto</v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      sidebar: false,
    };
  },
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style></style>
