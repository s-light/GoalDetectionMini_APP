import {
  ref,
  onMounted
} from 'vue';

export default function keysActive(element = document) {
  // const keysActive = ref(new Map())
  const keysActive = ref({})

  // inspired by
  // https://stackoverflow.com/a/12444641/574981

  const timeoutDelay = 3000; // ms
  const timeoutID = false; // ms

  const startKeyTimeout = () => {
      if (timeoutID != false) {
          // stop old timeout
          clearTimeout(timeoutID);
      }
      // setup new timeout
      timeoutID = setTimeout(() => {
          // clear keysActive
          for (var key in keysActive) {
              if (keysActive.value.hasOwnProperty(key)) {
                keysActive.value[key] = false
              }
          }
          console.log('keysActive cleared by timeout.');
      }, timeoutDelay);
  }

  const handleKeyDown = event => {
      keysActive.value[event.code] = true
      event.preventDefault();
      startKeyTimeout()
  }
  const handleKeyUp = event => {
      keysActive.value[event.code] = false
      event.preventDefault();
  }

  const setupKeyListener = () => {
      element.addEventListener('keydown', handleKeyDown);
      element.addEventListener('keyup', handleKeyUp);
  }

  onMounted(setupKeyListener)

  return {
    keysActive
  }
}
