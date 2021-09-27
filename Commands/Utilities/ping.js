const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'ping',
    aliases: ['latency', 'lag'],
    permissions: 'SEND_MESSAGES',
    description: "Sends the clients ping",
    cooldown: 5,
    execute(message, args, commandName, client, Discord) {
        const Response = new MessageEmbed()
        .setColor('GREEN')
        .setDescription(`${client.ws.ping}ms`);
        message.channel.send({embeds: [Response]})
    }
}