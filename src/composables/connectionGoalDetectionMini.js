import {
    ref,
    watch
} from 'vue';

import keysActive from '@/composables/keysActive'

export default function connectionGoalDetectionMini() {
    const connected = ref(false)
    const goal1 = ref(0)
    const goal2 = ref(0)

    const connectedTimeout = 10 * 1000 // ms
    const connectedTimeoutID = false // ms

    const startConnectedTimeout = () => {
        if (connectedTimeoutID != false) {
            clearTimeout(connectedTimeoutID)
        }
        connectedTimeoutID = setTimeout(() => {
            connected = false
            connectedTimeoutID = false
        }, connectedTimeout)
    }


    const keysActive = keysActive()

    watch(keysActive, (newValue, oldValue) => {
        // console.log('The new counter value is: ' + counter.value)
        if (
            // ShiftLeft ControlLeft AltLeft Digit2
            keysActive.value['ShiftLeft']
            && keysActive.value['ControlLeft']
            && keysActive.value['AltLeft']
        ) {
            // if (keysActive.value['OSLeft']) {
            // if (keysActive.value['Insert']) {
            if (keysActive.value['F7']) {
                connected.value = true
                startConnectedTimeout()
            }
            if (keysActive.value['Digit1']) {
                goal1.value += 1
            }
            if (keysActive.value['Digit2']) {
                goal2.value += 1
            }
        }
    })

    return {
        connected,
        goal1,
        goal2
    }
}
