<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('@/assets/avatar.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          megos
        </h1>
        <a
          target="_blank"
          href="https://twitter.com/intent/tweet?screen_name=tmegos&ref_src=twsrc%5Etfw"
        >
          <!-- v-img centering...? https://github.com/vuetifyjs/vuetify/issues/5757 -->
          <img
            src="https://img.shields.io/badge/status-looking%20for%20a%20job-yellow.svg"
            class="my-3"
            width="150px"
          >
        </a>
        <p class="subheading font-weight-regular">
          Full stuck engineer (not stack)
        </p>
      </v-flex>

      <v-flex
        xs12
        mb-5
      >
        <h2 class="headline font-weight-bold mb-3">
          Links
        </h2>

        <v-layout justify-center>
          <a
            v-for="(link, i) in links"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
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
export default {
  data: () => ({
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
    ],
  }),
}
</script>
