const Discord = require('discord.js')
const client = new Discord.Client()
const https = require('https')
const planning = client.channels.get('493806625145225222')

var FeedParser = require('feedparser');
var request = require('request'); // for fetching the feed
var req = request('http://somefeedurl.xml')
var feedparser = new FeedParser([options]);


req.on('response', function (res) {
  var stream = this; // `this` is `req`, which is a stream
  if (res.statusCode !== 200) {
    this.emit('error', new Error('Bad status code'));
  }
  else stream.pipe(feedparser);
});


feedparser.on('readable', function () {
  var stream = this; // `this` is `feedparser`, which is a stream
  var meta = this.meta; // **NOTE** the "meta" is always available in the context of the feedparser instance
  var item;

  while (item = stream.read()) {
    console.log(item);
		planning.send(item);
  }
});


client.on('ready', () => {
	console.log('I am ready!');
	planning.send("coucou!");
});

client.login('NDk0ODQzNTE5NjUyMDY5Mzc3.Do5cHQ.t3if75PYjxPOVf13rSwFtGPCUF4');
