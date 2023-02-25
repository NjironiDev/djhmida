const Commando = require('discord.js-commando');

const audio = 'https://cdn.discordapp.com/attachments/1075030694327242832/1075030735074889831/ghadi_tsdmo.mp3';

module.exports = class TsdmoCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'tsdmo',
      group: 'audio',
      memberName: 'tsdmo',
      description: 'tsdmo',
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
