import React from "react";

function twitter(){
  return(
    <div >
    </div>
    
  );
}

var Twit = require('twit')

var T = new Twit({
  consumer_key:         'YQqac0Z2hYOBfEGBCFHoQtePm',
  consumer_secret:      'XCabmUcgK6woNUWzvh3ZE2ujNCtm7tfGl0Kj5PrICSqV2Z6e5R',
  access_token:         '1304860550585819139-lS0xCmPTuGFNl7wBRo3bRxzMQo0QfB',
  access_token_secret:  'XvwrjXfWlFSUz1KMHC0TMZUYMHdl2RQ7hl4QaKcWAWVVF',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})

T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
    console.log(data)
  })

export default twitter;