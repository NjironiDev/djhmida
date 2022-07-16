const axios = require('axios');
const Commando = require('discord.js-commando');
const { FACES_API_KEY } = require('../../constants');

module.exports = class FaceCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'face',
      group: 'fun',
      memberName: 'face',
      description: "Displays a random person's face",
    });
  }

  async run(message) {
    try {
      const options = {
        params: {
          api_key: FACES_API_KEY,
          gender: 'female',
        },
      };

      const { data } = await axios.get('https://api.generated.photos/api/v1/faces', options);

      const randIndex = Math.floor(Math.random() * data.faces.length);
      const randFace = data.faces[randIndex].urls[4]['512'];

      message.channel.send(randFace);
    } catch (error) {
      message.channel.send('Sorry, something went wrong.');
      console.error(error.message);
    }
  }
};
