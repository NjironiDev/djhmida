// djleave command to leave vc

const Commando = require('discord.js-commando');

module.exports = class LeaveCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'leave',
      group: 'misc',
      memberName: 'leave',
      description: 'leave',
    });
  }

  async run(message) {
    const { voice } = message.member;

    if (!voice.channelID) return message.reply('You must be in a voice channel 🙊');

    voice.channel.leave();
  }
};
