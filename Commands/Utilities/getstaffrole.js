module.exports = {
    name: 'getstaffrole',
    aliases: ['staffapp'],
    permissions: 'SEND_MESSAGES',
    description: "trolls",
    cooldown: 10,
    execute(message, args, commandName, client, Discord, profileData) {
    
        message.reply('https://tenor.com/view/rick-astley-rick-roll-dancing-dance-moves-gif-14097983')
        .then((sent) => {
            setTimeout(() => {
                sent.delete();
            }, 3000);
    });
}};