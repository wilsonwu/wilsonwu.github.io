webpackJsonp([1],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view_home_vue__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view_home_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__view_home_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_vuetifyaudio_vue__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_vuetifyaudio_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__view_vuetifyaudio_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_404_vue__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_404_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__view_404_vue__);





const routes = [{
	path: '/',
	component: __WEBPACK_IMPORTED_MODULE_0__view_home_vue___default.a,
	name: 'home'
}, {
	path: '/vuetifyaudio',
	component: __WEBPACK_IMPORTED_MODULE_1__view_vuetifyaudio_vue___default.a,
	name: 'vuetify-audio',
	hidden: true
}, {
	path: '*',
	hidden: true,
	redirect: {
		path: '/404'
	}
}];

/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getters__ = __webpack_require__(131);




__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

const state = {
    user: {
        id: 0,
        email: "",
        name: "",
        access_token: "",
        refresh_token: ""
    }
};

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
    getters: __WEBPACK_IMPORTED_MODULE_2__getters__,
    state
}));

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(45)(
  /* script */
  __webpack_require__(128),
  /* template */
  __webpack_require__(324),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//

const inBrowser = typeof window !== 'undefined';
/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'VueProgress',
    serverCacheKey: () => 'Progress',
    computed: {
        style() {
            let location = this.progress.options.location;
            let style = {
                'background-color': this.progress.options.canSuccess ? this.progress.options.color : this.progress.options.failedColor,
                'opacity': this.progress.options.show ? 1 : 0
            };
            if (location == 'top' || location == 'bottom') {
                location === 'top' ? style.top = '0px' : style.bottom = '0px';
                if (!this.progress.options.inverse) {
                    style.left = '0px';
                } else {
                    style.right = '0px';
                }
                style.width = this.progress.percent + '%';
                style.height = this.progress.options.thickness;
                style.transition = "width " + this.progress.options.transition.speed + ", opacity " + this.progress.options.transition.opacity;
            } else if (location == 'left' || location == 'right') {
                location === 'left' ? style.left = '0px' : style.right = '0px';
                if (!this.progress.options.inverse) {
                    style.bottom = '0px';
                } else {
                    style.top = '0px';
                }
                style.height = this.progress.percent + '%';
                style.width = this.progress.options.thickness;
                style.transition = "height " + this.progress.options.transition.speed + ", opacity " + this.progress.options.transition.opacity;
            }
            return style;
        },
        progress() {
            if (inBrowser) {
                return window.VueProgressBarEventBus.RADON_LOADING_BAR;
            } else {
                return {
                    percent: 0,
                    options: {
                        canSuccess: true,
                        show: false,
                        color: 'rgb(19, 91, 55)',
                        failedColor: 'red',
                        thickness: '2px',
                        transition: {
                            speed: '0.2s',
                            opacity: '0.6s',
                            termination: 300
                        },
                        location: 'top',
                        autoRevert: true,
                        inverse: false
                    }
                };
            }
        }
    }
});

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const formatTime = secend => {
    let time = new Date(secend * 1000).toISOString().substr(11, 8);
    return time;
};
/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'vuetify-audio',
    props: {
        file: {
            type: String,
            default: null
        },
        autoPlay: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        duration: function () {
            return this.audio ? formatTime(this.totalDuration) : '';
        }
    },
    data() {
        return {
            isMuted: false,
            loaded: false,
            playing: false,
            paused: false,
            percentage: 0,
            currentTime: '00:00:00',
            audio: undefined,
            totalDuration: 0
        };
    },

    methods: {
        setPosition() {
            this.audio.currentTime = parseInt(this.audio.duration / 100 * this.percentage);
        },
        stop() {
            this.paused = this.playing = false;
            this.audio.pause();
            this.audio.currentTime = 0;
        },
        play() {
            if (this.playing) return;
            this.paused = false;
            this.audio.play();
            this.playing = true;
        },
        pause() {
            this.paused = !this.paused;
            this.paused ? this.audio.pause() : this.audio.play();
        },
        download() {
            this.audio.pause();
            window.open(this.file, 'download');
        },
        mute() {
            this.isMuted = !this.isMuted;
            this.audio.muted = this.isMuted;
            this.volumeValue = this.isMuted ? 0 : 75;
        },
        reload() {
            this.audio.load();
        },
        _handleLoaded: function () {
            if (this.audio.readyState >= 2) {
                if (this.autoPlay) this.audio.play();
                this.loaded = true;
                this.totalDuration = parseInt(this.audio.duration);
            } else {
                throw new Error('Failed to load sound file');
            }
        },
        _handlePlayingUI: function (e) {
            this.percentage = this.audio.currentTime / this.audio.duration * 100;
            this.currentTime = formatTime(this.audio.currentTime);
        },
        _handlePlayPause: function (e) {
            if (e.type === 'pause' && this.paused === false && this.playing === false) {
                this.currentTime = '00:00:00';
            }
        },
        _handleEnded() {
            this.paused = this.playing = false;
        },
        init: function () {
            this.audio.addEventListener('timeupdate', this._handlePlayingUI);
            this.audio.addEventListener('loadeddata', this._handleLoaded);
            this.audio.addEventListener('pause', this._handlePlayPause);
            this.audio.addEventListener('play', this._handlePlayPause);
            this.audio.addEventListener('ended', this._handleEnded);
        }
    },
    mounted() {
        this.audio = this.$refs.player;
        this.init();
    },
    beforeDestroy() {
        this.audio.removeEventListener('timeupdate', this._handlePlayingUI);
        this.audio.removeEventListener('loadeddata', this._handleLoaded);
        this.audio.removeEventListener('pause', this._handlePlayPause);
        this.audio.removeEventListener('play', this._handlePlayPause);
        this.audio.removeEventListener('ended', this._handleEnded);
    }

});

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    created() {
        this.$Progress.start();
        this.$router.beforeEach((to, from, next) => {
            if (to.meta.progress !== undefined) {
                let meta = to.meta.progress;
                this.$Progress.parseMeta(meta);
            }
            this.$Progress.start();
            next();
        });
        this.$router.afterEach((to, from) => {
            this.$Progress.finish();
        });
    },
    mounted() {
        this.$Progress.finish();
    },
    data() {
        return {
            drawer: null,
            menus: [{
                key: 'main',
                menu: [{
                    action: 'local_activity',
                    title: 'vuetify-aduio',
                    items: [{ title: 'Demo', url: '/#/vuetifyaudio' }, { title: 'Github', url: 'https://github.com/wilsonwu/vuetify-audio' }]
                }]
            }, {
                key: 'settings',
                menu: [{
                    action: 'settings',
                    title: 'About Wilson',
                    items: [{ title: 'Wilson Profile', url: 'http://wilsonwu.me' }]
                }]
            }],
            mini: false, //use this for menu mini in the icon click
            right: null
        };
    }
});

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuetify_audio__ = __webpack_require__(331);
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			file: 'http://www.noiseaddicts.com/samples_1w72b820/290.mp3'
		};
	},
	components: {
		'vuetify-audio': __WEBPACK_IMPORTED_MODULE_0_vuetify_audio__["a" /* default */]
	}
});

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_router__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vuex_store__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuex__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue_progressbar__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_vue_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vee_validate__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vee_validate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_vee_validate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vuetify__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vuetify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_vuetify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_vuetify_dist_vuetify_min_css__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_vuetify_dist_vuetify_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_vuetify_dist_vuetify_min_css__);












__WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_3_vue_router__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_5_vuex__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_7_vue_progressbar___default.a);
__WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_9_vuetify___default.a);
__WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_8_vee_validate___default.a, { errorBagName: 'veeErrors' });

const RouterConfig = {
    routes: __WEBPACK_IMPORTED_MODULE_6__routes__["a" /* default */]
};
const router = new __WEBPACK_IMPORTED_MODULE_3_vue_router__["a" /* default */](RouterConfig);

new __WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */]({
    el: '#app',
    template: '<App />',
    router,
    store: __WEBPACK_IMPORTED_MODULE_4__vuex_store__["a" /* default */],
    components: {
        App: __WEBPACK_IMPORTED_MODULE_2__app___default.a
    }
}).$mount('#app');

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const getUser = state => {
    return state.user;
};
/* harmony export (immutable) */ __webpack_exports__["getUser"] = getUser;


const getAccessToken = state => {
    return state.user.access_token;
};
/* harmony export (immutable) */ __webpack_exports__["getAccessToken"] = getAccessToken;


const getRefreshToken = state => {
    return state.user.refresh_token;
};
/* harmony export (immutable) */ __webpack_exports__["getRefreshToken"] = getRefreshToken;


/***/ }),

/***/ 316:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(316)

var Component = __webpack_require__(45)(
  /* script */
  __webpack_require__(126),
  /* template */
  __webpack_require__(329),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(45)(
  /* script */
  __webpack_require__(127),
  /* template */
  __webpack_require__(327),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(45)(
  /* script */
  null,
  /* template */
  __webpack_require__(325),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(45)(
  /* script */
  null,
  /* template */
  __webpack_require__(326),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(45)(
  /* script */
  __webpack_require__(129),
  /* template */
  __webpack_require__(328),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 324:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-app', [_c('v-navigation-drawer', {
    attrs: {
      "temporary": "",
      "mini-variant": _vm.mini,
      "light": ""
    },
    on: {
      "update:miniVariant": function($event) {
        _vm.mini = $event
      }
    },
    model: {
      value: (_vm.drawer),
      callback: function($$v) {
        _vm.drawer = $$v
      },
      expression: "drawer"
    }
  }, [_c('v-list', [_c('v-list-item', [_c('v-list-tile', {
    attrs: {
      "avatar": "",
      "tag": "div"
    }
  }, [_c('v-list-tile-avatar', [_c('img', {
    attrs: {
      "src": "https://avatars3.githubusercontent.com/u/1269496"
    }
  })]), _vm._v(" "), _c('v-list-tile-content', [_c('v-list-tile-title', [_vm._v("Wilson Wu")])], 1), _vm._v(" "), _c('v-list-tile-action', [_c('v-btn', {
    attrs: {
      "icon": "",
      "dark": ""
    },
    nativeOn: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.drawer = !_vm.drawer
      }
    }
  }, [_c('v-icon', [_vm._v("chevron_left")])], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _vm._l((_vm.menus), function(menu) {
    return _c('v-list', {
      key: menu.key
    }, _vm._l((menu.menu), function(item) {
      return _c('v-list-group', {
        key: item.title,
        attrs: {
          "value": item.active
        }
      }, [_c('v-list-tile', {
        slot: "item"
      }, [_c('v-list-tile-action', [_c('v-icon', [_vm._v(_vm._s(item.action))])], 1), _vm._v(" "), _c('v-list-tile-content', [_c('v-list-tile-title', [_vm._v(_vm._s(item.title))])], 1), _vm._v(" "), (item.items ? true : false) ? _c('v-list-tile-action', [_c('v-icon', [_vm._v("keyboard_arrow_down")])], 1) : _vm._e()], 1), _vm._v(" "), _vm._l((item.items), function(subItem) {
        return _c('v-list-item', {
          key: subItem.title
        }, [_c('v-list-tile', {
          attrs: {
            "href": subItem.url ? subItem.url : '#'
          }
        }, [_c('v-list-tile-content', [_c('v-list-tile-title', [_vm._v(_vm._s(subItem.title))])], 1)], 1)], 1)
      })], 2)
    }))
  })], 2), _vm._v(" "), _c('v-toolbar', {
    attrs: {
      "fixed": "",
      "light": ""
    }
  }, [_c('v-toolbar-side-icon', {
    attrs: {
      "light": ""
    },
    nativeOn: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.drawer = !_vm.drawer
      }
    }
  }), _vm._v(" "), _c('v-toolbar-title', [_vm._v("Wilson Wu OSS")])], 1), _vm._v(" "), _c('main', [_c('v-container', {
    attrs: {
      "fluid": ""
    }
  }, [_c('router-view'), _vm._v(" "), _c('vue-progress-bar')], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 325:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._v("\n    404\n")])
},staticRenderFns: []}

/***/ }),

/***/ 326:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._v("\n    This is home page, currently is empty.\n")])
},staticRenderFns: []}

/***/ }),

