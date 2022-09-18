const Commando = require('discord.js-commando');
const Discord = require('discord.js');

const majidVoices = {
  dik_terma: 'https://cdn.discordapp.com/attachments/596120108334579728/1012813871267991632/Dik_Terma.mp3',
  hak_a_said: 'https://cdn.discordapp.com/attachments/596120108334579728/1012813872266231888/Hak_a_Said.mp3',
  hak_chwa: 'https://cdn.discordapp.com/attachments/596120108334579728/1012813872635326504/Hak_Chwa.mp3',
  ay_dahri: 'https://cdn.discordapp.com/attachments/596120108334579728/1012813873071521842/Ay_Dahri.mp3',
  bezi: 'https://cdn.discordapp.com/attachments/596120108334579728/1012813873436438569/Bezi.mp3',
  ara_passi: 'https://cdn.discordapp.com/attachments/596120108334579728/1012813873776181328/Ara_Passi.mp3',
  l3eb_m3ana: 'https://cdn.discordapp.com/attachments/596120108334579728/1012813874128498698/L3eb_M3ana.mp3',
};

const namirVoices = {
  wach_kayn: 'https://cdn.discordapp.com/attachments/1008058197141106699/1011749023989911612/Wach_kayn.mp3',
  zamel: 'https://cdn.discordapp.com/attachments/849299865157632098/891398001510219777/namir.mp3',
  da7kek: 'https://cdn.discordapp.com/attachments/596120108334579728/1010961830019076196/namir_da7kek.mp3',
  rak3yan: 'https://cdn.discordapp.com/attachments/596120108334579728/1010961830396575764/namir_rak3yan.mp3',
  aller: 'https://cdn.discordapp.com/attachments/596120108334579728/1010961830732103800/namir_Aller.mp3',
  li_ma3na: 'https://cdn.discordapp.com/attachments/596120108334579728/1010961831042494474/namir_li_ma3na.mp3',
  salam: 'https://cdn.discordapp.com/attachments/596120108334579728/1010961831378034768/namirSalam.mp3',
  hehe: 'https://cdn.discordapp.com/attachments/1005814495987388459/1010155223794327562/namir-hehe.mp3',
};

module.exports = class HelpCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'help',
      group: 'general',
      memberName: 'general',
      description: 'Displays commands help',
    });
  }

  async run(message) {
    const embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('DJ Hmida ♫♪ Command List')
      .addFields(
        { name: `djadvice 🐢`, value: "Get Oogway's wisdom.", inline: true },
        {
          name: `djanime 😳 <anime>`,
          value: 'Search for anime.',
          inline: true,
        },
        { name: `djbbquote ⚗`, value: 'Breaking Bad quote.', inline: true },
        { name: `djcat 🐱`, value: 'Random cute cat.', inline: true },
        { name: `djface 👩`, value: 'Random face.', inline: true },
        { name: `djhelp 🆘`, value: 'Show help.', inline: true },
        { name: `djmeme 🌈`, value: 'Random meme.', inline: true },
        { name: `djping 🏓`, value: 'Show your ping.', inline: true },
        { name: `djspawn 🙋‍♂️`, value: 'Spawn your friends.', inline: true },
        {
          name: `djurban 📚 <word>`,
          value: 'Search in the urban dictionnary.',
          inline: true,
        },
        {
          name: `djweather 🌡 <city>`,
          value: 'Weather for the given city',
          inline: true,
        },
        {
          name: `djnamir 🐅 <option>`,
          value: `Choose one of these options and hear 👂🏻 ${Object.keys(namirVoices).join('|')}`,
        },
        {
          name: `djmajid ⚽ <option>`,
          value: `Choose one of these options and hear 👂🏻 ${Object.keys(majidVoices).join('|')}`,
        },
        {
          name: `djkaboom 👹`,
          value: `Kaboom!`,
        },
        {
          name: `djyo 👨🏿‍🦲`,
          value: `Ayoow!`,
        },
      )
      .setFooter('Keep vibing 🎶🎵');

    message.channel.send({ embed });
  }
};
