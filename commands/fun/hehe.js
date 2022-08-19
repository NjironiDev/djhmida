const Commando = require('discord.js-commando');

module.exports = class HeheCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'hehe',
      group: 'fun',
      memberName: 'hehe',
      description: 'Plays hehe"',
    });
  }

  async run(message) {
    const { voice } = message.member;

    if (!voice.channelID) return message.reply('You must be in a voice channel 🙊');

    try {
      const connection = await voice.channel.join();

      connection.play('https://cdn.discordapp.com/attachments/1005814495987388459/1010155223794327562/namir-hehe.mp3');
    } catch (error) {
      console.log(error);
      voice.channel.leave();
    }
  }
};
