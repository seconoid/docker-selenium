# selenium
## 概要
Docker での Selenium テスト環境です。

Selenium では WebDriver を利用してブラウザ操作することができます。
つまり、Selenium でブラウザを操作 -> 想定通りに動作することを確認 といったテストをすることができます。

## 事前準備
* docker
  * docker-compose が利用できればOK

## 使い方
### ダウンロード

```bash
$ git clone https://github.com/sikkimtemi/selenium
$ cd selenium
$ docker-compose up -d
```

正常に起動できていれば下記のようになります。

```bash
$ docker-compose ps
    Name               Command           State           Ports
-----------------------------------------------------------------------
chrome         /opt/bin/entry_point.sh   Up      0.0.0.0:5900->5900/tcp
python         tail -f /dev/null         Up
selenium-hub   /opt/bin/entry_point.sh   Up      0.0.0.0:4444->4444/tcp
```

### 終了方法

```bash
$ docker-compose down
```

### サンプルスクリプトの実行

```bash
$ docker exec -it python /root/script/sample.py
```

実行するとGoogleにアクセスしてスクリーンショットを取得します。
script/imagesディレクトリに画像ファイルが保存されます。

### VNC接続によるデバッグ
`VNC`で接続するとブラウザの動きを確認しながらデバッグすることができます。Docker環境のIPアドレスにVNC(デフォルトは5900番ポート)でアクセスした上で、サンプルスクリプトを実行してみてください。デフォルトのパスワードは"secret"です。
