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
            <a
              v-if="d.href"
              :href="d.href"
            >
              <h2 :class="`headline font-weight-light mb-3 ${d.color}--text`">
                {{ d.title }}
              </h2>
            </a>
            <h2
              v-else
              :class="`headline font-weight-light mb-3 ${d.color}--text`"
            >
              {{ d.title }}
            </h2>
            <div>
              {{ d.text }}
            </div>
            <v-img
              v-if="d.img"
              :src="require(`@/assets/${d.img}`)"
              class="my-3"
              contain
              width="200"
            />
            <v-chip
              v-for="(e, key) in d.env"
              :key="key"
              disabled="true"
            >
              {{ e }}
            </v-chip>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    data: [
      {
        ym: '2012/12',
        color: 'cyan',
        title: '桜島風向情報',
        text: '桜島の風向きをチェックするアプリ。iOS、Android対応',
        img: 'sakurajima-wind.png',
        env: ['Objective-C', 'Java', 'PHP'],
      },
      {
        ym: '2018/03',
        color: 'cyan',
        title: 'no href',
        text: 'hogefuga',
      },
    ],
  }),
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
