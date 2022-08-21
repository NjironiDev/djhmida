const Commando = require('discord.js-commando');

const voices = {
  zamel: 'https://cdn.discordapp.com/attachments/849299865157632098/891398001510219777/namir.mp3',
  da7kek: 'https://cdn.discordapp.com/attachments/596120108334579728/1010961830019076196/namir_da7kek.mp3',
  rak3yan: 'https://cdn.discordapp.com/attachments/596120108334579728/1010961830396575764/namir_rak3yan.mp3',
  aller: 'https://cdn.discordapp.com/attachments/596120108334579728/1010961830732103800/namir_Aller.mp3',
  li_ma3na: 'https://cdn.discordapp.com/attachments/596120108334579728/1010961831042494474/namir_li_ma3na.mp3',
  salam: 'https://cdn.discordapp.com/attachments/596120108334579728/1010961831378034768/namirSalam.mp3',
  wooo: 'https://cdn.discordapp.com/attachments/596120108334579728/1010961831831031809/namir_wooo.mp3',
  hehe: 'https://cdn.discordapp.com/attachments/1005814495987388459/1010155223794327562/namir-hehe.mp3',
};

module.exports = class NamirCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'namir',
      group: 'fun',
      memberName: 'namir',
      description: 'Plays "wa namir *amel"',
    });
  }

  async run(message, args) {
    const { voice } = message.member;

    if (!voice.channelID) return message.reply('You must be in a voice channel 🙊');

    if (!args) return message.reply('Please supply an option `djnamir zamel|da7kek|rak3yan|aller|li_ma3na|salam|wooo`');

    const [option] = args.split(' ');

    if (!Object.keys(voices).includes(option))
      return message.reply('Option does not exist, use the given options `djnamir zamel|da7kek|rak3yan|aller|li_ma3na|salam|wooo`');

    try {
      const connection = await voice.channel.join();

      connection.play(voices[option]);
    } catch (error) {
      console.log(error);
      voice.channel.leave();
    }
  }
};
