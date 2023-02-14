const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const { NAMIR_VOICES, MAJID_VOICES } = require('../../constants');

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
        { name: `djavatar 🖼`, value: 'Show your avatar.', inline: true },
        { name: `djbbquote ⚗`, value: 'Breaking Bad quote.', inline: true },
        { name: `djcat 🐱`, value: 'Random cute cat.', inline: true },
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
          value: `Choose one of these options and listen 👂🏻 ${Object.keys(NAMIR_VOICES).join('|')}`,
        },
        {
          name: `djmajid ⚽ <option>`,
          value: `Choose one of these options and listen 👂🏻 ${Object.keys(MAJID_VOICES).join('|')}`,
        },
        { name: `djyo 👨🏿‍🦲`, value: `Omar says: Ayoooow!`, inline: true },
        { name: `djtsdmo 🤯`, value: `Ghadi tsdmo kamlin 🤯`, inline: true },
        { name: `djmbappe 🐢`, value: `Mbappe's french laugh 😂`, inline: true },
      )
      .setFooter('Keep vibing 🎶🎵');

    message.channel.send({ embed });
  }
};
