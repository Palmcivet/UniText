import { IDocumentConfig, IDocumentFormat } from "../document";

/**
 * @deprecated
 */
export enum EI18n {
  ZH_CN,
  EN_US,
}

/**
 * @enum { EStartup } 启动后呈现的内容
 */
export enum EStartup {
  BLANK = "BLANK",
  CREATE = "CREATE",
  SCHEDULE = "SCHEDULE",
}

/**
 * @enum { EPanelType } 右侧面板展示的信息类型
 */
export enum EPanelType {
  TOC = "TOC",
  INFO = "INFO",
  EXPORT = "EXPORT",
}

/**
 * @enum { EEditMode } 编辑模式
 */
export enum EEditMode {
  SOURCE = "SOURCE",
  WYSIWYG = "WYSIWYG",
  RICHTEXT = "RICHTEXT",
}

/**
 * @enum { ETypeMode } 打字模式
 */
export enum ETypeMode {
  ZEN = "ZEN",
  FOCUS = "FOCUS",
  TYPER = "TYPER",
  NORMAL = "NORMAL",
}

/**
 * @interface 界面的默认设置，加载时载入
 */
export interface IPreferenceInterface {
  /**
   * @field 显示左侧边栏
   */
  showSideBar: boolean;
  /**
   * @field 显示状态栏
   */
  showStatusBar: boolean;
  /**
   * @field 显示右侧面板
   */
  showPanel: boolean;
  /**
   * @field 右侧面板是否悬浮
   */
  panelFloat: boolean;
  /**
   * @field 右侧面板展示的信息类型
   */
  panelType: EPanelType;
  /**
   * @field 阅读模式
   * @deprecated
   */
  readMode: boolean;
  /**
   * @field 查看编辑状态
   * - 对于源码模式，查看预览
   * - 对于 WYSIWYG，查看源码
   */
  dbColumn: boolean;
  /**
   * @field 编辑模式
   */
  editMode: EEditMode;
  /**
   * @field 输入模式
   */
  typeMode: ETypeMode;
}

/**
 * @interface 软件的默认设置，启动时载入
 */
export interface IPreferenceWorkBench {
  /**
   * @file 启动后呈现的内容
   */
  startup: EStartup;
  /**
   * @field 记录最近打开的文件
   */
  saveRecent: boolean;
  /**
   * @field 自动打开上一次的文件
   */
  autoOpen: boolean;
  /**
   * @field 自动保存
   */
  autoSave: boolean;
  /**
   * @field 自动保存时间间隔
   */
  saveDelay: number;
}

/**
 * @interface 文件管理器的默认设置
 */
export interface IPreferenceFileManager {
  /**
   * @field 笔记库位置
   */
  folderDir: string;
  /**
   * @field 忽略文件
   */
  ignoreFile: Array<string>;
  /**
   * @field 显示指示线
   */
  showIndent: boolean;
}

/**
 * @interface 编辑器的默认设置
 */
export interface IPreferenceEditor {
  /**
   * @field 换行
   */
  lineWrap: boolean;
  /**
   * @field 显示迷你地图
   */
  showMiniMap: boolean;
  /**
   * @field 显示行号
   */
  showLineNumber: boolean;
  /**
   * @field 高亮当前行
   */
  highlightLine: boolean;
}

/**
 * @interface 文档的默认设置
 */
export interface IPreferenceDocument extends IDocumentFormat, IDocumentConfig {
  /**
   * @field 默认分类
   */
  category: string;
}

/**
 * @interface preference.json 的类型
 */
export interface IPreference {
  interface: IPreferenceInterface;
  workBench: IPreferenceWorkBench;
  fileManager: IPreferenceFileManager;
  editor: IPreferenceEditor;
  document: IPreferenceDocument;
}
