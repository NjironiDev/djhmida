const Commando = require('discord.js-commando');

const audio = 'https://cdn.discordapp.com/attachments/1009237246223855638/1021019249067696179/Yo.mp3';

module.exports = class YoCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'yo',
      group: 'fun',
      memberName: 'yo',
      description: 'yo',
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
