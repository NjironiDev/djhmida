const Commando = require('discord.js-commando');

module.exports = class PingCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'ping',
      group: 'general',
      memberName: 'ping',
      description: 'Displays your current ping',
    });
  }

  async run(message) {
    const sentMsg = await message.reply('Pinging...');
    sentMsg.edit(`🏓 Pong! ${sentMsg.createdTimestamp - message.createdTimestamp}ms.`);
  }
};
