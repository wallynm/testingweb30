browser.addCommand('getBodySize', function(property) {
  var el     = 'body .ni-container';
  var elSize = browser.getElementSize(el);

  if(!_.isUndefined(property))
    return elSize[property];

  return elSize;
});

browser.addCommand('baseUrl', function(url) {
  if(_.isEmpty(url))
    return browser.options.baseUrl;
  return browser.options.baseUrl + url;
});

browser.addCommand('pageLoad', function() {
  var currentUrl = browser.url();
  browser.waitUntil(function() {
    return browser.url().then(function(url) {
      return url.indexOf(currentUrl) > -1;
    });
  }, 5000);
});

browser.addCommand('scrollEl', function(selector, scrollAmount) {
  scrollAmount = scrollAmount || 0;
  element = browser.element(selector);
  var scrollTop = parseInt(browser.getAttribute(selector, 'scrollTop'));

  return browser.execute('document.querySelector(arguments[0]).scrollTop = arguments[1]', selector, scrollAmount);
});