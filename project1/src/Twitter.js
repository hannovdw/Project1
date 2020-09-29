import React from "react";
const Twit = require('twit')

const apikey = 'YQqac0Z2hYOBfEGBCFHoQtePm'
const apiSecretKey = 'XCabmUcgK6woNUWzvh3ZE2ujNCtm7tfGl0Kj5PrICSqV2Z6e5R'
const accessToken = '1304860550585819139-NGR8bvTQAJmDZVG9hFvBYfcse4FilY'
const accessTokenSecret = 'EvLf73ix8n9Dr6pUs5GdN4aekmy9FEAv6u7ULv2lLuBEh'

function getTwit()
{
    var T = new Twit({
        consumer_key:         apikey,
        consumer_secret:      apiSecretKey,
        access_token:         accessToken,
        access_token_secret:  accessTokenSecret,
      });

      T.get('search/tweets', { q: '#ElonMusk since:2020-04-15', count: 10 }, function(err, data, response) {
//        const tweets = data.statuses
 //       .map(tweet => `LANG: ${(tweet.text)} : ${tweet.text}`) 
 //       .map(tweet => tweet.text)
 //       .filter(tweet => tweet.toLowerCase().includes('ElonMusk'));
 //       console.log(tweets);
        })
 //     return tweets
}

function Twitter(){
    return(
      <div>
       <h1>{getTwit()}</h1> 
      </div>
    );
  }
  
  export default Twitter;