const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const axios = require('axios');
const capitalizeFirstLetter = require('../../utils/capitalize');

module.exports = class WeatherCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'weather',
      group: 'misc',
      memberName: 'weather',
      description: 'Get given city weather',
    });
  }

  async run(message, args) {
    if (!args) return message.reply('Please supply a city `djweather <city>`');

    try {
      const { data } = await axios.get(`https://goweather.herokuapp.com/weather/${args}`);
      const { temperature, wind, description } = data;

      if (!temperature) return message.channel.send('No data for the given city 🤷🏻‍♂️');

      const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(capitalizeFirstLetter(args))
        .addFields(
          {
            name: 'Temperature',
            value: temperature,
          },
          {
            name: 'Wind',
            value: wind,
          },
        )
        .setDescription(description);
      message.channel.send({ embed });
    } catch (error) {
      message.channel.send('Sorry, something went wrong.');
      console.error(error.message);
    }
  }
};
