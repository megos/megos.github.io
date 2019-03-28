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
      { text: 'Vue', value: 1000 },
      { text: 'js', value: 200 },
      { text: 'is', value: 800 },
      { text: 'very cool', value: 1000000 },
      { text: 'lunch', value: 100 },
    ],
    fontSizeMapper: word => Math.log2(word.value) * 5,
  }),
}
</script>
