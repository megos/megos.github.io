<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title class="headline">
        <span>megos</span>
        <span class="font-weight-light title">portfolio</span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        flat
        disabled
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
      <Top />
    </v-content>
  </v-app>
</template>

<script>
import Top from './components/Top.vue'

export default {
  name: 'App',
  components: {
    Top,
  },
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
