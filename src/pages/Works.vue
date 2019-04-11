<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-timeline class="content">
        <work-item
          v-for="(work, i) in works"
          :key="i"
          :work="work"
        />
      </v-timeline>
    </v-layout>
  </v-container>
</template>

<script>
import WorkItem from '@/components/WorkItem'

export default {
  components: {
    WorkItem,
  },
  data: () => ({
    works: [
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
