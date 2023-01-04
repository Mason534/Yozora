const { MessageEmbed } = require("discord.js")
const profileModel = require("../../Models/profileSchema");
module.exports = {
    name: "inventory",
    aliases: ["inv"],
    permissions: [],
    description: "Check the user inventory",
    async execute(message, args, commandName, client, Discord, profileData) {

        const target = message.mentions.users.first() || message.author;
        const user = await profileModel.findOne({ userID: target.id });

        if(!profileData) return message.reply('I have created a profile for you!');

        try{
            let author = await message.guild.members.fetch(message.author.id);
            const invEmbed = new Discord.MessageEmbed()
            .setTitle(`${message.author.username}'s inventory`)

            if(profileData.inventory.length >= 1){
                var invArr = profileData.inventory.map(x => x._id);
                var invItems = createinv(invArr).join("\n");

                if(profileData.inventory.length){
                    invEmbed.setThumbnail(target.displayAvatarURL({dynamic: true}))
                    invEmbed.addField(`Items`, `${invItems}`, true);
                    invEmbed.addField(`Wallet`, `$${user.coins}`, true);
                }
            }else{
                invEmbed.addField('You have nothing', "in your inventory!");
            }
            message.reply({embeds: [ invEmbed ]});
        }catch(err){
            message.reply(`There was a problem retrieving your inventory, please contact staff!`);
            console.log(err);
        }

        function createinv(array){
            let numCount = [];
            for(var i = 0; i < array.length; i++){
                if(profileData.inventory.find(item => item.id === array[i])){
                    profileData.inventory.find(itemName => {
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