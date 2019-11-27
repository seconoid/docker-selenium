const fs = require('fs');
const { promisify } = require('util');
const webdriver = require("selenium-webdriver");
const { Builder, By, until } = webdriver;

const TIMEOUT_MILLISEC = 10000;
const SCREENSHOT_PATH = 'scripts/images/'

let driver;

describe("Google検索実行", () => {
  // テスト実行前の処理
  // ここではブラウザを起動している
  before(() => {
    driver = new Builder()
      .forBrowser("chrome")
      .usingServer("http://hub:4444/wd/hub")
      .build();
  });

  // テスト実行後の処理
  // ここではブラウザを終了している
  after(() => {
    return driver.quit();
  });

  // テスト
  it("検索ボックスに入力", async () => {
    // テスト対象のページへ遷移
    await driver.get("https://www.google.com/");

    // 検索ボックスにキーワードを入力
    await driver
      .findElement(By.name("q"))  // name属性で検索ボックス指定
      .sendKeys("docker selenium"); // キーワードを入力

    // 検索を実行
    await driver
      .findElement(By.name("btnK")) // name属性で検索ボタンを指定
      .click(); // クリックを実行

    // 要素の表示を待つ
    await driver.wait(until.elementLocated(By.id('rcnt')), TIMEOUT_MILLISEC);

    // スクリーンショット撮影
    let base64 = await driver.takeScreenshot();
    let buffer = Buffer.from(base64, 'base64');

    // bufferを保存
    let now = new Date();
    await promisify(fs.writeFile)(SCREENSHOT_PATH + formatDate(now) + '.png', buffer);
  });
});

function formatDate(date) {
  let yyyy = date.getFullYear();
  let MM = ("0" + (date.getMonth() + 1)).slice(-2);
  let dd = ("0" + date.getDate()).slice(-2);
  let hh = ("0" + date.getHours()).slice(-2);
  let mm = ("0" + date.getMinutes()).slice(-2);
  let ss = ("0" + date.getSeconds()).slice(-2);

  return yyyy + MM + dd + hh + mm + ss;
}
