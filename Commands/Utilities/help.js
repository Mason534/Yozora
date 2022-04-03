module.exports = {
    name: 'help',
    aliases: [''],
    permissions: 'SEND_MESSAGES',
    description: "sends help",
    cooldown: 5,
    execute(message, args, commandName, client, Discord, profileData) {
        message.reply('Here to Help! To view the command list, type "-commands" or use "-bot", use this bot in the bot commands channel. If you are having trouble, contact staff.');
    }
}