export enum IPC_PREFERENCE {
  SET_ITEM = "IPC::PREFERENCE_SET_ITEM",
  GET_ALL = "IPC::PREFERENCE_GET_ALL",
  GET_ALL_REPLY = "IPC::PREFERENCE_GET_ALL_REPLY",
}

export enum IPC_MENUMANAGER {
  POPUP_CONTEXT = "IPC::POP_CONTEXT",
  CLOSE_CONTEXT = "IPC::CLOSE_CONTEXT",
}

export enum IPC_FILE {
  OPEN = "IPC::OPEN",
  SAVE = "IPC::SAVE",
  OPEN_FOR_EDIT = "IPC::OPEN_FOR_EDIT",
  OPEN_FOR_VIEW = "IPC::OPEN_FOR_VIEW",
  REVEAL = "IPC::REVEAL",
  RENAME = "IPC::RENAME",
  DELETE = "IPC::DELETE",
  MARK_ADD = "IPC::MARK_ADD",
  MARK_DEL = "IPC::MARK_DEL",
}

export enum IPC_EXPORT {
  AS_PDF = "IPC::EXPORT_AS_PDF",
}

export enum IPC_IMAGE {
  SET_IMAGE = "IPC::SET_IMAGE",
  REG_IMAGE = "IPC::REG_IMAGE",
  CLEAN_CACHE = "IPC::CLEAN_CACHE",
}

export enum IPC_OTHER {
  SET_PATH_PRINCIPAL = "IPC::SET_PATH_PRINCIPAL",
  SET_PATH_AGENT = "IPC::SET_PATH_AGENT",
  SET_READ_MODE = "IPC::SET_READ_MODE",
  CHECK_UPDATE = "IPC::CHECK_UPDATE",
}

export enum IPC_NOTIFY {
  BOOTLOG_FETCH = "IPC::BOOTLOG_FETCH",
  BOOTLOG_REPLY = "IPC::BOOTLOG_REPLY",
  LOG = "IPC::LOG",
  ALARM = "IPC::ALARM",
}
