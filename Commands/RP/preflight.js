const { MessageEmbed, Channel } = require("discord.js");

module.exports = {
    name: 'test1',
    aliases: [''],
    permissions: 'SEND_MESSAGES',
    description: "lists off preflight checklist",
    cooldown: 3,
    async execute(message, args, commandName, client, Discord) {
        const Target = message.author;
        const argument = (args.slice().join(" "))
        const user =  message.mentions.users.first()
        const channel =   message.guild.channels.cache.get('703585954857877636')
        if(!(args.slice().join(" "))) return message.channel.send("Please prvoide a callsign for your aircraft!")
        //if(!user) return message.channel.send("Woaaah slow down, who are we hacking? It Should be a member not role.")

        channel.send(`Beginning preflight check list for ***${(args.slice().join(" "))}!***`)

        const Response = new MessageEmbed()
        .setColor('YELLOW')
        .setTitle(`${argument}`)
    .addFields([{
        name: 'Preflight Checklist!',
        value: ' `Beginning the Checklist!` ',
        inline: true
    }]);

        const newMessage = await message.reply({
            embeds: [Response]
        })

        await new Promise(resolve => setTimeout(resolve, 5000))

        const newEmbed = newMessage.embeds[0]
        newEmbed.setFields([{
            name: 'Preflight Checklist',
            value: '`Beginning the Checklist!`\n`Engines firing on!`',
            inline: true
        }]);
        
        newMessage.edit({
            embeds: [newEmbed]
        })

        await new Promise(resolve => setTimeout(resolve, 5000))

        newEmbed.setFields([{
            name: 'Preflight Checklist',
            value: '`Beginning the Checklist!`\n`Engines firing on!`\n`Checking the fuel Level!`',
            inline: true
        }]);
        
        newMessage.edit({
            embeds: [newEmbed]
        })

        await new Promise(resolve => setTimeout(resolve, 5000))

        newEmbed.setFields([{
            name: 'Preflight Checklist',
            value: '`Beginning the Checklist!`\n`Engines firing on!`\n`Checking the fuel Level!`\n `Establishing a connection with ATC`',
            inline: true
        }]);
        
        newMessage.edit({
            embeds: [newEmbed]
        })
        
        await new Promise(resolve => setTimeout(resolve, 2000))

        newEmbed.setFields([{
            name: 'Preflight Checklist',
            value: '`Beginning the Checklist!`\n`Engines firing on!`\n`Checking the fuel Level!`\n `Establishing a connection with ATC.`',
            inline: true
        }]);
        
        newMessage.edit({
            embeds: [newEmbed]
        })
        
        await new Promise(resolve => setTimeout(resolve, 2000))

        newEmbed.setFields([{
            name: 'Preflight Checklist',
            value: '`Beginning the Checklist!`\n`Engines firing on!`\n`Checking the fuel Level!`\n `Establishing a connection with ATC..`',
            inline: true
        }]);
        
        newMessage.edit({
            embeds: [newEmbed]
        })
        
        await new Promise(resolve => setTimeout(resolve, 2000))

        newEmbed.setFields([{
            name: 'Preflight Checklist',
            value: '`Beginning the Checklist!`\n`Engines firing on!`\n`Checking the fuel Level!`\n `Establishing a connection with ATC...`',
            inline: true
        }]);
        
        newMessage.edit({
            embeds: [newEmbed]
        })
        
        await new Promise(resolve => setTimeout(resolve, 2000))

        newEmbed.setFields([{
            name: 'Preflight Checklist',
            value: '`Beginning the Checklist!`\n`Engines firing on!`\n`Checking the fuel Level!`\n`Connection Established!`',
            inline: true
        }]);
        
        newMessage.edit({
            embeds: [newEmbed]
        })
        
        await new Promise(resolve => setTimeout(resolve, 2000))

        newEmbed.setFields([{
            name: 'Preflight Checklist',
            value: '`Beginning the Checklist!`\n`Engines firing on!`\n`Checking the fuel Level!`\n`Connection Established!`\n`Checking the weather`',
            inline: true
        }]);
        
        newMessage.edit({
            embeds: [newEmbed]
        })
        
        await new Promise(resolve => setTimeout(resolve, 1000))

        newEmbed.setFields([{
            name: 'Preflight Checklist',
            value: '`Beginning the Checklist!`\n`Engines firing on!`\n`Checking the fuel Level!`\n`Connection Established!`\n`Checking the weather.`',
            inline: true
        }]);
        
        newMessage.edit({
            embeds: [newEmbed]
        })
        
        await new Promise(resolve => setTimeout(resolve, 1000))

        newEmbed.setFields([{
            name: 'Preflight Checklist',
            value: '`Beginning the Checklist!`\n`Engines firing on!`\n`Checking the fuel Level!`\n`Connection Established!`\n`Checking the weather..`',
            inline: true
        }]);
        
        newMessage.edit({
            embeds: [newEmbed]
        })
        
        await new Promise(resolve => setTimeout(resolve, 1000))

        newEmbed.setFields([{
            name: 'Preflight Checklist',
            value: '`Beginning the Checklist!`\n`Engines firing on!`\n`Checking the fuel Level!`\n`Connection Established!`\n`Checking the weather...`',
            inline: true
        }]);
        
        newMessage.edit({
            embeds: [newEmbed]
        })
        await new Promise(resolve => setTimeout(resolve, 1000))

        newEmbed.setFields([{
            name: 'Preflight Checklist',
            value: '`Beginning the Checklist!`\n`Engines firing on!`\n`Checking the fuel Level!`\n`Connection Established!`\n`Weather is clear!`',
            inline: true
        }]);
        
        newMessage.edit({
            embeds: [newEmbed]
        })
        await new Promise(resolve => setTimeout(resolve, 2000))

        newEmbed.setFields([{
            name: 'Preflight Checklist',
            value: '`Beginning the Checklist!`\n`Engines firing on!`\n`Checking the fuel Level!`\n`Connection Established!`\n`Weather is clear!`\n`Confirming a clear airspace with ATC!`',
            inline: true
        }]);
        
        newMessage.edit({
            embeds: [newEmbed]
        })
        
        newMessage.edit({
            embeds: [newEmbed]
        })
        await new Promise(resolve => setTimeout(resolve, 10000))
       
        channel.send(`***${argument}*** has been cleared for takeoff by ATC! Have a safe flight!`)
    }}
    