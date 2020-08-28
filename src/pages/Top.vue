<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex
        xs12
      >
        <div class="text-center">
          <img
            :src="require('@/assets/avatar.png')"
            class="my-4 text-center"
            contain
            height="200"
            aria-label="avatar"
          >
        </div>
      </v-flex>

      <v-flex mb-6>
        <h1 class="display-2 font-weight-bold mb-4 text-center">
          {{ name }}
        </h1>
        <p class="text-center">
          <a
            target="_blank"
            href="https://twitter.com/intent/tweet?screen_name=tmegos&ref_src=twsrc%5Etfw"
          >
            <!-- v-img centering...? https://github.com/vuetifyjs/vuetify/issues/5757 -->
            <img
              src="https://img.shields.io/badge/status-working%20remotely-green.svg"
              class="my-4"
              width="150px"
            >
          </a>
        </p>
        <p class="subheading font-weight-regular text-center">
          {{ catchphrase }}
        </p>
      </v-flex>

      <v-flex
        xs12
        mb-12
      >
        <headline
          title="Links"
          class="text-center"
        />

        <v-layout
          justify-center
          row
        >
          <a
            v-for="(link, i) in links"
            :key="i"
            :href="link.href"
            class="subheading mx-4"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Headline from '@/components/Headline'

export default {
  components: {
    Headline,
  },
  data: () => ({
    name: 'megos',
    catchphrase: 'Web developer',
    links: [
      {
        text: 'Twitter',
        href: 'https://twitter.com/tmegos',
      },
      {
        text: 'GitHub',
        href: 'https://github.com/megos',
      },
      {
        text: 'GitLab',
        href: 'https://gitlab.com/megos',
      },
      {
        text: 'Speaker Deck',
        href: 'https://speakerdeck.com/megos',
      },
      {
        text: 'Hatena Blog',
        href: 'https://tmegos.hatenablog.jp',
      },
      {
        text: 'LAPRAS',
        href: 'https://lapras.com/public/R051YPL',
      },
    ],
  }),
}
</script>
