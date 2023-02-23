const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'avatar',
    aliases: 'av',
    description: 'shows profile picture',
    execute(message, args, commandName, client, Discord) {
        const Target = message.mentions.users.first() || message.author;

        const Response = new MessageEmbed()
        .setColor('PURPLE')
        .setAuthor(`${Target.tag}\'s Avatar`)
        .setImage(Target.displayAvatarURL({dynamic: true}))
        .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))

        message.reply({embeds: [Response]});
    }
}