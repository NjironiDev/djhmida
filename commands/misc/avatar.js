const Commando = require('discord.js-commando');

module.exports = class AvatarCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'avatar',
      group: 'misc',
      memberName: 'avatar',
      description: 'Displays your avatar',
    });
  }

  async run(message) {
    message.reply({
      files: [message.author.displayAvatarURL({ format: 'png' })],
    });
  }
};
