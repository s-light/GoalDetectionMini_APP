"use strict";
(self["webpackChunkgoaldetectionmini_app"] = self["webpackChunkgoaldetectionmini_app"] || []).push([[633],{

/***/ 4633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Index)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2323);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Index.vue?vue&type=template&id=220585f3

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_page, {
    class: "flex flex-center"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("section", null, [(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, " connected: " + (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.connected), 1), (0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, " goal1: " + (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.goal1), 1), (0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, " goal2: " + (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.goal2), 1)])]),
    _: 1
  });
}
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(1959);
;// CONCATENATED MODULE: ./src/composables/keysActive.js

function keysActiveManager(element = document) {
  // const keysActive = ref(new Map())
  const keysActive = (0,reactivity_esm_bundler/* ref */.iH)({}); // inspired by
  // https://stackoverflow.com/a/12444641/574981

  const timeoutDelay = 3000; // ms

  let timeoutID = false; // ms

  const checkAllReleased = () => {
    let allReleased = true;

    for (var key in keysActive.value) {
      if (keysActive.value.hasOwnProperty(key)) {
        if (keysActive.value[key]) {
          allReleased = false;
        }
      }
    }

    return allReleased;
  };

  const clearKeyTimeoutIfAllReleased = () => {
    if (timeoutID != false) {
      if (checkAllReleased()) {
        // stop timeout
        clearTimeout(timeoutID);
      }
    }
  };

  const startKeyTimeout = () => {
    if (timeoutID != false) {
      // stop old timeout
      clearTimeout(timeoutID);
    } // setup new timeout


    timeoutID = setTimeout(() => {
      // clear keysActive
      for (var key in keysActive.value) {
        if (keysActive.value.hasOwnProperty(key)) {
          keysActive.value[key] = false;
          delete keysActive.value[key];
        }
      }

      console.log('keysActive cleared by timeout.');
    }, timeoutDelay);
  };

  const handleKeyDown = event => {
    keysActive.value[event.code] = true; // console.log('keyDown', event.code)

    event.preventDefault();
    startKeyTimeout(); // console.log('keysActive.value', {...keysActive.value })
    // console.log('keysActive.value', toRaw(keysActive.value))
  };

  const handleKeyUp = event => {
    keysActive.value[event.code] = false;
    delete keysActive.value[event.code]; // console.log('keyUp', event.code)

    clearKeyTimeoutIfAllReleased();
    event.preventDefault();
  };

  const setupKeyListener = () => {
    element.addEventListener('keydown', handleKeyDown);
    element.addEventListener('keyup', handleKeyUp);
  };

  const cleanup = () => {
    element.removeEventListener('keydown', handleKeyDown);
    element.removeEventListener('keyup', handleKeyUp);
    clearTimeout(timeoutID);
  };

  (0,runtime_core_esm_bundler/* onMounted */.bv)(setupKeyListener);
  (0,runtime_core_esm_bundler/* onUnmounted */.Ah)(cleanup); // return {
  //   keysActive
  // }

  return keysActive.value;
}
;// CONCATENATED MODULE: ./src/composables/connectionGoalDetectionMini.js


function connectionGoalDetectionMini() {
  const connected = (0,reactivity_esm_bundler/* ref */.iH)(false);
  const goal1 = (0,reactivity_esm_bundler/* ref */.iH)(0);
  const goal2 = (0,reactivity_esm_bundler/* ref */.iH)(0);
  const connectedTimeout = 10 * 1000; // ms

  let connectedTimeoutID = false; // ms

  const startConnectedTimeout = () => {
    if (connectedTimeoutID != false) {
      clearTimeout(connectedTimeoutID);
    }

    connectedTimeoutID = setTimeout(() => {
      connected.value = false;
      connectedTimeoutID = false;
    }, connectedTimeout);
  }; // const keysActive = keysActiveManager()
  // console.log(keysActive)
  // const test = toRefs(keysActive)


  const keysActive = keysActiveManager(); // console.log(keysActive)

  (0,runtime_core_esm_bundler/* watch */.YP)(keysActive, (newValue, oldValue) => {
    console.log('keysActive changed', (0,reactivity_esm_bundler/* toRaw */.IU)(keysActive));

    if ( // ShiftLeft ControlLeft AltLeft Digit2
    keysActive['ShiftLeft'] && keysActive['ControlLeft'] && keysActive['AltLeft']) {
      // if (keysActive['OSLeft']) {
      // if (keysActive['Insert']) {
      if (keysActive['F7']) {
        connected.value = true;
        startConnectedTimeout();
      }

      if (keysActive['Digit1']) {
        goal1.value += 1;
      }

      if (keysActive['Digit2']) {
        goal2.value += 1;
      }
    }
  });

  const cleanup = () => {
    clearTimeout(connectedTimeoutID);
  };

  (0,runtime_core_esm_bundler/* onUnmounted */.Ah)(cleanup);
  return {
    connected,
    goal1,
    goal2
  };
}
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Index.vue?vue&type=script&lang=js
 // import connectionGoalDetectionMini from '@/composables/connectionGoalDetectionMini'


/* harmony default export */ const Indexvue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: 'PageIndex',

  setup() {
    const {
      connected,
      goal1,
      goal2
    } = connectionGoalDetectionMini();
    return {
      connected,
      goal1,
      goal2
    };
  }

}));
;// CONCATENATED MODULE: ./src/pages/Index.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(4260);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(4379);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/Index.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Indexvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const Index = (__exports__);
;

runtime_auto_import_default()(Indexvue_type_script_lang_js, 'components', {QPage: QPage/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=633.473483a2.js.map