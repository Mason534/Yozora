const { Interaction } = require('discord.js');
const { invalid } = require('moment');
const items = require('../../items.json')
const ProfileModels = require('../../Models/profileSchema')
const profileData = require('../../Events/Message/messageCreate')

module.exports = {
     name: 'remove',
     category: 'removes from your inv',
        
    async execute(message, args, commandName, client, Discord, profileData) {
        let item = items.itemList.map(x => x.name);
        let addItem = args.slice().join(' ').toLowerCase();


        /*function getCount(_id){
            let count;
            profileData.inventory.find(itemName => {
                if(itemName._id === _id){
                    count = parseInt(itemName.count);
                }else{
                    return;
                }
            }); 
            count = count - 1;
            return count;
        }
         */if(!profileData.inventory.find(itemName => itemName._id === addItem)){
            return message.reply("You do not have this item");
        }else{ 
            profileData.inventory.pull({ _id: addItem, count: 1});
            profileData.save();
            /*let counter = getCount(addItem);
            await ProfileModels.findOneAndUpdate({
                userId: message.author.id, 
                 
                "inventory._id": addItem 
            }, {
                $unset: {
                    "inventory.$.count": counter
                }
            })
        }*/

            message.reply(`Removed ${addItem} from your inventory`);
        }
    }}