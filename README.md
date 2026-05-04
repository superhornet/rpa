# rpa

Robotic Process Automation

`initial commands`

```bash
npm init -y
npm install --save-dev webdriverio @wdio/cli @wdio/local-runner @wdio/browser-runner \
  @wdio/cucumber-framework @wdio/spec-reporter \
  chromedriver
```

`Generate Webdriver IO config`

```bash
npx wdio config
```

```text
Test runner: local
Framework: cucumber
Spec files: ./features/**/*.feature
Step definitions: ./features/step-definitions/*.js
Reporter: spec
Services: chromedriver
Base URL: https://example.com
```
