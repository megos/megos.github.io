<template>
  <v-btn
    text
    @click="$router.push(content)"
  >
    <span class="mr-2">{{ content }}</span>
  </v-btn>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
  },
}
</script>
