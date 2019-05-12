<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex>
        <headline title="Works" />
      </v-flex>
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
import Headline from '@/components/Headline'

export default {
  components: {
    WorkItem,
    Headline,
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
        ym: '2016/03',
        color: 'cyan',
        title: 'asagao',
        href: 'https://github.com/megos/asagao',
        text: 'メディアに特化したTwitterクライアント。Twitter公式、Instagram、Pixivに対応。',
        img: 'asagao.png',
        env: ['Electron', 'Vue.js', 'Onsen UI'],
      },
      {
        ym: '2018/04',
        color: 'cyan',
        title: 'WebRTCビデオチャット',
        href: 'https://github.com/megos/webrtc',
        text: 'SkyWayとVue.jsを使ったビデオチャット。音声通話、ビデオ通話、画面共有が可能。',
        img: 'webrtc.png',
        env: ['Vue.js', 'Vuetify', 'SkyWay'],
      },
      {
        ym: '2018/09',
        color: 'cyan',
        title: 'tax in',
        href: 'https://chrome.google.com/webstore/detail/tax-in/kingeeeofapnpefjkbphljcjofkpdbcl?hl=ja',
        text: '税抜価格から税込価格を表示するためのChrome拡張。',
        img: 'taxin.png',
        env: ['JavaScript', 'Vue.js'],
      },
      {
        ym: '2018/10',
        color: 'cyan',
        title: 'てげてげスケジュール（Experimental）',
        href: 'https://tegetege-schedule.netlify.com',
        text: 'シフト表作成を簡単に。遺伝的アルゴリズムを利用。',
        img: 'schedule.png',
        env: ['Vue.js', 'Vuetify', 'Handsontable', 'Genetic Algorithm'],
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
      {
        ym: '2019/02',
        color: 'cyan',
        title: 'Event Finder',
        href: 'https://event-finder-jp.netlify.com',
        text: 'connpassのイベントを検索できるアプリ。PC、スマートフォン対応。',
        img: 'event-finder.png',
        env: ['Vue.js', 'Vuetify'],
      },
    ],
  }),
}
</script>

<style scoped>
.content {
  width: 100%;
}
</style>
