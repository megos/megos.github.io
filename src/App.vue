<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title
        class="headline"
      >
        <v-btn
          text
          large
          @click="$router.push('/')"
        >
          <span class="title">megos</span>
          <span class="font-weight-light title">portfolio</span>
        </v-btn>
      </v-toolbar-title>
      <v-spacer />
      <toolbar-menu
        v-for="(content, i) in contents"
        :key="i"
        :content="content"
      />
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import ToolbarMenu from '@/components/ToolbarMenu'

export default {
  name: 'App',
  components: {
    ToolbarMenu,
  },
  data: () => ({
    contents: ['Skills', 'Works', 'Hobbies'],
  }),
}
</script>
