#### Run these commands to set up a project 
- npm init –y
- npm install @wdio/cli

#### After Running the below command add the requirements accordingly
### npx wdio config
- Where is your automation backend located? On my local machine ( When you want to run the tests in the cloud, you can specify the remote location here.)
- Which framework do you want to use? Mocha
- Synchronous or asynchronous? Sync
- Where are test specs located? Choose the default
- Where are test specs located? Choose the default
- Which reporting tool to use? No
- Want to add a test service to setup? Chromedriver
- What is the base URL? https://experitest.com

#### Execute test using below command
- npx wdio wdio.conf.js


#### Enable Allure Reporting using below commands
- npm install @wdio/allure-reporter --save-dev
- add following configuration to wido.conf.js file  
    reporters: [['allure', {outputDir: 'allure-results',}]]

- open allure by using command
- allure generate allure-results && allure open


#### Mocha Setup
run the below command
- npm install @wdio/mocha-framework --save-dev
- npm install mocha chai --save-dev

Run test case using below command
- npm test
