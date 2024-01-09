import { CachedMetadata, EventRef, TAbstractFile, TFile } from "obsidian";
import { UApp } from "../types";
import { isFile, isFolder } from "./entries";

declare let app: UApp;

/**
 * ファイルを開いたときに実行する処理を設定します
 *
 * @returns 処理の解除処理
 */
export function setOnFileOpenEvent(
  handler: (file: TFile | null) => any,
  ctx?: any
): () => void {
  const ref = app.workspace.on("file-open", handler, ctx);
  return () => {
    app.workspace.offref(ref);
  };
}

/**
 * プロパティが変更されたときに実行する処理を設定します
 *
 * @returns 処理の解除処理
 */
export function setOnPropertiesChangedEvent(
  handler: (file: TFile, data: string, cache: CachedMetadata) => any,
  ctx?: any
): () => void {
  const ref = app.metadataCache.on("changed", handler, ctx);
  return () => {
    app.metadataCache.offref(ref);
  };
}

/**
 * ファイルが作成されたときに実行する処理を設定します
 * WARN:
 * このイベントはVaultロード時(workspace読み込み時)にも発生します
 * それが意図通りでない場合は onload ではなく onLayoutReady で呼び出してください
 *
 * @returns 処理の解除処理
 */
export function setOnCreateFileEvent(
  handler: (file: TFile) => any,
  ctx?: any
): () => void {
  const ref = app.vault.on(
    "create",
    (entry: TAbstractFile) => {
      if (!isFile(entry)) {
        return;
      }

      handler(entry);
    },
    ctx
  );
  return () => {
    app.vault.offref(ref);
  };
}
