import { ITocList } from "@/common/editor/create-toc";
import { IPanelState } from "@/typings/modules/panel";

const state: IPanelState = {
  toc: [],
  export: {},
};

const getters = {
  isEmptyToc: (moduleState: IPanelState) => {
    return !!moduleState.toc.length;
  },
};

const mutations = {
  SYNC_TOC: (moduleState: IPanelState, value: Array<ITocList>) => {
    moduleState.toc = value;
  },
};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
