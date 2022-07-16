const Discord = require('discord.js');
const Commando = require('discord.js-commando');
const { BOT_INVITE_LINK } = require('../../constants');

module.exports = class InviteCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'invite',
      group: 'general',
      memberName: 'invite',
      description: 'Displays the invite link for the bot',
    });
  }

  async run(message) {
    const embed = new Discord.MessageEmbed()
      .setTitle('DJ Hmida Bot 🎶')
      .setColor('RANDOM')
      .setDescription(`Click [here](${BOT_INVITE_LINK}) to invite me to your server 🎵`);

    message.channel.send(embed);
  }
};
