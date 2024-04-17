// ==UserScript==
// @name         小组增强
// @namespace    npm/vite-plugin-monkey
// @version      0.0.1
// @author       monkey
// @description  过滤无效评论，优化PC网页样式
// @icon         https://vitejs.dev/logo.svg
// @match        https://www.douban.com/group/*
// @require      https://registry.npmmirror.com/vue/3.4.22/files/dist/vue.global.prod.js
// @grant        GM_addStyle
// ==/UserScript==

(t=>{if(typeof GM_addStyle=="function"){GM_addStyle(t);return}const o=document.createElement("style");o.textContent=t,document.head.append(o)})(' *,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}:root,[data-theme]{background-color:var(--fallback-b1,oklch(var(--b1)/1));color:var(--fallback-bc,oklch(var(--bc)/1))}@supports not (color: oklch(0% 0 0)){:root{color-scheme:light;--fallback-p: #491eff;--fallback-pc: #d4dbff;--fallback-s: #ff41c7;--fallback-sc: #fff9fc;--fallback-a: #00cfbd;--fallback-ac: #00100d;--fallback-n: #2b3440;--fallback-nc: #d7dde4;--fallback-b1: #ffffff;--fallback-b2: #e5e6e6;--fallback-b3: #e5e6e6;--fallback-bc: #1f2937;--fallback-in: #00b3f0;--fallback-inc: #000000;--fallback-su: #00ca92;--fallback-suc: #000000;--fallback-wa: #ffc22d;--fallback-wac: #000000;--fallback-er: #ff6f70;--fallback-erc: #000000}@media (prefers-color-scheme: dark){:root{color-scheme:dark;--fallback-p: #7582ff;--fallback-pc: #050617;--fallback-s: #ff71cf;--fallback-sc: #190211;--fallback-a: #00c7b5;--fallback-ac: #000e0c;--fallback-n: #2a323c;--fallback-nc: #a6adbb;--fallback-b1: #1d232a;--fallback-b2: #191e24;--fallback-b3: #15191e;--fallback-bc: #a6adbb;--fallback-in: #00b3f0;--fallback-inc: #000000;--fallback-su: #00ca92;--fallback-suc: #000000;--fallback-wa: #ffc22d;--fallback-wac: #000000;--fallback-er: #ff6f70;--fallback-erc: #000000}}}html{-webkit-tap-highlight-color:transparent}:root{color-scheme:light;--in: 72.06% .191 231.6;--su: 64.8% .15 160;--wa: 84.71% .199 83.87;--er: 71.76% .221 22.18;--pc: 89.824% .06192 275.75;--ac: 15.352% .0368 183.61;--inc: 0% 0 0;--suc: 0% 0 0;--wac: 0% 0 0;--erc: 0% 0 0;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 49.12% .3096 275.75;--s: 69.71% .329 342.55;--sc: 98.71% .0106 342.55;--a: 76.76% .184 183.61;--n: 32.1785% .02476 255.701624;--nc: 89.4994% .011585 252.096176;--b1: 100% 0 0;--b2: 96.1151% 0 0;--b3: 92.4169% .00108 197.137559;--bc: 27.8078% .029596 256.847952}@media (prefers-color-scheme: dark){:root{color-scheme:dark;--in: 72.06% .191 231.6;--su: 64.8% .15 160;--wa: 84.71% .199 83.87;--er: 71.76% .221 22.18;--pc: 13.138% .0392 275.75;--sc: 14.96% .052 342.55;--ac: 14.902% .0334 183.61;--inc: 0% 0 0;--suc: 0% 0 0;--wac: 0% 0 0;--erc: 0% 0 0;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 65.69% .196 275.75;--s: 74.8% .26 342.55;--a: 74.51% .167 183.61;--n: 31.3815% .021108 254.139175;--nc: 74.6477% .0216 264.435964;--b1: 25.3267% .015896 252.417568;--b2: 23.2607% .013807 253.100675;--b3: 21.1484% .01165 254.087939;--bc: 74.6477% .0216 264.435964}}[data-theme=light]{color-scheme:light;--in: 72.06% .191 231.6;--su: 64.8% .15 160;--wa: 84.71% .199 83.87;--er: 71.76% .221 22.18;--pc: 89.824% .06192 275.75;--ac: 15.352% .0368 183.61;--inc: 0% 0 0;--suc: 0% 0 0;--wac: 0% 0 0;--erc: 0% 0 0;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 49.12% .3096 275.75;--s: 69.71% .329 342.55;--sc: 98.71% .0106 342.55;--a: 76.76% .184 183.61;--n: 32.1785% .02476 255.701624;--nc: 89.4994% .011585 252.096176;--b1: 100% 0 0;--b2: 96.1151% 0 0;--b3: 92.4169% .00108 197.137559;--bc: 27.8078% .029596 256.847952}[data-theme=dark]{color-scheme:dark;--in: 72.06% .191 231.6;--su: 64.8% .15 160;--wa: 84.71% .199 83.87;--er: 71.76% .221 22.18;--pc: 13.138% .0392 275.75;--sc: 14.96% .052 342.55;--ac: 14.902% .0334 183.61;--inc: 0% 0 0;--suc: 0% 0 0;--wac: 0% 0 0;--erc: 0% 0 0;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 65.69% .196 275.75;--s: 74.8% .26 342.55;--a: 74.51% .167 183.61;--n: 31.3815% .021108 254.139175;--nc: 74.6477% .0216 264.435964;--b1: 25.3267% .015896 252.417568;--b2: 23.2607% .013807 253.100675;--b3: 21.1484% .01165 254.087939;--bc: 74.6477% .0216 264.435964}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.btn{display:inline-flex;height:3rem;min-height:3rem;flex-shrink:0;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;flex-wrap:wrap;align-items:center;justify-content:center;border-radius:var(--rounded-btn, .5rem);border-color:transparent;border-color:oklch(var(--btn-color, var(--b2)) / var(--tw-border-opacity));padding-left:1rem;padding-right:1rem;text-align:center;font-size:.875rem;line-height:1em;gap:.5rem;font-weight:600;text-decoration-line:none;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);border-width:var(--border-btn, 1px);animation:button-pop var(--animation-btn, .25s) ease-out;transition-property:color,background-color,border-color,opacity,box-shadow,transform;--tw-text-opacity: 1;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);outline-color:var(--fallback-bc,oklch(var(--bc)/1));background-color:oklch(var(--btn-color, var(--b2)) / var(--tw-bg-opacity));--tw-bg-opacity: 1;--tw-border-opacity: 1}.btn-disabled,.btn[disabled],.btn:disabled{pointer-events:none}:where(.btn:is(input[type=checkbox])),:where(.btn:is(input[type=radio])){width:auto;-webkit-appearance:none;-moz-appearance:none;appearance:none}.btn:is(input[type=checkbox]):after,.btn:is(input[type=radio]):after{--tw-content: attr(aria-label);content:var(--tw-content)}@media (hover: hover){.btn:hover{--tw-border-opacity: 1;border-color:var(--fallback-b3,oklch(var(--b3)/var(--tw-border-opacity)));--tw-bg-opacity: 1;background-color:var(--fallback-b3,oklch(var(--b3)/var(--tw-bg-opacity)))}@supports (color: color-mix(in oklab,black,black)){.btn:hover{background-color:color-mix(in oklab,oklch(var(--btn-color, var(--b2)) / var(--tw-bg-opacity, 1)) 90%,black);border-color:color-mix(in oklab,oklch(var(--btn-color, var(--b2)) / var(--tw-border-opacity, 1)) 90%,black)}}@supports not (color: oklch(0% 0 0)){.btn:hover{background-color:var(--btn-color, var(--fallback-b2));border-color:var(--btn-color, var(--fallback-b2))}}.btn.glass:hover{--glass-opacity: 25%;--glass-border-opacity: 15%}.btn-outline.btn-primary:hover{--tw-text-opacity: 1;color:var(--fallback-pc,oklch(var(--pc)/var(--tw-text-opacity)))}@supports (color: color-mix(in oklab,black,black)){.btn-outline.btn-primary:hover{background-color:color-mix(in oklab,var(--fallback-p,oklch(var(--p)/1)) 90%,black);border-color:color-mix(in oklab,var(--fallback-p,oklch(var(--p)/1)) 90%,black)}}.btn-disabled:hover,.btn[disabled]:hover,.btn:disabled:hover{--tw-border-opacity: 0;background-color:var(--fallback-n,oklch(var(--n)/var(--tw-bg-opacity)));--tw-bg-opacity: .2;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));--tw-text-opacity: .2}@supports (color: color-mix(in oklab,black,black)){.btn:is(input[type=checkbox]:checked):hover,.btn:is(input[type=radio]:checked):hover{background-color:color-mix(in oklab,var(--fallback-p,oklch(var(--p)/1)) 90%,black);border-color:color-mix(in oklab,var(--fallback-p,oklch(var(--p)/1)) 90%,black)}}}.footer{display:grid;width:100%;grid-auto-flow:row;place-items:start;-moz-column-gap:1rem;column-gap:1rem;row-gap:2.5rem;font-size:.875rem;line-height:1.25rem}.footer>*{display:grid;place-items:start;gap:.5rem}@media (min-width: 48rem){.footer{grid-auto-flow:column}.footer-center{grid-auto-flow:row dense}}.btn:active:hover,.btn:active:focus{animation:button-pop 0s ease-out;transform:scale(var(--btn-focus-scale, .97))}@supports not (color: oklch(0% 0 0)){.btn{background-color:var(--btn-color, var(--fallback-b2));border-color:var(--btn-color, var(--fallback-b2))}.btn-primary{--btn-color: var(--fallback-p)}}@supports (color: color-mix(in oklab,black,black)){.btn-outline.btn-primary.btn-active{background-color:color-mix(in oklab,var(--fallback-p,oklch(var(--p)/1)) 90%,black);border-color:color-mix(in oklab,var(--fallback-p,oklch(var(--p)/1)) 90%,black)}}.btn:focus-visible{outline-style:solid;outline-width:2px;outline-offset:2px}.btn-primary{--tw-text-opacity: 1;color:var(--fallback-pc,oklch(var(--pc)/var(--tw-text-opacity)));outline-color:var(--fallback-p,oklch(var(--p)/1))}@supports (color: oklch(0% 0 0)){.btn-primary{--btn-color: var(--p)}}.btn.glass{--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);outline-color:currentColor}.btn.glass.btn-active{--glass-opacity: 25%;--glass-border-opacity: 15%}.btn-outline.btn-primary{--tw-text-opacity: 1;color:var(--fallback-p,oklch(var(--p)/var(--tw-text-opacity)))}.btn-outline.btn-primary.btn-active{--tw-text-opacity: 1;color:var(--fallback-pc,oklch(var(--pc)/var(--tw-text-opacity)))}.btn.btn-disabled,.btn[disabled],.btn:disabled{--tw-border-opacity: 0;background-color:var(--fallback-n,oklch(var(--n)/var(--tw-bg-opacity)));--tw-bg-opacity: .2;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));--tw-text-opacity: .2}.btn:is(input[type=checkbox]:checked),.btn:is(input[type=radio]:checked){--tw-border-opacity: 1;border-color:var(--fallback-p,oklch(var(--p)/var(--tw-border-opacity)));--tw-bg-opacity: 1;background-color:var(--fallback-p,oklch(var(--p)/var(--tw-bg-opacity)));--tw-text-opacity: 1;color:var(--fallback-pc,oklch(var(--pc)/var(--tw-text-opacity)))}.btn:is(input[type=checkbox]:checked):focus-visible,.btn:is(input[type=radio]:checked):focus-visible{outline-color:var(--fallback-p,oklch(var(--p)/1))}@keyframes button-pop{0%{transform:scale(var(--btn-focus-scale, .98))}40%{transform:scale(1.02)}to{transform:scale(1)}}@keyframes checkmark{0%{background-position-y:5px}50%{background-position-y:-2px}to{background-position-y:0}}.mockup-phone .display{overflow:hidden;border-radius:40px;margin-top:-25px}@keyframes modal-pop{0%{opacity:0}}@keyframes progress-loading{50%{background-position-x:-115%}}@keyframes radiomark{0%{box-shadow:0 0 0 12px var(--fallback-b1,oklch(var(--b1)/1)) inset,0 0 0 12px var(--fallback-b1,oklch(var(--b1)/1)) inset}50%{box-shadow:0 0 0 3px var(--fallback-b1,oklch(var(--b1)/1)) inset,0 0 0 3px var(--fallback-b1,oklch(var(--b1)/1)) inset}to{box-shadow:0 0 0 4px var(--fallback-b1,oklch(var(--b1)/1)) inset,0 0 0 4px var(--fallback-b1,oklch(var(--b1)/1)) inset}}@keyframes rating-pop{0%{transform:translateY(-.125em)}40%{transform:translateY(-.125em)}to{transform:translateY(0)}}@keyframes skeleton{0%{background-position:150%}to{background-position:-50%}}@keyframes toast-pop{0%{transform:scale(.9);opacity:0}to{transform:scale(1);opacity:1}}.fixed{position:fixed}.bottom-0{bottom:0}.bottom-8{bottom:2rem}.left-0{left:0}.right-0{right:0}.right-2{right:.5rem}.top-0{top:0}.mt-10{margin-top:2.5rem}.flex{display:flex}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.bg-neutral-800{--tw-bg-opacity: 1;background-color:rgb(38 38 38 / var(--tw-bg-opacity))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}:root{box-sizing:border-box;background-color:unset;color-scheme:unset;color:unset}.article-list .title a{text-decoration:none;white-space:unset}.topic-reply li .reply-doc p{margin:0}.reply-quote{width:unset} ');

