const Discord = require('discord.js')
const client = new Discord.Client()
const planning = client.channels.get('493806625145225222')
const AIDNurl = "https://planning.univ-ubs.fr/direct/gwtdirectplanning/rss?data=bd72d825015315fe3d08f214effdde8df232d2abbea78b6a952dbe726aeb10c6dbbaf456c40409e5da98cf1172bf16b81a2e6e73a2ee14158758a151cfe0fb9a061f7968f1d954af"
const SAIMurl = "https://planning.univ-ubs.fr/direct/gwtdirectplanning/rss?data=bd72d825015315fe3d08f214effdde8d4909c2aa842c05583dd2c073e61430dbdbbaf456c40409e5da98cf1172bf16b81a2e6e73a2ee14158758a151cfe0fb9a061f7968f1d954af"

function getPlanning() {
	http.get(SAIMurl, (res) => {
	  const { statusCode } = res;
	  const contentType = res.headers['content-type'];

	  let rawData = '';
	  res.on('data', (chunk) => { rawData += chunk; });
	  res.on('end', () => {
	    try {
	      const parsedData = JSON.parse(rawData);
	      console.log(parsedData);
	    } catch (e) {
	      console.error(e.message);
	    }
	  });
	}).on('error', (e) => {
	  console.error(`Got error: ${e.message}`);
	});
}

client.on('ready', () => {
	var SAIM = getPlanning();
	planning.send(SAIM);
});

client.login('NDk0ODQzNTE5NjUyMDY5Mzc3.Do5cHQ.t3if75PYjxPOVf13rSwFtGPCUF4');
