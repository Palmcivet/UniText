import Vue from "vue";
import VueI18n from "vue-i18n";
import VueShortkey from "vue-shortkey";
import { ipcRenderer, remote } from "electron";
import "remixicon/fonts/remixicon.css";

import store from "@/store/index";
import Main from "@/view/Main.vue";
import { localesMessage } from "@/app/i18n/message";
import { getContextMenu } from "@/app/main/menu/context";
import { IPC_BOOTSTRAP } from "@/common/channel";
import { IBootArgs } from "@/typings/bootstrap";
import { VueBus } from "./bus";
import "@/styles/main.less";

let defaultLocale = "";

ipcRenderer.on(
  IPC_BOOTSTRAP.DATA_REPLY,
  (event, message: { locale: string; args: IBootArgs }) => {
    const { locale, args } = message;
    defaultLocale = locale;
    args.error.length && store.commit("notification/SET_ERROR", args.error);
    store.dispatch("LOAD_SETTING", args.notesPath);
    store.commit("LOAD_CONTEXT", getContextMenu(remote.getCurrentWindow(), locale));
  }
);
ipcRenderer.send(IPC_BOOTSTRAP.DATA_FETCH);

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: defaultLocale,
  messages: localesMessage,
  silentTranslationWarn: true,
});

Vue.use(VueShortkey);
Vue.config.productionTip = false;
Vue.prototype.$bus = VueBus;

new Vue({
  i18n,
  store,
  components: {
    Main,
  },
  template: "<Main></Main>",
}).$mount("#app");
