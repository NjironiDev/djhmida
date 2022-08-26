const Commando = require("discord.js-commando");
const Discord = require("discord.js");

module.exports = class HelpCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "help",
      group: "general",
      memberName: "general",
      description: "Displays commands help",
    });
  }

  async run(message) {
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("DJ Hmida ♫♪ Command List")
      .addFields(
        { name: `djadvice 🐢`, value: "Get Oogway's wisdom.", inline: true },
        {
          name: `djanime 😳 <anime>`,
          value: "Search for anime.",
          inline: true,
        },
        { name: `djbbquote ⚗`, value: "Breaking Bad quote.", inline: true },
        { name: `djcat 🐱`, value: "Random cute cat.", inline: true },
        { name: `djface 👩`, value: "Random face.", inline: true },
        { name: `djhelp 🆘`, value: "Show help.", inline: true },
        { name: `djmeme 🌈`, value: "Random meme.", inline: true },
        { name: `djping 🏓`, value: "Show your ping.", inline: true },
        { name: `djspawn 🙋‍♂️`, value: "Spawn your friends.", inline: true },
        {
          name: `djurban 📚 <word>`,
          value: "Search in the urban dictionnary.",
          inline: true,
        },
        {
          name: `djweather 🌡 <city>`,
          value: "Weather for the given city",
          inline: true,
        },
        {
          name: `djnamir 🐅 <option>`,
          value:
            "Choose one of these options and hear 👂🏻 zamel|da7kek|rak3yan|aller|li_ma3na|salam|wooo.",
          inline: true,
        },
        {
          name: `djmajid ⚽ <option>`,
          value:
            "Choose one of these options and hear 👂🏻 dik_terma|ana_ghadi|mabaghinch_tmcho|hak_a_said|hak_chwa|ay_dahri|bezi|ara_passi|l3eb_m3ana.",
          inline: true,
        }
      )
      .setFooter("Keep vibing 🎶🎵");

    message.channel.send({ embed });
  }
};
