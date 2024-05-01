const { Interaction } = require('discord.js');
const { invalid } = require('moment');
const items = require('../../items.json')
const ProfileModels = require('../../Models/profileSchema')
const profileData = require('../../Events/Message/messageCreate')

module.exports = {
     name: 'addbusiness',
     category: 'adds to your inv',
        
     async execute(message, args, commandName, client, Discord, profileData) {
        const target = message.mentions.users.first();
        if (!target) return message.channel.send("You need to mention a user!");
        const user = await ProfileModels.findOne({ userID: target.id });
        const role = ("565275714035646475");

        if(!message.member.roles.cache.has(role)) {
            return (message.reply('You need to be a staff member to use this!'));
        }
        
        let addItem = args.slice(1).join(' ').toLowerCase().trim();
        if (!addItem.length) return message.channel.send("You need to provide a company!");

        function getCount(_id){
            let count;
            user.businessList.find(itemName => {
                if(itemName._id === _id){
                    count = parseInt(itemName.count);
                }else{
                    return;
                }
            }); 
            count++;
            return count;
        }
         if(!user.businessList.find(itemName => itemName._id === addItem)){
            user.businessList.push({_id: addItem, count: 1});
            user.save();
        }else{
            let counter = getCount(addItem);
            await ProfileModels.findOneAndUpdate({
                userId: message.author.id, 
                "businessList._id": addItem
            }, {
                $set: {
                    "businessList.$.count": counter
                }
            })
        }

            message.reply(`Added ${addItem} to ${target}'s business list`);
        }
    }