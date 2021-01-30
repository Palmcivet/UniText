import { TFileRoute } from "./sideBar";
import { IDocument } from "../document";

/**
 * @type 标识打开的标签
 */
export type TTab = {
  /**
   * @field 索引，标题的哈希字符串
   */
  order: string;
  /**
   * @field 标题
   */
  title: string;
};

/**
 * @interface 打开的文件除自身属性外需附加在编辑器中的状态
 */
export interface IFile extends IDocument {
  /**
   * @field 文件路径
   */
  fileName: TFileRoute;
  /**
   * @field 是否改动
   */
  needSave: boolean;
  /**
   * @field 是否临时文件
   */
  tempFile: boolean;
  /**
   * @field 打开文档的模式
   */
  readMode: boolean;
}

/**
 * @enum 工作台类别
 */
export enum EView {
  EDITOR,
  STARTUP,
  SETTING,
  SCHEDULE,
}

/**
 * @enum 设置的类型
 */
export enum ESettingType {
  PREFERENCE,
  KEYBINDING,
  SNIPPET,
  THEME,
}

/**
 * @interface 工作台的 state
 */
export interface IWorkBenchState {
  /**
   * @field 上一个标签
   */
  historyIndex: string;
  /**
   * @field 当前标签
   */
  currentIndex: string;
  /**
   * @field 打开的文档内容对象
   */
  currentGroup: { [index: string]: IFile };
  /**
   * @field 打开的文档标签
   */
  currentTabs: Array<TTab>;
  /**
   * @field 工作台类型
   */
  currentView: EView;
  /**
   * @field 设置的类型
   */
  settingType: ESettingType;
}
