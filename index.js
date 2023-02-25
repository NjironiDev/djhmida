const Commando = require('discord.js-commando');
const path = require('path');

const { OWNER_ID, BOT_TOKEN, PREFIX, BOT_INVITE_LINK } = require('./constants');

const client = new Commando.CommandoClient({ owner: OWNER_ID, commandPrefix: PREFIX, invite: BOT_INVITE_LINK });

try {
  client.on('ready', () => {
    client.registry
      .registerDefaultGroups()
      .registerDefaultTypes()
      .registerGroups([
        ['general', 'General'],
        ['fun', 'Fun'],
        ['audio', 'Audio'],
        ['misc', 'Misc'],
      ])
      .registerCommandsIn(path.join(__dirname, 'commands'));
    console.log('DJ Hmida is ready!');
  });

  client.login(BOT_TOKEN);
} catch (error) {
  console.error(error.message);
}
