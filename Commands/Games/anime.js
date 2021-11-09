const got = require('got')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name : 'meme',
    description: "Sends a meme",
    permission: "SEND_MESSAGES",
    type: "TEXT",
    async execute(message, args, client) {
        got('https://www.reddit.com/r/memes/random/.json').then(res => {
            let content = JSON.parse(res.body)
            message.channel.send({embeds: [  new MessageEmbed()
                    .setTitle(content[0].data.children[0].data.title)
                    .setImage(content[0].data.children[0].data.url)
                    .setColor("RANDOM")
                    .setFooter(`👍 ${content[0].data.children[0].data.ups} 👎 ${content[0].data.children[0].data.downs} | Comments : ${content[0].data.children[0].data.num_comments}`)]})})}}