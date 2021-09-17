const { MessageEmbed, MessageManager } = require("discord.js");

module.exports = {
    name: "ping",
    aliases: ['latency', 'lag'],
    description: "Shows the ping of the bot!",
    permission: "SEND_MESSAGES",
    cooldown: 5,
    execute(message, args, commandName, client, Discord) {
        const Response = new MessageEmbed()
        .setColor('FF6F52')
        .setDescription(`${client.ws.ping}ms`);
        Message.channel.send({embeds: [Response]})
    }
}