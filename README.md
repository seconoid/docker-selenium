# Docker で Selenium 環境構築 (Node.js)
## 概要
Docker での Selenium テスト環境です。

Selenium では WebDriver を利用してブラウザ操作することができます。
つまり、Selenium でブラウザを操作 -> 想定通りに動作することを確認 といったテストをすることができます。

また、テストを実行すると VNCView でブラウザが操作されていることも確認することができます。

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
$ make build
$ make serve

$ docker-compose ps
      Name                   Command            State            Ports
-------------------------------------------------------------------------------
selenium_chrome_1   /opt/bin/entry_point.sh     Up       0.0.0.0:5900->5900/tcp
selenium_hub_1      /opt/bin/entry_point.sh     Up       0.0.0.0:4444->4444/tcp
selenium_nodejs_1   docker-entrypoint.sh node   Exit 0
```

### VNCViewer起動
ブラウザの様子を確認しながらテストすることができます。
VNCView を起動しなくてもテストは実行されます。

```bash
$ make open_vnc
```

以下の画面が表示されればOKです。

![screenshot](https://api.monosnap.com/file/download?id=VDeDjYw9OiednYqAsZzG4cGV10KTUG)

### テスト実行
サンプルテストを実行します。

```bash
make test


Yahooポータルサイト
    ✓ 検索ボックスに入力する (8627ms)


  1 passing (9s)
```

テストがpassすればOKです。

VNCView ではブラウザが操作されていることが確認できます。

### 終了

```bash
$ make down
```

## テストコード

javascript で記述します。

https://qiita.com/tonio0720/items/70c13ad304154d95e4bc#%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%E3%82%92%E6%92%AE%E3%82%8B

が参考になると思います。
