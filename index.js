const { Builder, By, Key, until } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const config = require('./config');


(async () => {
  const driver = await new Builder().forBrowser('firefox').build()
  try {
    const loginpage = `${config.url}/#/patient`
    await driver.get(loginpage)
    
    //wait to the login input box is available
    //https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/until.html
    let login = await driver.wait(until.elementLocated(By.id('txtloginemail')))
    //assuming if login is visible, password is as well
    await login.sendKeys(config.username)
    await driver.findElement(By.id('txtloginpassword')).sendKeys(config.password)
    const btnclass = 'landing-box__button button localizejs button__brand'

    //https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_By.html
    const btn = driver.findElement(By.className(btnclass))
    await btn.click()
    
    const title = await driver.getTitle()
    console.log(title);
} catch (e) {
  console.log(e)
} finally {
  driver.quit();
}
}) ();
