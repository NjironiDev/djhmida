const Commando = require('discord.js-commando');
const path = require('path');

const { OWNER_ID, BOT_TOKEN, PREFIX, BOT_INVITE_LINK } = require('./constants');

const client = new Commando.CommandoClient({ owner: OWNER_ID, commandPrefix: PREFIX, invite: BOT_INVITE_LINK });

client.on('ready', () => {
  try {
    client.registry
      .registerDefaultGroups()
      .registerDefaultTypes()
      .registerGroups([
        ['general', 'General'],
        ['fun', 'Fun'],
        ['misc', 'Misc'],
      ])
      .registerCommandsIn(path.join(__dirname, 'commands'));
    console.log('DJ Hmida is ready!');
  } catch (error) {
    console.error(error.message);
  }
});

client.login(BOT_TOKEN);
