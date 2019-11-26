const webdriver = require("selenium-webdriver");
const { Builder, By, until } = webdriver;

const TIMEOUT_MILLISEC = 10000;

let driver;

describe("Yahooポータルサイト", () => {
  before(() => {
    driver = new Builder()
      .forBrowser("chrome")
      .usingServer("http://hub:4444/wd/hub")
      .build();
  });

  after(() => {
    return driver.quit();
  });

  it("検索ボックスに入力する", async () => {
    await driver.get("https://www.yahoo.co.jp/");

    INPUT_XPATH =
      '//*[@id="wrapper"]/header/section[1]/div/form/fieldset/span/input';
    await driver.wait(
      until.elementLocated(By.xpath(INPUT_XPATH)),
      TIMEOUT_MILLISEC
    );
    await driver
      .findElement(By.xpath(INPUT_XPATH))
      .sendKeys("DockerでSeleniumを使う");
  });
});
