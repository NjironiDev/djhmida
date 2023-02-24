const Commando = require('discord.js-commando');

const audio = 'https://cdn.discordapp.com/attachments/1075030694327242832/1075036514767097866/mbappe.mp3';

module.exports = class MbappeCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'mbappe',
      group: 'fun',
      memberName: 'mbappe',
      description: 'mbappe',
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
