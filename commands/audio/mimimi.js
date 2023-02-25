const Commando = require('discord.js-commando');

const audio = 'https://cdn.discordapp.com/attachments/1075030694327242832/1077333318745477210/mimimimi.mp3';

module.exports = class MimimiCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'mimimi',
      group: 'audio',
      memberName: 'mimimi',
      description: 'mimimi',
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
