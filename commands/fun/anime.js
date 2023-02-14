const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const axios = require('axios');

module.exports = class AnimeCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'anime',
      group: 'fun',
      memberName: 'anime',
      description: 'Displays infos about a specified anime',
    });
  }

  async run(message, args) {
    try {
      if (!args.length) return message.channel.send('Please specify an anime 🙊.`djanime <anime_name>`');

      const { data: result } = await axios.get(`https://api.jikan.moe/v4/anime?q=${args}`);

      const anime = result.data.filter(anime => anime.type === 'TV')[0];
      if (!anime) return message.channel.send("Sorry, I couldn't find that anime 🙊");

      const score = anime.score ?? 'N/A';
      const airing = anime.airing ? 'Yes' : 'No';
      const start_date = new Date(anime.aired.from).toLocaleDateString();

      const embed = new Discord.MessageEmbed()
        .setTitle(anime.title)
        .setURL(anime.url)
        .setDescription(anime.synopsis ?? '')
        .setImage(anime.images.jpg.large_image_url)
        .addFields(
          { name: 'Score ⭐', value: score, inline: true },
          { name: 'Airing 📺', value: airing, inline: true },
          { name: 'Release Date 📅', value: start_date, inline: true },
        );

      message.embed(embed);
    } catch (error) {
      message.channel.send('Sorry, something went wrong.');
      console.log('error', error.message);
    }
  }
};
