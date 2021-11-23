<template>
  <q-page class="flex flex-center">
    <img
    alt="Quasar logo"
    src="~assets/quasar-logo-vertical.svg"
    style="width: 200px; height: 200px"
    >
  </q-page>
</template>

<script>
import {
  defineComponent,
  ref,
  onMounted
} from 'vue';

import connectionGoalDetectionMini from '@/composables/connectionGoalDetectionMini'

export default defineComponent({
  name: 'PageIndex'
})



</script>
