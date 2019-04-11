<template>
  <v-timeline-item :color="work.color">
    <template v-slot:opposite>
      <span
        :class="`headline font-weight-bold ${work.color}--text`"
        v-text="work.ym"
      />
    </template>
    <div>
      <a
        v-if="work.href"
        :href="work.href"
        target="_blank"
      >
        <h2 :class="`headline font-weight-light mb-3 ${work.color}--text`">
          {{ work.title }}
        </h2>
      </a>
      <h2
        v-else
        :class="`headline font-weight-light mb-3 ${work.color}--text`"
      >
        {{ work.title }}
      </h2>
      <div>
        {{ work.text }}
      </div>
      <div>
        <v-img
          v-if="work.img"
          class="my-3"
          :src="require(`@/assets/${work.img}`)"
        />
      </div>
      <v-chip
        v-for="(e, key) in work.env"
        :key="key"
        disabled
      >
        {{ e }}
      </v-chip>
    </div>
  </v-timeline-item>
</template>

<script>
export default {
  props: {
    work: {
      type: Object,
      required: true,
    },
  },
}
</script>
