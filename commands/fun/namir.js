const Commando = require('discord.js-commando');

module.exports = class NamirCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'namir',
      group: 'fun',
      memberName: 'namir',
      description: 'Plays "wa namir *amel"',
    });
  }

  async run(message) {
    const { voice } = message.member;

    if (!voice.channelID) return message.reply('You must be in a voice channel 🙊');

    try {
      const connection = await voice.channel.join();

      const dispatcher = connection.play('https://cdn.discordapp.com/attachments/849299865157632098/891398001510219777/namir.mp3');

      dispatcher.on('finish', () => voice.channel.leave());
    } catch (error) {
      console.log(error);
      voice.channel.leave();
    }
  }
};
