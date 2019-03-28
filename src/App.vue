<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title
        class="headline"
        @click="$router.push('/')"
      >
        <span>megos</span>
        <span class="font-weight-light title">portfolio</span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        flat
        @click="$router.push('Skills')"
      >
        <span class="mr-2">Skills</span>
      </v-btn>
      <v-btn
        flat
        disabled
      >
        <span class="mr-2">Works</span>
      </v-btn>
      <v-btn
        flat
        disabled
      >
        <span class="mr-2">hobbies</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      //
    }
  },
}
</script>

<style scoped>
.title {
  margin-left: 10px;
}
</style>
