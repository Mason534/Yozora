const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'commands',
    aliases: [''],
    permissions: 'SEND_MESSAGES',
    description: "Sends the bots commands",
    cooldown: 10,
    execute(message, args, commandName, client, Discord) {
     
        if (message.member.roles.cache.has('559353376190627841')){
            return (message.reply('You do not have the correct roles to use this command!'))
        } else {
        const Response = new MessageEmbed()
    .setColor('PURPLE')
	.setTitle('Bot Command List')
	.setURL('https://ardenloncke.wixsite.com/solaris-rp')
	.setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
	.setDescription(`Don't forget to use the prefix "-" before using a command!`)
	.setThumbnail(client.user.avatarURL({dynamic: true }))
	.setFooter(`Yozora was called upon by ${message.author.username} || Creator knarFennA#6313`)
	.setTimestamp(message.createdTimestamp)
    .addFields([{ 
        name: 'Text-List',
        value: ' `ping` ` getstaffrole` `say` ',
        inline: true
    }, {
        name: 'Games',
        value: ' `hack (mention)` `meme` ',
        inline: true
    }, {
        name: 'Other',
        value: ' `bot` `av` `complaint` `serverinfo` `whois` `suggest (text)` ',
        inline: true
    }, {
        name: 'Roleplay commands',
        value: ' `aid` `anon` `bcamon` `bcamoff` `charge` `crouch` `cuff` `cpr` `defib` `dfuel` `do(message)` `drink` `eat` `engine/eng` `engoff` `examine` `fuel` `grab` `hotwire` `lock` `post` `pfuel` `preflight` `radar` `seatbelt` `smoke` `text (@) (message)` `tow` `uncuff` `unzip` `zip`',
        inline: true
    }, {
        name: 'Database commands',
        value: ' `bal` `pay` `withdraw` `deposit` `inv` `search @` `add` `remove` `licenses` `bac @` `setbac` ',
        inline: true
    }]);

        message.channel.send({embeds: [Response]})
    }
}}