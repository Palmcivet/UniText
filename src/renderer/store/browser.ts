import { defineStore } from "pinia";

import { EBrowserType, IBrowserState } from "@/typings/store/browser";

export default defineStore({
  id: "browser",

  state: () =>
    ({
      browserType: EBrowserType.FILE,
      isShowBrowser: true,
    } as IBrowserState),

  getters: {},

  actions: {
    OPEN_PROJECT() {},
    /**
     * @description 收起 browser
     */
    TOGGLE_BROWSER() {
      this.isShowBrowser = !this.isShowBrowser;
    },

    SWITCH_BROWSER(type: EBrowserType) {
      this.browserType = type;
    },
  },
});
