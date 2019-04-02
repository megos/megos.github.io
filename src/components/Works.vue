<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-timeline>
        <v-timeline-item
          v-for="(d, i) in data"
          :key="i"
          :color="d.color"
          small
        >
          <template v-slot:opposite>
            <span
              :class="`headline font-weight-bold ${d.color}--text`"
              v-text="d.ym"
            />
          </template>
          <div class="py-3">
            <h2 :class="`headline font-weight-light mb-3 ${d.color}--text`">
              {{ d.title }}
            </h2>
            <div>
              {{ d.text }}
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    data: [{
      ym: '2018/03',
      color: 'cyan',
      title: 'hoge',
      text: 'hogefuga',
    }],
  }),
}
</script>
