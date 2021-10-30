const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'verify',
    aliases: [''],
    permissions: 'SEND_MESSAGES',
    description: "Shows the bots commands",
    cooldown: 1,
    execute(message, args, commandName, client, Discord) {

        let role = message.guild.roles.cache.find(r => r.id === "903999535855071303");
        const User = message.author;

        if(message.member.roles.cache.has(`903999535855071303`))
            return (message.reply("You're already verified!"));
        if(!message.member.roles.cache.has('559353376190627841'))
            return (message.reply('You need to be a Solaris Guest to use this!'));

            else
            !message.member.roles.cache.has(role)
                message.member.roles.add(role)
                .catch(console.error)

                message.channel.send(`${User} is now verified! Please follow the How to Join channel and talk in Guest chat!`);
    }
}