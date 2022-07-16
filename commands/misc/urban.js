const axios = require('axios');
const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const { RAPID_API_KEY } = require('../../constants');

module.exports = class UrbanCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'urban',
      group: 'misc',
      memberName: 'urban',
      description: 'Displays an short brief of specified word from urban dictionary 📚',
    });
  }

  async run(message, args) {
    try {
      if (!args) return message.reply('Please supply a word `djurban <word>`');

      const options = {
        params: { term: args },
        headers: {
          'x-rapidapi-host': 'mashape-community-urban-dictionary.p.rapidapi.com',
          'x-rapidapi-key': RAPID_API_KEY,
        },
      };

      const { data } = await axios.get('https://mashape-community-urban-dictionary.p.rapidapi.com/define', options);

      if (!data.list.length) return message.reply('Sorry, cannot find any definition for that 🙈');

      const embed = new Discord.MessageEmbed().setColor('RANDOM').setTitle(`${args} 📚`).setDescription(data.list[0].definition);
      message.channel.send(embed);
    } catch (error) {
      console.error(error.message);
    }
  }
};
