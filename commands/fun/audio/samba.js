const Commando = require('discord.js-commando');

const audio = 'https://cdn.discordapp.com/attachments/1075030694327242832/1077332903366754464/tom_samba.mp3';

module.exports = class BabiCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'samba',
      group: 'fun',
      memberName: 'samba',
      description: 'samba',
    });
  }

  async run(message) {
    const { voice } = message.member;

    if (!voice.channelID) return message.reply('You must be in a voice channel 🙊');

    try {
      const connection = await voice.channel.join();

      connection.play(audio);
    } catch (error) {
      console.log(error);
      voice.channel.leave();
    }
  }
};
