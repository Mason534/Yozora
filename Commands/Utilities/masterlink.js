const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'masterlink',
    aliases: ['ml'],
    permissions: 'SEND_MESSAGES',
    description: "Sends all links from other commands!",
    cooldown: 15,
    execute(message, args, commandName, client, Discord, profileData) {
        const Response = new MessageEmbed()
        .setColor('FF6F52')
	.setTitle('Master Link List!')
	.setURL('https://ardenloncke.wixsite.com/solaris-rp')
	.setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
	.setDescription(`[Website](https://ardenloncke.wixsite.com/solaris-rp)
    [Solaris Military Server](https://discord.gg/Uhwc8PKGgB) \n[Solaris Gaming Server](https://discord.gg/JDD9EAh)
    [CAD](https://app.sonorancad.com/#/community/menu)
    [Civilian Character Applications](https://docs.google.com/forms/d/1-BSNK10IluRcZt_Psg0p_U_5Sri_Xt7T6cgijt8EII0/edit#responses)
    [Civilian Ranks](https://docs.google.com/document/d/12AiPlgdYYgAtMkRqlXOJRYcDnCrB2pfcpw-u7wfRRa4/edit)
    [Solaris Instagram](https://www.instagram.com/solarisroleplay/)
    [Job Manual](https://docs.google.com/document/d/1csTKBt4BPvcSFNGYIEMfmQ6o7MMXMpGuZaihnFRe3dY/edit?usp=sharing)
    [Solaris Manual](https://docs.google.com/document/d/11G57MPT2dfxiVUyfw8krzCxG_2AyReedWia3hRUA7VY/edit)
    [Merch](https://shop.spreadshirt.net/solaris-roleplay/)
    [Solaris Penal Codes](https://docs.google.com/document/d/11RWKr8vDxQQwYt64ZUE7gilZ165ax4dJoWY4tjxcKPM/edit?usp=sharing)
    [Solaris TikTok](https://vm.tiktok.com/ZMeBm4fUF/)
    [VIP Manual](https://docs.google.com/document/d/149MMlpxMVgHNKCW-rG2BdCJy8uIlihHX0GZkjM4S3Uw/edit?usp=sharing)`)
	.setThumbnail(client.user.avatarURL({dynamic: true }))
	.setFooter(`Solaris Bot was called upon by ${message.author.username}`)
	.setTimestamp(message.createdTimestamp)
        message.channel.send({embeds: [Response]})
    }
}