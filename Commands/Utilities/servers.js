module.exports = {
    name: 'servers',
    aliases: 'sv',
    description: 'shows profile picture',
    execute(message, args, commandName, client, Discord) {

        client.guilds.cache.forEach((guild) => {
            message.channel.send(`${guild.name} ${guild.id} has a total of ${guild.memberCount} members`)
        })

    }
}