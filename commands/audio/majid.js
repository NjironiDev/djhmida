const Commando = require('discord.js-commando');

const majidVoices = {
  dik_terma: 'https://cdn.discordapp.com/attachments/596120108334579728/1012813871267991632/Dik_Terma.mp3',
  hak_a_said: 'https://cdn.discordapp.com/attachments/596120108334579728/1012813872266231888/Hak_a_Said.mp3',
  hak_chwa: 'https://cdn.discordapp.com/attachments/596120108334579728/1012813872635326504/Hak_Chwa.mp3',
  ay_dahri: 'https://cdn.discordapp.com/attachments/596120108334579728/1012813873071521842/Ay_Dahri.mp3',
  bezi: 'https://cdn.discordapp.com/attachments/596120108334579728/1012813873436438569/Bezi.mp3',
  ara_passi: 'https://cdn.discordapp.com/attachments/596120108334579728/1012813873776181328/Ara_Passi.mp3',
  l3eb_m3ana: 'https://cdn.discordapp.com/attachments/596120108334579728/1012813874128498698/L3eb_M3ana.mp3',
};

module.exports = class MajidCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'majid',
      group: 'audio',
      memberName: 'majid',
      description: 'Match f derb quotes',
    });
  }

  async run(message, args) {
    const { voice } = message.member;

    if (!voice.channelID) return message.reply('You must be in a voice channel 🙊');

    if (!args) return message.reply(`Please supply an option \`${Object.keys(majidVoices).join('|')}\``);

    const [option] = args.split(' ');

    if (!Object.keys(majidVoices).includes(option))
      return message.reply(`Option does not exist, use the given options \`${Object.keys(majidVoices).join('|')}\``);

    try {
      const connection = await voice.channel.join();

      connection.play(majidVoices[option]);
    } catch (error) {
      console.log(error);
      voice.channel.leave();
    }
  }
};
