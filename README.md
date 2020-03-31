## Setup
### latest nodejs
Get from https://nodejs.org


### selenium web driver (and other dependencies)
Once node is installed go to the project directory (where you checked out the project) and run
```
npm install
```

### setup config.js
In project directory create the config.js (same place as README.md) with the following structure (replace <> with real values)
```javascript
module.exports = {
  username:'<test username>',
  password:'<test password>',
  url: '<test url>'
}
```

### install needed drivers gecko, chrome and setup path
Read this mozilla doc page
https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment


### run test
Again in project director, run this command
```
node .
```
NOTE: does not run on linux cause...  
You will get this error

```
ElementNotInteractableError: Element <input id="txtloginemail" class="landing-box__input" name="" type="email"> is not reachable by keyboard
```