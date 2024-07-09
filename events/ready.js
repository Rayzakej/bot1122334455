const { Events, ActivityType } = require('discord.js')
const client = require('../index.js')

client.on(Events.ClientReady, async (c) => {
  console.log(`${client.user.username} is Ready !`)
  client.user.setPresence({
    activities: [{ name: `/play`, type: ActivityType.Listening }],
    status: 'online',
  });
});