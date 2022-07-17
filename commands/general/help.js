const Commando = require('discord.js-commando');
const Discord = require('discord.js');

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
        { name: `djanime 😳 <anime>`, value: 'Search for anime.', inline: true },
        { name: `djbbquote ⚗`, value: 'Breaking Bad quote.', inline: true },
        { name: `djcat 🐱`, value: 'Random cute cat.', inline: true },
        { name: `djface 👩`, value: 'Random face.', inline: true },
        { name: `djhelp 🆘`, value: 'Show help.', inline: true },
        { name: `djmeme 🌈`, value: 'Random meme.', inline: true },
        { name: `djnamir 🐅`, value: 'Play "Wa namir *amel".', inline: true },
        { name: `djping 🏓`, value: 'Show your ping.', inline: true },
        { name: `djspawn 🙋‍♂️`, value: 'Spawn your friends.', inline: true },
        { name: `djurban 📚 <word>`, value: 'Search in the urban dictionnary.', inline: true },
        { name: `djweather 🌡 <ciry>`, value: 'Weather for the given city', inline: true },
      )
      .setFooter('Keep vibing 🎶🎵');

    message.channel.send({ embed });
  }
};
