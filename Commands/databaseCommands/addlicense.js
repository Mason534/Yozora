const { Interaction } = require('discord.js');
const { invalid } = require('moment');
const items = require('../../items.json')
const ProfileModels = require('../../Models/profileSchema')
const profileData = require('../../Events/Message/messageCreate')

module.exports = {
     name: 'addlicense',
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
        if (!addItem.length) return message.channel.send("You need to provide a license!");

        function getCount(_id){
            let count;
            user.licenses.find(itemName => {
                if(itemName._id === _id){
                    count = parseInt(itemName.count);
                }else{
                    return;
                }
            }); 
            count++;
            return count;
        }
         if(!user.licenses.find(itemName => itemName._id === addItem)){
            user.licenses.push({_id: addItem, count: 1});
            user.save();
        }else{
            let counter = getCount(addItem);
            await ProfileModels.findOneAndUpdate({
                userId: message.author.id, 
                "licenses._id": addItem
            }, {
                $set: {
                    "licenses.$.count": counter
                }
            })
        }

            message.reply(`Added ${addItem} to your licenses`);
        }
    }