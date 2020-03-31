const { Builder,Actions, By, Key, until } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const config = require('./config');


(async () => {
  const driver = await new Builder().forBrowser('firefox').build()
  const actions = driver.actions({async: true})
  try {
    const loginpage = `${config.url}/#/patient`
    await driver.get(loginpage)
    //wait for loading mask to go away, nothing is intractable till it does
    let loadingmask = await driver.wait(until.elementLocated(By.id('divLoading')))
    await driver.wait(until.elementIsNotVisible(loadingmask))
    console.log('having loading mask, wait for it to go away')
    //wait to the login input box is available
    //https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/until.html
    let login = await driver.wait(until.elementLocated(By.id('txtloginemail')))
    console.log('loading mask gone')
    //wait till the login input is visible, just in case
    await driver.wait(until.elementIsVisible(login))
    await login.clear()
    await login.sendKeys(config.username)
    
    let password = await driver.findElement(By.id('txtloginpassword'))
    
    await password.clear()
    await password.sendKeys(config.password)
    const btnclass = 'landing-box__button button localizejs button__brand'

    //https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_By.html
    const btn = driver.findElement(By.className(btnclass))
    await driver.wait(until.elementIsVisible(btn))
    let btnbind = await btn.getAttribute('data-bind')
    console.log(btnbind) //just prove we found the button
    await btn.click()
    const title = await driver.getTitle()
    console.log(title);
} catch (e) {
  console.log(e)
} finally {
  driver.quit();
}
}) ();
