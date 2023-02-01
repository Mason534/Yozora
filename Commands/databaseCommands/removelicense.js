const { Interaction } = require('discord.js');
const { invalid } = require('moment');
const items = require('../../items.json')
const ProfileModels = require('../../Models/profileSchema')
const profileData = require('../../Events/Message/messageCreate')

module.exports = {
     name: 'removelicense',
     category: 'removes from your inv',
        
    async execute(message, args, commandName, client, Discord, profileData) {
        const target = message.mentions.users.first() || message.author;
        const user = await ProfileModels.findOne({ userID: target.id });

        let item = items.itemList.map(x => x.name);
        let addItem = args.slice().join(' ');

        if(!message.member.roles.cache.has('565275714035646475'))
            return (message.reply('You need to be a Solaris staff member to use this!'));

        else
        
        if(!user.licenses.find(itemName => itemName._id === addItem)){
            return message.reply("You do not have this item");
        }else{ 
            profileData.licenses.pull({ _id: addItem, count: 1});
            profileData.save();

            message.reply(`Removed ${addItem} from your licenses`);
        }
    }}