import {
    ref,
    toRefs,
    toRaw,
    watch,
    onUnmounted
} from 'vue';

import keysActiveManager from './keysActive'

export default function connectionGoalDetectionMini() {
    const connected = ref(false)
    const goal1 = ref(0)
    const goal2 = ref(0)

    const connectedTimeout = 10 * 1000 // ms
    let connectedTimeoutID = false // ms

    const startConnectedTimeout = () => {
        if (connectedTimeoutID != false) {
            clearTimeout(connectedTimeoutID)
        }
        connectedTimeoutID = setTimeout(() => {
            connected.value = false
            connectedTimeoutID = false
        }, connectedTimeout)
    }


    // const keysActive = keysActiveManager()
    // console.log(keysActive)
    // const test = toRefs(keysActive)
    const keysActive = keysActiveManager()
    // console.log(keysActive)

    watch(keysActive, (newValue, oldValue) => {
        console.log('keysActive changed', toRaw(keysActive))
        if (
            // ShiftLeft ControlLeft AltLeft Digit2
            keysActive['ShiftLeft']
            && keysActive['ControlLeft']
            && keysActive['AltLeft']
        ) {
            // if (keysActive['OSLeft']) {
            // if (keysActive['Insert']) {
            if (keysActive['F7']) {
                connected.value = true
                startConnectedTimeout()
            }
            if (keysActive['Digit1']) {
                goal1.value += 1
            }
            if (keysActive['Digit2']) {
                goal2.value += 1
            }
        }
    })

    const cleanup = () => {
        clearTimeout(connectedTimeoutID);
    }

    onUnmounted(cleanup)

    return {
        connected,
        goal1,
        goal2
    }
}
