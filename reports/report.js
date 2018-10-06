$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Test.feature");
formatter.feature({
  "line": 2,
  "name": "Login Test",
  "description": "This feature talks about the positive and negative login scenarios\r\naksjdf;lkaj\r\nalsdkflkjashd\r\nlaksjdhfkljafsd",
  "id": "login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Tag1"
    }
  ]
});
formatter.before({
  "duration": 228228,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am able to access magento web page",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.i_am_able_to_access_magento_web_page()"
});
