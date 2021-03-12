import { ActionContext, ActionTree, GetterTree, MutationTree } from "vuex";

import { BUS_EDITOR } from "@/common/channel/bus";
import { Bus } from "@/renderer/plugins/VueBus";
import { IRootState } from "@/typings/vuex";
import { IStatusPanelState } from "@/typings/vuex/statusPanel";

const state: IStatusPanelState = {
  toc: [],
  imgList: new Set(),
  export: {},
};

const getters: GetterTree<IStatusPanelState, IRootState> = {
  isEmptyToc: (_: IStatusPanelState) => {
    return !!_.toc.length;
  },
};

const mutations: MutationTree<IStatusPanelState> = {
  SYNC_TOC: (_: IStatusPanelState, value: Array<ITocItem>) => {
    _.toc = value;
  },
  SYNC_IMGLIST: (_: IStatusPanelState, value: Array<string>) => {
    value.forEach((item) => _.imgList.add(item));
  },
};

const actions: ActionTree<IStatusPanelState, IRootState> = {
  EXPORT: (_: ActionContext<IStatusPanelState, IRootState>, args) => {
    console.log(...args);
  },

  LISTEN_FOR_STATUS: (_: ActionContext<IStatusPanelState, IRootState>) => {
    const { commit } = _;

    Bus.on(BUS_EDITOR.SYNC_TOC, (toc) => commit("SYNC_TOC", toc));
    Bus.on(BUS_EDITOR.SYNC_IMGLIST, (list) => commit("SYNC_IMGLIST", list));
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
