const Commando = require('discord.js-commando');

const audio = 'https://cdn.discordapp.com/attachments/1075030694327242832/1079091122925735936/Tom_and_Jerry_aha.mp3';

module.exports = class AhaCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'aha',
      group: 'audio',
      memberName: 'aha',
      description: 'aha',
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
