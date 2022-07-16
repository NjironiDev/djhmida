const Commando = require('discord.js-commando');
const axios = require('axios');

module.exports = class CatCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'cat',
      group: 'fun',
      memberName: 'cat',
      description: 'Displays a random cute cat 😸',
    });
  }

  async run(message) {
    try {
      const { data } = await axios.get('https://aws.random.cat/meow');

      message.channel.send(data.file);
    } catch (error) {
      message.channel.send('Sorry, something went wrong.');
      console.log(error.message);
    }
  }
};
