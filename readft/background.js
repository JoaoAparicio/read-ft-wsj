'use strict';

var ref = 'https://www.facebook.com/';

chrome.webRequest.onBeforeSendHeaders.addListener(function (details)
{
  var requestHeaders = details.requestHeaders;

  var ref_is_set = false;

  for (var i = 0; i < requestHeaders.length; i++) {
    if (requestHeaders[i].name === 'Referer') {
      requestHeaders[i].value = ref;
      ref_is_set = true;
    }
  }

  if (!ref_is_set) {
    requestHeaders.push({name: 'Referer', value: ref});
  }

  return {requestHeaders: requestHeaders};
},
{
  urls: ['<all_urls>']
}, ['blocking', 'requestHeaders']);
