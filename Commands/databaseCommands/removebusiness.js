const { Interaction } = require('discord.js');
const { invalid } = require('moment');
const items = require('../../items.json')
const ProfileModels = require('../../Models/profileSchema')
const profileData = require('../../Events/Message/messageCreate')

module.exports = {
     name: 'removebusiness',
     category: 'removes from your inv',
        
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

         if(user.businessList.find(itemName => itemName._id === addItem)){
            user.businessList.pull({_id: addItem, count: 1});
            user.save();
            message.reply(`Removed ${addItem} from business list`);
            }else{
                message.reply("Does not exist!")
            }  
        }
    }