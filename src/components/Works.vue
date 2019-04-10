<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-timeline class="content">
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
          <div>
            <a
              v-if="d.href"
              :href="d.href"
              target="_blank"
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
            <div>
              <v-img
                v-if="d.img"
                :src="require(`@/assets/${d.img}`)"
              />
            </div>
            <v-chip
              v-for="(e, key) in d.env"
              :key="key"
              disabled
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
        text: '桜島の風向きをチェックするアプリ。iOS、Android対応。',
        img: 'sakurajima-wind.png',
        env: ['Objective-C', 'Java', 'PHP'],
      },
      {
        ym: '2018/10',
        color: 'cyan',
        title: '桜島降灰予報',
        href: 'https://sakurajima-ashfall.netlify.com',
        text: '桜島の降灰予報をチェックするアプリ。iOS、Android対応。',
        img: 'sakurajima-ashfall.png',
        env: ['JavaScript', 'Vue.js', 'Onsen UI', 'Node.js'],
      },
    ],
  }),
}
</script>

<style scoped>
a {
  text-decoration: none;
}

.content {
  width: 100%;
}
</style>
