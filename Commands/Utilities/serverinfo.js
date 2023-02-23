const { MessageEmbed } = require('discord.js');

const moment = require('moment');

const filterLevels = {

	DISABLED: 'Off',

	MEMBERS_WITHOUT_ROLES: 'No Role',

	ALL_MEMBERS: 'Everyone'

};

const verificationLevels = {

	NONE: 'None',

	LOW: 'Low',

	MEDIUM: 'Medium',

	HIGH: '(╯°□°）╯︵ ┻━┻',

	VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'

};

const regions = {

	brazil: 'Brazil',

	europe: 'Europe',

	hongkong: 'Hong Kong',

	india: 'India',

	japan: 'Japan',

	russia: 'Russia',

	singapore: 'Singapore',

	southafrica: 'South Africa',

	sydeny: 'Sydeny',

	'us-central': 'US Central',

	'us-east': 'US East',

	'us-west': 'US West',

	'us-south': 'US South'

};

module.exports = {
    name: 'serverinfo',
    aliases: [''],
    permissions: 'SEND_MESSAGES',
    description: "Shows the server information",
    cooldown: 10,
    execute(message, args, commandName, client, Discord) {
        
        const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());

		const members = message.guild.members.cache;

		const channels = message.guild.channels.cache;

		const emojis = message.guild.emojis.cache;

        const Response = new MessageEmbed()
        .setColor('PURPLE')
	.setTitle('Server Info')
	.setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
	.setDescription(`**Guild information for __${message.guild.name}__**`)
	.setThumbnail(client.user.avatarURL({dynamic: true }))
	.setFooter(`Yozora was buzzed in by ${message.author.username} || Creator knarFennA#6313`)
	.setTimestamp(message.createdTimestamp)
    .addFields([{
        name: 'Server name',
        value: `${message.guild.name}`,
        inline: true
    }, {
        name: 'Server Created',
        value: `${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).format('LT')}  `,
        inline: true
    }, {
        name: 'Verification Level',
        value: `${message.guild.verificationLevel}`,
        inline: true
    }, {
        name: 'Roles',
        value: `${roles.length}`,
        inline: true
    },{
        name: 'Members',
        value: `${message.guild.memberCount}`,
        inline: true
    }, {
        name: 'Emojis',
        value: `${emojis.size}`,
        inline: true
    }, {
        name: 'Text Channels',
        value: `${channels.filter(channel => channel.type === 'GUILD_TEXT').size}`,
        inline: true
    }, {
        name: 'Voice Channels',
        value: `${channels.filter(channel => channel.type === 'GUILD_VOICE').size}`,
        inline: true
    }, {
        name: 'Boosts',
        value: `${message.guild.premiumSubscriptionCount || '0'}`,
        inline: true
    
    }]);

        message.channel.send({embeds: [Response]})
    }
}