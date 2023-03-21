# webpack dev env

## 機能

- Pug ( HTML 可能 )
- Sass ( Dart Sass )
- jQuery
- JavaScript モジュール構文
- 画像圧縮 ( imagemin )
- コードフォーマット ( prettier )
- ベンダープレフィックス自動付与 ( PostCSS / autoprefixer )
- 同一メディアクエリの集約（ PostCSS / mqpacker ）
- ブラウザホットリロード ( browser-sync )

## セットアップ

サポートしているバージョン

- node.js v14.18.1 / v16.4.2
- yarn v1.22.17

```
$ yarn
$ yarn dev
```

ブラウザが立ち上がります。

## デプロイ

```
$ yarn build
```

dist フォルダ内をアップロードします。