(function (vue) {
  'use strict';

  const getUrlParams = (targetKey, url) => {
    const searchParams = new URLSearchParams(url || window.location.search);
    if (targetKey) {
      return searchParams.get(targetKey) || "";
    }
    const paramsObject = {};
    searchParams.forEach((value, key) => {
      paramsObject[key] = value;
    });
    return paramsObject;
  };
  function removeDomByList(list) {
    list.forEach((item) => {
      var _a;
      (_a = document.querySelectorAll(item)) == null ? void 0 : _a.forEach((item2) => item2.remove());
    });
  }
  const filterCommentText = /(d{2,})|谢谢姐妹|滴滴|谢谢|!|！|\s|(^[a-zA-Z]+$)|(^\d+$)/gi;
  const _hoisted_1 = { class: "fixed bottom-8 right-2 btn btn-primary" };
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "App",
    setup(__props) {
      const fixPhone = () => {
        const body = document.querySelector("body");
        if (body) {
          body.style.boxSizing = "border-box";
          body.style.width = "100vw";
          body.style.maxWidth = "800px";
          body.style.padding = "10px 10px 0 10px";
        }
        const a = document.querySelector(".topic-content");
        if (a) {
          a.style.display = "flex";
          a.style.flexDirection = "column";
        }
        const wrapper = document.getElementById("wrapper");
        if (wrapper) {
          wrapper.style.width = "100%";
        }
        const doc = document.querySelector(".topic-doc");
        if (doc) {
          doc.style.width = "100%";
          doc.style.padding = "10px";
          doc.style.boxSizing = "border-box";
        }
      };
      const removeAd = () => {
        const contentDiv = document.getElementById("content");
        const articleDiv = document.querySelector(".article");
        if (articleDiv && contentDiv) {
          contentDiv.appendChild(articleDiv);
        }
        const strList = [".grid-16-8", ".sns-bar", "#db-nav-group", "#db-global-nav", ".comment-form", "#footer", "#landing-bar", ".txd"];
        removeDomByList(strList);
      };
      const removeComment = () => {
        let count2 = 0;
        document.querySelectorAll(".reply-content").forEach((item) => {
          var _a, _b;
          const dom = item;
          const content = dom.innerText.replace(filterCommentText, "");
          if (!content || ["d", "D", "牛", "，", ","].includes(content)) {
            count2++;
            (_b = (_a = dom.parentElement) == null ? void 0 : _a.parentElement) == null ? void 0 : _b.remove();
          } else {
            dom.innerText = content;
          }
        });
        return count2;
      };
      const setQa = () => {
        const qaData = getUrlParams("qa");
        if (qaData) {
          const qaList = JSON.parse(qaData);
          setTimeout(() => {
            document.querySelectorAll(".question-content").forEach((item, index) => {
              if (qaList[index]) {
                item.innerHTML = qaList[index].answer;
              }
            });
          }, 600);
        }
      };
      const count = vue.ref(0);
      vue.onMounted(() => {
        console.log("✨ douban-group 脚本 ✨");
        fixPhone();
        removeAd();
        count.value = removeComment();
        setQa();
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, " ✨ 已移除无效评论" + vue.toDisplayString(count.value) + "条 ", 1);
      };
    }
  });
  vue.createApp(_sfc_main).mount(
    (() => {
      const app = document.createElement("div");
      app.setAttribute("id", "douban-group");
      document.body.append(app);
      return app;
    })()
  );

})(Vue);