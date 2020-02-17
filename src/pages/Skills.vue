<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
        <headline
          title="Skills"
          class="text-center"
        />
        <cloud
          :data="words"
          :font-size-mapper="fontSizeMapper"
          :on-word-click="onWordClick"
          :font="font"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Cloud from 'vue-d3-cloud'
import Headline from '@/components/Headline'

export default {
  components: {
    Cloud,
    Headline,
  },
  data: () => ({
    words: [
      { text: 'Vue.js', value: 100 },
      { text: 'React', value: 70 },
      { text: 'Knockout.js', value: 50 },
      { text: 'Node.js', value: 100 },
      { text: 'HTML5', value: 70 },
      { text: 'CSS', value: 30 },
      { text: 'Java', value: 70 },
      { text: 'Kotlin', value: 50 },
      { text: 'Spring Framework', value: 70 },
      { text: 'Play Framework', value: 30 },
      { text: 'Shell', value: 100 },
      { text: 'SQL', value: 10 },
      { text: 'Docker', value: 100 },
    ],
    fontSizeMapper: (word) => Math.log2(word.value) * 10,
    onWordClick: () => {},
    font: 'Impact',
  }),
}
</script>

<style scoped>
.wordCloud >>> svg {
  width: 100%;
}
</style>
