<template>
  <q-page class="flex flex-center">
    <!-- <img
    alt="Quasar logo"
    src="~assets/quasar-logo-vertical.svg"
    style="width: 200px; height: 200px"
    > -->
    <section>
      <p>
        connected: {{ connected }}
      </p>
      <p>
        goal1: {{ goal1 }}
      </p>
      <p>
        goal2: {{ goal2 }}
      </p>
    </section>
  </q-page>
</template>

<script>
import {
  defineComponent,
  ref,
  onMounted
} from 'vue';

// import connectionGoalDetectionMini from '@/composables/connectionGoalDetectionMini'

import connectionGoalDetectionMini from '../composables/connectionGoalDetectionMini'

export default defineComponent({
  name: 'PageIndex',
  setup () {
     const { connected, goal1, goal2 } = connectionGoalDetectionMini()
     return {
       connected,
       goal1,
       goal2
     }
  }
})


</script>
