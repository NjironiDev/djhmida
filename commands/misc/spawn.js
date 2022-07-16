const Commando = require('discord.js-commando');

module.exports = class SpawnCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'spawn',
      group: 'misc',
      memberName: 'spawn',
      description: 'Spawns all the members ',
    });
  }

  async run(message) {
    message.channel.send('🧙‍♂️ @everyone Ban 3lik Laman!');
  }
};
