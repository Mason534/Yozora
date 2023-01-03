const { MessageEmbed } = require("discord.js")
const profileModel = require("../../Models/profileSchema");
module.exports = {
    name: "search",
    aliases: [""],
    permissions: [],
    description: "Check the user inventory",
    async execute(message, args, commandName, client, Discord, profileData) {

        const target = message.mentions.users.first() || message.author;
        const user = await profileModel.findOne({ userID: target.id });
        
        if(!profileData) return message.reply('I have created a profile for them!');

        try{
            let author = await message.guild.members.fetch(message.author.id);
            const invEmbed = new Discord.MessageEmbed()
            .setTitle(`${target.username}'s inventory`)

            if(user.inventory.length >= 1){
                var invArr = user.inventory.map(x => x._id);
                var invItems = createinv(invArr).join("\n");

                if(user.inventory.length){
                    invEmbed.setThumbnail(target.displayAvatarURL({dynamic: true}))
                    invEmbed.addField(`Items`, `${invItems}`, true);
                    invEmbed.addField(`Wallet`, `${user.coins}`, true);
                }
            }else{
                invEmbed.addField('You have nothing', "in your invevtory!");
            }
            message.reply({embeds: [ invEmbed ]});
        }catch(err){
            message.reply(`There was a problem retrieving your inventory, please contact staff!`);
            console.log(err);
        }

        function createinv(array){
            let numCount = [];
            for(var i = 0; i < array.length; i++){
                if(user.inventory.find(item => item.id === array[i])){
                    user.inventory.find(itemName => {
                        let count = parseInt(itemName.count);
                        if(itemName._id === array [i]){
                            numCount.push(count);
                        }
                    });
                }
                continue;
            }

            let itemInInv = [];
            for(var x = 0; x < array.length; x++){
                itemInInv.push(`${array[x]} x${numCount[x]}`);
            }
        
            return itemInInv;
        
        }
    },
};