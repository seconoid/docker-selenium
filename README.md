# Docker で Selenium 環境構築 (Node.js)
## 概要
Docker での Selenium テスト環境です。

Selenium では WebDriver を利用してブラウザ操作することができます。
つまり、Selenium でブラウザを操作 -> 想定通りに動作することを確認 といったテストをすることができます。

また、VNCで

## 事前準備
* docker
  * docker-compose が利用できればOK

## 使用方法
### ダウンロード

```bash
$ cd {project_path}
$ git clone https://github.com/seconoid/docker-selenium
```

### Selenium 起動

```bash
$ docker-compose up -d

$ docker-compose ps
      Name                   Command            State            Ports
-------------------------------------------------------------------------------
selenium_chrome_1   /opt/bin/entry_point.sh     Up       0.0.0.0:5900->5900/tcp
selenium_hub_1      /opt/bin/entry_point.sh     Up       0.0.0.0:4444->4444/tcp
selenium_nodejs_1   docker-entrypoint.sh node   Exit 0
```

### VNCViewer起動

1. ブラウザで `vnc:localhost:4444` にアクセス 「画面共有を開く」を選択
2. 接続先に `localhost`、 パスワードに `secret` を入力

以下の画面が表示されればOKです。

![screenshot](https://api.monosnap.com/file/download?id=VDeDjYw9OiednYqAsZzG4cGV10KTUG)

### テスト実行
サンプルテストを実行します。

```bash
docker-compose run --rm nodejs npm run test


Yahooポータルサイト
    ✓ 検索ボックスに入力する (8627ms)


  1 passing (9s)
```

テストがpassすればOKです。

VNCView ではブラウザが操作されていることが確認できます。
![screenshot](https://monosnap.com/file/8CfaH92FdhMqvjxP4WUmCIa8geo7qe)

### 終了

```bash
$ docker-compose down
```