/***/ 327:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-card', {
    staticStyle: {
      "text-align": "center"
    }
  }, [_c('v-card-text', [_c('v-btn', {
    staticClass: "teal--text",
    attrs: {
      "outline": "",
      "icon": "",
      "disabled": _vm.loaded === false
    },
    nativeOn: {
      "click": function($event) {
        _vm.playing ? _vm.pause() : _vm.play()
      }
    }
  }, [(_vm.playing === false || _vm.paused === true) ? _c('v-icon', [_vm._v("play_arrow")]) : _c('v-icon', [_vm._v("pause")])], 1), _vm._v(" "), _c('v-btn', {
    staticClass: "teal--text",
    attrs: {
      "outline": "",
      "icon": "",
      "disabled": _vm.loaded === false
    },
    nativeOn: {
      "click": function($event) {
        _vm.stop()
      }
    }
  }, [_c('v-icon', [_vm._v("stop")])], 1), _vm._v(" "), _c('v-btn', {
    staticClass: "teal--text",
    attrs: {
      "outline": "",
      "icon": "",
      "disabled": _vm.loaded === false
    },
    nativeOn: {
      "click": function($event) {
        _vm.mute()
      }
    }
  }, [(_vm.isMuted === false) ? _c('v-icon', [_vm._v("volume_up")]) : _c('v-icon', [_vm._v("volume_off")])], 1), _vm._v(" "), _c('v-btn', {
    staticClass: "teal--text",
    attrs: {
      "outline": "",
      "icon": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.loaded ? _vm.download() : _vm.reload()
      }
    }
  }, [(_vm.loaded === false) ? _c('v-icon', [_vm._v("refresh")]) : _c('v-icon', [_vm._v("get_app")])], 1), _vm._v(" "), _c('v-slider', {
    attrs: {
      "dark": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.setPosition()
      }
    },
    model: {
      value: (_vm.percentage),
      callback: function($$v) {
        _vm.percentage = $$v
      },
      expression: "percentage"
    }
  }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.currentTime) + " / " + _vm._s(_vm.duration))])], 1), _vm._v(" "), _c('audio', {
    ref: "player",
    attrs: {
      "id": "player",
      "src": _vm.file
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 328:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-layout', [_c('v-flex', {
    attrs: {
      "xs12": "",
      "sm6": "",
      "offset-sm3": "",
      "lg4": "",
      "offset-lg4": ""
    }
  }, [_c('v-card', [_c('v-card-text', [_vm._v("\n\t\t\t\t\tBase on vuetify-audio 0.0.5\n\t\t\t\t")])], 1), _vm._v(" "), _c('vuetify-audio', {
    attrs: {
      "file": _vm.file
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 329:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "__cov-progress",
    style: (_vm.style)
  })
},staticRenderFns: []}

/***/ })

},[130]);
//# sourceMappingURL=app.ed6cbb52c7b3573bd8a9.js.map