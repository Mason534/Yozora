const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'QOTD',
    aliases: ['qotd'],
    permissions: 'SEND_MESSAGES',
    description: "Shows the bots commands",
    cooldown: 1000000,
    execute(message, args, commandName, client, Discord) {
        if (!message.member.roles.cache.has('895689513794433034'))
        return (message.channel.send("You do not have permission to use this command!"));

        else{
        const activities = [
            `Is cereal technically a soup?`,
            `Why did the chicken cross the road?`,
            `What’s the best thing you've got going on in your life at the moment?`,
            `In the seconds before you die, you are allowed to know everyone who was secretly in love with you at some point. **Would you want to know?**`,
            `In 10 years time, will you be proud of what you are doing now?`,
            `What does your inner voice tell you?`,
            `What do you fear?`,
            `What are your strongest beliefs about?`,
            `Whom are you trying to avoid being like?`,
            `Do you think that humans will ever be able to live together in harmony?`,
            `What’s the most physically painful thing you've ever experienced?`,
            `What was the biggest realization you had about yourself?`,
            `What were you completely certain of until you found out you were wrong?`,
            `What goal do you think humanity is not focused enough on achieving?`,
            `What is humanity's greatest asset?`,
            `If you wrote a book, who would you dedicate it to and why?`,
            `When is it acceptable to lie?`
        ]

        setInterval(()=>{
            const status = activities[Math.floor(Math.random()*activities.length)]
            const embed = new MessageEmbed()
            .setTitle(("Question of the Day!"))
        .setDescription(`${status}`)
        .setColor('YELLOW')
        .setFooter("If you'd like your own QOTD in the list, please contact staff! || Creator knarFennA#6313")
        message.channel.send({embeds: [embed]})
        }, 86400000)
    }
}}