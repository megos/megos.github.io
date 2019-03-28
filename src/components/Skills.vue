<template>
  <v-container>
    <cloud
      :data="words"
      :font-size-mapper="fontSizeMapper"
    />
  </v-container>
</template>

<script>
import Cloud from 'vue-d3-cloud'

export default {
  components: {
    Cloud,
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
      { text: 'PHP', value: 10 },
      { text: 'SQL', value: 10 },
      { text: 'Docker', value: 100 },
    ],
    fontSizeMapper: word => Math.log2(word.value) * 10,
  }),
}
</script>
