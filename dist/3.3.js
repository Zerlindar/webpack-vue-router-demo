webpackJsonp([3],{

/***/ 14:
/***/ function(module, exports, __webpack_require__) {

	eval("var __vue_script__, __vue_template__\n__vue_script__ = __webpack_require__(15)\n__vue_template__ = __webpack_require__(16)\nmodule.exports = __vue_script__ || {}\nif (module.exports.__esModule) module.exports = module.exports.default\nif (__vue_template__) { (typeof module.exports === \"function\" ? module.exports.options : module.exports).template = __vue_template__ }\nif (false) {(function () {  module.hot.accept()\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), true)\n  if (!hotAPI.compatible) return\n  var id = \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\vue-demo\\\\src\\\\components\\\\nav1.vue\"\n  if (!module.hot.data) {\n    hotAPI.createRecord(id, module.exports)\n  } else {\n    hotAPI.update(id, module.exports, __vue_template__)\n  }\n})()}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXYxLnZ1ZT9iZmEyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsWUFBaUIsY0FBYztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX192dWVfc2NyaXB0X18sIF9fdnVlX3RlbXBsYXRlX19cbl9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIi0hYmFiZWwtbG9hZGVyIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9uYXYxLnZ1ZVwiKVxuX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCItIXZ1ZS1odG1sLWxvYWRlciEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9uYXYxLnZ1ZVwiKVxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9zY3JpcHRfXyB8fCB7fVxuaWYgKG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUpIG1vZHVsZS5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMuZGVmYXVsdFxuaWYgKF9fdnVlX3RlbXBsYXRlX18pIHsgKHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PT0gXCJmdW5jdGlvblwiID8gbW9kdWxlLmV4cG9ydHMub3B0aW9ucyA6IG1vZHVsZS5leHBvcnRzKS50ZW1wbGF0ZSA9IF9fdnVlX3RlbXBsYXRlX18gfVxuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkgeyAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCB0cnVlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgdmFyIGlkID0gXCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXERlc2t0b3BcXFxcdnVlLWRlbW9cXFxcc3JjXFxcXGNvbXBvbmVudHNcXFxcbmF2MS52dWVcIlxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoaWQsIG1vZHVsZS5leHBvcnRzKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS51cGRhdGUoaWQsIG1vZHVsZS5leHBvcnRzLCBfX3Z1ZV90ZW1wbGF0ZV9fKVxuICB9XG59KSgpfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvbmF2MS52dWVcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 15:
/***/ function(module, exports) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n// <template>\n//    <ul class = \"nav1-list\" v-for = \"data in datas\">\n//        <li v-link=\"{ path: '/admin/state', params: { id: id }}\">{{data.title}}</li>\n//    </ul>\n// </template>\n//\n// <script type=\"text/javascript\">\nexports.default = {\n    data: function data() {\n        return {\n            datas: [{\n                title: \"二级导航1\",\n                id: 1\n            }, {\n                title: \"二级导航2\",\n                id: 2\n            }, {\n                title: \"二级导航3\",\n                id: 3\n            }, {\n                title: \"二级导航4\",\n                id: 4\n            }]\n        };\n    },\n\n    methods: {\n        golist: function golist(id) {\n            //方法，定义路由跳转，注意这里必须使用this，不然报错\n            this.$route.router.go({ path: \"/admin/state\", params: { id: id } });\n        }\n    }\n};\n// </script>\n/* generated by vue-loader *///# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vbmF2MS52dWU/NzBiNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQU9BOzswQkFFQTs7O3VCQUlBO29CQUVBO0FBSEEsYUFEQTt1QkFNQTtvQkFFQTtBQUhBO3VCQUtBO29CQUVBO0FBSEE7dUJBS0E7b0JBSUE7QUFMQTtBQWRBO0FBb0JBOzs7O0FBRUE7d0VBQ0E7QUFFQTtBQUpBO0FBdkJBIiwiZmlsZSI6IjE1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICA8dWwgY2xhc3MgPSBcIm5hdjEtbGlzdFwiIHYtZm9yID0gXCJkYXRhIGluIGRhdGFzXCI+XHJcbiAgICAgICA8bGkgdi1saW5rPVwieyBwYXRoOiAnL2FkbWluL3N0YXRlJywgcGFyYW1zOiB7IGlkOiBpZCB9fVwiPnt7ZGF0YS50aXRsZX19PC9saT5cclxuICAgPC91bD5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiPlxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBkYXRhczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwi5LqM57qn5a+86IiqMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogMVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCLkuoznuqflr7zoiKoyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAyXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIuS6jOe6p+WvvOiIqjNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDNcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwi5LqM57qn5a+86IiqNFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogNFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kcyA6e1xyXG4gICAgICAgICAgICBnb2xpc3QgKGlkKSB7Ly/mlrnms5XvvIzlrprkuYnot6/nlLHot7PovazvvIzms6jmhI/ov5nph4zlv4Xpobvkvb/nlKh0aGlz77yM5LiN54S25oql6ZSZXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZS5yb3V0ZXIuZ28oe3BhdGg6XCIvYWRtaW4vc3RhdGVcIiwgcGFyYW1zOiB7IGlkOiBpZH19KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG5hdjEudnVlPzJkYWY2NjIwIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 16:
/***/ function(module, exports) {

	eval("module.exports = \"\\r\\n   <ul class = \\\"nav1-list\\\" v-for = \\\"data in datas\\\">\\r\\n       <li v-link=\\\"{ path: '/admin/state', params: { id: id }}\\\">{{data.title}}</li>\\r\\n   </ul>\\r\\n\";//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXYxLnZ1ZT9lYjcxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNHQUFzRyxnQ0FBZ0MsVUFBVSxLQUFLLFlBQVkiLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiXFxyXFxuICAgPHVsIGNsYXNzID0gXFxcIm5hdjEtbGlzdFxcXCIgdi1mb3IgPSBcXFwiZGF0YSBpbiBkYXRhc1xcXCI+XFxyXFxuICAgICAgIDxsaSB2LWxpbms9XFxcInsgcGF0aDogJy9hZG1pbi9zdGF0ZScsIHBhcmFtczogeyBpZDogaWQgfX1cXFwiPnt7ZGF0YS50aXRsZX19PC9saT5cXHJcXG4gICA8L3VsPlxcclxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtaHRtbC1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL25hdjEudnVlXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

});