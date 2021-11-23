import {
  ref,
  onMounted,
  onUnmounted
} from 'vue';

export default function keysActiveManager(element = document) {
  // const keysActive = ref(new Map())
  const keysActive = ref({})

  // inspired by
  // https://stackoverflow.com/a/12444641/574981

  const timeoutDelay = 3000; // ms
  let timeoutID = false; // ms

  const checkAllReleased = () => {
      let allReleased = true
      for (var key in keysActive.value) {
          if (keysActive.value.hasOwnProperty(key)) {
            if (keysActive.value[key]) {
                allReleased = false
            }
          }
      }
      return allReleased
  }

  const clearKeyTimeoutIfAllReleased = () => {
      if (timeoutID != false) {
          if (checkAllReleased()) {
              // stop timeout
              clearTimeout(timeoutID)
          }
      }
  }

  const startKeyTimeout = () => {
      if (timeoutID != false) {
          // stop old timeout
          clearTimeout(timeoutID)
      }
      // setup new timeout
      timeoutID = setTimeout(() => {
          // clear keysActive
          for (var key in keysActive.value) {
              if (keysActive.value.hasOwnProperty(key)) {
                keysActive.value[key] = false
              }
          }
          console.log('keysActive cleared by timeout.');
      }, timeoutDelay);
  }

  const handleKeyDown = event => {
      keysActive.value[event.code] = true
      // console.log('keyDown', event.code)
      event.preventDefault();
      startKeyTimeout()
      console.log('keysActive.value', keysActive.value)
  }
  const handleKeyUp = event => {
      keysActive.value[event.code] = false
      // console.log('keyUp', event.code)
      clearKeyTimeoutIfAllReleased()
      event.preventDefault();
  }

  const setupKeyListener = () => {
      element.addEventListener('keydown', handleKeyDown);
      element.addEventListener('keyup', handleKeyUp);
  }
  const cleanup = () => {
      element.removeEventListener('keydown', handleKeyDown);
      element.removeEventListener('keyup', handleKeyUp);
      clearTimeout(timeoutID);
  }

  onMounted(setupKeyListener)
  onUnmounted(cleanup)

  return {
    keysActive
  }
}
