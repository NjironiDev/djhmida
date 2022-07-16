const Commando = require('discord.js-commando');

module.exports = class SayCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'say',
      group: 'fun',
      memberName: 'say',
      description: 'Text to speech command',
    });
  }

  async run(message) {
    console.log('say', message);
  }
};
