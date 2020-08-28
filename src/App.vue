<template>
  <v-app>
    <v-app-bar app>
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
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
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
    contents: ['Skills', 'Works'],
  }),
}
</script>
