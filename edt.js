const Discord = require('discord.js')
const client = new Discord.Client()
const planning = client.channels.find('id', 493806625145225222)

function longPoll_feed () {
	//make another request
	$.ajax({
			cache: false,
			dataType: 'json',
			type: "GET",
			url: "https://planning.univ-ubs.fr/direct/gwtdirectplanning/rss?data=bd72d825015315fe3d08f214effdde8df232d2abbea78b6a952dbe726aeb10c6dbbaf456c40409e52688752fc2b9ac75f66f57cac8cdd39f63398f4ea50c44b7061f7968f1d954af",
			error: function () {
				//don't flood the servers on error, wait 10 seconds before retrying
				setTimeout(longPoll_feed, 10*1000);
			},
			success: function (json) {
				display_event(json);

				//if everything went well, begin another request immediately
				//the server will take a long time to respond
				//how long? well, it will wait until there is another message
				//and then it will return it to us and close the connection.
				//since the connection is closed when we get data, we longPoll again
				longPoll_feed();
			}
		});
}

function display_event (json) {
	console.log('Update received!');
	console.log(json);
}

client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'ping') {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }
});

client.on('ready', () => {
	console.log('I am ready!');
	longPoll_feed();
});

client.login('NDk0ODQzNTE5NjUyMDY5Mzc3.Do5cHQ.t3if75PYjxPOVf13rSwFtGPCUF4');
