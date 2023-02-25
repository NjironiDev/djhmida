const Commando = require('discord.js-commando');

const audio = 'https://cdn.discordapp.com/attachments/1075030694327242832/1078376002570424411/hadari.mp3';

module.exports = class HadariCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'hadari',
      group: 'audio',
      memberName: 'hadari',
      description: 'hadari',
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
