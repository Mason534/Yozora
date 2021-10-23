const { MessageMentions } = require("discord.js");

module.exports = {
    name: 'uncuff',
    aliases: ['uc'],
    permissions: 'SEND_MESSAGES',
    description: "uncuffs the mentioned player",
    cooldown: 3,
    execute(message, args, commandName, client, Discord) {

        function getUserFromMention(mention) {
            if (!mention) return;
        
            if (mention.startsWith('<@') && mention.endsWith('>')) {
                mention = mention.slice(2, -1);
        
                if (mention.startsWith('!')) {
                    mention = mention.slice(1);
                }
        
                return client.users.cache.get(mention);
            }
        }

        message.reply(`${args.slice().join(" ")} is now uncuffed! Be free!`)

    }}