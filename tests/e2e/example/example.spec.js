module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('https://www.google.com')
      .waitForElementVisible('body', 1000)
      .assert.title('Google')
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', ['rembrandt van rijn', browser.Keys.ENTER])
      .pause(1000)
      .assert.containsText('#search div:nth-child(1) a',
        'Rembrandt - Wikipedia')
      .end();
  }
};