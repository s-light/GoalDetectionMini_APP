"use strict";
(self["webpackChunkgoaldetectionmini_app"] = self["webpackChunkgoaldetectionmini_app"] || []).push([[534],{

/***/ 4534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MainLayout)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2323);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/layouts/MainLayout.vue?vue&type=template&id=119e4693

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");

  const _component_q_item_label = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item-label");

  const _component_EssentialNavigation = (0,runtime_core_esm_bundler/* resolveComponent */.up)("EssentialNavigation");

  const _component_q_list = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-list");

  const _component_q_drawer = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-drawer");

  const _component_router_view = (0,runtime_core_esm_bundler/* resolveComponent */.up)("router-view");

  const _component_q_page_container = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page-container");

  const _component_q_layout = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-layout");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_layout, {
    view: "lHh Lpr lFf"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
      flat: "",
      dense: "",
      round: "",
      icon: "menu",
      "aria-label": "Menu",
      onClick: _ctx.toggleLeftDrawer,
      class: "fixed-top",
      style: {
        "z-index": "10000"
      }
    }, null, 8, ["onClick"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_drawer, {
      modelValue: _ctx.leftDrawerOpen,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.leftDrawerOpen = $event),
      "show-if-above": "",
      bordered: ""
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_list, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_label, {
          header: "",
          class: "q-mt-lg"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.appinfo.productName), 1)]),
          _: 1
        }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_EssentialNavigation), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_label, {
          class: "absolute-bottom"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Quasar v" + (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.$q.version) + " App v" + (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.appinfo.version), 1)]),
          _: 1
        })]),
        _: 1
      })]),
      _: 1
    }, 8, ["modelValue"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_page_container, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_router_view)]),
      _: 1
    })]),
    _: 1
  });
}
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(1959);
// EXTERNAL MODULE: ./appinfo.json
var appinfo = __webpack_require__(7128);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/EssentialNavigation.vue?vue&type=template&id=30901b60

function EssentialNavigationvue_type_template_id_30901b60_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-icon");

  const _component_q_item_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item-section");

  const _component_q_item_label = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item-label");

  const _component_q_item = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($data.childrenCommon, item => {
    return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_item, {
      key: item.title,
      to: item.path,
      exact: ""
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
        avatar: ""
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
          name: item.icon
        }, null, 8, ["name"])]),
        _: 2
      }, 1024), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_label, null, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(item.title), 1)]),
          _: 2
        }, 1024), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_label, {
          caption: ""
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(item.caption), 1)]),
          _: 2
        }, 1024)]),
        _: 2
      }, 1024)]),
      _: 2
    }, 1032, ["to"]);
  }), 128);
}
// EXTERNAL MODULE: ./src/router/routes.js
var routes = __webpack_require__(1988);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/EssentialNavigation.vue?vue&type=script&lang=js

/* harmony default export */ const EssentialNavigationvue_type_script_lang_js = ({
  name: 'EssentialNavigation',

  data() {
    return {
      childrenCommon: routes/* childrenCommon */.Z
    };
  }

});
;// CONCATENATED MODULE: ./src/components/EssentialNavigation.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(4260);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__(3414);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__(2035);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(4554);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__(2350);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/EssentialNavigation.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(EssentialNavigationvue_type_script_lang_js, [['render',EssentialNavigationvue_type_template_id_30901b60_render]])

/* harmony default export */ const EssentialNavigation = (__exports__);
;




runtime_auto_import_default()(EssentialNavigationvue_type_script_lang_js, 'components', {QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QIcon: QIcon/* default */.Z,QItemLabel: QItemLabel/* default */.Z});

;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/layouts/MainLayout.vue?vue&type=script&lang=js
 // import packageInfo from '../../package.json'
// we do not import the package.json as this could be a security concern.



/* harmony default export */ const MainLayoutvue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: 'MainLayout',
  components: {
    EssentialNavigation: EssentialNavigation
  },

  setup() {
    const leftDrawerOpen = (0,reactivity_esm_bundler/* ref */.iH)(false);
    return {
      // essentialLinks: linksList,
      leftDrawerOpen,

      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      }

    };
  },

  data() {
    return {
      appinfo: appinfo
    };
  }

}));
;// CONCATENATED MODULE: ./src/layouts/MainLayout.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/layout/QLayout.js + 1 modules
var QLayout = __webpack_require__(3066);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js + 6 modules
var QBtn = __webpack_require__(1828);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/header/QHeader.js
var QHeader = __webpack_require__(3812);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbar.js
var QToolbar = __webpack_require__(9570);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbarTitle.js
var QToolbarTitle = __webpack_require__(3747);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/drawer/QDrawer.js + 9 modules
var QDrawer = __webpack_require__(3949);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__(7011);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPageContainer.js
var QPageContainer = __webpack_require__(2652);
;// CONCATENATED MODULE: ./src/layouts/MainLayout.vue




;
const MainLayout_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(MainLayoutvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const MainLayout = (MainLayout_exports_);
;









runtime_auto_import_default()(MainLayoutvue_type_script_lang_js, 'components', {QLayout: QLayout/* default */.Z,QBtn: QBtn/* default */.Z,QHeader: QHeader/* default */.Z,QToolbar: QToolbar/* default */.Z,QToolbarTitle: QToolbarTitle/* default */.Z,QDrawer: QDrawer/* default */.Z,QList: QList/* default */.Z,QItemLabel: QItemLabel/* default */.Z,QPageContainer: QPageContainer/* default */.Z});


/***/ }),

/***/ 7128:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"goaldetectionmini_app","version":"1.0.0","productName":"GoalDetectionMini App","description":"a minimal app as example of the GoalDetectionMini module","projectUrl":"https://github.com/s-light/GoalDetectionMini_APP","previewUrl":"https://s-light.github.io/GoalDetectionMini_APP/app/dist/spa/#/"}');

/***/ })

}]);
//# sourceMappingURL=534.2ce8fe69.js.map