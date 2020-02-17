<template>
  <v-container
    align-center
    justify-center
    row
  >
    <v-layout
      wrap
    >
      <v-flex
        xs4
        offset-xs4
        text-xs-center
      >
        <headline
          title="Hobbies"
          class="text-center"
        />
      </v-flex>
      <v-flex
        xs4
        offset-xs4
      >
        <v-treeview :items="items" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Headline from '@/components/Headline'

export default {
  components: {
    Headline,
  },
  data: () => ({
    items: [
      {
        id: 'cars',
        name: 'Cars:',
        children: [
          { id: 'car-1', name: 'アルトラパン（初代 HE21S）' },
          { id: 'car-2', name: 'デミオ（2代目）' },
          { id: 'car-3', name: 'アルトワークス（8代目 HA36S）' },
        ],
      },
    ],
  }),
}
</script>
