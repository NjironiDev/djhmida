const axios = require('axios');
const Commando = require('discord.js-commando');

module.exports = class MemeCommand extends Commando.Command {
  MEME_API = 'https://meme-api.com/gimme';

  constructor(client) {
    super(client, {
      name: 'meme',
      group: 'fun',
      memberName: 'meme',
      description: 'Display a random meme 🌈',
    });
  }

  async run(message) {
    try {
      const { data } = await axios.get(this.MEME_API);

      message.channel.send(data.url);
    } catch (error) {
      message.channel.send('Sorry, something went wrong.');
      console.error(error.message);
    }
  }
};
