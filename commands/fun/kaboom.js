const Commando = require('discord.js-commando');

const audio = 'https://cdn.discordapp.com/attachments/1005814495987388459/1016728369729122326/C.O.D._Black_Ops-Zombies-_Kaboom__sound.mp3';

module.exports = class KaboomCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'kaboom',
      group: 'fun',
      memberName: 'kaboom',
      description: 'Kaboom',
    });
  }

  async run(message, args) {
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
