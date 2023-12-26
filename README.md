# Carnelian

<img src="./logo.png" width=256 />

tadashi-aikawa専用のObsidianプラグイン。

> **Note**
> 上記のロゴ画像はAIで生成されています

## 開発の前提環境

- Ubuntu (macOSでも動きそう)
- [Bun] v1.0.19以上
- [Hot Reload]プラグイン

## 開発環境構築

### 依存パッケージのインストール

```console
bun i
```

### 設定ファイルの作成

`carnelianrc.json`を作成してください。

```json
{
  "vaultPath": "<Vaultのパス>"
}
```

## 開発コマンド

```console
bun dev
```

このコマンドは以下2つのことを行う。

- TypeScriptのファイルに変更があったら、[esbuild]が自動でビルドしてJavaScriptファイルを生成する
- `esbuild.config.mjs`の`FILES`に記載されたファイルに変更があったら、`PLUGIN_DIR`で指定したディレクトリ配下に自動でコピーする

```ts
// FILESのデフォルト (変更は不要なはず)
const FILES = ["main.js", "manifest.json", "styles.css"];
```

## リリース

TODO:


[Bun]: https://bun.sh/
[esbuild]: https://esbuild.github.io/
[Hot Reload]: https://github.com/pjeby/hot-reload

