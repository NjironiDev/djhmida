const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const axios = require('axios');

module.exports = class BreakingBadCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'bbquote',
      group: 'fun',
      memberName: 'bbquote',
      description: 'Breaking Bad quote',
    });
  }

  async run(message) {
    try {
      const { data } = await axios.get('https://api.breakingbadquotes.xyz/v1/quotes');
      const { quote, author } = data[0];

      const embed = new Discord.MessageEmbed().setColor('RANDOM').setDescription(quote).setFooter(author);
      message.channel.send({ embed });
    } catch (error) {
      message.channel.send('Sorry, something went wrong.');
      console.error(error.message);
    }
  }
};
