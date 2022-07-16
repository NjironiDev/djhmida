const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const axios = require('axios');

module.exports = class AdviceCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'advice',
      group: 'fun',
      memberName: 'anquote',
      description: 'Displays a random anime quote',
    });
  }

  async run(message) {
    try {
      const { data } = await axios.get('https://api.adviceslip.com/advice');
      const { slip } = data;

      const embed = new Discord.MessageEmbed().setColor('RANDOM').setDescription(slip.advice).setFooter('Oogway 🐢');
      message.channel.send({ embed });
    } catch (error) {
      message.channel.send('Sorry, something went wrong.');
      console.error(error.message);
    }
  }
};
